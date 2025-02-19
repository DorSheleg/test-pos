export interface Product {
  id: number;
  category_id: number;
  name: string;
  price: number;
  barcode: string;
  image_url: string;
  quantity: number;
}

export interface Category {
  id: number;
  name: string;
}
