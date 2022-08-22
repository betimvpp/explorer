// initial data
var cron;
var mm = 24;
var ss = 59;
//events
document.querySelector('.play').addEventListener('click', playClick);
document.querySelector('.pause').addEventListener('click', pauseClick);
document.querySelector('.more').addEventListener('click', moreClick);
document.querySelector('.minus').addEventListener('click', minusClick);
//functions
function minusClick() {
    mm = (mm - 05);
    if (mm <= 00) {
        mm = 00;
    }
    if (mm < 00) {
        clearInterval(cron);

        mm = 00;
        ss = 00;

        document.querySelector(".timer").innerHTML = "00:00"
    }
    var format =
        (mm < 10 ? "0" + mm : mm) +
        ":" +
        (ss < 10 ? "0" + ss : ss);

    document.querySelector('.timer').innerHTML = format;
}

function moreClick() {
    mm = (mm + 05)
    if (mm >= 60) {
        mm = 59;
        ss = 60;
    }
    if (ss == 00) {
        ss = 59;
        mm--;
    }
    var format =
        (mm < 10 ? "0" + mm : mm) +
        ":" +
        (ss < 10 ? "0" + ss : ss);

    document.querySelector('.timer').innerHTML = format;
}

function playClick() {
    cron = setInterval(() => {
        timer();
    }, 1000);
    if (mm == 00 && ss == 00) {
        mm = 24;
        ss = 60;
    }
    var format =
        (mm < 10 ? "0" + mm : mm) +
        ":" +
        (ss < 10 ? "0" + ss : ss);

    document.querySelector('.timer').innerHTML = format;
}

function pauseClick() {
    clearInterval(cron);
}

function timer() {
    ss--;
    if (ss == 00) {
        ss = 59;
        mm--;
    }

    if (mm < 00) {
        clearInterval(cron);

        mm = 00;
        ss = 00;

        document.querySelector(".timer").innerHTML = "00:00"
    }
    var format =
        (mm < 10 ? "0" + mm : mm) +
        ":" +
        (ss < 10 ? "0" + ss : ss);

    document.querySelector('.timer').innerHTML = format;
}
//sounds 
let soundFlorest = new Audio('./audios/Floresta.wav')
const soundRain = new Audio('./audios/Chuva.wav')
const soundCoffee = new Audio('./audios/Cafeteria.wav')
const soundFire = new Audio('./audios/Lareira.wav')

const buttonFlorest = document.querySelector('.tree')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.market')
const buttonFire = document.querySelector('.hot')

soundFlorest.loop = true;
soundRain.loop = true;
soundCoffee.loop = true;
soundFire.loop = true;

function allSoundsPause() {
    soundFlorest.pause()
    soundRain.pause()
    soundCoffee.pause()
    soundFire.pause()
}


buttonFlorest.addEventListener('click', function() {
    soundFlorest.play()
    soundRain.pause()
    soundCoffee.pause()
    soundFire.pause()
});

buttonRain.addEventListener('click', function() {
    soundFlorest.pause()
    soundRain.play()
    soundCoffee.pause()
    soundFire.pause()
});

buttonCoffee.addEventListener('click', function() {
    soundFlorest.pause()
    soundRain.pause()
    soundCoffee.play()
    soundFire.pause()
});

buttonFire.addEventListener('click', function() {
    soundFlorest.pause()
    soundRain.pause()
    soundCoffee.pause()
    soundFire.play()
});
let volumeFlorest = document.querySelector('.treeVolume')
let volumeRain = document.querySelector('.rainVolume')
let volumeCoffee = document.querySelector('.marketVolume')
let volumeFire = document.querySelector('.hotVolume')

volumeFlorest.addEventListener('change', function(volume) {
    soundFlorest.volume = volume.currentTarget.value / 100
});

volumeRain.addEventListener('change', function(volume) {
    soundRain.volume = volume.currentTarget.value / 100
});

