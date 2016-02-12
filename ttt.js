$(document).on('ready', function() {
  var turn = 0;

  $('td').on('click', function() {
    // this === DOM Element
    // $(this) === jQuery Object

    // Idempotent = Always get the same outcome
    // Memoization = Store a computed output for repeated use
    var self = $(this);

    // 0 % 2 === 0
    // 1 % 2 === 1
    // 2 % 2 === 0
    // 3 % 2 === 1
    // 4 % 2 === 0

    if ( turn % 2 === 1 ) {
      self.html('O').addClass('o');
    } else {
      self.html('X').addClass('x');
    }

    self.off('click');

    checkForWinner();

    turn++;
  });

  function checkForWinner() {
    var xSquares = $('.x');
    var oSquares = $('.o');

// i = iterator (best practice to stat from i)
    for (var i = 0; i < xSquares.length; i++) {
      for (var j = i+1; j < xSquares.length; j++) {
        for (var k = j+1; k < xSquares.length; k++) {
          // console.log("ADD UP: " + xSquares[i].id + ", " + xSquares[j].id + ", " + xSquares[k].id);
          if (parseInt(xSquares[i].id) + parseInt(xSquares[j].id) + parseInt(xSquares[k].id) === 15) {
            alert("X's Wins!");
            playAgain();
          }
        }
      }
    }
    for (var i = 0; i < oSquares.length; i++) {
      for (var j = i+1; j < oSquares.length; j++) {
        for (var k = j+1; k < oSquares.length; k++) {
          // console.log("ADD UP: " + oSquares[i].id + ", " + oSquares[j].id + ", " + oSquares[k].id);
          if (parseInt(oSquares[i].id) + parseInt(oSquares[j].id) + parseInt(oSquares[k].id) === 15) {
            alert("O's Wins!");
            playAgain();
          }
        }
      }
    }
  }

  function playAgain() {
    result = window.confirm("Would you like to play again?");
    if (result === true) {
      location.reload();
    // console.log(result)
    }
  }
});
