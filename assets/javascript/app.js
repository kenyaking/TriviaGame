
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
    if ($('#question2_answer1').prop('checked') || $('#question2_answer2').prop('checked')) {
        let answer2 = $('#question2_answer1').prop('checked');
        if (answer2 === correct_answer2) corrections += 1;
        else incorrections += 1;
    } else {
        unanswered += 1;
    }
    if ($('#question3_answer1').prop('checked') || $('#question3_answer2').prop('checked')) {
        let answer3 = $('#question3_answer1').prop('checked');
        if (answer3 === correct_answer3) corrections += 1;
        else incorrections += 1;
    } else {
        unanswered += 1;
    }
    if ($('#question4_answer1').prop('checked') || $('#question4_answer2').prop('checked')) {
        let answer4 = $('#question4_answer1').prop('checked');
        if (answer4 === correct_answer4) corrections += 1;
        else incorrections += 1;
    } else {
        unanswered += 1
    }

    if ($('#question5_answer1').prop('checked') || $('#question5_answer2').prop('checked')) {
        let answer5 = $('#question5_answer1').prop('checked');
        if (answer5 === correct_answer5) corrections += 1;
        else incorrections += 1;
    } else {
        unanswered += 1;
    }
    if ($('#question6_answer1').prop('checked') || $('#question6_answer2').prop('checked')) {
        let answer6 = $('#question6_answer1').prop('checked');
        if (answer6 === correct_answer6) corrections += 1;
        else incorrections += 1;
    } else {
        unanswered += 1;
    }
    $('#correct_answers').html(corrections);
    $('#wrong_answers').html(incorrections);
    $('#not_answers').html(unanswered);
    setTimeout(function () {

    }, 100);
}