$('#modalBody').hide()
$('#nullItems').hide()
if(localStorage.getItem('loggedUser') === null){
    location.href = 'autorization.html'
}
$('#paymentMessage').hide()
let users = JSON.parse(localStorage.getItem('users'))
let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
let userCart = loggedUser['userCart']
function saveNewUserSettingInData() {
    localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
    for (i = 0; i < users.length; i++) {
        if (users[i].userId === loggedUser.userId) {
            users.splice(i, 1)
            users.push(loggedUser)
            localStorage.setItem('users', JSON.stringify(users))
        }
    }
}
class ItemPur {
    name;
    category;
    unitrev;
    energy;
    proteine;
    fat;
    carbohydrate;
    price;
    totalPrice;
    image;
    count;

    constructor(newName,
        newCategory,
        newUnitRev,
        newEnergy,
        newProtiene,
        newFat,
        newCarbohydrate,
        newPrice,
        newImage,
        newTotalPrice,
        newCout
        ) {
        this.name = newName;
        this.category = newCategory;
        this.unitrev = newUnitRev
        this.energy = newEnergy;
        this.proteine = newProtiene;
        this.fat = newFat;
        this.carbohydrate = newCarbohydrate;
        this.price = newPrice
        this.image = newImage
        this.totalPrice = newTotalPrice;
        this.count = newCout;
    }

    get name() {
        return this.name;
    }
    set name(e) {
        this.name = e;
    }
    get category() {
        return this.category;
    }
    set category(e) {
        this.category = e;
    }
    get unitrev() {
        return this.unitrev;
    }
    set unitrev(e) {
        this.unitrev = e;
    }
    get energy() {
        return this.energy;
    }
    set energy(e) {
        this.energy = e;
    }
    get proteine() {
        return this.proteine;
    }
    set proteine(e) {
        this.proteine = e;
    }
    get fat() {
        return this.fat;
    }
    set fat(e) {
        this.fat = e;
    }
    get carbohydrate() {
        return this.carbohydrate;
    }
    set carbohydrate(e) {
        this.carbohydrate = e;
    }
    get price() {
        return this.price;
    }
    set price(e) {
        this.price = e;
    }
    get image() {
        return this.image;
    }
    set image(e) {
        this.image = e;
    }
}
class Item {
    name;
    category;
    unitrev;
    energy;
    proteine;
    fat;
    carbohydrate;
    price;
    image;
    count = 1;

    constructor(newName,
        newCategory,
        newUnitRev,
        newEnergy,
        newProtiene,
        newFat,
        newCarbohydrate,
        newPrice,
        newImage,) {
        this.name = newName;
        this.category = newCategory;
        this.unitrev = newUnitRev
        this.energy = newEnergy;
        this.proteine = newProtiene;
        this.fat = newFat;
        this.carbohydrate = newCarbohydrate;
        this.price = newPrice
        this.image = newImage
    }

