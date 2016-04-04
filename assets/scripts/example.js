'use strict';

module.exports = true;

// VARIABLES

var xplayer = 'x'; // turn = 0
var oplayer = 'o'; // turn = 1
var xgo = 'go ahead x';
var ogo = 'go ahead o';
var xwins = 'x wins';
var owins = 'o wins';
var nowins = 'no winners no losers!';
// var compMove;
var turn = 0; // toggles btw 0 and 1 for switching turns

var boardCheck; // function to check value in each cell
var a1; // value within each cell
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;

var checkWin; // function that checks the board for winning combo
var xWin = false; // true if X wins
var oWin = false; // true if O wins
var winAlert; // function that declares winner and restarts game

var newGame;
var clearBoard;


// PLACES AN X OR O IN THE BOX WHEN CLICKED. TOGGLES.
var newGame = function () {
    $('td').one('click', function () {
           if (turn === 0) {
            $(this).text(oplayer);
            $("#notice").text(xgo);

            turn = 1;
          }
          else {
            $(this).text(xplayer);
            $("#notice").text(ogo);
            turn = 0;
          };
    });
};



// INITIALIZES GAME - keep after var newGame
$(document).ready(function () {
    newGame();
    if (turn == 0){
      $("#notice").text(ogo);
    }
    else {
      $("#notice").text(xgo);
    }
});

//
// if ($('#a1').text() == 'o') {
//   $("#notice2").text($('#a1').text());
//  };

// var arbin = [];
// var arxo = [];
//
//
// var arif = function() {
//
// if     ($('#a1').text() == 'o') {arr[0] = 0}
// elseif ($('#a1').text() == 'x') {arr[0] = 1}
// elseif ($('#a1').text() == 'o') {arr[1] = 0}
// elseif ($('#a2').text() == 'x') {arr[1] = 1}
// elseif ($('#a2').text() == 'o') {arr[2] = 0}
// elseif ($('#a3').text() == 'x') {arr[2] = 1}
//
// elseif ($('#b1').text() == 'o') {arr[3] = 0}
// elseif ($('#b1').text() == 'x') {arr[3] = 1}
// elseif ($('#b2').text() == 'o') {arr[4] = 0}
// elseif ($('#b2').text() == 'x') {arr[4] = 1}
// elseif ($('#b3').text() == 'o') {arr[5] = 0}
// elseif ($('#b3').text() == 'x') {arr[5] = 1}
//
// elseif ($('#c1').text() == 'o') {arr[6] = 0}
// elseif ($('#c1').text() == 'x') {arr[6] = 1}
// elseif ($('#c2').text() == 'o') {arr[7] = 0}
// elseif ($('#c2').text() == 'x') {arr[7] = 1}
// elseif ($('#c3').text() == 'o') {arr[8] = 0}
// elseif ($('#c3').text() == 'x') {arr[8] = 1}
//
// else{};
// if (arrbin[i] === 0)
// { arrxo[i] = "o"}
// if (arrbin[i] === 1)
// { arrxo[i] = "x"}
//


var ar1 = arrbin[0] + arrbin[1] + arrbin[2];
var ar2 = arrbin[3] + arrbin[4] + arrbin[5];
var ar3 = arrbin[6] + arrbin[7] + arrbin[8];
var at1 = arrbin[0] + arrbin[3] + arrbin[6];
var at2 = arrbin[1] + arrbin[4] + arrbin[7];
var at3 = arrbin[2] + arrbin[5] + arrbin[8];
var ad1 = arrbin[0] + arrbin[4] + arrbin[8];
var ad1 = arrbin[2] + arrbin[4] + arrbin[6];

if(ar1 || ar2 || ar3 || at1 || at2 || at3 || ad1 || ad2 = 3)
{
  $("#notice2").text(xwins);
}
else if  (ar1 || ar2 || ar3 || at1 || at2 || at3 || ad1 || ad2 = 0)
{
  $("#notice2").text(owins);
}
else
{
 $("#notice2").text(nowins)
}

