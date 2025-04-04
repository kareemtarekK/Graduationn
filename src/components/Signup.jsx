import './Signup.css'

const Signup = () => {
  return (

    <section className='body'>

        <div className="container">

            <div className="header">
                Sign Up
            </div>

            <form>

                <div className="input-field three-field" >
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder="First Name"/>
                </div>

                <div  className="input-field three-field">
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder="Last Name"/>
                </div>

                <div  className="input-field three-field">
                    <label htmlFor="">Nickname</label>
                    <input type="text" placeholder="Nickname Name"/>
                </div>

                <div className="input-field full-input">
                    <label htmlFor="">National Id</label>
                    <input type="text" placeholder="Enter your national Id"/>
                </div>

                <div className="input-field full-input">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter your email Address"/>
                </div>

                <div className="input-field half-field">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter your password"/>
                </div>

                <div className="input-field half-field">
                    <label htmlFor="">Confirm Yor Password</label>
                    <input type="password" placeholder="Confirm your Password"/>
                </div>

                <button className='submit' type="submit">Sign Up</button>

                <div className="submit-container">
                    <p className='login'> Already have an account?<a href="">Log In</a></p>
                </div>

            </form>
        </div>

    </section>

  )
}

export default Signup