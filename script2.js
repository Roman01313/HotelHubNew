let container = document.querySelector(".container")
let search = document.querySelector(".search")

class Hotel{
    constructor(pict1, name, rait, desc, price ){
        this.pict1 = pict1 
        this.name = name
        this.rait = rait
        this.desc = desc
        this.price = price
    }
    toHtml(){
        return `<!-- <div class="hotel_card">
        <h1>Hymer</h1>
        <img class="Img" src=${this.pict1}>
        <div class="info">
            <p>${this.desc}</p>
            <p>${this.rait}</p>            
            <p>${this.price}$/week</p>
        </div>  
    </div> -->`
    }
}

//Создание внутренностей карточек Отеля через Js 
let hemer = new Hotel ("src/IMG_8244.JPG", "Hemer","9/10", "Hemer - the best hotel in Canada", 900)
let tyfoul = new Hotel("src/IMG_8247.JPG", "Tyfoul", "5/10", "Tyfoul - not bad place to rest your time , rooms are so comfortable", 650)
let gromur = new Hotel("src/IMG_8254.JPG", "Gromur", "10/10", "Gromur - is very comfortable place in New York, this hotel is very exited for mane people", 850)
let boston = new Hotel("src/IMG_8249.JPG", "Boston", "8/10", "Boston - is modern Hotel in nearly D.C Washington, with many interesting interier disignes", 1100)
let hotel_dict = [hemer, tyfoul, gromur, boston]


for (let i = 0; i < hotel_dict.length; i += 1){
    container.innerHTML += hotem_dict[i].toHtml()//Добавление карточек отелей в контейнер на экране
}

function search_func(){
    for(let i = 0; i <= hotel_dict; i += 1){
        if(search.value == hotel_dict[i].name){
            console.log('found it')//Ну вообщем дальше в массиве нужно поменять оюбекты местами,удалить их с экрана в контейнере и после перерисовать их на жкране в новом порядке
            //hotel_dict[0] == search.value
        }
    }
}