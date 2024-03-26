
import React, { createContext } from "react";

 const ShopContextProvider = createContext(null);

// const ShopContextProvider = (props) => {

//     const contextValue = {all_product}
//     return(
//     //<ShopContextProvider value={contextValue}>
//            <div> {props.children}</div>
//        // </ShopContextProvider>
//     )
// }
export default ShopContextProvider;