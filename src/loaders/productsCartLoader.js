// import { getShoppingCart } from "../utilities/fakedb";

// const productsCartLoader = async () => {
//     const productsData = await fetch('products.json');
//     const products = await productsData.json();
//     console.log(products)
    
//     const storedCart = getShoppingCart();
//         const savedCart = [];
//         for(const id in storedCart){
//             const addedProduct = products.find(product => product._id === id);
//             if(addedProduct){
//                 const quantity = storedCart[id];
//                 addedProduct.quantity = quantity;
//                 savedCart.push(addedProduct);
//             } 
//         }
//         console.log(savedCart)
//     return savedCart;
// }

// export default productsCartLoader;