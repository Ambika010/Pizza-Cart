// Glue b/w view and Model
// controller ui perform I/O    
// Data Exchange b/w view and model
import productOperations from "../services/product-operations.js";
async function loadPizzas(){
   const pizzas=await productOperations.loadProducts();
   console.log('Pizzas are ',pizzas);
    for(let pizza of pizzas){
        preaparePizzaCard(pizza);
    }
}
loadPizzas();

function addToCart(){
    // this (current object reference)
    console.log('Added to Cart ...',this);
    const currentButton=this; // this is used to get the product id on click to add to cart button
    const pizzaId=currentButton.getAttribute('product-id');
    console.log('Pizza ID ',pizzaId);
    productOperations.search(pizzaId);
    printBaskeet();
}

function printBaskeet(){
   const cartProducts= productOperations.getProductsInCart();
   const basket=document.querySelector('#basket');
   basket.innerHTML='';
    for(let product of cartProducts){
        const li=document.createElement('li');
        li.innerText=`${product.name} ${product.price}`;
        basket.appendChild(li);
        
    }
}

// dynamic card
function preaparePizzaCard(pizza){
    // static div is used to put the dynamic output
    const outputDiv= document.querySelector('#output');
const colDiv=document.createElement('div');
colDiv.className='col-md-4 mb-4';
const cardDiv=document.createElement('div');
cardDiv.className='card h-100 d-flex flex-column';
// cardDiv.style="width: 18rem;";
colDiv.appendChild(cardDiv);
const img=document.createElement('img');
img.src=pizza.url;
img.className='card-img-top p-2';
cardDiv.appendChild(img);
const cardBody=document.createElement('div');
cardBody.className='ccard-body d-flex flex-column justify-content-between';
cardDiv.appendChild(cardBody);
const h5=document.createElement('h5');
h5.className='card-title';
h5.innerText=pizza.name;
const pTag=document.createElement('p');
pTag.className='card-text';
pTag.innerText=pizza.desc;
const button =document.createElement('button');
button.setAttribute('product-id',pizza.id);
button.addEventListener('click',addToCart); // Event Bind
button.innerText='Add to cart';
button.className='btn btn-primary mt-3 align-self-start';
cardBody.appendChild(h5);
cardBody.appendChild(pTag);
cardBody.appendChild(button);

// append the output over the display 
outputDiv.appendChild(colDiv);
}