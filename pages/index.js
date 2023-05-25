import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import validation from "./Components/Login/validationForLogin";

export default function Admin() {
  const [errors, setErrors] = useState({});
  const [checking, setChecking] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const router = useRouter();

  function handleValidation(e) {
    e.preventDefault();
    setChecking(true);
    setErrors(validation(values));
  }
  useEffect(() => {
    if (checking && Object.keys(errors).length === 0) {
      fetchData();
    }
  }, [errors]);

  const fetchData = async () => {
    setChecking(false);


    await axios
      .post(
        "http://localhost:3010/auth/login",
        {
          email: values.email,
          password: values.password,
        })
      .then((result) => {
        console.log('result', result.data);
        localStorage.setItem('token', result.data.access_token);
        alert('Login successfully')
        router.push('/home');
      })
      .catch((error) => {
        alert('Incorrect Email or Password')
        console.log("Unauthorised User");
        console.log(error);
      });
  };
  return (
    <>
      <title>Login</title>

      <div className="login">
        <div className="min-h-screen sm:flex sm:flex-row justify-center">
          <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div className="self-start hidden lg:flex flex-col text-white"></div>
          </div>
          <div className="flex justify-center self-center z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-center text-gray-800">
                  Login
                </h3>
                <p className="text-gray-500 text-center">
                  Please login to your account.
                </p>
              </div>
              <form onSubmit={handleValidation}>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Email
                    </label>
                    <input
                      className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                      name="email"
                      type="email"
                      id="email"
                      //value={email}
                      placeholder="mail@gmail.com"
                      onChange={handleInput}
                    ></input>
                    {errors.email && (
                      <p style={{ color: "red" }}>{errors.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="pswrd"
                      className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                      Password
                    </label>
                    <input
                      className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                      type="password"
                      name="password"
                      //value={password}
                      placeholder="Enter your password"
                      onChange={handleInput}
                    ></input>
                    {errors.password && (
                      <p style={{ color: "red" }}>{errors.password}</p>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                      ></input>
                      <label
                        htmlFor="remember_me"
                        className="ml-2 block text-sm text-gray-800">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a href="http://localhost:3005/Components/forgot" className=" text-muted text-blue-400 hover:text-orange-500">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      onClick={handleValidation}
                      className="w-full flex justify-center bg-blue-400  hover:bg-orange-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-400">
                      Login
                    </button>
                  </div>
                </div>
              </form>
              <div className="pt-5 text-center text-gray-400 text-xs">
                <span>
                  Copyright © 2023-2024_
                  <a
                    href="https://codepen.io/uidesignhub"
                    className="text-green hover:text-green-500 ">
                    Hoicko
                  </a>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
