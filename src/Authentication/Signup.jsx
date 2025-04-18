import authCSS from './auth.module.css';
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Signup = () => {
    const [isHiddenPassword, setIsHiddenPassword]=useState(true);
    const [isHiddenConPassword, setIsHiddenConPassword]=useState(true);
    
    const [password,setPassword]= useState("");
    const [confirmPassword,setConfirmPassword]= useState("");

    return (

        <section className={authCSS.body}>

            <div className={authCSS.container}>

                <div className={authCSS.header}>
                    <p>Sign Up</p>
                </div>

                <form className={authCSS.form}>

                    <div className={`${authCSS.input_field} ${authCSS.three_field}`} >
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder="First Name"/>
                    </div>

                    <div className={`${authCSS.input_field} ${authCSS.three_field}`}>
                        <label htmlFor="">Second Name</label>
                        <input type="text" placeholder="Last Name"/>
                    </div>

                    <div  className={`${authCSS.input_field} ${authCSS.three_field}`}>
                        <label htmlFor="">Nickname</label>
                        <input type="text" placeholder="Nickname Name"/>
                    </div>

                    <div className={`${authCSS.input_field} ${authCSS.half_field}`}>
                        <label htmlFor="">National Id</label>
                        <input type="text" placeholder="Enter your national Id"/>
                    </div>

                    <div className={`${authCSS.input_field} ${authCSS.half_field}`}>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Enter your email Address"/>
                    </div>

                    <div className={`${authCSS.input_field} ${authCSS.half_field}`}>
                        <label htmlFor="">Password</label>
                        <div className={authCSS.relative}>
                            <input 
                                className={authCSS.pass_input}
                                onChange= {(e) => setPassword(e.target.value)} 
                                type= {isHiddenPassword ?"password":"text"}
                                placeholder="Enter Your Password"
                                id="password"
                                name="password"
                            />

                            <div className={authCSS.eye_container}>
                                {password && (
                                    isHiddenPassword ?
                                    <FaEye onClick={() => setIsHiddenPassword(false)} className={authCSS.iconEyes} />:
                                    <FaEyeSlash onClick={() => setIsHiddenPassword(true)} className={authCSS.iconEyes} />
                                )}
                            </div>

                        </div>                    
                    </div>

                    <div className={`${authCSS.input_field} ${authCSS.half_field}`}>
                        <label htmlFor="">Confirm Yor Password</label>
                        <div className={authCSS.relative}>
                            <input 
                                className={authCSS.pass_input}
                                onChange= {(e) => setConfirmPassword(e.target.value)} 
                                type= {isHiddenConPassword ?"password":"text"}
                                placeholder="Confirm Your Password"
                                id="confirmPassword"
                                name="confirmPassword"
                            />

                            <div className={authCSS.eye_container}>
                                {confirmPassword && (
                                    isHiddenConPassword ?
                                    <FaEye onClick={() => setIsHiddenConPassword(false)} className={authCSS.iconEyes} />:
                                    <FaEyeSlash onClick={() => setIsHiddenConPassword(true)} className={authCSS.iconEyes} />
                                )}
                            </div>

                        </div>                    
                    </div>

                    <button className={authCSS.submit} type="submit">Sign Up</button>

                    <div className={authCSS.submit_container}>
                        <p className={authCSS.login}> Already have an account?<a href="">Log In</a></p>
                    </div>

                </form>

            </div>

        </section>

    )
}

export default Signup