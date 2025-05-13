// import { createContext,useState } from "react"
// // import { products,getProductData } from "./Store"


// export const CartContext = createContext({
     
//    items:[],
//    getProductQuantity :()=>{},
//    addOneToCart : ()=>{},
//    removeOneFromCart : ()=>{},
//    deleteFromCart : ()=>{},
//    getTotalCost : ()=>{}

// })

//  function CartProvider ({children}) {


//    const [cartProducts, setCartProducts] = useState([]);

//    function getProductQuantity (id) {
//       const quantity=cartProducts.find(product=>product.id === id)?.quantity 
//       if(quantity === undefined){
//          return 0;
//       }
//       return quantity;
//    };

//    function getProductData(id) {
//       let productData = products.find(product => product._id === id);
//       if (!productData) {
//         console.log("Product does not exist with ID: " + id);
//         return null;
//       }
//       return productData;
//     }












    
// // ya izafi ha
    
//    // function addOneToCart (id) {
//    //       const quantity = getProductQuantity(id);
//    //       if (quantity===0){
//    //         setCartProducts(
//    //             [
//    //               ...cartProducts,
//    //               {
//    //                id:id,
//    //                quantity:1
//    //               }
//    //             ]
//    //         )
//    //       }else{
//    //           setCartProducts(
//    //             cartProducts.map(product=>
//    //             product.id === id 
//    //             ?{...product, quantity: product.quantity+1}
//    //             :product
//    //             )
//    //           )
//    //       }
//    // }


//    function addOneToCart(product) {
//       setCartProducts((currentProducts) => {
//         console.log(product)
//         const existingProduct = currentProducts.find(item => item.id === product._id);
//         console.log( product._id)
//         if (existingProduct) {
//           // Update quantity if product already exists
//           return currentProducts.map(item =>
//             item.id === product._id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           );
//         } else {
//           // Add new product to cart
//           return [
//             ...currentProducts,
//             {
//               id: product._id, // Use _id for consistency
//               title: product.title,
//               image: product.image,
//               price: product.salePrice > 0 ? product.salePrice : product.price, // Ensure correct price
//               quantity: 1
//             }
//           ];
//         }
//       });
//     }










// // ya izafi ha
    
//    // function addOneToCart(product) {
//    //    const quantity = getProductQuantity(product._id);
    
//    //    if (quantity === 0) {
//    //      setCartProducts([
//    //        ...cartProducts,
//    //        {
//    //          id: product._id, // Use _id for consistency
//    //          title: product.title,
//    //          image: product.image,
//    //          price: product.salePrice > 0 ? product.salePrice : product.price, // Ensure correct price
//    //          quantity: 1
//    //        }
//    //      ]);
//    //    } else {
//    //      setCartProducts(
//    //        cartProducts.map(item =>
//    //          item.id === product._id
//    //            ? { ...item, quantity: item.quantity + 1 }
//    //            : item
//    //        )
//    //      );
//    //    }
//    //  }
    






//    function deleteFromCart (id){
//       setCartProducts(
//             cartProducts =>
//                cartProducts.filter(currentProduct=>{
//                   return currentProduct.id !=id;
//                })
//       )
//    }
//    function getTotalCost (){
//       let totalCost = 0;
//       cartProducts.map((cartItem)=>{
//           const productData= getProductData(cartItem.id);
//           totalCost += (productData.price * cartItem.quantity);
//       })
//       return totalCost;

//    }
//    function removeOneFromCart (id){
//         const quantity =getProductQuantity(id);
//         if (quantity==1){
//              deleteFromCart(id);
//         }else{
//          setCartProducts(
//             cartProducts.map(product=>
//             product.id === id 
//             ?{...product, quantity: product.quantity-1}
//             :product
//             )
//           )
//         }
//    }

//    const contextValue= {
    
//         items:cartProducts,
//         getProductQuantity,
//         addOneToCart,
//         removeOneFromCart,
//         deleteFromCart,
//         getTotalCost
//    }

//    return (
//        <CartContext.Provider value={contextValue}>
//          {children}
//        </CartContext.Provider>

//    )
  
// }
// export default CartProvider;










// import { createContext,useState } from "react"
// import { useSelector } from "react-redux";




// export const CartContext = createContext(null);



// function CartProvider (props) {

//   const { productList } = useSelector(state => state.shopProducts) || { productList: [] };
    
//     const getDefaultCart = () => {
//       let cart = {};
//       for (let index= 0 ; index<productList.length+1; index++) {
//         cart[index] = 0
//       }
//       return cart ; 
    
    
//     } 

//   const [cartItems, setCartItems] = useState(getDefaultCart());
//   console.log(cartItems)
//    function addOneToCart(itemId) {
//       setCartItems((prev) =>({...prev,[itemId]: (prev[itemId] || 0) + 1}) )
//    }
//    function removeOneFromCart(itemId) {
//     setCartItems((prev) =>({...prev,[itemId] : prev[itemId]-1}) )


//    }

//    const contextValue = {productList,cartItems,addOneToCart,removeOneFromCart};


//    return (
//        <CartContext.Provider value={contextValue}>
//          {props.children}
//        </CartContext.Provider>

//    )
  
// }
// export default CartProvider;


import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from local storage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) setCartItems(savedCart);
  }, []);

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item._id === product._id);
      if (existingItem) {
        return prev.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove one item from cart (decrease quantity)
  const removeFromCart = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item._id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  // Remove entire item from cart
  const removeItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item._id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

