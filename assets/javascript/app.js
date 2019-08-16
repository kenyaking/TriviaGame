
var correct_answer1 = false;
var correct_answer2 = true;
var correct_answer3 = true;
var correct_answer4 = false;
var correct_answer5 = false;
var correct_answer6 = true;
var corrections = 0;
var incorrections = 0;
var unanswered = 0;
var counts = 80;

function countdown() {
    setInterval(function () {
        if (counts === 0) {
            done_btn();
            counts = 80;
        } else {
            counts -= 1;
            $('#countdown').html(counts);
        }
    }, 1000);
}