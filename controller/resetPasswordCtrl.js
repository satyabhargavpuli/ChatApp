/************************************************************************************************
 * @description :   To take data from ng-model and using it
 * 
 * @file        :   resetPasswordCtrl.js
 * @overview    :   This controller is used for getting the input from the user and passing to the controller
 * @author      :   satya bhargav   <satyabhargav.puli@gmail.com>
 * @since       :   05-04-2019
 * 
 * *********************************************************************************************/

app.controller("resetPasswordCtrl", function ($scope, resetPasswordService) {
    $scope.resetPassword = function () {
        let data = {
            password: $scope.password,
            confirmpassword: $scope.confPassword
        }
        console.log('data in controller', data);
        return resetPasswordService(data, $scope)
    }

})