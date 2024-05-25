document.addEventListener('DOMContentLoaded', () => {
    // Cart open close
    let iconcart = document.querySelector('.icon-cart');
    let closecart = document.querySelector('.close');
    let body = document.querySelector('body');
    let listproducthtml = document.querySelector('.listproduct');
    let listcarthtml = document.querySelector('.listcart');
    let iconcartspan = document.querySelector('.icon-cart span');

    let listproducts = [];
    let carts = [];

    // Ensure the cart is not open initially
    body.classList.remove('showcart');

    iconcart.addEventListener('click', () => {
        body.classList.toggle('showcart');
    });

    closecart.addEventListener('click', () => {
        body.classList.toggle('showcart');
    });

    const addDataToHTML = () => {
        listproducthtml.innerHTML = '';
        if (listproducts.length > 0) {
            listproducts.forEach(product => {
                let newproduct = document.createElement('div');
                newproduct.classList.add('item');
                newproduct.innerHTML = `
                    <div class="img">
                        <img src="${product.image}" alt="">
                        <button class="bt addcart" data-id="${product.id}">Add To Cart</button>
                    </div>
                    <p class="t1">${product.name}</p>
                    <p class="t2">40 mm</p>
                    <p class="t3 price">Regular price$${product.price}</p>
                `;
                listproducthtml.appendChild(newproduct);
            });
        }
    };

    listproducthtml.addEventListener('click', (event) => {
        let positionclick = event.target;
        if (positionclick.classList.contains('addcart')) {
            let product_id = positionclick.dataset.id;
            addToCart(product_id);
        }
    });

    const addToCart = (product_id) => {
        let positionthisproductincart = carts.findIndex((value) => value.product_id == product_id);
        if (carts.length <= 0) {
            carts = [{
                product_id: product_id,
                quantity: 1
            }];
        } else if (positionthisproductincart < 0) {
            carts.push({
                product_id: product_id,
                quantity: 1
            });
        } else {
            carts[positionthisproductincart].quantity = carts[positionthisproductincart].quantity + 1;
        }
        console.log(carts);
        addCartToHTML();
        addCartToMemory();
    }

    const addCartToMemory = () => {
        localStorage.setItem('cart', JSON.stringify(carts));
    }

    const addCartToHTML = () => {
        listcarthtml.innerHTML = '';
        let totalquantity = 0;
        if (carts.length > 0) {
            carts.forEach(cart => {
                totalquantity = totalquantity + cart.quantity;
                let newcart = document.createElement('div');
                newcart.classList.add('item');
                newcart.dataset.id = cart.product_id;
                let positionproduct = listproducts.findIndex((value) => value.id == cart.product_id);
                let info = listproducts[positionproduct];
                newcart.innerHTML = `
                <div class="image">
                    <img src="${info.image}" alt="">
                </div>
                <div class="name">
                    ${info.name}
                </div>
                <div class="totalprice">
                    $${info.price * cart.quantity}
                </div>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span>${cart.quantity}</span>
                    <span class="plus">+</span>
                </div>
                `;
                listcarthtml.appendChild(newcart);
            })
        }
        iconcartspan.innerHTML = totalquantity;
    }

    listcarthtml.addEventListener('click', (event) => {
        let positionclick = event.target;
        if (positionclick.classList.contains('minus') || positionclick.classList.contains('plus')) {
            let product_id = positionclick.parentElement.parentElement.dataset.id;
            let type = 'minus';
            if (positionclick.classList.contains('plus')) {
                type = 'plus';
            }
            changeQuantity(product_id, type);
        }
    })

    const changeQuantity = (product_id, type) => {
        let positionitemincart = carts.findIndex((value) => value.product_id == product_id);
        if (positionitemincart >= 0) {
            switch (type) {
                case 'plus':
                    carts[positionitemincart].quantity = carts[positionitemincart].quantity + 1;
                    break;
                default:
                    let valuechange = carts[positionitemincart].quantity - 1;
                    if (valuechange > 0) {
                        carts[positionitemincart].quantity = valuechange;
                    } else {
                        carts.splice(positionitemincart, 1);
                    }
                    break;
            }
        }
        addCartToMemory();
        addCartToHTML();
    }

    const initApp = () => {
        // Get data from JSON
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                listproducts = data;
                console.log(listproducts);
                addDataToHTML();
                if (localStorage.getItem('cart')) {
                    carts = JSON.parse(localStorage.getItem('cart'));
                    addCartToHTML();
                }
            });
    };

    initApp();
});

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
