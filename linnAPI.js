var request = require('request-promise');

var linnAPI = function(server, token){
    var api = {
        getUrl : function(callType){
            return server + '//api/' + callType + '?token=' + token;
        },
        post : function(callType, data) {
            var url = api.getUrl(callType);
            return request.post(url, {form:data});
        }
    };
    return api;
};

module.exports = linnAPI;
