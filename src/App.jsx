import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import('./pages/home/Home'));
const UserList = lazy(() => import("./pages/userList/UserList"));
const User = lazy(() => import("./pages/user/User"));
const NewUser = lazy(() => import("./pages/newUser/NewUser"));
const ProductList = lazy(() => import("./pages/productList/ProductList"));
const Product = lazy(() => import("./pages/product/Product"));
const NewProduct = lazy(() => import("./pages/newProduct/NewProduct"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Sidebar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App;