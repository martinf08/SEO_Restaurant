(function () {

    let btn = document.getElementById('btn');
    btn.addEventListener('click', function () {
        let date = document.getElementById('date-reservation');
        console.log(date);
        if (date != null) {
            date.focus();
        }
    });

})();