var request = require("./request");

/*
*
*   Deal with users
*
*/

//get user details
module.exports.getUserDetails = function (user_id, callback) {
            request.getJson('users/' + user_id, callback);
};

/*
*
*   Deal with tracks
*
*/
//get Track by ID
module.exports.getTrackbyID = function(id,callback) {
    request.getJson('track/' + id, callback);
};