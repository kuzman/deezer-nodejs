var util = require('util')
, fs = require('fs');

var initialized = false;
var defaultConfigFile = '../config/config.json';
var config = undefined;
var secret_key = '';
var host = '';

module.exports.getConfig = function(){
	if (!initialized) init();

	secret_key = config.secret_key;
	host = config.host;
	
	return [secret_key,host];
};
var init = module.exports.init = function() {
  var self = this;
  if (initialized) return;
  	
  loadConfig(arguments[0]);

  secret_key = config.secret_key;
  host = config.host;
 
  initialized = true;
  return this;
};

function loadConfig(arg) {
  if (typeof arg == 'object') return (config = arg);
  else if (typeof arg == 'string') var configFile = arg;
  else var configFile = defaultConfigFile;
  // Load Config from file
  config = {};
  try {
    var file = fs.readFileSync(configFile);
    try {
      config = JSON.parse(file);
    } catch(ex) {
      console.error('unable to parse config file (maybe ' + file +
            ' is empty or invalid json): ', ex);
    }
  } catch(ex) {
    if (arg) console.error('Unable to read the config file:', ex);
  }
};