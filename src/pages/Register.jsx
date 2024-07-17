import React from 'react'
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import axios from 'axios'

const Register = () => {
  const { createUser , updateUser}= useAuth()
  const navigate = useNavigate();
  const location = useLocation()
    const handleRegister= async (e)=>{
      e.preventDefault()
      const form = e.target
      const name= form.name.value
      const email = form.email.value
      const password= form.password.value
      const image = form.image.files[0]
      const formData = new FormData()
        formData.append('image',image)


      console.log(name ,email ,password);
      const toastId = toast.loading("Loading ...!" ,);
      if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test( password )){
        toast.error(
          "Minimum eight characters,At least one upper case ,At least one lower case ,one special character and one number" ,{id:toastId});
      }else{
      try {

        const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=a6254b3cd484e13c12810e9ae0858c8e` , formData)
        console.log(data); 
        await createUser(email,password)

         await updateUser(name , data.data.display_url)
         .then(()=>{
          const userInfo ={
            name :name,
            email :email,
            role :'member'
          }
          
          axios.post('https://bonik-e-commerce-backend.vercel.app/users',userInfo)
          .then((res)=>{
            if(res.data.insertedId){
              toast.success('Register successfully',{id:toastId}) 
              navigate(location?.state ? location.state : "/");
            }

          })
          
         })
      } catch (error) {
        toast.error(error.message , {id:toastId})
      }
      }

    }

    const handleGoogleLogin=()=>{
     
    }
  return (
<div classname=" ">
<div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Register
              </h1>
              <p className="text-[12px] text-gray-500 mt-2">
                Hey enter your details to login your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">

                <form onSubmit={handleRegister}>
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                  />
                  <input
                    className="w-full mt-5 px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />

                  <input
                    className="w-full mt-5 px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />

                  
                    <input
                      name="image"
                      className=" my-5 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="image"
                      type="file"
                      accept="image/*"
                    />
                     
                  
                  <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      type="submit"
                      stroke="currentColor"
                      stroke-width="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign In</span>
                  </button>
                </form>


                <div className="flex items-center justify-center  dark:bg-gray-700">
                  <button onClick={handleGoogleLogin} class="flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="800px"
                      height="800px"
                      viewBox="-0.5 0 48 48"
                      version="1.1"
                    >
                      {" "}
                      <title>Google-color</title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                      <g
                        id="Icons"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Color-"
                          transform="translate(-401.000000, -860.000000)"
                        >
                          {" "}
                          <g
                            id="Google"
                            transform="translate(401.000000, 860.000000)"
                          >
                            {" "}
                            <path
                              d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                              id="Fill-1"
                              fill="#FBBC05"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                              id="Fill-2"
                              fill="#EB4335"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                              id="Fill-3"
                              fill="#34A853"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                              id="Fill-4"
                              fill="#4285F4"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </svg>
                    <span>Continue with Google</span>
                  </button>
                </div>

                <p className="mt-6 text-xs text-gray-600 text-center">
                  Alaready have an Account?{" "}
                  <Link to="/login">
                    <span className="text-blue-900 font-semibold">Sign In</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
</div>

  )
}

export default Register