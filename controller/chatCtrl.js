/************************************************************************************************
 * @description :   To take data from ng-model and using it
 * 
 * @file        :   chatContoller.js
 * @overview    :   This controller is used for getting the input from the user and passing to the controller
 * 
 * @author      :   satya bhargav   <satyabhargav.puli@gmail.com>
 * 
 * @since       :   23-04-2019
 * 
 * *********************************************************************************************/

app.controller('chatCtrl', function ($scope,$state,chatService,socketService,$location) {
        console.log("where is the data");
        $scope.message = '';
    $scope.allMsg = [];
    $scope.myName = localStorage.getItem('username');
    $scope.myId = localStorage.getItem('userid');
    const token = localStorage.getItem('token');
    $scope.clientName = localStorage.getItem('rusername')
    
    if (token === null) {
      console.log("check the token is there or not");
      
        // $state.go('login');
        $location.path('login');
    }
    socketService.on('newMsg', (message) => {
        try {
            /**
             * listening to the events
             */
            if (localStorage.getItem('userid') == message.senderUserId || (localStorage.getItem('userid') == message.recieverUserId && localStorage.getItem('ruserId') == message.senderUserId)) {
                if ($scope.allMsg === undefined) {
                    $scope.allMsg = message;
                    /**
                     * assigns message to the variable
                     */
                } else {
                    $scope.allMsg.push(message);
                    /**
                     * the message is pushed or added to the array
                     */
                }
            }
        }
        catch (err) {
            console.log("Error in finding the message");
        }
    })
    try {
        $scope.goToUser = function (user) {

            /**``
             * select person from the list
             */
            $scope.allMsg = '';
            /**
             * getting data from local storage
             */
            localStorage.setItem('rusername', user.username);
            localStorage.setItem('ruserId', user._id);
            $scope.clientName = localStorage.getItem('rusername');
            //$scope.getUserMsg(); // waste
        }

         //sending messages
    $scope.sendMessage = function () {
        try {
            var msgObj = {
                'senderUserId': localStorage.getItem('userid'),
                'senderName': localStorage.getItem('username'),
                'recieverUserId': localStorage.getItem('ruserId'),
                'recieverName': localStorage.getItem('rusername'),
                'message': $scope.message
            };
            /**
             * emmiting the message to the browser
             */
            $scope.message = '';
            socketService.emit('createMessage', msgObj);
        }
        catch (err) {
            console.log("Error transporting message to the reciever");
        }
    }

        // fetching all the users
        $scope.getAllUsers = (function () {
            console.log('in controller');

            chatService.getAllUsers($scope);
        })
        $scope.getAllUsers();
           } catch (error) {
        console.log('error in chat contrl'.anchor,error);
            }
            
    $scope.signout = function () {
        try {
            localStorage.clear();
            // navigate to login page
            $state.go('login');
        }
        catch (err) {
            console.log("Unable to logout in controller");
        }
    }
})
