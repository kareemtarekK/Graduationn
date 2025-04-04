import authCSS from './auth.module.css';
const Signup = () => {

    return (

        <section className={authCSS.body}>

            <div className={authCSS.container}>

                <div className={authCSS.header}>
                    <p>Sign Up</p>
                </div>

                <form>

                    <div className={`${authCSS.input_field} ${authCSS.three_field}`} >
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder="First Name"/>
                    </div>

                    <div className={`${authCSS.input_field} ${authCSS.three_field}`}>
                        <label htmlFor="">Last Name</label>
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
                        <input type="password" placeholder="Enter your password"/>
                    </div>

                    <div className={`${authCSS.input_field} ${authCSS.half_field}`}>
                        <label htmlFor="">Confirm Yor Password</label>
                        <input type="password" placeholder="Confirm your Password"/>
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