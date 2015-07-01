'use strict';

describe('New Board', function() {
  describe('Run Script', function() {
    it('should have a working run script', function(done) {
      var options = {};
      this.runner.run('new_board', 'run', options, function(err, output) {
        expect(err).not.to.exist;
        expect(output).to.be.an('array');
        done();
      });
    });
  });
});
