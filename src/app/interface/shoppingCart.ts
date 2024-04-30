export interface cItems {
    itemId : number;
    image : string;
    itemName : string;
    fullprice : number;
    saleprice : number;
    quantity : number;
}

export interface ShoppingCart {
    items : cItems[];
    totalAmount : number;
}