// }










//$("#notice2").text($("#a1").text())
// ("#notice2").text($("#a1").text())

//
// h1w = function () { // CHECKS IF X WON
//     if ((a1 === a2 && a1 === a3 && (a1 === "x")) || //first row
//     (b1 === b2 && b1 === b3 && (b1 === "x")) || //second row
//     (c1 === c2 && c1 === c3 && (c1 === "x")) || //third row
//     (a1 === b1 && a1 === c1 && (a1 === "x")) || //first column
//     (a2 === b2 && a2 === c2 && (a2 === "x")) || //second column
//     (a3 === b3 && a3 === c3 && (a3 === "x")) || //third column
//     (a1 === b2 && a1 === c3 && (a1 === "x")) || //diagonal 1
//     (a3 === b2 && a3 === c1 && (a3 === "x")) //diagonal 2
//     )
//     { return true; }
//     else
//     {return false;}
// };
// //
//
//
// //
// //
//
//
// //
// // // COMP MOVE AI DETECTS IF THERE ARE TWO IN A ROW NEXT TO AN EMPTY CELL AND PLACES MOVE THERE
// // var compMove = function () {
// //     if (a1 == "" && ((a3 == "x" && a2 == "x") || (c3 == "x" && b2 == "x") || (c1 == "x" && b1 == "x"))) {
// //         $('#a1').text("o");
// //         turn = 0;
// //     } else {
// //       if (a2 == "" && ((a1 == "x" && a3 == "x") || (c2 == "x" && b2 == "x"))) {
// //         $('#a2').text("o");
// //         turn = 0;
// //         }
// //         else{
// //         if (a3 == "" && ((a1 == "x" && a2 == "x") || (c1 == "x" && b2 == "x") || (c3 == "x" && b3 == "x"))) {
// //             $('#a3').text("o");
// //             turn = 0;
// //         }
// //             else{
// //             if (c3 == "" && ((c1 == "x" && c2 == "x") || (a1 == "x" && b2 == "x") || (a3 == "x" && b3 == "x"))) {
// //                 $('#c3').text("o");
// //                 turn = 0;
// //         }
// //                 else{
// //                 if (c1 == "" && ((c3 == "x" && c2 == "x") || (a3 == "x" && b2 == "x") || (a1 == "x" && b1 == "x"))) {
// //                     $('#c1').text("o");
// //                     turn = 0;
// //         }
// //                     else{
// //                     if (c2 == "" && ((c3 == "x" && c1 == "x") || (a2 == "x" && b2 == "x"))) {
// //                         $('#c2').text("o");
// //                         turn = 0;
// //         }
// //                         else{
// //                         if (b1 == "" && ((b3 == "x" && b2 == "x") || (a1 == "x" && c1 == "x"))) {
// //                             $('#b1').text("o");
// //                             turn = 0;
// //         }
// //                             else{
// //                             if (b3 == "" && ((a3 == "x" && c3 == "x") || (b2 == "x" && b1 == "x"))) {
// //                                 $('#b3').text("o");
// //                                 turn = 0;
// //         }
// //                                 else{
// //                                 if (b2 == "" && ((a3 == "x" && c1 == "x") || (c3 == "x" && a1 == "x") || (b3 == "x" && b1 == "x") || (c2 == "x" && a2 == "x"))) {
// //                                     $('#b2').text("o");
// //                                     turn = 0;
// //         }
// //                                    else{ // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
// //                                     if (b2 == "") {
// //                                         $('#b2').text("o");
// //                                         turn = 0;
// //
// //                                     }
// //                                         else{
// //                                         if (a1 == "") {
// //                                             $('#a1').text("o");
// //                                             turn = 0;
// //
// //                                     }
// //                                             else{
// //                                             if (c3 == "") {
// //                                             $('#c3').text("o");
// //                                             turn = 0;
// //
// //                                     }
// //                                                 else {
// //                                                 if (c2 == "") {
// //                                             $('#c2').text("o");
// //                                             turn = 0;
// //
// //                                     }
// //                                                     else{
// //                                                     if (b1 == "") {
// //                                             $('#b1').text("o");
// //                                             turn = 0;
// //
// //                                     }
// //                                                     }
// //                                                 }
// //                                             }
// //
// //
// //                                         }
// //                                    }
// //                                 }
// //                             }
// //                         }
// //                     }
// //                 }
// //             }
// //         }
// //     }
// // };
//
//
// // CREATES A FUNCTION TO DETECT WHAT IS IN EACH BOX AFTER EACH MOVE
// // boardCheck = function () {
// //     a1 = $('#a1').html();
// //     a2 = $('#a2').html();
// //     a3 = $('#a3').html();
// //     b1 = $('#b1').html();
// //     b2 = $('#b2').html();
// //     b3 = $('#b3').html();
// //     c1 = $('#c1').html();
// //     c2 = $('#c2').html();
// //     c3 = $('#c3').html();
// // };
//
// // CREATES A FUNCTION TO DETECT A WIN OR A TIE
//
//
// //
//     } else { // CHECKS IF O WON
//         if ((a1 == a2 && a1 == a3 && (a1 == "o")) || //first row
//         (b1 == b2 && b1 == b3 && (b1 == "o")) || //second row
//         (c1 == c2 && c1 == c3 && (c1 == "o")) || //third row
//         (a1 == b1 && a1 == c1 && (a1 == "o")) || //first column
//         (a2 == b2 && a2 == c2 && (a2 == "o")) || //second column
//         (a3 == b3 && a3 == c3 && (a3 == "o")) || //third column
//         (a1 == b2 && a1 == c3 && (a1 == "o")) || //diagonal 1
//         (a3 == b2 && a3 == c1 && (a3 == "o")) //diagonal 2
//         ) {
//             oWin = true;
//             $("#notice").text(ann4);
//
//         } else { // CHECKS FOR TIE GAME IF ALL CELLS ARE FILLED
//             if (((a1 == "x") || (a1 == "o")) && ((b1 == "x") || (b1 == "o")) && ((c1 == "x") || (c1 == "o")) && ((a2 == "x") || (a2 == "o")) && ((b2 == "x") || (b2 == "o")) && ((c2 == "x") || (c2 == "o")) && ((a3 == "x") || (a3 == "o")) && ((b3 == "x") || (b3 == "o")) && ((c3 == "x") || (c3 == "o"))) {
//                 $("#notice").text(ann5);
//             }
//         }
//     }
// };
// //
// //
// // // DECLARES WHO WON
// // var winAlert = function () {
// //     if (xWin == true) {
// //         alert("You won!");
// //         clearBoard(); // THIS DOESN'T WORK
// //     } else {
// //         if (oWin == true) {
// //             alert("Sorry, you lose!");
// //             clearBoard(); // THIS DOESN'T WORK
// //         }
// //     }
// // };
// //
// //
// // // NEWGAME BUTTON CLEARS THE BOARD, RESTARTS GAME, AND RESETS THE WINS
// // var clearBoard = $('#restart').click(function (event) {
// //     a1 = $('#a1').text("");
// //     b1 = $('#b1').text("");
// //     c1 = $('#c1').text("");
// //     a2 = $('#a2').text("");
// //     b2 = $('#b2').text("");
// //     c2 = $('#c2').text("");
// //     a3 = $('#a3').text("");
// //     b3 = $('#b3').text("");
// //     c3 = $('#c3').text("");
// //     xWin = false;
// //     oWin = false;
// //     newGame();
// //     location.reload(); // WITHOUT THIS, THERE'S A BUG WHICH PLACES MULTIPLE 0'S ON ALL GAMES AFTER THE FIRST
// // });
//
// // STILL NEED TO FIX:
// // * Alert for tie game or xWin appears twice
// // * X's can replace O's
// // * Missed opportunities for O to win
// // * Almost never let's human win
// // * Clean up logic for compMove
