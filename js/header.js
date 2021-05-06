var header = $('.header'),
    scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if (scrolled > 100 && scrolled > scrollPrev) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});
let profile = document.getElementById('profile')
if (localStorage.getItem('loggedUser') === null) {
    profile.innerText = 'Войти'
    $('#userWallet').text(`00.00kzt`)
    profile.addEventListener('click', function() {
        location.href = 'autorization.html'
    })
} else {
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    console.log(loggedUser)
    profile.innerText = 'Личный кабинет'
    $('#userWallet').text(`${loggedUser.userWallet}.00kzt`)
    profile.addEventListener('click', function() {
        location.href = 'cabinet.html'
    })
}