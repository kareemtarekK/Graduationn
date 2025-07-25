// import authCSS from './auth.module.css';
// import { FaEye,FaEyeSlash } from "react-icons/fa";

// import { useState } from "react";

// export default function Login() {

//     const [isHiddenPassword, setIsHiddenPassword]=useState(true);

//     const [password,setPassword]= useState("");

//     const handleOnchange = e =>{
//         setPassword(e.target.value)
//     }

//     return (
//         <section className={authCSS.body}>
//             <div className={authCSS.container} style={{width:'500px'}}>

//                 <div className={authCSS.header}>
//                     <p>Log in</p>
//                 </div>

//                 <form className={authCSS.form}>

//                     <div className={`${authCSS.input_field} ${authCSS.full_input}`} >
//                         <label htmlFor="">Email</label>
//                         <input type="email" placeholder="Enter Your Email"/>
//                     </div>

//                     <div className={`${authCSS.input_field} ${authCSS.full_input}`} >
//                         <label htmlFor="">Password</label>
//                         <div className={authCSS.relative}>
//                             <input
//                                 className={authCSS.pass_input}
//                                 onChange={handleOnchange}
//                                 type= {isHiddenPassword ?"password":"text"}
//                                 placeholder="Enter Your Password"
//                                 id="password"
//                                 name="password"
//                             />

//                             <div className={authCSS.eye_container}>
//                                 {password && (
//                                     isHiddenPassword ?
//                                     <FaEye onClick={() => setIsHiddenPassword(false)} className={authCSS.iconEyes} />:
//                                     <FaEyeSlash onClick={() => setIsHiddenPassword(true)} className={authCSS.iconEyes} />
//                                 )}
//                             </div>

//                         </div>
//                     </div>

//                     <div className={authCSS.forget} >
//                     <a  href="" >Forget Your Password? </a>
//                     </div>

//                     <button  className={authCSS.submit} type="submit">Log In</button>

//                     <div className={authCSS.submit_container}>
//                         <p className={authCSS.login}> Do not have an account?<a href="">Sign Up</a></p>
//                     </div>

//                 </form>
//             </div>

//         </section>
//     )
// }

import authCSS from "./auth.module.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function Login() {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        console.error("Login Failed:", data.message);
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error: ", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className={authCSS.body}>
      <div className={authCSS.container} style={{ width: "500px" }}>
        <div className={authCSS.header}>
          <p>Log in</p>
        </div>

        <form className={authCSS.form} onSubmit={handleSubmit}>
          <div className={`${authCSS.input_field} ${authCSS.full_input}`}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className={`${authCSS.input_field} ${authCSS.full_input}`}>
            <label>Password</label>
            <div className={authCSS.relative}>
              <input
                className={authCSS.pass_input}
                type={isHiddenPassword ? "password" : "text"}
                placeholder="Enter Your Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div className={authCSS.eye_container}>
                {password &&
                  (isHiddenPassword ? (
                    <FaEye
                      onClick={() => setIsHiddenPassword(false)}
                      className={authCSS.iconEyes}
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setIsHiddenPassword(true)}
                      className={authCSS.iconEyes}
                    />
                  ))}
              </div>
            </div>
          </div>

          <div className={authCSS.forget}>
            <a href="#">Forget Your Password?</a>
          </div>

          <button className={authCSS.submit} type="submit">
            Log In
          </button>

          <div className={authCSS.submit_container}>
            <p className={authCSS.login}>
              {" "}
              Don`t have an account? <a href="#">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
