/************************************************************************************************
 * @description :   To pass the data to the backend
 * 
 * @file        :   registrationService.js
 * @overview    :   To connect to the database by passing the details in the body to the link
 * @author      :   satya bhargav   <satyabhargav.puli@gmail.com>
 * @since       :   06-04-2019
 * 
 * *********************************************************************************************/
app.service('registrationService'),function($http,$location) {
    try {
         this.register = function (data,$scope) {
        console.log('inside the service',data);
        $http({
            method : "POST",
              url  : 'http://localhost:3000/serviceRegister',
              data :data
          }).then(function successCallBack(response) {
            console.log("Registration successful");
            console.log("Registration response:", response);

            localStorage
        

        })
    }
       
  } catch (error) {
        
    }
  }