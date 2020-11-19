window.onload=function(e){
    console.log('load-e: ', e);
    var topBarCart = document.querySelector('.topbar-cart')
    var cartMenu = document.querySelector('.cart-menu')
    topBarCart.onhover=function(e){
        console.log('e: ', e);
        cartMenu.style.display='block'
    }
}