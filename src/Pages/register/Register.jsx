import './Register.css'

function Register() {
  return (
    <>
 <div className="login">
  <div className="loginWrapper">
    <div className="loginLeft">
      <h3 className="loginLogo">FaceBook</h3>
      <span className="loginDec">connect with the world around u on FaceBook</span> 
    </div>
    <div className="loginRight">
      <div className="loginBox">
        <input type="text" className='loginInput'  placeholder='username'/>
        <input type="Email" className='loginInput' placeholder='Email'/>
        <input type="password" className='loginInput' placeholder='password'/>
        <input type="password" className='loginInput' placeholder='password agian'/>
        <button className="loginButton">Sigh Up</button>
        <button className='loginRegisterButton'>Log in into Account</button>
      </div>
    </div>
  </div>
 </div>
 </>
  )
}

export default Register