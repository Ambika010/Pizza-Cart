// Product Model (Blue Print)
// it contains the structure of pizza
// pizza object-id, name, desc, price, rating, Image
class Product{
    constructor(id,name,desc,price,url){
        // this keyword (contains the current calling object reference)
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.url=url;
        this.isAddedInCart=false;
    }
}
export default Product;