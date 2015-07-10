'use strict';

var _ = require('lodash');

// Get list of querys
exports.index = function(req, res) {
  res.json([{"traceId":"c5c56344ffffef60","startTimestamp":1435550773848949,"endTimestamp":1435550774291616,"durationMicro":442667,"spanTimestamps":[{"name":"view-ui","startTimestamp":1435550773848949,"endTimestamp":1435550773849950},{"name":"ac","startTimestamp":1435550773965600,"endTimestamp":1435550773966601},{"name":"ui-nginx","startTimestamp":1435550774031164,"endTimestamp":1435550774032165},{"name":"pr-nginx","startTimestamp":1435550774245793,"endTimestamp":1435550774246794},{"name":"us","startTimestamp":1435550774290615,"endTimestamp":1435550774291616}],"endpoints":[{"ipv4":"10.57.131.58","port":3000,"serviceName":"us"},{"ipv4":"10.57.131.58","port":0,"serviceName":"view-ui"},{"ipv4":"10.57.131.58","port":0,"serviceName":"ui-nginx"},{"ipv4":"10.26.54.23","port":0,"serviceName":"pr-nginx"},{"ipv4":"10.57.136.74","port":1987,"serviceName":"ac"}]},{"traceId":"c9cb7862fffff822","startTimestamp":1435550773941797,"endTimestamp":1435550773942798,"durationMicro":1001,"spanTimestamps":[{"name":"ac","startTimestamp":1435550773941797,"endTimestamp":1435550773942798}],"endpoints":[{"ipv4":"10.210.197.31","port":1987,"serviceName":"ac"}]},{"traceId":"bdcf7387ffffb179","startTimestamp":1435550773272350,"endTimestamp":1435550774263806,"durationMicro":991456,"spanTimestamps":[{"name":"da","startTimestamp":1435550773272350,"endTimestamp":1435550773440702},{"name":"ui-nginx","startTimestamp":1435550773488181,"endTimestamp":1435550773489182},{"name":"ac","startTimestamp":1435550773852886,"endTimestamp":1435550773853887},{"name":"view-ui","startTimestamp":1435550774011077,"endTimestamp":1435550774012078},{"name":"us","startTimestamp":1435550774098225,"endTimestamp":1435550774099226},{"name":"pr-nginx","startTimestamp":1435550774262805,"endTimestamp":1435550774263806}],"endpoints":[{"ipv4":"10.207.168.13","port":0,"serviceName":"view-ui"},{"ipv4":"10.202.170.39","port":0,"serviceName":"da"},{"ipv4":"10.202.170.13","port":1987,"serviceName":"ac"},{"ipv4":"10.206.28.36","port":0,"serviceName":"da"},{"ipv4":"10.207.246.38","port":0,"serviceName":"pr-nginx"},{"ipv4":"10.207.168.13","port":3000,"serviceName":"us"},{"ipv4":"10.207.168.13","port":0,"serviceName":"ui-nginx"}]},{"traceId":"b815757c44692b90","startTimestamp":1435550772846406,"endTimestamp":1435550773697419,"durationMicro":851013,"spanTimestamps":[{"name":"da","startTimestamp":1435550772846406,"endTimestamp":1435550772847407},{"name":"ac","startTimestamp":1435550773696418,"endTimestamp":1435550773697419}],"endpoints":[{"ipv4":"10.42.128.28","port":2987,"serviceName":"da"},{"ipv4":"10.42.222.27","port":1987,"serviceName":"ac"}]},{"traceId":"88057e68fffed40a","startTimestamp":1435550773613758,"endTimestamp":1435550773614759,"durationMicro":1001,"spanTimestamps":[{"name":"ac","startTimestamp":1435550773613758,"endTimestamp":1435550773614759}],"endpoints":[{"ipv4":"10.210.224.44","port":1987,"serviceName":"ac"}]}]);

};
