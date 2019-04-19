/************************************************************************************************
 * @description :   To pass the data to the backend
 * 
 * @file        :   loginService.js
 * @overview    :   To connect to the database by passing the details in the body to the links
 * @author      :   satya bhargav   <satyabhargav.puli@gmail.com>
 * @since       :   06-04-2019
 * 
 * *********************************************************************************************/
app.service('loginService', function ($http, $location) {
    try {
        let glob = this;
        /**
         * data passed in login is getting from controller ie:input data entered in html page
         */
        glob.login = function (data, $scope) {
            console.log('inside service ', data);
            $http({
                method: 'POST',
                url: 'http://localhost:3000/serviceLogin',
                data: data
            }).then(function successCallBack(response) {
                console.log("Login successful");
                console.log("login response:", response);

                localStorage
            })
        }
    }
    catch (err) {
        console.log(err);
 
    }
})