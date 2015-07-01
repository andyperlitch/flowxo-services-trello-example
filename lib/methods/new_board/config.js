'use strict';

var config = {
  name: 'New Board',
  slug: 'new_board',
  type: 'poller',
  kind: 'trigger',
  scripts: {
    run: require('./run')
  },
  fields: {
    input: [],
    output: []
  }
};

module.exports = function(service) {
  service.registerMethod(config);
};
