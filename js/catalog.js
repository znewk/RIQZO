let itemsArray = []

class Item{
    #name;
    #category;
    #energy;
    #proteine;
    #fat;
    #carbohydrate;
    #price;
    #image

    constructor(newName, 
        newCategory, 
        newEnergy, 
        newProtiene, 
        newFat, 
        newCarbohydrate, 
        newPrice,
        newImage){
        this.#name = newName;
        this.#category = newCategory;
        this.#energy = newEnergy;
        this.#fat = newFat;
        this.#carbohydrate = newCarbohydrate;
        this.#price = newPrice
        this.#image = newImage
    }

    get name(){
        return this.#name;
    }
    set name(e){
        this.#name = e;
    }
    get category(){
        return this.#category;
    }
    set category(e){
        this.#category = e;
    }
    get energy(){
        return this.#energy;
    }
    set energy(e){
        this.#energy = e;
    }
    get proteine(){
        return this.#proteine;
    }
    set proteine(e){
        this.#proteine = e;
    }
    get fat(){
        return this.#fat;
    }
    set fat(e){
        this.#fat = e;
    }
    get carbohydrate(){
        return this.#carbohydrate;
    }
    set carbohydrate(e){
        this.#carbohydrate = e;
    }
    get price(){
        return this.#price;
    }
    set price(e){
        this.#price = e;
    }
    get image(){
        return this.#image;
    }
    set image(e){
        this.#image = e;
    }
}

itemsArray = [
    new Item('Авакадо', 'Фрукты', 140, 4, 2, 16, 300, 'avacado.png'),
    new Item('Апельсин', 'Фрукты', 200, 4, 2, 16, 450, 'orange.png'),
    new Item('Яйцо куриное', 'Мясо', 100, 4, 2, 16, 290, 'dairy.jpg')
]

for(i=0;i<itemsArray.length; i++){
    $('#productsBody').append(`
    <div class="item">
        <div class="itemImageBody">
            <img src="./img/${itemsArray[i]['image']}" alt="" class="itemImage">
        </div>
        <div class="itemContent">
            <span class="itemName">${itemsArray[i]['name']}</span> <span class="itemCategory">${itemsArray[i]['category']}</span>
            <div>
                <span class="itemPrice">${itemsArray[i]['price']}.00kzt</span> <span class="itemPriceOld">${itemsArray[i]['price'] + 50}.00kzt</span>
            </div>
            <button class="addToCartBtn">Добавить в козину</button>
            <button class="addToCartBtn">Подробнее</button>
        </div>
    </div>
    `)
}