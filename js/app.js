var App = Ember.Application.create();

App.chessEngine = new Chess();

App.chessEngine.json = function() {

  var jsonRows = [];
  var asciiLines = this.ascii().split("\n");
  console.log(asciiLines);

  for(var i = 0; i < asciiLines.length; i++) {

    var line = asciiLines[i];
    var jsonRow = [];

    if (line.match(/^ \d /)) {

      var squares = line.split(" ");

      for (var j = 0; j < squares.length; j++) {

        var square = squares[j];

        if (square.match(/\./)) {
          squareObject = {
            'color': 'empty',
            'piece': 'empty'
          };
          jsonRow.pushObject(squareObject);
        }

        if (square.match(/p/)) {
          squareObject = {
            'color': 'black',
            'piece': 'pawn'
          };
          jsonRow.pushObject(squareObject);
        }

        if (square.match(/r/)) {
          squareObject = {
            'color': 'black',
            'piece': 'rook'
          };
          jsonRow.pushObject(squareObject);
        }

        if (square.match(/n/)) {
          squareObject = {
            'color': 'black',
            'piece': 'knight'
          };
          jsonRow.pushObject(squareObject);
        }

        if (square.match(/b/)) {
          squareObject = {
            'color': 'black',
            'piece': 'bishop'
          };
          jsonRow.pushObject(squareObject);
        }

        if (square.match(/q/)) {
          squareObject = {
            'color': 'black',
            'piece': 'queen'
          };
          jsonRow.pushObject(squareObject);
        }

        if (square.match(/k/)) {
          squareObject = {
            'color': 'black',
            'piece': 'king'
          };
          jsonRow.pushObject(squareObject);
        }

        if (square.match(/P/)) {
          squareObject = {
            'color': 'white',
            'piece': 'pawn'
          };
          jsonRow.pushObject(squareObject);
        }

        if (square.match(/R/)) {
          squareObject = {
            'color': 'white',
            'piece': 'rook'
          };
          jsonRow.pushObject(squareObject);
        }

        if (square.match(/N/)) {
          squareObject = {
            'color': 'white',
            'piece': 'knight'
          };
          jsonRow.pushObject(squareObject);
        }

        if (square.match(/B/)) {
          squareObject = {
            'color': 'white',
            'piece': 'bishop'
          };
          jsonRow.pushObject(squareObject);
        }

        if (square.match(/Q/)) {
          squareObject = {
            'color': 'white',
            'piece': 'queen'
          };
          jsonRow.pushObject(squareObject);
        }

        if (square.match(/K/)) {
          squareObject = {
            'color': 'white',
            'piece': 'king'
          };
          jsonRow.pushObject(squareObject);
        }

      }

    }

    if (jsonRow.length > 0) {
      jsonRows.pushObject(jsonRow);
    }

  }

  return jsonRows;

};

App.Router.map(function() {
  this.resource('game');
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('game');
  }
});

App.GameController = Ember.ArrayController.extend({
  rows: function() {
    return App.chessEngine.json();
  }.property()
});

App.GameRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', App.chessEngine.json());
  }
});

App.GameView = Ember.View.extend();

App.RowView = Ember.View.extend({
  templateName: 'row',
  tagName: 'tr',
  classNames: ['board-row']
});

App.CellView = Ember.View.extend({
  tagName: 'td',
  attributeBindings: 'draggable',
  draggable: 'true',
  classNameBindings: ['color', 'piece'],

  dragOver: function(e) {
    e.preventDefault();
  },

  dragLeave: function(e) {
    e.preventDefault();
  }
});














