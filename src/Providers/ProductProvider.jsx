import { createContext, useEffect, useState } from "react";

export const ProductContext= createContext(null);

const ProductProvider = ({children}) => {
    const [brands, setBrands]= useState([]);
    useEffect(()=>{
        fetch('https://tech-garage-server-ad3y9riqt-mahmud-munnas-projects.vercel.app/brands')
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


    //Toggle theme
    const [theme, setTheme]= useState("light");

    useEffect(()=>{
        if(theme=="dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }

    },[theme])

    const handleThemeSwitch=()=>{
        setTheme(theme=="dark"?"light":"dark")
    }


    const productInfo={
        brands,
        types,
        handleThemeSwitch
    }
    return (
        <ProductContext.Provider value={productInfo}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;