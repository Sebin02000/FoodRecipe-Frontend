/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../Services/allAPIs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Auth({ register }) {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onHandleRegister = async () => {
    const { username, email, password } = userDetails;
    if (!username || !email || !password) {
      toast.warn("Please fill the form", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      try {
        const response = await registerAPI(userDetails);
        if (response.status === 200) {
          toast.success(response.data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/login");
          }, 6000);
        } else {
          toast.error(response.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } catch (err) {
        toast.error("API Error", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  const onHandleLogin = async () => {
    const { email, password } = userDetails;
    if (!email || !password) {
      toast.warn("Please fill the form", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      try {
        const response = await loginAPI(userDetails);
        if (response.status === 200) {
          toast.success("Login Successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/");
          }, 6000);
          sessionStorage.setItem("username", response.data.currentUser.username);
          sessionStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.response.data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } catch (err) {
        toast.error("API Error", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-6 p-5">
          <img
            height={"300px"}
            src="https://cdn-icons-png.flaticon.com/512/3176/3176384.png"
            alt="Login Illustration"
          />
        </div>
        <div className="col-6 p-5 text-center">
          <h2>Tasty</h2>
          <h5>Sign {register ? "Up" : "In"}</h5>
          {register && (
            <input
              onChange={(e) =>
                setUserDetails({ ...userDetails, username: e.target.value })
              }
              type="text"
              placeholder="Username"
              className="form-control mb-3"
            />
          )}
          <input
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            type="email"
            placeholder="Email"
            className="form-control mb-3"
          />
          <input
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            type="password"
            placeholder="Password"
            className="form-control mb-3"
          />
          {register ? (
            <div>
              <button
                onClick={onHandleRegister}
                className="btn btn-primary mb-3"
              >
                Sign Up
              </button>
              <p>
                Already Exists? <Link to={"/login"}> Login Now</Link>
              </p>
            </div>
          ) : (
            <div>
              <button onClick={onHandleLogin} className="btn btn-primary mb-3">
                Sign In
              </button>
              <p>
                New to here? <Link to={"/register"}> Register Now</Link>
              </p>
            </div>
          )}
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}

export default Auth;
