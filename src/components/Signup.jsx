import './Signup.css'

const Signup = () => {
  return (
    <div className="container">
        <div className="header">
            Sign Up
        </div>

        <form action="#">
        <div className="fields">
            
        

            {/* input 1 */}


            <div className="input-field names-field" >
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="First Name"/>
            </div>

            {/* input 2 */}
            <div  className="input-field names-field">
            <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Last Name"/>
            </div>
             {/* input 3 */}
             
             <div  className="input-field names-field">
             <label htmlFor="">Nickname</label>
                <input type="text" placeholder="Nickname Name"/>
            </div>

            <div className="input-field full-input">
            <label htmlFor="">Enter Your National Id</label>
                <input type="text" placeholder="National Id"/>
            </div>
             {/* input 4 */}

             <div className="input-field">
             <label htmlFor="">Enter Your Email</label>
                <input type="email" placeholder="Email Address"/>
            </div>

             {/* input 5*/}
             <div className="input-field">
             <label htmlFor="">Enter Yor Password</label>
                <input type="password" placeholder="Password"/>
            </div>

             {/* input 6 */}
             <div className="input-field">
             <label htmlFor="">Confirm Yor Password</label>
                <input type="password" placeholder="confirm Password"/>
            </div>


             
        </div>

        <div className="submit-container">

        <div className='submit'>Sign Up</div>
        <div className='login'> Already have an account?<a href="">Log In</a></div>
        </div>
    </form>
    </div>

  )
}

export default Signup