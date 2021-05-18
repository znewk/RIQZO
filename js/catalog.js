let users = JSON.parse(localStorage.getItem('users'))
let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

class Item {
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
        this.totalPrice = newPrice;
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

let itemsArray = [
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
function addToCart(itemName) {
    if (localStorage.getItem('loggedUser') === null) {
        alert('Вы не авторизованы!')
        location.href = 'autorization.html'
    } else {
        let isNotFound = true;
        for (i = 0; i < loggedUser['userCart'].length; i++) {
            if (loggedUser['userCart'][i]['name'] === itemName) {
                isNotFound = false;
            }
        }
        if (isNotFound) {
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
                        itemsArray[i].image)
                }
            }

            loggedUser['userCart'].push(currentItem)
            saveNewUserSettingInData()
        } else{
            alert('Товар уже добавлен в корзину! Удалить его можно перейдя в нее.')
        }
    }
}

for (i = 0; i < itemsArray.length; i++) {
    $('#productsBody').append(`
            <div class="item">
            <div class="itemImageBody">
                <img src="./img/${itemsArray[i]['image']}" alt="" class="itemImage">
            </div>
            <div class="itemContent">
                <div>
                    <span class="itemName">${itemsArray[i]['name']}</span> <span class="itemCategory">${itemsArray[i]['category']}</span>
                    <div>
                        <span class="itemPrice">${itemsArray[i]['price']}.00kzt</span> <span class="itemPriceOld">${itemsArray[i]['price'] + 50}.00kzt</span>
                    </div>
                </div>
                <div>
                    <button class="addToCartBtn" onclick='addToCart("${itemsArray[i]['name']}")'>Добавить в козину</button>
                    <button class="addToCartBtn" onclick='openModal("${itemsArray[i]['name']}")'>Описание</button>
                </div>
            </div>
        </div>
        `)
}

function showItems() {
    $('#productsBody').empty()
    let categoryItems = localStorage.getItem('category');

    if (categoryItems === 'Все') {
        for (i = 0; i < itemsArray.length; i++) {
            $('#productsBody').append(`
            <div class="item">
            <div class="itemImageBody">
                <img src="./img/${itemsArray[i]['image']}" alt="" class="itemImage">
            </div>
            <div class="itemContent">
                <div>
                    <span class="itemName">${itemsArray[i]['name']}</span> <span class="itemCategory">${itemsArray[i]['category']}</span>
                    <div>
                        <span class="itemPrice">${itemsArray[i]['price']}.00kzt</span> <span class="itemPriceOld">${itemsArray[i]['price'] + 50}.00kzt</span>
                    </div>
                </div>
                <div>
                    <button class="addToCartBtn" onclick='addToCart("${itemsArray[i]['name']}")'>Добавить в козину</button>
                    <button class="addToCartBtn" onclick='openModal("${itemsArray[i]['name']}")'>Описание</button>
                </div>
            </div>
        </div>
        `)
        }
    } else {
        for (i = 0; i < itemsArray.length; i++) {
            if (localStorage.getItem('category') === itemsArray[i]['category']) {
                $('#productsBody').append(`
            <div class="item">
            <div class="itemImageBody">
                <img src="./img/${itemsArray[i]['image']}" alt="" class="itemImage">
            </div>
            <div class="itemContent">
                <div>
                    <span class="itemName">${itemsArray[i]['name']}</span> <span class="itemCategory">${itemsArray[i]['category']}</span>
                    <div>
                        <span class="itemPrice">${itemsArray[i]['price']}.00kzt</span> <span class="itemPriceOld">${itemsArray[i]['price'] + 50}.00kzt</span>
                    </div>
                </div>
                <div>
                    <button class="addToCartBtn" onclick='addToCart("${itemsArray[i]['name']}")'>Добавить в козину</button>
                    <button class="addToCartBtn" onclick='openModal("${itemsArray[i]['name']}")'>Описание</button>
                </div>
            </div>
        </div>
        `)
            }
        }
    }
}
showItems()
let modal = $('#modalBody');
modal.hide()

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
                itemsArray[i].image)
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
                <button class="modalAddToCart" onclick='addToCart("${currentItem['name']}")'>В корзину</button>
            </div>
        </div>
    </div>
    `)
    modal.fadeIn('fast')
}

function filter() {
    let categorySelet = document.getElementById('categorySelet')
    $('#productsBody').empty()

    if (categorySelet.value === 'Все') {
        for (i = 0; i < itemsArray.length; i++) {
            $('#productsBody').append(`
            <div class="item">
            <div class="itemImageBody">
                <img src="./img/${itemsArray[i]['image']}" alt="" class="itemImage">
            </div>
            <div class="itemContent">
                <div>
                    <span class="itemName">${itemsArray[i]['name']}</span> <span class="itemCategory">${itemsArray[i]['category']}</span>
                    <div>
                        <span class="itemPrice">${itemsArray[i]['price']}.00kzt</span> <span class="itemPriceOld">${itemsArray[i]['price'] + 50}.00kzt</span>
                    </div>
                </div>
                <div>
                    <button class="addToCartBtn" onclick='addToCart("${itemsArray[i]['name']}")'>Добавить в козину</button>
                    <button class="addToCartBtn" onclick='openModal("${itemsArray[i]['name']}")'>Описание</button>
                </div>
            </div>
        </div>
            `)
        }
    } else {
        for (i = 0; i < itemsArray.length; i++) {
            if (itemsArray[i].category === categorySelet.value) {
                $('#productsBody').append(`
        <div class="item">
        <div class="itemImageBody">
            <img src="./img/${itemsArray[i]['image']}" alt="" class="itemImage">
        </div>
        <div class="itemContent">
            <div>
                <span class="itemName">${itemsArray[i]['name']}</span> <span class="itemCategory">${itemsArray[i]['category']}</span>
                <div>
                    <span class="itemPrice">${itemsArray[i]['price']}.00kzt</span> <span class="itemPriceOld">${itemsArray[i]['price'] + 50}.00kzt</span>
                </div>
            </div>
            <div>
                <button class="addToCartBtn" onclick='addToCart("${itemsArray[i]['name']}")'>Добавить в козину</button>
                <button class="addToCartBtn" onclick='openModal("${itemsArray[i]['name']}")'>Описание</button>
            </div>
        </div>
    </div>
        `)
            }
        }
    }
}