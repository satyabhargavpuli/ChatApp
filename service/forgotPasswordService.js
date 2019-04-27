/************************************************************************************************
 * @description :   To pass the data to the backend
 * 
 * @file        :   forgotPasswordService.js
 * @overview    :   To connect to the database by passing the details in the body to the link
 * @author      :   satya bhargav   <satyabhargav.puli@gmail.com>
 * @since       :   06-04-2019
 * 
 * *********************************************************************************************/

 app.service('forgotPasswordService',function($http,$location) {
     try {
         this.forgotpassword = function (data,$scope) {
             console.log('inside service'+data);
             $http({
                method : "POST",
                  url  : 'http://localhost:3000/forgotPwdService',
                  data :data
              }).then(function successCallBack(response) {
                console.log("Registration successful");
                console.log("Registration response:", response);
    
            }),
            function errorCallBack(error) {
                $scope.msg = "sry, not a valid email";
                console.log(error);
            }
             
         }
     } catch (error) {
         console.log("error is hitting",error);
         
     }
 });