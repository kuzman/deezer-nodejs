var request = require("./request");

/*
*   Deal with users
*/

//get user details
module.exports.getUserDetails = function (user_id, callback) {
            request.getJson('user/' + user_id, callback);
};
/*
*   Deal with tracks
*/
//get Track by ID 
module.exports.getTrackbyID = function(id,callback) {
    request.getJson('track/' + id, callback);
};
/*
*   Deal with Radio
*/
module.exports.getRadioStations= function(callback) {
    request.getJson('radio/', callback);
};	
module.exports.getRadioStation= function(channel, callback) {
    request.getJson('radio/' + channel, callback);
};
/*
*   Deal with palylist
*/
module.exports.getPlaylist= function(id, callback) {
    request.getJson('playlist/' + id, callback);
};