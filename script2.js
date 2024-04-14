<<<<<<< HEAD
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
    container.innerHTML += hotel_dict[i].toHtml()//Добавление карточек отелей в контейнер на экране
}

function search_func(){
    for(let i = 0; i <= hotel_dict; i += 1){
        if(search.value == hotel_dict[i].name){
            console.log('found it')//Ну вообщем дальше в массиве нужно поменять оюбекты местами,удалить их с экрана в контейнере и после перерисовать их на жкране в новом порядке
            //hotel_dict[0] == search.value
        }
    }
}
=======
// class Hotel {
//     constructor(name, rait) {
//         this.name = name,
//         this.rait = rait
//     }     
//     toHtml(){
//         return`<div class='card-small'>
//                 <img src='/uploads/2022/11/card-bg.png'>
//                 <p class='number'>${this.name}</p>
//                 <div class='cvv'>${this.rait}</div>
//             </div>`

//     }
//  }
 
// let cards = document.querySelector('.cards')
// let hemer= new Hotel("Hemer", "9/10") 
// cards.innerHTML += hemer.toHtml()
     


class Hotel{
    constructor(pict1, name, rait, desc, price ){
        this.pict1 = pict1 
        this.name = name
        this.rait = rait
        this.desc = desc
        this.price = price
    }
    toHtml(){
        return `<div class="hotel_card">
        <h1>${this.name}</h1>
        <img class="Img" src=${this.pict1}>
        <div class="info">
            <p>${this.desc}</p>
            <p>${this.rait}/10</p>            
            <p>${this.price}$/day</p>
            <input type="range" min="1" max="32" id="size" value = "0" step = "1">
        </div>  
    </div>`
    }
}


function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}


let search = document.querySelector("#hotel_srch")
let container = document.querySelector(".container")
let btn = document.querySelector('.btn_sumbit')
//Создание внутренностей карточек Отеля через Js 

let hemer = new Hotel ("src/IMG_8244.JPG", "Hemer", 9, "Hemer - the best hotel in Canada", 90)
let tyfoul = new Hotel("src/IMG_8247.JPG", "Tyfoul", 5, "Tyfoul - not bad place to rest your time , rooms are so comfortable", 65)
let gromur = new Hotel("src/IMG_8254.JPG", "Gromur", 10, "Gromur - is very comfortable place in New York, this hotel is very exited for mane people", 85)
let boston = new Hotel("src/IMG_8249.JPG", "Boston", 8, "Boston - is modern Hotel in nearly D.C Washington, with many interesting interier disignes", 110)
let hotel_dict = [hemer, tyfoul, gromur, boston]


for (let i = 0; i < hotel_dict.length; i += 1){
    container.innerHTML += hotel_dict[i].toHtml()//Добавление карточек отелей в контейнер на экране
    
}


function search_func(){
    if (search.value == "rating"){ 
        container.innerHTML = ' '
        for(let i = 0; i < hotel_dict.length; i += 1){
            hotel_dict.sort((a, b) => b.rait - a.rait)
            container.innerHTML += hotel_dict[i].toHtml()//Добавление карточек отелей в контейнер на экране
        }
    }
    if (search.value == "price(max-min)"){ 
        container.innerHTML = ' '
        for(let i = 0; i < hotel_dict.length; i += 1){
            hotel_dict.sort((a, b) => b.price - a.price)
            container.innerHTML += hotel_dict[i].toHtml()//Добавление карточек отелей в контейнер на экране
        }
    }
    if (search.value == "Name(A-Z)"){ 
        container.innerHTML = ' '
        for(let i = 0; i < hotel_dict.length; i += 1){
            hotel_dict.sort(function(a,b){
                if (a.name < b.name) return -1
            })
            container.innerHTML += hotel_dict[i].toHtml()//Добавление карточек отелей в контейнер на экране
        }
    }
    // else{
    //     alert("None result")
    // }
}
btn.addEventListener('click', search_func)
>>>>>>> da9c58c (Page2 Css style Done + some scripts 2/4)
