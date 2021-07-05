console.log('taissander lanches v0.1');
window.addEventListener("scroll", dealWithScroll);

var headerInner = document.getElementById('header');

console.log(headerInner);

function dealWithScroll() {
    if(screen.width <= 640){
        if (window.pageYOffset >= 50) {
            headerInner.classList.add('fixed');
        } else {
            headerInner.classList.remove('fixed');
        }
    }else{
        if (window.pageYOffset >= 50) {
            headerInner.classList.add('fixed');
        } else {
            headerInner.classList.remove('fixed');
        }
    }
}
