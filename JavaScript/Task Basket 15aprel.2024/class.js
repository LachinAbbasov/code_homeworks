class Product {
    static id = 1;
    constructor(name,imgSrc, costPrice, salePrice, discountPercentage) {
        this.id = Product.id++;
        this.name =name;
        this.imgSrc=imgSrc;
        this.costPrice = costPrice;
        if (salePrice > costPrice) {
            this.salePrice = salePrice;
        }
        else throw new Error('sale price cannot be less than cost price');
        if (discountPercentage >= 0 && discountPercentage <= 100) {
            this.discountPercentage = discountPercentage;
        }
        else throw new Error('discountParcentage should be between 0-100');
        
    }
calcProfit(){
    const profit = (this.salePrice*this.discountParcentage)/100 - this.costPrice;
    return profit;
}

// calcPrice(){
// return Number (this)
// }



}

export default Product;

