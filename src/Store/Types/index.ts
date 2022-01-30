import { string } from "yup/lib/locale";

//products interfaces
export interface Review {
  comment: string;
  createdAt?: string;
  name?: string;
  rating: number;
  updatedAt?: string;
  user?: string;
  _id?: string;
}

export interface Icategories {
  name: string;
  image: string;
}

export interface IAllCategories {
  categories: Icategories[];
}

export interface IProduct {
  _id: string;
  images: string[];
  colors: string[];
  categories: string[];
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  description: string;
  discount: number;
  brand: string;
  name: string;
  reviews: Review[];
  user: string;
  createdAt: string;
  updatedAt: string;
}

export interface IproductsByPaginate {
  products: IProduct[];
  page: number;
  pages: number;
}

export interface IProductsSliceState {
  productsByPaginate: IproductsByPaginate;
  productsByTopThree: IProduct[];
  categories: Icategories[];
  productById: IProduct | null;
  message: string | null;
  loading: boolean;
}

interface ItemCart {
  product: IProduct;
  qty: number;
  itemTotalPrice: number;
}
//interface for user
export interface IUser {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  dateOfBirth: string;
  isAdmin: boolean;
  cart: {
    items: ItemCart[];
    totalQty: number;
    totalPrice: number;
  };
  token: string;
}
export interface IUserProfile {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  profileImage?: string;
  isAdmin?: boolean;
  dateOfBirth?: string;
}

export interface IusersByPaginate {
  users: IUser[];
  page: number;
  pages: number;
}

//interface for State
export interface IUserSliceState {
  data: IUser | null;
  usersByPaginate: IusersByPaginate;
  userDetails: IUser | null;
  auth: boolean | null;
  loading: boolean;
  error: any;
}

//orders interfaces

export interface IShippingAddress {
  streetAddress: string;
  city: string;
  zipCode: string;
  country: string;
}

export interface IOrder {
  _id: string;
  user: string;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  orderItems: any[];
  shippingAddress: IShippingAddress;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
  clientSecret: string;
}

export interface IOrderMy {
  shippingAddress?: {
    address?: string;
    city?: string;
    postalCode?: number;
    country?: string;
  };
  taxPrice?: number;
  shippingPrice?: number;
  totalPrice?: number;
  isPaid?: boolean;
  isDelivered?: boolean;
  _id?: string;
  user?: string;
  orderItems?: [
    {
      _id?: string;
      product?: {
        images: string[];
        colors?: [string];
        categories?: [string];
        rating?: number;
        numReviews?: number;
        price?: number;
        discount?: number;
        countInStock?: number;
        _id?: string;
        name?: string;
        user?: string;
        brand?: string;
        description?: string;
        reviews?: [
          {
            _id?: string;
            name?: string;
            rating?: number;
            comment?: string;
            user?: string;
            createdAt?: string;
            updatedAt?: string;
          }
        ];
        createdAt?: string;
        updatedAt?: string;
      };
      qty?: number;
      itemTotalPrice?: number;
    }
  ];
  paymentMethod?: string;
  createdAt?: string;
  updatedAt?: string;
  clientSecret?: string;
}

export interface OrdersByPaginate {
  orders: IOrderMy[];
  page: number;
  pages: number;
}

export interface IOrderState {
  order: IOrder | null;
  OrdersByPaginate: OrdersByPaginate;
  message: string | null;
  loading: boolean;
}

export interface INotificationState {
  error?: boolean | null;
  success?: boolean | null;
  msg?: string | null;
}
