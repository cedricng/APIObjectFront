import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import axios from '../API/axios';
import "./../Signup/Signup.css";




const CreateObject = () => {
  let token
  let id
  
  token=localStorage.getItem("token");//jwtDecode(token);
  id=localStorage.getItem("id");
  console.log("id");
  const createObject = async values => {
    // create an object with the form informations
    
    
    const thing={
        title:values.title,
        description: values.description,
        userId: id,
        imageUrl: values.imageUrl,
        price: values.price
    };
    console.log(thing);
    const headers= {
      'Authorization': token
    }
    try{
    await axios.post('/stuff', thing,{headers});
    window.location='/home';
    }catch(err){console.log(err)}
    

    
  };

  return (
    <div>
      <h1 className="form__title">Create an object</h1>
      <Formik
        initialValues={{ title: "", description: "" ,imageUrl: "",price:0}}
        
        onSubmit={createObject}
      >
        {({ errors, touched }) => (
          <Form className="form">
                          <h2>Title </h2>

            <Field
              autoComplete={"off"}
              className="form__input"
              name="title"
              placeholder="enter the name of the object"
              type="text"
            />
                          <h2>Description </h2>

            <Field
              autoComplete={"off"}
              className="form__input"
              name="description"
              placeholder="enter the description of the object"
              type="text"
            />
                          <h2>Image </h2>

            <Field
              autoComplete={"off"}
              className="form__input"
              name="imageUrl"
              placeholder="enter the url of the image"
              type="text"
            />
              <h2>Price</h2>

            <Field
              autoComplete={"off"}
              className="form__input"
              name="price"
              placeholder="enter the price"
              type="number"
            />
            
            <button className="btn" type="submit">
              Create Object
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateObject;
