const navBar = document.querySelector('.navbar');
const bottomContianer = document.querySelector(".bottom-container");
console.log(bottomContianer.offsetTop);
console.log(navBar.offsetHeight);
window.addEventListener('scroll',()=>{
    // scroll point found
    // console.log(window.scrollY);
    if(window.scrollY > bottomContianer.offsetTop-navBar.offsetHeight - 50){
        navBar.classList.add('active')
    }else{
        navBar.classList.remove('acitve')
    }
})