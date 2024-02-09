import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import {supabase} from "../supabaseCLient"

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state variable
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });
      // Make a POST request to the Flask backend
      const response = await fetch(`${process.env.REACT_APP_GYM_BACKEND}/members/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      
       if (error) {
        console.error('Error signing up:', error.message);
      } else {
        console.log('User signed up successfully:', user);
      }
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the response from the backend

        // Set success message and navigate to login page
        setSuccessMessage("You have successfully signed up!");
        navigate("/login");
        goTop();
      } else {
        console.log("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
      <section className="login-section ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Sign Up
          </h1>
        </div>
        {/* form  */}
        <div className="py-[10rem] flex justify-center page-padding">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl"
          >
            <label className="text-[2rem] text-white mb-3 font-medium ">
              Name
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="john"
              type="text"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label className="text-[2rem] text-white mb-3 font-medium ">
              Email
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="hercules@gmail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label className="text-[2rem] text-white mb-3 font-medium outline-[#ff0336] outline-2">
              Password
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            {/* Success message */}
            {successMessage && (
              <p className="text-green-500 text-[2rem] mb-5">{successMessage}</p>
            )}

            <button
              type="submit"
              className="bg-[#007FFF] text-white py-4 font-medium text-[2rem] w-full mt-10"
            >
              Sign Up
            </button>
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">Already have an account?</p>
              <Link
                to="/login"
                className="text-[#007FFF] font-bold text-[1.5rem]"
              >
                Sign In
              </Link>
            </div>
            <p className="text-[#ffffffbc] text-[1.3rem] mt-5">
              ( Make <span className="text-[#007FFF]">new Account</span> or go to
              <span className="text-[#007FFF]"> Sign In</span> Page for Test
              Account )
            </p>
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Signup;