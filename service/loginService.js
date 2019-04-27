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
            console.log('inside service ===>', data);
            $http({
                method: 'post',
                url: 'http://localhost:3000/serviceLogin',
                data: data
            }).then(function successCallBack(response) {
                console.log("Login successfulsdfdfsdfsdff",response.data.result._id);
                //console.log("login response:", response.data.token);
               localStorage.setItem('token',response.data.token);
                localStorage.setItem('userid',response.data.result._id);
                localStorage.setItem('username',response.data.result.username);
                localStorage.setItem('email',response.data.result.email);
            
                $location.path('dashBoard');//for redirecting to dashboard
            }, err => {
                // console.log("ha ha");

                console.log("error is coming!!!!!!  ",err);
            })
        }
    }
    catch (err) {
        console.log("error is rendering!",err);
    }
})