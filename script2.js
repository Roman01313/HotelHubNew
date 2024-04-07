let container = document.querySelector(".container")

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
            <p>${this.price}</p>
        </div>  
    </div> -->`
    }
}

let hemer_price = 900
let Hemer = new Hotel ("src/IMG_8244.JPG", "Hemer","9/10", "Hemer - the best hotel in Canada",`${hemer_price}$/week`)

container.innerHTML += Hemer.toHtml()