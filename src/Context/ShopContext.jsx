import React from "react";
import { createContext } from "react";
import allProduct from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue =  {allProduct};
   
    return  (
        <ShopContext.Provider value={contextValue} >
              {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider ;