// import authCSS from './auth.module.css';
// import { FaEye,FaEyeSlash } from "react-icons/fa";
// import { useState } from "react";

// const Signup = () => {
//     const [isHiddenPassword, setIsHiddenPassword]=useState(true);
//     const [isHiddenConPassword, setIsHiddenConPassword]=useState(true);

//     const [password,setPassword]= useState("");
//     const [confirmPassword,setConfirmPassword]= useState("");

//     return (

//         <section className={authCSS.body}>

//             <div className={authCSS.container}>

//                 <div className={authCSS.header}>
//                     <p>Sign Up</p>
//                 </div>

//                 <form className={authCSS.form}>

//                     <div className={`${authCSS.input_field} ${authCSS.three_field}`} >
//                         <label htmlFor="">First Name</label>
//                         <input type="text" placeholder="First Name"/>
//                     </div>

//                     <div className={`${authCSS.input_field} ${authCSS.three_field}`}>
//                         <label htmlFor="">Second Name</label>
//                         <input type="text" placeholder="Last Name"/>
//                     </div>

//                     <div  className={`${authCSS.input_field} ${authCSS.three_field}`}>
//                         <label htmlFor="">Nickname</label>
//                         <input type="text" placeholder="Nickname Name"/>
//                     </div>

//                     <div className={`${authCSS.input_field} ${authCSS.half_field}`}>
//                         <label htmlFor="">National Id</label>
//                         <input type="text" placeholder="Enter your national Id"/>
//                     </div>

//                     <div className={`${authCSS.input_field} ${authCSS.half_field}`}>
//                         <label htmlFor="">Email</label>
//                         <input type="email" placeholder="Enter your email Address"/>
//                     </div>

//                     <div className={`${authCSS.input_field} ${authCSS.half_field}`}>
//                         <label htmlFor="">Password</label>
//                         <div className={authCSS.relative}>
//                             <input
//                                 className={authCSS.pass_input}
//                                 onChange= {(e) => setPassword(e.target.value)}
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

//                     <div className={`${authCSS.input_field} ${authCSS.half_field}`}>
//                         <label htmlFor="">Confirm Yor Password</label>
//                         <div className={authCSS.relative}>
//                             <input
//                                 className={authCSS.pass_input}
//                                 onChange= {(e) => setConfirmPassword(e.target.value)}
//                                 type= {isHiddenConPassword ?"password":"text"}
//                                 placeholder="Confirm Your Password"
//                                 id="confirmPassword"
//                                 name="confirmPassword"
//                             />

//                             <div className={authCSS.eye_container}>
//                                 {confirmPassword && (
//                                     isHiddenConPassword ?
//                                     <FaEye onClick={() => setIsHiddenConPassword(false)} className={authCSS.iconEyes} />:
//                                     <FaEyeSlash onClick={() => setIsHiddenConPassword(true)} className={authCSS.iconEyes} />
//                                 )}
//                             </div>

//                         </div>
//                     </div>

//                     <button className={authCSS.submit} type="submit">Sign Up</button>

//                     <div className={authCSS.submit_container}>
//                         <p className={authCSS.login}> Already have an account?<a href="">Log In</a></p>
//                     </div>

//                 </form>

//             </div>

//         </section>

//     )
// }

// export default Signup

import authCSS from "./auth.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const [isHiddenConPassword, setIsHiddenConPassword] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    nickname: "",
    nationalId: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className={authCSS.body}>
      <div className={authCSS.container}>
        <div className={authCSS.header}>
          <p>Sign Up</p>
        </div>

        <form className={authCSS.form} onSubmit={handleSubmit}>
          <div className={`${authCSS.input_field} ${authCSS.three_field}`}>
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={`${authCSS.input_field} ${authCSS.three_field}`}>
            <label>Second Name</label>
            <input
              type="text"
              placeholder="Last Name"
              name="secondName"
              value={formData.secondName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={`${authCSS.input_field} ${authCSS.three_field}`}>
            <label>Nickname</label>
            <input
              type="text"
              placeholder="Nickname"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          </div>

          <div className={`${authCSS.input_field} ${authCSS.half_field}`}>
            <label>National ID</label>
            <input
              type="text"
              placeholder="Enter your national ID"
              name="nationalId"
              value={formData.nationalId}
              onChange={handleChange}
              required
            />
          </div>

          <div className={`${authCSS.input_field} ${authCSS.half_field}`}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={`${authCSS.input_field} ${authCSS.half_field}`}>
            <label>Password</label>
            <div className={authCSS.relative}>
              <input
                className={authCSS.pass_input}
                type={isHiddenPassword ? "password" : "text"}
                placeholder="Enter Your Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div className={authCSS.eye_container}>
                {formData.password &&
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

          <div className={`${authCSS.input_field} ${authCSS.half_field}`}>
            <label>Confirm Password</label>
            <div className={authCSS.relative}>
              <input
                className={authCSS.pass_input}
                type={isHiddenConPassword ? "password" : "text"}
                placeholder="Confirm Your Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <div className={authCSS.eye_container}>
                {formData.confirmPassword &&
                  (isHiddenConPassword ? (
                    <FaEye
                      onClick={() => setIsHiddenConPassword(false)}
                      className={authCSS.iconEyes}
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setIsHiddenConPassword(true)}
                      className={authCSS.iconEyes}
                    />
                  ))}
              </div>
            </div>
          </div>

          <button className={authCSS.submit} type="submit">
            Sign Up
          </button>

          <div className={authCSS.submit_container}>
            <p className={authCSS.login}>
              Already have an account? <a href="/">Log In</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
