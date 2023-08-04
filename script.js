const cartList = document.querySelector('.listCart');
const buyNowBtn = document.getElementById('buyNowBtn');
function addToCart(productId) {
  buyNowBtn.style.display = 'block';
}
function handleAddToCartClick(productId) {
  addToCart(productId);
}
const addToCartButtons = document.querySelectorAll('.add');
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.getAttribute('value');
    handleAddToCartClick(productId);
  });
});

let list = document.querySelectorAll('.list .item');
list.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            var itemNew = item.cloneNode(true);
            let checkIsset  = false;

            let listCart = document.querySelectorAll('.cart .item');
            listCart.forEach(cart =>{
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger');
                    },1000)
                }
            })
            if(checkIsset == false){
                document.querySelector('.listCart').appendChild(itemNew);
            }
        }
    })
})
function Remove($key){
    let listCart = document.querySelectorAll('.cart .item');
    listCart.forEach(item => {
        if(item.getAttribute('data-key') == $key){
            item.remove();
            return;
        }
    })
}
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    function performSearch(searchText) {
        items.forEach(item => {
            const titleElement = item.querySelector(".title");
            if (titleElement.textContent.toLowerCase().includes(searchText.toLowerCase())) {
                item.style.display = "block"; // Display the item if it matches the search
            } else {
                item.style.display = "none"; // Hide the item if it does not match the search
            }
        });
    }
    const searchInput = document.querySelector(".search input");
    searchInput.addEventListener("input", function(event) {
        const searchText = event.target.value.trim();
        performSearch(searchText);
    });
});

