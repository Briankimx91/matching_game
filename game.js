const game = new Game();
const audio = new Audio('garage.mp3');
function Game(){
    const self = this;
    let first_card, second_card, first_card_clicked, second_card_clicked = null;
    let match_counter = 0;
    let denominator = 0;
    let attempts_counter = 0;
    let games_played = 1;
    self.init = function(){
        $(document).ready(function(){
            $('.card').click(self.clickHandler);
            $('.restart').click(self.restart);
        })
    };

    self.clickHandler = function(){
        audio.play();
        setTimeout(function(){
            audio.pause();
        }, 2000);
        $(this).children('.front').addClass('open');
        if(first_card_clicked == null){
            first_card = $(this).children('.front');
            first_card_clicked = $(this).children('.back')[0].style.backgroundImage;
            $(this).off('click',self.clickHandler);
            console.log("first card clicked");
        } else {
            second_card = $(this).children('.front');
            second_card_clicked = $(this).children('.back')[0].style.backgroundImage;
            $(this).off('click',self.clickHandler);
            console.log("second card clicked");
            if(first_card_clicked === second_card_clicked){
                if(match_counter === 8){
                    console.log("game finished");
                    return;
                }
                match_counter++;
                denominator++;
                first_card = null;
                second_card = null;
                first_card_clicked = null;
                second_card_clicked = null;
            } else {
                console.log("not matched");
                $('.attempts').text(++attempts_counter);
                denominator++;

                $('.card').off("click");
                setTimeout(self.notMatched,2000);
            }
            $('.accuracy').text((Math.round((match_counter / denominator) * 100) + '%'));
        }
    };

    self.notMatched = function() {
        setTimeout(function(){
            audio.play();
            setTimeout(function(){
                audio.pause();
            }, 2000);
        });
        first_card.addClass('close');
        second_card.addClass('close');
        setTimeout(self.someFunction,2000);

    };
    self.someFunction = function() {
        $('.card').click(self.clickHandler);
        first_card.removeClass('close open');
        second_card.removeClass('close open');
        first_card = null;
        second_card = null;
        first_card_clicked = null;
        second_card_clicked = null;
    };
    self.restart = function(){
        $('.games_played').text(++games_played);
        setTimeout(function(){
            $('.front').addClass("close");
            audio.play();
            setTimeout(function(){
                audio.pause();
                $('.front').removeClass('close');
            }, 2000);
            let cards = $('.row');
            for (let i = 0; i < cards.length; i++) {
                let target = Math.floor(Math.random() * cards.length - 1) + 1;
                let target2 = Math.floor(Math.random() * cards.length - 1) + 1;
                cards.eq(target).before(cards.eq(target2));
            }
        });
        first_card = null;
        second_card = null;
        first_card_clicked = null;
        second_card_clicked = null;
        match_counter = 0;
        denominator = 0;
        attempts_counter = 0;
    };
    self.init();
}