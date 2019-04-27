/************************************************************************************************
 * @description :   To pass the data to the backend
 * 
 * @file        :   chatService.js
 * @overview    :   To connect 
 * @author      :   satya bhargav   <satyabhargav.puli@gmail.com>
 * @since       :   23-04-2019
 * 
 * *********************************************************************************************/

app.service('chatService', function ($http) {
    //T o get all the users and store them in an array
    this.getAllUsers = function ($scope) {

        console.log('in chat service');
        $http({
            method: 'GET',
            url: 'http://localhost:3000/getUsers/tokens',
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(function successCallBack(response) {
            console.log("chat successful");
            console.log("chat response :", response);
            console.log("response.data.getAllData test   ", response.data.result);
            $scope.users = response.data.result;
        }, err => {
            console.log("error is coming!!!!!!  ", err);
        })
        console.log("$scope            ",$scope);
        
    },

    //To get all the user messages from the database
    this.getUserMsg = function ($scope) {
        try {
            let msgarr = [];
            let userToken = localStorage.getItem('token');
            $http({
                method: 'GET',
                url: 'http://localhost:3000/getUserMsg/token',
                headers: {
                    token: userToken
                }
            }).then(function successCallBack(response) {
                console.log("-----------------", response);
                console.log("BOOMBA", response.data);
                console.log("WONDERlA", response.data.result);
                console.log("LLLEENGTH", response.data.result.length);


                //Looping all over the message objects and segregating the particular chats
                for (let i = 0; i < response.data.result.length; i++) {
                    a = response.data.result[i];

                    if (((localStorage.getItem('userid') == a.senderUserId) &&
                        (localStorage.getItem('ruserId') == a.recieverUserId)) ||
                        ((localStorage.getItem('userid') == a.recieverUserId &&
                            localStorage.getItem('ruserId') == a.senderUserId))) {
                        console.log("monkey kills");
                        msgarr.push(a);

                    }

                }
                $scope.allMsg = msgarr;
                console.log("Users msg successfull ", msgarr);
            },
                function errorCallBack(response) {
                    console.log("Unsuccessfull");
                    console.log(response);
                }
            )
        }catch (err) {
            console.error('service:error in getuserMsg method');
        }
    }

  


})