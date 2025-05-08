import './Login.css'
function Login() {
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
      <input type="Email" className='loginInput' placeholder='Email'/>
      <input type="password" className='loginInput' placeholder='password'/>
        <button className="loginButton">log IN</button>
        <span className='loginForget'>Forget Password?</span>
        <button className='loginRegisterButton'>crate a new account</button>
      </div>
    </div>
  </div>
 </div>
 </>
  )
}

export default Login