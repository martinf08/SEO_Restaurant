(function () {

    let btn = document.getElementById('btn');
    btn.addEventListener('click', function () {
        let date = document.getElementById('date-reservation');
        let navbar = document.getElementById('navbar');
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