volumeCoffee.addEventListener('change', function(volume) {
    soundCoffee.volume = volume.currentTarget.value / 100
});

volumeFire.addEventListener('change', function(volume) {
    soundFire.volume = volume.currentTarget.value / 100
});
//dark mode
var img = document.querySelector(".temp");
var moon = document.querySelector(".moon");
document.querySelector('.temp').addEventListener('click', clickMode);
document.querySelector('.moon').addEventListener('click', clickMoon);

function clickMode() {
    document.body.classList.toggle('dark');
    document.querySelector('.timer').classList.toggle('dark');
    document.querySelector('.rightside .tree').classList.toggle('dark');
    document.querySelector('.rightside .rain').classList.toggle('dark');
    document.querySelector('.rightside .market').classList.toggle('dark');
    document.querySelector('.rightside .hot').classList.toggle('dark');
    document.querySelector('.treeVolume').classList.toggle('dark');
    document.querySelector('.rainVolume').classList.toggle('dark');
    document.querySelector('.marketVolume').classList.toggle('dark');
    document.querySelector('.hotVolume').classList.toggle('dark');
    document.querySelector('.mode').classList.toggle('dark');
    document.querySelector('.moon').style.display = 'block';
    document.querySelector('.temp').style.display = 'none';

    document.querySelector('.butPl').style.display = 'block';
    document.querySelector('.butSt').style.display = 'block';
    document.querySelector('.butMo').style.display = 'block';
    document.querySelector('.butMi').style.display = 'block';
    document.querySelector('.playB').style.display = 'none';
    document.querySelector('.pauseB').style.display = 'none';
    document.querySelector('.moreB').style.display = 'none';
    document.querySelector('.minusB').style.display = 'none';

    document.querySelector('.iconT').style.display = 'block';
    document.querySelector('.iconR').style.display = 'block';
    document.querySelector('.iconM').style.display = 'block';
    document.querySelector('.iconH').style.display = 'block';
    document.querySelector('.cardT').style.display = 'none';
    document.querySelector('.cardR').style.display = 'none';
    document.querySelector('.cardM').style.display = 'none';
    document.querySelector('.cardH').style.display = 'none';


}

function clickMoon() {
    document.body.classList.toggle('dark');
    document.querySelector('.timer').classList.toggle('dark');
    document.querySelector('.rightside .tree').classList.toggle('dark');
    document.querySelector('.rightside .rain').classList.toggle('dark');
    document.querySelector('.rightside .market').classList.toggle('dark');
    document.querySelector('.rightside .hot').classList.toggle('dark');
    document.querySelector('.treeVolume').classList.toggle('dark');
    document.querySelector('.rainVolume').classList.toggle('dark');
    document.querySelector('.marketVolume').classList.toggle('dark');
    document.querySelector('.hotVolume').classList.toggle('dark');
    document.querySelector('.mode').classList.toggle('dark');
    document.querySelector('.moon').style.display = 'none';
    document.querySelector('.temp').style.display = 'block';

    document.querySelector('.butPl').style.display = 'none';
    document.querySelector('.butSt').style.display = 'none';
    document.querySelector('.butMo').style.display = 'none';
    document.querySelector('.butMi').style.display = 'none';
    document.querySelector('.playB').style.display = 'block';
    document.querySelector('.pauseB').style.display = 'block';
    document.querySelector('.moreB').style.display = 'block';
    document.querySelector('.minusB').style.display = 'block';

    document.querySelector('.iconT').style.display = 'none';
    document.querySelector('.iconR').style.display = 'none';
    document.querySelector('.iconM').style.display = 'none';
    document.querySelector('.iconH').style.display = 'none';
    document.querySelector('.cardT').style.display = 'block';
    document.querySelector('.cardR').style.display = 'block';
    document.querySelector('.cardM').style.display = 'block';
    document.querySelector('.cardH').style.display = 'block';

}