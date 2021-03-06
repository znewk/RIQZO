$('#modalBody').hide()
$('#nullItems').hide()
if(localStorage.getItem('loggedUser') === null){
    location.href = 'autorization.html'
}
let users = JSON.parse(localStorage.getItem('users'))
let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
let userCart = loggedUser['userPurchases']
console.log(userCart)
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
    new Item('??????????????', '????????????', '????', 140, 4, 2, 16, 300, 'avacado.png'),
    new Item('????????????????', '????????????', '????', 200, 4, 2, 16, 450, 'orange.png'),
    new Item('???????? ??????????????', '????????', '????', 100, 4, 2, 16, 290, 'dairy.jpg'),
    new Item('????????????????', '????????', '????', 100, 4, 2, 16, 290, 'beef.jpg'),
    new Item('????????????????', '????????', '????', 100, 4, 2, 16, 290, 'mutton.jpg'),
    new Item('??????-??????', '????????', '????', 100, 4, 2, 16, 290, 'hotdog.png'),
    new Item('?????????????????? ??????????', '???????????????? ????????????????', '????', 130, 4, 2, 16, 290, 'butter.jpg'),
    new Item('???????????? RIZQO', '???????????????? ????????????????', '??', 130, 4, 2, 16, 210, 'milk.jpg'),
    new Item('??????????????', '??????????', '????', 130, 4, 2, 16, 290, 'tomat.jpg'),
    new Item('????????????', '??????????', '????', 130, 4, 2, 16, 390, 'cucumber.jpg'),
    new Item('??????????', '??????????', '????', 130, 4, 2, 16, 390, 'watermelon.jpg'),
    new Item('??????????????', '??????????', '????', 130, 4, 2, 16, 390, 'sweetcherry.jpg'),
]

if(userCart.length === 0){
    $('#nullItems').show()
}else{
    for(let i = 0; i<userCart.length; i++){
        $('#items').append(`
        <div class='itemBlockBlock'>
            <span class="date">${userCart[i].date}</span>
            <div id="thisDateItems${i}" class='thisDateItems'>
            
            </div>
        </div>
        `)
        let thisDateItems = $(`#thisDateItems${i}`)
        for(k=0; k<userCart[i].item.length;k++){
            thisDateItems.append(`
                <div class="item" style="height: auto; min-height: auto;">
                <div class="itemImageBody">
                    <img src="./img/${userCart[i].item[k]['image']}" alt="" class="itemImage">
                </div>
                <div class="itemContent" style="height: auto; min-height: auto;">
                    <div>
                        <span class="itemName">${userCart[i].item[k]['name']}</span> <span class="itemCategory">????????????</span>
                        <div>
                            <span class="itemPrice">${userCart[i].item[k]['totalPrice']}.00kzt</span> <span class="itemPriceOld">${userCart[i].item[k]['price']+40}.00kzt</span>
                        </div>
                    </div>
                    <div class="itemCount">
                        <div class="itemCountValue">????????????????????: ${userCart[i].item[k]['count']}${userCart[i].item[k]['unitrev']}</div>
                    </div>
                        <button class="addToCartBtn" style="margin: 10px;" onclick='openModal("${userCart[i].item[k]['name']}")'>????????????????</button>
                    </div>
        
                </div>
            </div>
            `)
        }
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
                <span class="modalPrice">${currentItem.price}.00kzt/????</span>
                <div class="descLine">
                    <span class="descText">??????????????????</span>
                    <span class="descText">${currentItem.category}</span>
                </div>
                <div class="descLine">
                    <span class="descText">?????????????? (????????)</span>
                    <span class="descText">${currentItem.energy}</span>
                </div>
                <div class="descLine">
                    <span class="descText">?????????? (??)</span>
                    <span class="descText">${currentItem.proteine}</span>
                </div>
                <div class="descLine">
                    <span class="descText">???????? (??)</span>
                    <span class="descText">${currentItem.fat}</span>
                </div>
                <div class="descLine">
                    <span class="descText">???????????????? (??)</span>
                    <span class="descText">${currentItem.carbohydrate}</span>
                </div>
            </div>
        </div>
    </div>
    `)
    modal.fadeIn('fast')
}