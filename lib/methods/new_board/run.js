'use strict';

var async = require('async');

module.exports = function(options, done) {
  
  // Create new client instance
  var client = new this.Client(options.credentials);

  async.waterfall([
    // get boards
    function(cb) {
      client.getBoards(cb);
    },

    // check for differences
    function(boards, cb) {
      // According to sdk readme, this should work:
      options.poller(boards, 'id', cb);

      // However, in new_card, we are creating
      // a new array of objects with an id prop, like so:
      // options.poller(boards.map(function(board) {
      //   return { id: board.id };
      // }), cb);
    }

    // new boards will be passed to the callback
  ], done);
};
