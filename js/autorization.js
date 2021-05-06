let changeToReg = document.getElementsByClassName('changeButton')[0]
let changeToLog = document.getElementsByClassName('changeButton')[1]
let username = document.getElementById("usernameInput")
let login = document.getElementById("loginInput")
let password = document.getElementById("passwordInput")
let passwordRepeat = document.getElementById("repeatInput")
let users = JSON.parse(localStorage.getItem("users"))

changeToReg.addEventListener('click', function() {
    document.title = 'RIQZO Registration'
    changeToLog.classList.remove('active')
    changeToReg.classList.add('active')
    $('#content').empty()
    $('#content').append(`
    <div class="inputBody">
                    <img src="./img/user.png" alt="" class="inputIcon">
                    <input type="text" class="input" placeholder="Введите ваше имя" id="usernameInput">
                </div>

                <div class="inputBody">
                    <img src="./img/user.png" alt="" class="inputIcon">
                    <input type="text" class="input" placeholder="Придумайте логин" id="loginInput">
                </div>
                <div class="passInputs">
                    <div class="inputBody">
                        <img src="./img/password.png" alt="" class="inputIcon">
                        <input type="password" class="input passInput" placeholder="Придумайте пароль" id="passwordInput">
                    </div>
                    <div class="inputBody">
                        <img src="./img/password.png" alt="" class="inputIcon">
                        <input type="password" class="input passInput" placeholder="Повторите пароль" id="repeatInput">
                    </div>
                </div>
                <div class="flex">
                    <button class="orangeButton" onclick="register()">Зарегистрироваться</button>
                </div>
    `)
})
changeToLog.addEventListener('click', function() {
    document.title = 'RIQZO Log In'
    changeToReg.classList.remove('active')
    changeToLog.classList.add('active')
    $('#content').empty()
    $('#content').append(`
    <div class="inputBody">
                    <img src="./img/user.png" alt="" class="inputIcon">
                    <input type="text" class="input" placeholder="Введите логин" id="loginInput">
                </div>

                <div class="inputBody">
                    <img src="./img/password.png" alt="" class="inputIcon">
                    <input type="password" class="input" placeholder="Введите пароль" id="passwordInput">
                </div>
                <div class="flex">
                    <button class="orangeButton" onclick="loginBtn()">Войти</button>
                </div>
    `)
})

let register = () => {
    if (username.value.length < 6) {
        username.style.border = "2px solid red"
        alert('Слишком короткое имя!')
    } else if (login.value.length < 6) {
        login.style.border = "2px solid red"
        alert('Логин должен состоять как минимум из 6 знаков')
    } else if (password.value.length < 8 && passwordRepeat.value.length < 8) {
        password.style.border = "2px solid red"
        passwordRepeat.style.border = "2px solid red"
        alert('Пароль должен состоять как минимум из 8 знаков')
    } else if (password.value !== passwordRepeat.value) {
        password.style.border = "2px solid red"
        passwordRepeat.style.border = "2px solid red"
        alert('Пароли не совпадают')
    } else {
        let random = Math.floor(Math.random() * 1000) + 1;
        let user = {
            userId: random,
            userName: username.value,
            userLogin: login.value,
            userPassword: password.value,
            userWallet: 0,
            userCart: [],
            userAdress: '',
            userPhone: 0,
            userGender: 'Мужской',
            userPurchases: []
        }
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        alert('Вы успешно зарегистрировались!')
        document.title = 'RIQZO Log In'
        changeToReg.classList.remove('active')
        changeToLog.classList.add('active')
        $('#content').empty()
        $('#content').append(`
        <div class="inputBody">
        <img src="./img/user.png" alt="" class="inputIcon">
        <input type="text" class="input" placeholder="Введите логин" id="loginInput">
    </div>

    <div class="inputBody">
        <img src="./img/password.png" alt="" class="inputIcon">
        <input type="password" class="input" placeholder="Введите пароль" id="passwordInput">
    </div>
    <div class="flex">
        <button class="orangeButton" onclick="loginBtn()">Войти</button>
    </div>
    `)
    }
}




console.log(users)

let loginBtn = () => {
    let loginLog = document.getElementById("loginInput")
    let passwordLog = document.getElementById("passwordInput")
    for (i = 0; i < users.length; i++) {
        if (loginLog.value === users[i].userLogin && passwordLog.value === users[i].userPassword) {
            let loggedUser = {
                userId: users[i].userId,
                userName: users[i].userName,
                userLogin: users[i].userLogin,
                userPassword: users[i].userPassword,
                userWallet: users[i].userWallet,
                userCart: users[i].userCart,
                userAdress: users[i].userAdress,
                userPhone: users[i].userPhone,
                userGender: users[i].userGender,
                userPurchases: users[i].userPurchases
            }
            localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
            location.href = 'index.html'
        } else {
            loginLog.style.border = '2px solid red'
            passwordLog.style.border = '2px solid red'
            alert('Неверные данные!')
        }

    }
}