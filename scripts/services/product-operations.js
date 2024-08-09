// products CRUD operation
// contains the logic for fetching , adding, sorting, searching, deletion, updation
// It talks to Network Layer to Bring the JSON, and convert JSON into objects vice-versa
import doNetworkCall from './api-client.js';
import Product from '../models/products.js';
const productOperation={
    products:[], //key value
    search(pizzaId){
        const product=this.products.find(currentProduct=> currentProduct.id==pizzaId);
        console.log('product found ',product);
        product.isAddedInCart =true;
        console.log('Array ',this.products);
    },
    getProductsInCart(){
        const productInBaskeet=this.products.filter(products=> products.isAddedInCart);
        return productInBaskeet;
    },
    async loadProducts(){
        const pizzas=await doNetworkCall();
        const pizzaArray=  pizzas['Vegetarian'];
        const productsArray=pizzaArray.map(pizza=> {
            const currentPizza=new Product(pizza.id, pizza.name ,pizza.menu_description ,pizza.price ,pizza.assets.product_details_page[0].url);
            return currentPizza;
        })
        console.log('Product Array ',productsArray);
        this.products=productsArray;
        return productsArray;
    },
    sortProducts(){

    },
    searchProducts(){

    }
}
export default productOperation;