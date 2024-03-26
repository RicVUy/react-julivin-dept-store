import ShopContextProvider from "../Context/ShopContextProvider";
import all_product from "../components/Assets/Assets/all_product"
import App from "../App";
const ShopMain = () => {
    return (
        <div>
        <ShopContextProvider.Provider value={{all_product}}>
        <App />
        </ShopContextProvider.Provider>
        </div>
    )
}

export default ShopMain;