class Hotel{
    constructor(pict1, name, rait, desc, price,key, desc_more ){
        this.pict1 = pict1 
        this.name = name
        this.rait = rait
        this.desc = desc
        this.price = price
        this.key = key
        this.desc_more = desc_more
    }
    toHtml(){
        return `<div class="hotel_card">
        <h1>${this.name}</h1>
        <button class ="more">...</button>
        <img class="Img" src=${this.pict1}>
        <div class="info">
            <p>${this.desc}</p>
            <p>${this.rait}/10</p>            
            <p>${this.price}$/day</p>
            <input title="Days amount" type="range" min="1" max="31" id=${this.key} value = "1" step = "1">
            <p class = "total_amount">Total: </p>
            <button class = "btn_done" id=${this.key}>to count</button>
            <p class = "desc"></p>
        </div>  
    </div>`
    }

    totalToCart(){
        
    }
}



function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}
let about_us_btn = document.querySelector('.btn')
let search = document.querySelector("#hotel_srch")
let container = document.querySelector(".container")
let btn = document.querySelector('.btn_sumbit')
// let b = document.querySelector('.none_menu')
//Создание внутренностей карточек Отеля через Js 


let hemer = new Hotel ("src/IMG_8244.JPG", "Hemer", 9, "Hemer - the best hotel in Canada...", 90, '#11111', 'desc')
let tyfoul = new Hotel("src/IMG_8247.JPG", "Tyfoul", 5, "Tyfoul - not bad place to rest your...", 65, '#11112', 'desc')
let gromur = new Hotel("src/IMG_8254.JPG", "Gromur", 10, "Gromur - is very comfortable place...", 85, '#11113', 'desc')
let boston = new Hotel("src/IMG_8249.JPG", "Boston", 8, "Boston - is modern Hotel in nearly...", 110, '#11114', 'desc')
let astoriya = new Hotel("src/IMG_8242.JPG", "Astoriya", 10, "Astoriya - modern Hotel...etc", 150, '#11115', 'desc')
let grand_itail = new Hotel("src/IMG_8245.JPG", "Grand Itail", 5, "Grand Itail - modern Hotel...etc", 60, '#11116', 'desc')
let brosso = new Hotel("src/IMG_8251.JPG", "Brosso", 9, 'Brosso - modern Hotel...etc', 150, '#11117', 'desc')
let saveli = new Hotel("src/IMG_8253.JPG", "Saveli", 2, "Saveli - modern Hotel...etc", 130, '#11118', 'desc')
let crimersone = new Hotel("src/IMG_8250.JPG", "Crimerson", 10, "Crimerson - modern Hotel...etc", 90, '#11119', 'desc')
let hotel_dict = [hemer, tyfoul, gromur, boston, astoriya, grand_itail, brosso, saveli, crimersone ]


for (let i = 0; i < hotel_dict.length; i += 1){
    container.innerHTML += hotel_dict[i].toHtml()//Добавление карточек отелей в контейнер на экране

}

function search_func(){
    if (search.value == "rating"){ 
        container.innerHTML = ''
        for(let i = 0; i < hotel_dict.length; i += 1){
            hotel_dict = hotel_dict.sort((a, b) => b.rait - a.rait)
            container.innerHTML += hotel_dict[i].toHtml()//Сортировка по рейтингу
        }
    }
    if (search.value == "price(max-min)"){ 
        container.innerHTML = ''
        for(let i = 0; i < hotel_dict.length; i += 1){
            hotel_dict = hotel_dict.sort((a, b) => b.price - a.price)
            container.innerHTML += hotel_dict[i].toHtml()//сортировка по цене
        }
    }
    if (search.value == "Name(A-Z)"){ 
        container.innerHTML = ''
        for(let i = 0; i < hotel_dict.length; i += 1){
            hotel_dict = hotel_dict.sort(function(a,b){
                if (a.name < b.name) return -1
            })
            container.innerHTML += hotel_dict[i].toHtml()//сортировка по алфавиту
        }
    }


    for (let i = 0; i < hotel_dict.length; i += 1){
        if (search.value == hotel_dict[i].name){
            container.innerHTML += hotel_dict[i].toHtml()
        }
    }

    // console.log(document.getElementById(hemer.key).value)
    // console.log(document.getElementById(gromur.key).value)
}


btn.addEventListener('click', search_func)


document.querySelector(".container").addEventListener('click', event => {
    if (event.target.classList.contains('btn_done')){
        for (let i = 0; i < hotel_dict.length; i += 1){
            if (event.target.id == hotel_dict[i].key){
                total = document.getElementById(hotel_dict[i].key).value * hotel_dict[i].price
                let total_p = document.querySelectorAll('.total_amount')
                total_p[i].innerHTML = "Total:   " + total + "$  "  + document.getElementById(hotel_dict[i].key).value +'   days' 
                console.log(total)
            }
        
        }

    }
})

let counter = 1

for(let i =0 ; i < hotel_dict.length; i += 1){
    document.querySelectorAll('.more')[i].addEventListener('click', function(){
        if (counter == 1){
            document.querySelectorAll('.desc')[i].innerHTML += hotel_dict[i].desc_more
            document.querySelectorAll('.desc')[i].style.animationName = 'spawn'
            document.querySelectorAll('.desc')[i].style.animationDuration = '2s'
            document.querySelectorAll('.more')[i].style.color = 'rgb(58, 27, 134)'
            document.querySelectorAll('.hotel_card')[i].style.width = '760px'
            document.querySelectorAll('.hotel_card')[i].style.position = 'relative'
            document.querySelectorAll('.hotel_card')[i].style.background = 'linear-gradient(180.00deg, rgb(211, 159, 117),rgb(103, 46, 197) 100%)'
            document.querySelectorAll('.hotel_card')[i].style.zIndex = '2'
            document.querySelectorAll('.hotel_card')[i].style.animationName = 'scale_up'
            document.querySelectorAll('.hotel_card')[i].style.animationDuration = '2s'
            counter = 0
        }
        else{
            
            document.querySelectorAll('.desc')[i].style.animationName = 'dele'
            document.querySelectorAll('.desc')[i].style.animationDuration = '2s'
            document.querySelectorAll('.desc')[i].innerHTML = ''
            document.querySelectorAll('.more')[i].style.color = 'rgb(58, 27, 134)'
            document.querySelectorAll('.hotel_card')[i].style.position = 'relative'
            document.querySelectorAll('.hotel_card')[i].style.background = 'linear-gradient(180.00deg, rgba(211, 159, 117, 0.86),rgb(103, 46, 197) 100%)'
            document.querySelectorAll('.hotel_card')[i].style.zIndex = '2'
            document.querySelectorAll('.hotel_card')[i].style.animationName = 'scale_down'
            document.querySelectorAll('.hotel_card')[i].style.animationDuration = '2s'
            document.querySelectorAll('.hotel_card')[i].style.width = '270px'
            counter = 1
        }

})
}
