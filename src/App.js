// npm
import { BrowserRouter, Routes, Route } from "react-router-dom";

//files
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}
