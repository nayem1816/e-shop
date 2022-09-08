import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Protected from './components/Login/Protected';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';

const Home = React.lazy(() => import('./components/Home/Home'));
const AllProducts = React.lazy(() =>
    import('./components/AllProducts/AllProducts')
);
const Shirt = React.lazy(() => import('./components/Shirts/Shirt'));
const Polo = React.lazy(() => import('./components/Polo/Polo'));
const Jacket = React.lazy(() => import('./components/Jacket/Jacket'));
const Pant = React.lazy(() => import('./components/Pants/Pant'));
const SingleProduct = React.lazy(() =>
    import('./components/SingleProduct/SingleProduct')
);
const Cart = React.lazy(() => import('./components/Cart/Cart'));
const Login = React.lazy(() => import('./components/Login/Login'));
const SignUp = React.lazy(() => import('./components/Login/SignUp'));
const Dashboard = React.lazy(() => import('./components/Dashboard/Dashboard'));

function App() {
    return (
        <div
            style={{ height: '100vh' }}
            className="main grid grid-cols-1 content-between"
        >
            <div className="">
                <Suspense fallback={<Loading />}>
                    <ToastContainer />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/allProducts" element={<AllProducts />} />
                        <Route path="/shirt" element={<Shirt />} />
                        <Route path="/polo" element={<Polo />} />
                        <Route path="/jacket" element={<Jacket />} />
                        <Route path="/pant" element={<Pant />} />
                        <Route
                            path="/product/:id"
                            element={<SingleProduct />}
                        />
                        <Route
                            path="/cart"
                            element={
                                <Protected>
                                    <Cart />
                                </Protected>
                            }
                        />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="*" element={<h1>404 Not Found</h1>} />
                    </Routes>
                </Suspense>
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    );
}

export default App;
