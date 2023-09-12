import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
      <Sidebar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:id" element={<User/>} />
      <Route path="/newUser" element={<NewUser/>} />
      <Route path="/products" element={<ProductList/>} />
      <Route path="/product/:productId" element={<Product/>} />
      <Route path="/newProduct" element={<NewProduct/>} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;