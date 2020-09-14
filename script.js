const btn1 = $('.btnOne');
const btn2 = $('.btnTwo');
const btn3 = $('.btnThree'); 
const text = $('.jwidth');

progB = 0;
btn1.click(function() {
    if (progB <= 99) {
        progB += 1
        text.width(progB  + '%');
        text.html(progB + '%');
    }
})

btn2.click(function() {
    if (progB <= 97) {
        progB += 3
        text.width(progB  + '%');
        text.html(progB + '%');
    }
})

btn3.click(function() {
    if (progB <= 93) {
        progB += 7
        text.width(progB  + '%');
        text.html(progB + '%');
    }
})


