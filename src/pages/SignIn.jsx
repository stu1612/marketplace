// npm
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// files
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import InputField from "../components/InputField";
import data from "../data/signIn.json";

export default function SignIn() {
  // local state
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // properties
  const { email, password } = formData;
  const navigate = useNavigate();

  // methods
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  function togglePasswordState() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Welcome Back!</p>
      </header>
      <form>
        <input
          type="email"
          className="emailInput"
          placeholder="Email"
          id="email"
          value={email}
          onChange={onChange}
        />

        <div className="passwordInputDiv">
          <input
            type={showPassword ? "text" : "password"}
            className="passwordInput"
            placeholder="Password"
            id="password"
            value={password}
            onChange={onChange}
          />

          <img
            src={visibilityIcon}
            alt="show password"
            className="showPassword"
            onClick={togglePasswordState}
          />
        </div>

        <Link to="/forgot-password" className="forgotPasswordLink">
          Forgot Password
        </Link>

        <div className="signInBar">
          <p className="signInText">Sign In</p>
          <button className="signInButton">
            <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
          </button>
        </div>
      </form>

      {/* Google OAuth */}

      <Link to="/sign-up" className="registerLink">
        Sign Up
      </Link>
    </div>
  );
}
