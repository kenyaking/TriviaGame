
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
function start_btn() {
    $('.content_start').css('display', 'none');
    $('.content_main').css('display', 'inherit');
    countdown();
}
function done_btn() {
    check_answers();
    $('.content_main').css('display', 'none');
    $('.content_end').css('display', 'inherit');
}
function check_answers() {
    if ($('#question1_answer1').prop('checked') || $('#question1_answer2').prop('checked')) {
        let answer1 = $('#question1_answer1').prop('checked');
        if (answer1 === correct_answer1) corrections += 1;
        else incorrections += 1;
    } else {
        unanswered += 1;
    }