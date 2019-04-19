import { createVerify } from "crypto";
import { log } from "util";

/************************************************************************************************
 * @description :   To pass the data to the backend
 * 
 * @file        :   resetPasswordService.js
 * @overview    :   To connect to the database by passing the details in the body to the link
 * @author      :   satya bhargav   <satyabhargav.puli@gmail.com>
 * @since       :   06-04-2019
 * 
 * *********************************************************************************************/

 app.service('resetPasswordService'),function($http,$location) {
    try {
      this.resetPassword = function (data,$scope) {
        console.log('in service'+data);
        $http({
           method : "POST",
           url : 'http://localhost:3000/resetPasswordService',
           data : data,
        }).then(function successCallBack(response) {
         console.log("Registration successful");
         console.log("Registration response:", response);
          //here localstorage is used to store the data and send it to specifies key
         
     

     })
        
      }
    } catch (error) {
       
    }
     }