import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirst } from "../Context/FIrstContext";

function AdminLogin() {
  const { login, isAuthenticated } = useFirst()
  const [showPassword, setShowPassword] = useState(false)
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const  name = e.target.name
    const value = e.target.value
    setUserData((prev) => ({ 
      ...prev, [name]: value }))
  }
  
  const handleLogin = async() => {
    await login(userData)
  }
  
  const Sign = [
    { name: "Sign Up", path: "/signup" }]
  console.log(isAuthenticated)

  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticated == true) {
      navigate("/")
    }
    else {
      navigate("/login")
    }
  }, [isAuthenticated])



  return (
    <>
      <div className="w-full">
        <div className="flex flex-row relative w-full  gap-80 mt-25">
          <img src="/Assets/Sideimg.png" className=" object-contain" />
          <div className="flex flex-col mt-22 gap-2">
            <span className="text-[36px] font-medium ">Create an account</span>
            <span className="text-[18px] font-normal">Enter your details below</span>
            <div className="flex-col gap-3 mt-8 flex ">

              <input
                type="email"
                onChange={(e) => handleChange(e)}
                placeholder="Email or Phone Number"
                name="email"
                className="border-b-1 pb-2 outline-0 text-[#7D8184] text-[16px] p-2 border-gray-300"

              />
              <div className=" relative w-full max-w-md ">
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => handleChange(e)}
                  placeholder="Password"
                  name="password"
                  className="border-b-1 pb-2 outline-0 text-[#7D8184] text-[16px] p-2 w-full border-gray-300 "
                />
                <img
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer  text-[16px] w-[20px] h-[20px]"
                  src={showPassword ? "/Assets/hide.png" : "/Assets/visible.png"}
                />

              </div>
              <div className="flex-row gap-7  items-center flex">
                <div className=" h-[56px] w-[143px] text-center  cursor-pointer p-4.5 bg-[#DB4444] rounded-[6px] mt-6" onClick={()=>handleLogin()}>
                  <button


                    className="text-white text-[16px] font-semibold cursor-pointer">Log in</button>

                </div>  <span className="text-[17px] text-[#DB4444] text-center cursor-pointer mt-6">Forget Password?</span></div>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-[#747373] text-[16px] font-medium">Go back to</span>
              <div className="underline decoration-[1px]  cursor-pointer text-[16px] font-medium decoration-gray-900 underline-offset-4">
                {Sign.map((signup) => (

                  <span
                    key={signup.path}
                    onClick={() => navigate(`${signup.path}`)}
                  >
                    {signup.name}
                  </span>
                )

                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AdminLogin;
