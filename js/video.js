(function () {
    let video = document.querySelector('video');
    if (video != 'undefined') {
        let playpause = document.querySelector('.playpause');
        let stop = document.querySelector('.stop');
        let rwd = document.querySelector('.rwd');
        let fwd = document.querySelector('.fwd');
        let time = document.querySelector('.time');
        let timeInter;
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

            if (minutes < 10) { minutes = "0" + minutes; }
            if (seconds < 10) { seconds = "0" + seconds; }

            time.textContent = minutes + ":" + seconds;
        }

    }

})();