(function () {
    let video = document.querySelector('video');
    if (video != 'undefined') {

        //Vars
        let playpause = document.querySelector('.playpause');
        let stop = document.querySelector('.stop');
        let rwd = document.querySelector('.rwd');
        let fwd = document.querySelector('.fwd');
        let time = document.querySelector('.time');
        let timeInter;

        //Tab key down event
        document.addEventListener('keyup', function (e) {
            if (e.keyCode == 9) {
                selectControls(e.target.classList[0]);
            }
        });

        //Events
        playpause.addEventListener('click', function () {
            if (video.paused) {
                videoStart();
            }
            else {
                videoPause();
            }
        });

        stop.addEventListener('click', function () {
            videoReset();
        });

        rwd.addEventListener('click', function () {
            if (video.currentTime >= 0 || video.paused) {
                video.currentTime -= 5;
                formatTime();
            }
        });

        fwd.addEventListener('click', function () {
            if (video.currentTime <= video.duration || video.paused) {
                video.currentTime += 5;
                formatTime();
            }
        });

        //Functions
        function videoStart() {
            playpause.textContent = 'Pause';
            video.play();
            timeInter = setInterval(function () {
                formatTime();
            })
        }

        function videoPause() {
            playpause.textContent = 'Play';
            video.pause();
            clearInterval(timeInter);
            formatTime();
        }

        function videoReset() {
            video.currentTime = 0;
            video.pause();
            playpause.textContent = 'Play';
            time.textContent = '00:00';
        }

        function formatTime() {
            let timer = Math.round(video.currentTime);
            let minutes = parseInt(timer / 60, 10);
            let seconds = parseInt(timer % 60, 10);

            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            time.textContent = minutes + ":" + seconds;
        }

        function selectControls(targetClass) {
            let buttons = document.querySelectorAll('.controls button');
            let buttonsClass = [];
            for (let i = 0; i < buttons.length; i++) {
                buttonsClass.push(buttons[i].classList[0]);
            }
            for (let i = 0; i < buttonsClass.length; i++) {
                if (targetClass == buttonsClass[i]) {
                    buttons[i].style.border = '3px dashed red';

                }
                else {
                    buttons[i].style.border = '1px solid black';
                }
            }
        }
    }

})();