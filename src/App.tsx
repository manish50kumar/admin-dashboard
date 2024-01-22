import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";


// import Dashboard from "./pages/Dashboard";
const Dashboard = lazy(()=>import("./pages/Dashboard"))
const Products = lazy(()=>import("./pages/Products"))
const Transactions = lazy(()=>import("./pages/Transactions"))
const Customers = lazy(()=>import("./pages/Customers"))


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
         <Routes>
             <Route path="/admin/dashboard" element={<Dashboard/>} />
             <Route path="/admin/product" element={<Products/>} />
             <Route path="/admin/transaction" element={<Transactions/>} />
             <Route path="/admin/customer" element={<Customers/>} />
       
          {/* Charts */}
          
          {/* Apps */}
        </Routes>
      </Suspense>
    </Router>
  )
}
export default App;