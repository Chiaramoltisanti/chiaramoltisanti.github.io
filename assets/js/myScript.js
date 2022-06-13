$( document ).ready(function() {
    let btn1 = $('#btn-ask-1');
    let btn2 = $('#btn-ask-2');
    let btn3 = $('#btn-ask-3');
    let btn4 = $('#btn-ask-4');
    let btn5 = $('#btn-ask-5');
    let btn6 = $('#btn-ask-6');

    btn1.click( () => {
        let arrow_right = $('#arr1');
        let arrow_down = $('#inverse_arr1');

        if(arrow_down.hasClass('hide_arr')) {
            arrow_down.removeClass('hide_arr');
            arrow_right.addClass('hide_arr');
        } else {
            arrow_right.removeClass('hide_arr');
            arrow_down.addClass('hide_arr');
        }
    });

    btn2.click( () => {
        let arrow_right = $('#arr2');
        let arrow_down = $('#inverse_arr2');

        if(arrow_down.hasClass('hide_arr')) {
            arrow_down.removeClass('hide_arr');
            arrow_right.addClass('hide_arr');
        } else {
            arrow_right.removeClass('hide_arr');
            arrow_down.addClass('hide_arr');
        }
    });

    btn3.click( () => {
        let arrow_right = $('#arr3');
        let arrow_down = $('#inverse_arr3');

        if(arrow_down.hasClass('hide_arr')) {
            arrow_down.removeClass('hide_arr');
            arrow_right.addClass('hide_arr');
        } else {
            arrow_right.removeClass('hide_arr');
            arrow_down.addClass('hide_arr');
        }
    });
    
    btn4.click( () => {
        let arrow_right = $('#arr4');
        let arrow_down = $('#inverse_arr4');

        if(arrow_down.hasClass('hide_arr')) {
            arrow_down.removeClass('hide_arr');
            arrow_right.addClass('hide_arr');
        } else {
            arrow_right.removeClass('hide_arr');
            arrow_down.addClass('hide_arr');
        }
    });

    btn5.click( () => {
        let arrow_right = $('#arr5');
        let arrow_down = $('#inverse_arr5');

        if(arrow_down.hasClass('hide_arr')) {
            arrow_down.removeClass('hide_arr');
            arrow_right.addClass('hide_arr');
        } else {
            arrow_right.removeClass('hide_arr');
            arrow_down.addClass('hide_arr');
        }
    });

    btn6.click( () => {
        let arrow_right = $('#arr6');
        let arrow_down = $('#inverse_arr6');

        if(arrow_down.hasClass('hide_arr')) {
            arrow_down.removeClass('hide_arr');
            arrow_right.addClass('hide_arr');
        } else {
            arrow_right.removeClass('hide_arr');
            arrow_down.addClass('hide_arr');
        }
    });
})