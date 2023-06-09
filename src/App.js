import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
// import productsCartLoader from './loaders/productsCartLoader';
import { getShoppingCart } from './utilities/fakedb';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: '/order',
          element: <Order></Order>,
          loader: async () => {
            const productsData = await fetch('http://localhost:5000/products');
            const products = await productsData.json();

            const storedCart = getShoppingCart();
            const savedCart = [];
            for (const id in storedCart) {
              const addedProduct = products.find(product => product._id === id);
              if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
              }
            }
            return savedCart;
          }
        },
        {
          path: '/inventory',
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: 'shipping',
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path: '/about', element: <About></About>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <Signup></Signup>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
