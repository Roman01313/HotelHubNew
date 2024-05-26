let about_btn = document.querySelectorAll('.btn')

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
    
}
about_btn[0].addEventListener('click', scrollDown)
document.cookie = 'name=Jih'
document.cookie = 'username=Jhd'
console.log(document.cookie)