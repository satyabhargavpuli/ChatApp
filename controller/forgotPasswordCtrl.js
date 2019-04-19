/************************************************************************************************
 * @description :   To take data from ng-model and using it
 * 
 * @file        :   forgotPasswordCtrl.js
 * @overview    :   This controller is used for getting the input from the user and passing to the controller
 * @author      :   satya bhargav   <satyabhargav.puli@gmail.com>
 * @since       :   05-04-2019
 * 
 * *********************************************************************************************/
app.controller("forgotPasswordctrl", function ($scope,forgotPasswordService) {
    $scope.forgotpassword = function () 
    {

        let data = {

            emailId:$scope.emailId
        }
        console.log('data in controller', data);
        return forgotPasswordService(data,$scope);
    }
});