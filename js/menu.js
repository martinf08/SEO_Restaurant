(function () {
    let submit = document.querySelector('input[type="submit"]');

    if (submit != 'undefined') {
        submit.style.opacity = '0';
    }

    let btn = document.getElementById('btn');
    btn.addEventListener('click', function () {
        let date = document.getElementById('date-reservation');
        let navbar = document.getElementById('navbar');
        console.log(submit.style.opacity);
        if (submit.style.display == 0) {
            submit.style.opacity = 1;
        }
        else if (submit.style.display != 0) {
            submit.style.opacity = 0;
        }
        if (navbar.classList[0] != 'tiroir') {
            document.addEventListener('keydown', function (e) {
                if (e.keyCode == 13) {
                    e.preventDefault();
                    let formu = document.getElementById('formu');
                    if (formu != 'undefined') {
                        formu.submit();
                        navbar.classList.remove('tiroir');
                    }
                }
            });
            if (date != null) {
                date.focus();
            }
        }
    });
})();