/************************************************************************************************
 * @description :   To take data from ng-model and using it
 * 
 * @file        :   forgotPasswordCtrl.js
 * @overview    :   This controller is used for getting the input from the user and passing to the controller
 * @author      :   satya bhargav   <satyabhargav.puli@gmail.com>
 * @since       :   05-04-2019
 * 
 * *********************************************************************************************/
app.controller("forgotCtrl", function ($scope,forgotPasswordService) {
    console.log("yipeeeeeeee{}{}{}",$scope);
    
    $scope.forgotpassword = function () 
    {

        let data = {

            email:$scope.email
        }
        console.log('data in controller', data);
        forgotPasswordService.forgotpassword(data,$scope);
        // forgotpassword(data,$scope);
    }
});