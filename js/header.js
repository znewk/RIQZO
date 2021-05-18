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

function categoryAll(){
    localStorage.setItem('category', 'Все')
    location.href = 'catalog.html'
}
function categoryFruits(){
    localStorage.setItem('category', 'Фрукты')
    location.href = 'catalog.html'
}
function categoryVeggies(){
    localStorage.setItem('category', 'Овощи')
    location.href = 'catalog.html'
}
function categoryMeat(){
    localStorage.setItem('category', 'Мясо')
    location.href = 'catalog.html'
}
function categoryMilk(){
    localStorage.setItem('category', 'Молочные продукты')
    location.href = 'catalog.html'
}
function categoryBerry(){
    localStorage.setItem('category', 'Ягоды')
    location.href = 'catalog.html'
}

function openCart(){
    if (localStorage.getItem('loggedUser') === null) {
        alert('Вы не авторизованы')
        location.href = 'autorization.html'
    } else {
        location.href = 'cart.html'
    }
}

function myPurchases(){
    if (localStorage.getItem('loggedUser') === null) {
        alert('Вы не авторизованы')
        location.href = 'autorization.html'
    } else {
        location.href = 'mypurchases.html'
    }
}