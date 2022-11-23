import React,{ useState } from "react"
export const BuyContext = React.createContext('')

const BuyProvider = ({ children }) => {
    const [data, setData] = useState(useState(JSON.parse(localStorage.getItem('pData')) || {}))
    const [quantity, setQuantity] = useState(useState(JSON.parse(localStorage.getItem('pQ')) || {}))
    const [prodSelected, setProdSelected] = useState(localStorage.getItem('productSelected') || false)
    const handleBuy = (productData,productQuantity) => {
        console.log(productData)
        setData(productData)
        localStorage.setItem('pData', JSON.stringify(productData))
        setQuantity(productQuantity)
        localStorage.setItem('pQ', JSON.stringify(productQuantity))
        setProdSelected(true)
        localStorage.setItem('productSelected',true )

        //localStorage.setItem('product', productData)
    }
    return (
        <BuyContext.Provider value={{ data, quantity, prodSelected, handleBuy }}>
            {children}
        </BuyContext.Provider>
    )
}


export default BuyProvider