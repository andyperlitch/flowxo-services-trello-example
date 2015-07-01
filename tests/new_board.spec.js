'use strict';

describe('New Board', function() {
  var sandbox, clientStub;

  beforeEach(function() {
    // Use a sandbox for our stubs, so they can be
    // automatically removed after each spec
    sandbox = sinon.sandbox.create();
    clientStub = sandbox.stub(this.service, 'Client');
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('Run Script', function() {
    describe('when getBoards succeeds', function() {
      var options;
      beforeEach(function() {
        // Mocking a successful response of boards
        clientStub.returns({
          getBoards: function(done) {
            expect(arguments.length).to.equal(1);
            done(null, [{ id: '1', name: 'board1' }, { id: '2', name: 'board2' }, { id: '3', name: 'board3' }]);
          }
        });

        // Setting empty options (in this case)
        options = {
          credentials: {},
          input: {}
        };
      });

      it('should return new boards', function(done) {
        
        // Initialise the poll cache with no boards
        this.runner.setPollerCache('new_board', []);

        // Run the script with the runner
        this.runner.run('new_board', 'run', options, function(err, output) {
          expect(err).not.to.exist;

          expect(clientStub).to.have.been.calledWith(options.credentials);

          expect(output).to.be.an('array');
          expect(output).to.have.length(3);
          expect(output).to.deep.equal([{
            id: '1',
            name: 'board1'
          }, {
            id: '2',
            name: 'board2'
          }, {
            id: '3',
            name: 'board3'
          }]);
          done();
        });

      });

      it('should not return old boards', function() {
        // Initialise the poll cache with one of the three boards returned.
        this.runner.setPollerCache('new_board', [{id: '1', name: 'board1'}]);

        // Run the script with the runner
        this.runner.run('new_board', 'run', options, function(err, output) {
          expect(err).not.to.exist;

          expect(clientStub).to.have.been.calledWith(options.credentials);

          expect(output).to.be.an('array');
          expect(output).to.have.length(2);
          expect(output).to.deep.equal([{
            id: '2',
            name: 'board2'
          }, {
            id: '3',
            name: 'board3'
          }]);
          done();
        });
      });

    });
    

    it('should return an error when retrieving the boards fails', function(done) {
      // The Client is stubbed so we can test
      // the run script in isolation, without making any
      // actual API calls.
      clientStub.returns({
        getBoards: function(done) {
          done('Error');
        }
      });

      var options = {
        credentials: {},
        input: {}
      };

      // Run the script with the runner,
      // available at `this.runner`.
      this.runner.run('new_board', 'run', options, function(err) {
        expect(err).to.equal('Error');
        done();
      });
    });
  });
});