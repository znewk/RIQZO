if (localStorage.getItem('loggedUser') === null) {
    location.href = 'autorization.html'
} else {
    let users = JSON.parse(localStorage.getItem('users'))
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    $('#confirmBlock').hide()

    let code = 0;


    let userNameInput = document.getElementById('userName')
    let userAddressInput = document.getElementById('userAddress')
    let userPhoneInput = document.getElementById('userPhone')
    let userGenderInput = document.getElementById('userGender')
    let userWalletInput = document.getElementById('userWalletSum')
    let userPurchasesCount = document.getElementById('purchasesCount')
    let userCart = document.getElementById('userCart')
    let userCartSum = document.getElementById('sbPrice')

    userNameInput.value = loggedUser.userName
    userGenderInput.value = loggedUser.userGender
    userWalletInput.value = `${loggedUser.userWallet}.00kzt`
    userPurchasesCount.innerText = loggedUser.userPurchases.length
    userCart.innerText = loggedUser.userCart.length
    let cartSum = 0;
    for(i=0; i < loggedUser['userCart'].length; i++){
        cartSum += loggedUser['userCart'][i]['price'] * loggedUser['userCart'][i]['count']
    }
    userCartSum.innerText = `${cartSum}.00kzt`

    if (loggedUser.userAdress === '') {
        userAddressInput.value = 'Не указан'
    } else {
        userAddressInput.value = loggedUser.userAdress
    }
    if (loggedUser.userPhone === 0) {
        userPhoneInput.value = 'Не указан'
    } else {
        userPhoneInput.value = loggedUser.userPhone
    }


    let changeUserNameBtn = document.getElementsByClassName('inputButton')[0]
    let changeUserAddressBtn = document.getElementsByClassName('inputButton')[1]
    let changeUserPhoneBtn = document.getElementsByClassName('inputButton')[2]
    let changeUserGenderBtn = document.getElementsByClassName('inputButton')[3]

    let unbEdit = true;
    let uabEdit = true;
    let upbEdit = true;
    let ugbEdit = true;
    let cbOpen = false;

    function saveNewUserSettingInData() {
        for (i = 0; i < users.length; i++) {
            if (users[i].userId === loggedUser.userId) {
                users.splice(i, 1)
                users.push(loggedUser)
                localStorage.setItem('users', JSON.stringify(users))
            }
        }
    }

    changeUserNameBtn.addEventListener('click', function() {
        if (unbEdit === true) {
            this.src = './img/save.png'
            userNameInput.disabled = false;
            unbEdit = false
        } else {
            if (userNameInput.value.length < 6) {
                openAlert('Слишком короткое имя!')
            } else {
                loggedUser.userName = userNameInput.value;
                localStorage.removeItem('loggedUser')
                localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
                saveNewUserSettingInData()
                userNameInput.disabled = true;
                unbEdit = true;
                this.src = './img/edit.png'
            }
        }
    })
    changeUserAddressBtn.addEventListener('click', function() {
        if (uabEdit === true) {
            this.src = './img/save.png'
            userAddressInput.disabled = false;
            uabEdit = false;
        } else {
            if (userAddressInput.value.length < 6) {
                openAlert('Слишком короткий адрес!')
            } else if (userAddressInput.value === 'Не указан') {
                openAlert('Вы ничего не указали!')
            } else {
                loggedUser.userAdress = userAddressInput.value;
                localStorage.removeItem('loggedUser')
                localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
                saveNewUserSettingInData()
                userAddressInput.disabled = true;
                uabEdit = true;
                this.src = './img/edit.png'
            }
        }
    })
    changeUserPhoneBtn.addEventListener('click', function() {
        if (upbEdit === true) {
            this.src = './img/save.png'
            userPhoneInput.disabled = false;
            upbEdit = false
        } else {
            if (userPhoneInput.value.length < 10) {
                openAlert('Слишком короткий номер!')
            } else if (userAddressInput.value === 'Не указан') {
                openAlert('Вы ничего не указали!')
            } else {
                loggedUser.userPhone = userPhoneInput.value;
                localStorage.removeItem('loggedUser')
                localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
                saveNewUserSettingInData()
                userAddressInput.disabled = true;
                upbEdit = true;
                this.src = './img/edit.png'
            }
        }
    })
    changeUserGenderBtn.addEventListener('click', function() {
        if (ugbEdit === true) {
            this.src = './img/save.png'
            userGenderInput.disabled = false;
            ugbEdit = false
        } else {
            loggedUser.userGender = userGenderInput.value;
            localStorage.removeItem('loggedUser')
            localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
            saveNewUserSettingInData()
            userGenderInput.disabled = true;
            ugbEdit = true;
            this.src = './img/edit.png'
        }
    })

    function topUpBalance() {
        if (cbOpen === false) {
            $('#topUpBalanceBtn').text('Скрыть')
            let codeF = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
            code = codeF;
            $('#code').text(code)
            $('#confirmBlock').slideDown()
            cbOpen = true;
        } else {
            $('#topUpBalanceBtn').text('Пополнить')
            $('#confirmBlock').slideUp()
            cbOpen = false;
        }
    }

    function confirmTop() {
        let codeInput = document.getElementById('codeInput')
        if (document.getElementById('moneySum').value.length === 0) {
            openAlert('Введите сумму!')
        } else if (codeInput.value.length != 4) {
            openAlert('Неккоректно введены данные!')
            codeInput.style.border = '1px solid red'
        } else if (codeInput.value != code) {
            openAlert('Неверный код!')
            codeInput.style.border = '1px solid red'
        } else {
            loggedUser.userWallet = Number(loggedUser.userWallet) + Number(document.getElementById('moneySum').value);
            localStorage.removeItem('loggedUser')
            localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
            saveNewUserSettingInData()
            alert('Баланс успешно пополнен!')
            location.reload()
        }
    }

    function returnWalletValue() {
        return loggedUser.userWallet
    }
}