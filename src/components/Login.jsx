import React, { useState } from "react";
import "../App.css";
import { Toast } from "bootstrap";



const Login = ({cred,setCred}) => {

  const toastLiveExample = document.getElementById('liveToast')
  const toastTrigger = document.getElementById('liveToastBtn')
  if (toastTrigger) {
     toastTrigger.addEventListener('click', () => {
    const toast = new Toast(toastLiveExample)
    toast.show()
  })
}

  

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const handleSubmit=(e)=>{
    e.preventDefault()
      setCred([...cred,{email:email,password:pass}])
      setEmail('')
      setPass('')
      console.log(cred)
  }

  return (
    <>
      <form className="m-auto col-4 my-4">
        <h1>Login Form</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={pass}
            onChange={(e)=>{setPass(e.target.value)}}
            id="exampleInputPassword1"
            autoComplete="on"
          />
        </div>
        <button  onClick={handleSubmit} className="btn btn-primary" id="liveToastBtn" >
          Submit
        </button>

     


      </form>
        {/* toast */}
            <div class="toast-container position-fixed bottom-0 end-0 p-3 ">
              <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header bg-success text-white">
                  <strong class="me-auto">Login Success!</strong>
                  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body bg-success text-white">
                  Credentials verified .
                </div>
              </div>
            </div>
        {/* toast */}
    </>
  );
};

export default Login;
