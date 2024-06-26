import React, { useState } from 'react'
import loginSignupImage from "../assest/login-animation.gif";
import { Link, useNavigate } from 'react-router-dom';
import { BiShow, BiHide } from "react-icons/bi";
import { ImagetoBase64 } from '../utility/ImagetoBase64';
import { toast } from "react-hot-toast";

const Signup = () => {

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        image: ""
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    const handleUploadProfileImage = async (e) => {
        const data = await ImagetoBase64(e.target.files[0])
        setData((preve) => {
            return {
                ...preve,
                image: data
            }
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        
            if (data.password === data.confirmPassword) {
                const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/api/signup`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })

                const dataResponse = await fetchData.json()

                // console.log("data", dataResponse);
                
                if(dataResponse.success){
                    toast.success(dataResponse.message)
                    navigate("/login")
                  }
        
                  if(dataResponse.error){
                    toast.error(dataResponse.message)
                  }

            } else {
                toast("Password and confirm password do not match.");
            }
        
    };




    return (
        <div className="p-3 md:p-4">
            <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">

                <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
                    <img src={data.image ? data.image : loginSignupImage} className="w-full h-full" />

                    <label htmlFor="profileImage">
                        <div className="absolute bottom-0 h-1/3  bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
                            <p className="text-sm p-1 text-white">Upload</p>
                        </div>
                        <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage} />
                    </label>
                </div>

                <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type={"text"}
                        id="name"
                        name="name"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                        value={data.name}
                        onChange={handleOnChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type={"email"}
                        id="email"
                        name="email"
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                        value={data.email}
                        onChange={handleOnChange}
                    />

                    <label htmlFor="password">Password</label>
                    <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            className=" w-full bg-slate-200 border-none outline-none "
                            value={data.password}
                            onChange={handleOnChange}
                        />
                        <span
                            className="flex text-xl cursor-pointer"
                            onClick={handleShowPassword}
                        >
                            {showPassword ? <BiShow /> : <BiHide />}
                        </span>
                    </div>

                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmpassword"
                            name="confirmPassword"
                            className=" w-full bg-slate-200 border-none outline-none "
                            value={data.confirmPassword}
                            onChange={handleOnChange}
                        />
                        <span
                            className="flex text-xl cursor-pointer"
                            onClick={handleShowConfirmPassword}
                        >
                            {showConfirmPassword ? <BiShow /> : <BiHide />}
                        </span>
                    </div>

                    <button className="w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
                        Sign up
                    </button>
                </form>

                <p className="text-left text-sm mt-2">
                    Already have an account?{" "}
                    <Link to={"/login"} className="text-red-500 underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Signup
