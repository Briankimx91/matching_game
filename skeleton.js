const skeleton = new Skeleton();
let pics = [
    './imgs/dodge_challenger.png',
    './imgs/gtr.png',
    './imgs/bugatti.png',
    './imgs/porsche_911.png',
    './imgs/laferrari.png',
    './imgs/gallardo.png',
    './imgs/gts_amg.png',
    './imgs/r8.png',
    './imgs/dodge_challenger.png',
    './imgs/gtr.png',
    './imgs/bugatti.png',
    './imgs/porsche_911.png',
    './imgs/laferrari.png',
    './imgs/gallardo.png',
    './imgs/gts_amg.png',
    './imgs/r8.png',
];

function Skeleton () {
    const self = this;
    self.init = function() {
        $(document).ready(function(){
            self.shuffle(pics);
            self.board();
        });
    };
    self.shuffle = function (pics){
        let currentIndex = pics.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = pics[currentIndex];
            pics[currentIndex] = pics[randomIndex];
            pics[randomIndex] = temporaryValue;
        }

        return pics;

    };
    self.board = function () {
        let m = 0;
        for(let i = 1; i < 5; i++){
            $('<div>').addClass('row').appendTo('.board');
            for(let k = 1; k < 5; k++){
                $('<div>').addClass('card').appendTo(`.row:nth-child(${i})`);
                $('<div>').addClass('front').appendTo(`.row:nth-child(${i}) > .card:nth-child(${k}`);
                $('<div>').addClass('back').css({
                    "background-image":`url(${pics[m]})`
                }).appendTo(`.row:nth-child(${i}) > .card:nth-child(${k}`);
                m++;
            }
        }
    };

    self.init();
}



