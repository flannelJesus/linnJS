var request = require('request-promise');
var linnAPI = require('./linnAPI');

function initializeAPI(username, password) {
    var baseURL = 'https://api.linnworks.net//api/';

    return request.post(baseURL + 'Auth/MultiLogin', {
        form: {
            userName: username,
            password: password
        }
    })
        .then(function (response) {
            var rs = JSON.parse(response)[0];
            var id = rs.Id;
            return request.post(baseURL + 'Auth/Authorize', {
                form: {
                    userName: username,
                    password: password,
                    userId: id
                }
            });
        })
        .then(function (response) {
            var rs = JSON.parse(response);
            return linnAPI(rs.Server, rs.Token);
        });
}

module.exports = {initialize: initializeAPI};