    get name() {
        return this.name;
    }
    set name(e) {
        this.name = e;
    }
    get category() {
        return this.category;
    }
    set category(e) {
        this.category = e;
    }
    get unitrev() {
        return this.unitrev;
    }
    set unitrev(e) {
        this.unitrev = e;
    }
    get energy() {
        return this.energy;
    }
    set energy(e) {
        this.energy = e;
    }
    get proteine() {
        return this.proteine;
    }
    set proteine(e) {
        this.proteine = e;
    }
    get fat() {
        return this.fat;
    }
    set fat(e) {
        this.fat = e;
    }
    get carbohydrate() {
        return this.carbohydrate;
    }
    set carbohydrate(e) {
        this.carbohydrate = e;
    }
    get price() {
        return this.price;
    }
    set price(e) {
        this.price = e;
    }
    get image() {
        return this.image;
    }
    set image(e) {
        this.image = e;
    }
}
itemsArray = [
    new Item('Авакадо', 'Фрукты', 'кг', 140, 4, 2, 16, 300, 'avacado.png'),
    new Item('Апельсин', 'Фрукты', 'кг', 200, 4, 2, 16, 450, 'orange.png'),
    new Item('Яйцо куриное', 'Мясо', 'шт', 100, 4, 2, 16, 290, 'dairy.jpg'),
    new Item('Говядина', 'Мясо', 'кг', 100, 4, 2, 16, 290, 'beef.jpg'),
    new Item('Баранина', 'Мясо', 'кг', 100, 4, 2, 16, 290, 'mutton.jpg'),
    new Item('Ход-дог', 'Мясо', 'кг', 100, 4, 2, 16, 290, 'hotdog.png'),
    new Item('Сливочное масло', 'Молочные продукты', 'кг', 130, 4, 2, 16, 290, 'butter.jpg'),
    new Item('Молоко RIZQO', 'Молочные продукты', 'л', 130, 4, 2, 16, 210, 'milk.jpg'),
    new Item('Помидор', 'Овощи', 'кг', 130, 4, 2, 16, 290, 'tomat.jpg'),
    new Item('Огурец', 'Овощи', 'кг', 130, 4, 2, 16, 390, 'cucumber.jpg'),
    new Item('Арбуз', 'Ягоды', 'кг', 130, 4, 2, 16, 390, 'watermelon.jpg'),
    new Item('Черешня', 'Ягоды', 'кг', 130, 4, 2, 16, 390, 'sweetcherry.jpg'),
]
let cartSum = 0;
    for(i=0; i < loggedUser['userCart'].length; i++){
        cartSum += loggedUser['userCart'][i]['price'] * loggedUser['userCart'][i]['count']
    }

if(userCart.length === 0){
    $('#nullItems').show()
    pricePayment.innerHTML = 'К оплате: <span style="color: #25578a">0.00kzt</span>'
    itemsCountPayment.innerHTML = 'Количество товаров: <span style="color: #25578a">0шт</span>'
}else{
    for(let i = 0; i<userCart.length; i++){
        pricePayment.innerHTML = `К оплате: <span style="color: #25578a">${cartSum}.00kzt</span>`
        itemsCountPayment.innerHTML = `Количество товаров: <span style="color: #25578a">${userCart.length}шт</span>`
        $('#items').append(`
        <div class="item" style="height: auto; min-height: auto;">
            <div class="itemImageBody">
                <img src="./img/${userCart[i]['image']}" alt="" class="itemImage">
            </div>
            <div class="itemContent" style="height: auto; min-height: auto;">
                <div>
                    <span class="itemName">${userCart[i]['name']}</span> <span class="itemCategory">Фрукты</span>
                    <div>
                        <span class="itemPrice">${userCart[i]['totalPrice']}.00kzt</span> <span class="itemPriceOld">${userCart[i]['price']+40}.00kzt</span>
                    </div>
                </div>
                <div class="itemCount">
                    <div class="itemCountD itemCountM" onclick='downItemCount("${userCart[i]['name']}")'>-</div>
                    <div class="itemCountValue">${userCart[i]['count']}</div>
                    <div class="itemCountD itemCountP" onclick='upItemCount("${userCart[i]['name']}")'>+</div>
                </div>
                <div style="
                    display: flex;
                ">
                    <button class="addToCartBtn" style="margin: 10px;" onclick='deleteItemFromCart("${userCart[i]['name']}")'>Удалить из корзины</button>
                    <button class="addToCartBtn" style="margin: 10px;" onclick='openModal("${userCart[i]['name']}")'>Описание</button>
                </div>
    
            </div>
        </div>
        `)
    }
}

