/************************************************************************************************
 * @description :   To take data from ng-model and using it
 * 
 * @file        :   forgotPasswordCtrl.js
 * @overview    :   This controller is used for getting the input from the user and passing to the controller
 * @author      :   satya bhargav   <satyabhargav.puli@gmail.com>
 * @since       :   05-04-2019
 * 
 * *********************************************************************************************/

app.controller('registrationctrl', function ($scope,registrationService) {
    $scope.register = function () {
        let data = {
            username: $scope.username,
            emailid: $scope.email,
            password: $scope.password,
            confirmpassword: $scope.confirmPassword
        }
        console.log('data in controller', data);  
        return registrationService(data,$scope)
    }
    
})