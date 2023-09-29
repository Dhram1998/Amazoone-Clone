let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")

console.log(imgItem.length - 1)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100

slideBtnLeft.addEventListener("click", handleLeftBtn)

function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener("click", handleRightBtn)

function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })

}

//render automatic

function renderSlideAuto() {

    if (startSlider >= -endSlider + 100) {
        handleRightBtn()
    }
    else {
        startSlider = 0;
    }
}
setInterval(renderSlideAuto, 2500);

/*sidebar navigation*/

const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id")
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar")
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close")

sidebarOpenNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})
sidebarCloseNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})

const backtop = document.querySelector(".backtop");

backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

//left and right slid

const leftBtn= document.querySelector(".l-btn");
const rightBtn = document.querySelector(".r-btn");


rightBtn.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
leftBtn.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide");
        conent.scrollLeft -=1100;
        event.preventDefault();

})

const leftBtn2= document.querySelector(".btn-1c");
const rightBtn2 = document.querySelector(".btn-1d");


rightBtn2.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-2");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
leftBtn2.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-2");
        conent.scrollLeft -=1100;
        event.preventDefault();

})

const leftBtn3= document.querySelector(".btn-2b");
const rightBtn3 = document.querySelector(".btn-2a");


rightBtn3.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-3");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
leftBtn3.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-3");
        conent.scrollLeft -=1100;
        event.preventDefault();

})