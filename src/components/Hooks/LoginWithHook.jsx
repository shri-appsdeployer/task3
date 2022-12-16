import React, { useRef } from "react";
import "../../App.css";
import { Toast } from "bootstrap";

const LoginWithHook = ({ cred, setCred }) => {
  // Modal working Script
  const toastLiveExample = document.getElementById("liveToast");
  const toastTrigger = document.getElementById("liveToastBtn");
  if (toastTrigger) {
    toastTrigger.addEventListener("click", () => {
      const toast = new Toast(toastLiveExample);
      toast.show();
    });
  }
  // Modal working Script

  const email = useRef(" ");
  const pass = useRef(" ");

  const handleSubmit=(e)=>{
    e.preventDefault()
    setCred([...cred,{
        email:email.current.value,
        password:pass.current.value
    }])
    console.log(cred)
    console.log(email.current.value)
    console.log(pass.current.value)
  }

  return (
    <>
      <form className="m-auto col-4 my-4">
        <h1>Login Form </h1>
        <h5>LoginWithHook -useRef</h5>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            ref={email}
            type="email"
            className="form-control"
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
            ref={pass}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            autoComplete="on"
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary" id="liveToastBtn">
          Submit
        </button>
      </form>
      {/* toast */}
      <div className="toast-container position-fixed bottom-0 end-0 p-3 ">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header bg-success text-white">
            <strong className="me-auto">Login Success!</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body bg-success text-white">
            Credentials verified .
          </div>
        </div>
      </div>
      {/* toast */}
    </>
  );
};

export default LoginWithHook;
