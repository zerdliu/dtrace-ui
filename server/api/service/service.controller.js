'use strict';

var _ = require('lodash');

// Get list of services
exports.index = function(req, res) {
  res.json(["ac","da","pr-nginx","ui-nginx","us","view-ui"]);
};
