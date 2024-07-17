import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import AddProduct from "../components/AddProduct/AddProduct";
import ContactUs from "../pages/ContactUs/ContactUs";
import Cart from "../common/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/Dashboard/Dashboard";
import AllProduct from "../pages/AllProduct/AllProduct";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import ProductList from "../components/ProductList/ProductList";
import CategoryProduct from "../components/CategoryProduct/CategoryProduct";
import Success from "../components/Payment/Success";
import Cancle from "../components/Payment/Cancle";


const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout />,
      children :[
        {
          path:'/',
          element :<HomePage />
        },
        {
          path:'/product/:id',
          element : <PrivateRoute><ProductDetails /></PrivateRoute>,
          loader : ({params}) => fetch(`https://bonik-e-commerce-backend.vercel.app/products/${params.id}`)
        },
        {
          path:'/addproduct',
          element :<AddProduct />
        },
        {
          path:'/products/:category',
          element : <CategoryProduct />,
          loader : async ({params})=> await fetch(`https://bonik-e-commerce-backend.vercel.app/product/${params.category}`)
        },
        {
          path:'/contact',
          element :<ContactUs />
        },
        {
          path:'/cart',
          element :<Cart />
        },
        {
          path:'/allproducts',
          element :<AllProduct />
        },
        {
          path:'/payment/success',
          element :<Success />
        },
        {
          path:'/payment/cancle',
          element :<Cancle />
        },
       
       
      ]
    },
    {
      path:'/register',
      element :<Register />
    },
    {
      path:'/login',
      element :<Login />
    },
    {
      path:'/dashboard',
      element :<Dashboard />,
      children:[
        {
          path:'/dashboard/addProduct',
          element :<AddProduct />
        },
        {
          path:'/dashboard/updateProduct/:id',
          element :<UpdateProduct />,
          loader :async ({params})=> fetch(`https://bonik-e-commerce-backend.vercel.app/products/${params.id}`)
        },
        {
          path:'/dashboard/productList',
          element : <ProductList />
           
        },
      ]
    },
  ]);


  export default router