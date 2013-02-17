var fs = require('fs')
	, config = require("../config/config")
	, jsonraver = require("jsonraver")
	, qs = require('querystring');

var parameters = config.getConfig();
var secret_key = parameters[0];
var host = parameters[1];

module.exports.getJson = function(resource,params,callback){
		if (typeof params === 'function') {
            callback = params;
            params = {};
        }
        //params.secret_key = secret_key;
		console.log("URL: ", host + resource);
		jsonraver(host + resource, function(err, data) {
		    if(err) {
		        console.log("Geee error");
		        console.log("URL: ", host + resource)
		    } else {
		        callback(data);
		    }               
		});
	};