let modal = $('#modalBody');
function closeModal() {
    modal.fadeOut('fast')
}
function openModal(itemName) {
    console.log('opened')
    let currentItem = null;
    for (i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i]['name'] === itemName) {
            currentItem = new Item(itemsArray[i].name,
                itemsArray[i].category,
                itemsArray[i].unitrev,
                itemsArray[i].energy,
                itemsArray[i].proteine,
                itemsArray[i].fat,
                itemsArray[i].carbohydrate,
                itemsArray[i].price,
                itemsArray[i].image,
                )
        }
    }
    $('#modal').empty()
    $('#modal').append(`
    <div class="modalContent">
        <div class="modalHead">
            <span class="modalHeadTitle">${currentItem.category}</span>
            <span id="exitModal" onclick='closeModal()'>x</span>
        </div>
        <div class="modalImageBody">
            <img src="./img/${currentItem.image}" class="modalImage" alt="">
        </div>
        <div class="modalContentInfo">
            <div class="modalContentInfoHead">
                <span class="modalContentInfoTitle">
                ${currentItem.name}
                </span>
                <span class="modalContentInfoCategory">
                ${currentItem.category}
                </span>
            </div>
            <div class="modalContentInfoFooter">
                <span class="modalPrice">${currentItem.price}.00kzt/кг</span>
                <div class="descLine">
                    <span class="descText">Категория</span>
                    <span class="descText">${currentItem.category}</span>
                </div>
                <div class="descLine">
                    <span class="descText">Энергия (ккал)</span>
                    <span class="descText">${currentItem.energy}</span>
                </div>
                <div class="descLine">
                    <span class="descText">Белок (г)</span>
                    <span class="descText">${currentItem.proteine}</span>
                </div>
                <div class="descLine">
                    <span class="descText">Жиры (г)</span>
                    <span class="descText">${currentItem.fat}</span>
                </div>
                <div class="descLine">
                    <span class="descText">Углеводы (г)</span>
                    <span class="descText">${currentItem.carbohydrate}</span>
                </div>
            </div>
        </div>
    </div>
    `)
    modal.fadeIn('fast')
}

function upItemCount(itemName){
    for(i=0;i<userCart.length;i++){
        if(userCart[i]['name'] === itemName){
            userCart[i]['count']++
            userCart[i]['totalPrice'] += userCart[i]['price']
            saveNewUserSettingInData()
            location.reload()
        }
    }
}
function downItemCount(itemName){
    for(i=0;i<userCart.length;i++){
        if(userCart[i]['name'] === itemName){
            userCart[i]['count']--
            userCart[i]['totalPrice'] -= userCart[i]['price']
            saveNewUserSettingInData()
            location.reload()
        }
    }
}

function deleteItemFromCart(itemName){
    for(i=0;i<userCart.length; i++){
        if(userCart[i]['name'] === itemName){
            userCart.splice(i,1)
            saveNewUserSettingInData()
            location.reload()
        }
        
    }
}

function pay(){
    if(userCart.length === 0){
        openAlert('Ваша корзина пуста')
    }else if(loggedUser['userAdress'] === ''){
        openAlert('Вы не указали адрес доставки! Невозможно оплатить! Заполните данные в личном кабинете!')
    } else if(loggedUser['userPhone'] === 0){
        openAlert('Вы не указали свой телефон! Невозможно оплатить! Заполните данные в личном кабинете!')
    } else if(loggedUser['userWallet'] < cartSum){
        openAlert('Недостаточно средств! Пополните баланс!')
    } else{
        for(i=0;i<userCart.length;i++){
            loggedUser['userPurchases'].push(new ItemPur(userCart[i].name,
                userCart[i].category,
                userCart[i].unitrev,
                userCart[i].energy,
                userCart[i].proteine,
                userCart[i].fat,
                userCart[i].carbohydrate,
                userCart[i].price,
                userCart[i].image,
                userCart[i].totalPrice
                ))
        }
        console.log(loggedUser['userPurchases'])
        loggedUser['userCart'] = []
        loggedUser['userWallet'] = (loggedUser['userWallet'] - cartSum);
        saveNewUserSettingInData()
        alert('Оплата выполнена! Мы сообщим Вам о доставке через СМС!')
    }
}