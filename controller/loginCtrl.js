/************************************************************************************************
 * @description :   To take data from ng-model and using it
 * 
 * @file        :   loginCtrl.js
 * @overview    :   This controller is used for getting the input from the user and passing to the controller
 * @author      :   satya bhargav   <satyabhargav.puli@gmail.com>
 * @since       :   05-04-2019
 * 
 * *********************************************************************************************/
app.controller("loginctrl", function ($scope, loginService) {

    $scope.login = function () {

        if ($scope.emailM != undefined || $scope.PasswordM != undefined) {
            let data = {
                username: $scope.emailM,
                password: $scope.PasswordM
            }
            console.log('data in controller', data);
            return loginService.login(data, $scope)

        } else {

            $scope.message = "fields cannot be empty"
        }
    }
})
