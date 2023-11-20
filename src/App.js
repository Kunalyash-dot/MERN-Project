import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import EmiCalculator from './screens/EmiCalculator';
import InsuranceCalculator from './screens/InsuranceCalculator';
import TermsAndCondition from './screens/TermsAndCondition';
import PrivacyPolicy from './screens/PrivacyPolicy';
import RefundPolicy from './screens/RefundPolicy';
import ShippingPolicy from './screens/ShippingPolicy';
import ClosureCalculator from './screens/ClosureCalculator';

function App() {
  return (
    <CartProvider>
  <Router>
<div>
   <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/login' element={<Login />} />
    <Route exact path='/createuser' element={<Signup />} />
    <Route exact path='/myOrder' element={<MyOrder />} />
    <Route exact path='/emiCalculator' element={<EmiCalculator />} />
    <Route exact path='/insuranceCalculator' element={<InsuranceCalculator />} />
    <Route exact path='/termsandcondition' element={<TermsAndCondition />} />
    <Route exact path='/privacyPolicy' element={<PrivacyPolicy />} />
    <Route exact path='/refundPolicy' element={<RefundPolicy />} />
    <Route exact path='/shippingPolicy' element={<ShippingPolicy />} />
    <Route exact path='/closureCalculator' element={<ClosureCalculator />} />
  </Routes>
</div>
  </Router>
  </CartProvider>
  );
}

export default App;
