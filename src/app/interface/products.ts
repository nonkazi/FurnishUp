export interface FurnitureProducts {
    id: number;
    title: string;
    price2: number;
    price: number;
    image: string;
    category: string;
}

export interface requestFurnitureProducts{
    items: FurnitureProducts[];
}