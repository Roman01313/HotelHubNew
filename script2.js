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


let sctreach = document.querySelector("#size")
let del_btn = document.querySelector(".delete_btn")
let result_card = document.querySelector(".result_card")
let goto_btn = document.querySelector(".goto_btn")
let search = document.querySelector("#hotel_srch")
let container = document.querySelector(".container")
let btn = document.querySelector('.btn_sumbit')
//Создание внутренностей карточек Отеля через Js 

let hemer = new Hotel ("src/IMG_8244.JPG", "Hemer", 9, "Hemer - the best hotel in Canada", 90)
let tyfoul = new Hotel("src/IMG_8247.JPG", "Tyfoul", 5, "Tyfoul - not bad place to rest your time , rooms are so comfortable", 65)
let gromur = new Hotel("src/IMG_8254.JPG", "Gromur", 10, "Gromur - is very comfortable place in New York, this hotel is very exited for mane people", 85)
let boston = new Hotel("src/IMG_8249.JPG", "Boston", 8, "Boston - is modern Hotel in nearly D.C Washington, with many interesting interier disignes", 110)
let astoriya = new Hotel("src/IMG_8242.JPG", "Astoriya", 10, "Astoriya - modern Hotel...etc", 150)
let hotel_dict = [hemer, tyfoul, gromur, boston, astoriya]


for (let i = 0; i < hotel_dict.length; i += 1){
    container.innerHTML += hotel_dict[i].toHtml()//Добавление карточек отелей в контейнер на экране
    
}

function calc(a , days){
    let result = a.price * days
    return result
}
for (let i = 0; i < hotel_dict.length; i += 1){
    calc(hotel_dict[i].price, sctreach.value)
    console.log(result)
    console.log(sctreach.value)
}


function search_func(){
    if (search.value == "rating"){ 
        container.innerHTML = ' '
        for(let i = 0; i < hotel_dict.length; i += 1){
            hotel_dict.sort((a, b) => b.rait - a.rait)
            container.innerHTML += hotel_dict[i].toHtml()//Сортировка по рейтингу
        }
    }
    if (search.value == "price(max-min)"){ 
        container.innerHTML = ' '
        for(let i = 0; i < hotel_dict.length; i += 1){
            hotel_dict.sort((a, b) => b.price - a.price)
            container.innerHTML += hotel_dict[i].toHtml()//сортировка по цене
        }
    }
    if (search.value == "Name(A-Z)"){ 
        container.innerHTML = ' '
        for(let i = 0; i < hotel_dict.length; i += 1){
            hotel_dict.sort(function(a,b){
                if (a.name < b.name) return -1
            })
            container.innerHTML += hotel_dict[i].toHtml()//сортировка по алфавиту
        }
    }
    else{
        result_card.style.display = "flex"
    }
}
btn.addEventListener('click', search_func)

del_btn.addEventListener('click', function(){
    search.value = ''
})
goto_btn.addEventListener("click", function(){
    result_card.style.display = "none"
})
