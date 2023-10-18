import { createContext, useEffect, useState } from "react";

export const ProductContext= createContext(null);

const ProductProvider = ({children}) => {
    const [brands, setBrands]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/brands')
        .then(res=>res.json())
        .then(data=>{
            setBrands(data);
        })
    },[])

    const types=[
        {id:1, name:'Mobile'},
        {id:2, name:'Laptop'},
        {id:3, name:'Desktop'},
        {id:4, name:'Accessories'}
    ];

    const productInfo={
        brands,
        types
    }
    return (
        <ProductContext.Provider value={productInfo}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;