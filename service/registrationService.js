/************************************************************************************************
 * @description :   To pass the data to the backend
 * 
 * @file        :   registrationService.js
 * @overview    :   To connect to the database by passing the details in the body to the link
 * @author      :   satya bhargav   <satyabhargav.puli@gmail.com>
 * @since       :   06-04-2019
 * 
 * *********************************************************************************************/
app.service('registrationService', function ($http, $location) {
  try {
    this.register = function (data, $scope) {
      console.log('inside the service', data);
      $http({
        method: "POST",
        url: 'http://localhost:3000/register',
        data: data
      }).then(function successCallBack(response) {
        $location.path('/login') //navigating to the login page 
        console.log(response);
        console.log("Registration successful");
        console.log("Registration response:", response);
        $location.path('/login')
      }),
      function errorCallBack(error) {
        console.log("Registration Failed");
        console.log(error);
        console.log(error.data.errors[0].msg); //validation errors
           // $location.path('/l')
        $scope.loginMessage = error.data.errors[0].msg;
    }
    }

  } catch (error) {
    console.log("oh!! no im getting error", error);

  }
})