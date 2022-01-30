import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import axios from '../API/axios';
import "./../Signup/Signup.css";


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("please fill in your email")
    .required("email can be empty"),
  password: Yup.string()
    .min(6, "password can not be less than 6")
    .required("please enter your password")
});

const Login = () => {
  let loginError
  const login = async values => {
    // login a user with needed info
    const user={
        email:values.email,
        password: values.password
    };
    try{
    const {data:token} =await axios.post('/auth/login', user);
    console.log(token);
    localStorage.setItem("token",token.token);
    localStorage.setItem("user",token.username);
    localStorage.setItem("id",token.userId);

    window.location='/home';
    }catch(err){
      loginError=true;
    }
    
   
  };

  return (
    <div>
      <h1 className="form__title">Login Up</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={login}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <Field
              autoComplete={"off"}
              className="form__input"
              name="email"
              placeholder="enter you email"
              type="email"
            />
            <span className={errors.email ? "error" : "no-error"}>
              {errors.email && touched.email ? errors.email : null}
            </span>
            <Field
              autoComplete={"off"}
              className="form__input"
              name="password"
              placeholder="enter you password"
              type="password"
            />
            <span className={errors.password ? "error" : "no-error"}>
              {errors.password && touched.password ? errors.password : null}
            </span>
            <button className="btn" type="submit">
              Login
            </button>
            {loginError?<label>Invalid email or password</label>:null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
