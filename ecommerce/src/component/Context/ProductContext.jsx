// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const ProductContext = createContext()

// const ProductContextProvider = ({ children }) => {
//   const [allProducts, setAllProducts] = useState([])

//     const navigate = useNavigate()

//     useEffect(() => {
//         getAllProducts()
//     }, [])

//   const getAllProducts  = async () => {
//       try {
//           const res = await axios.get("http://localhost:8080/api/product/all")
//           console.log(res.data)
//           setAllProducts(res.data)
//       }
//       catch (e) {
//           console.log(e)
//       }
//   }

//     return (
//         <ProductContext.Provider value={{ getAllProducts, allProducts }}>
//             {children}
//         </ProductContext.Provider>
//     )

// }

// export const useProduct = () => {
//     const context = useContext(ProductContext)
//     if (!context) throw Error("cannot be used without inside the provider")
//     return context
// }

// export default ProductContextProvider;
