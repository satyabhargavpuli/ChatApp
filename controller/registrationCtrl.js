/************************************************************************************************
 * @description :   To take data from ng-model and using it
 * 
 * @file        :   forgotPasswordCtrl.js
 * @overview    :   This controller is used for getting the input from the user and passing to the controller
 * @author      :   satya bhargav   <satyabhargav.puli@gmail.com>
 * @since       :   05-04-2019
 * 
 * *********************************************************************************************/
app.controller('registrationctrl', function ($scope, registrationService) {
    //   console.log('in register controller **************');
    //   console.log('scope    ', $scope);
    console.log("i am here");


    $scope.register = function () {
        let data = {
            username: $scope.username,
            email: $scope.email,
            password: $scope.password
        }
        console.log('data in controller', data);
        registrationService.register(data, $scope)
    }

})