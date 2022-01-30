import React, { Component } from "react";
import axios from '../API/axios';
import { Formik, Field, Form, ErrorMessage } from "formik";

import Item from "../Item/Item.js";
import '../Signup/Signup.css';

class ItemDetail extends Component{
  constructor(){
    super();
    this.state={
      token:localStorage.getItem("token"),
      userId:localStorage.getItem("id"),
      stuff:{},
      itemID:"",
      imageUrl:""
    }

  }
  modifyObject = async (values) => {
    // modify an object with the form informations
    
    
    const thing={
        title:values.title,
        description: values.description,
        userId: this.state.userId,
        imageUrl: values.imageUrl,
        price: values.price
    };
    console.log(thing);
    const headers= {
      'Authorization': this.state.token
    }
    try{
    await axios.put('/stuff/'+this.state.itemID, thing,{headers});
    window.location='/home';
    }catch(err){console.log(err)}
    

    
  };
  deleteObject = async (values) => {
    // delete an object from an ID 
    const headers= {
      'Authorization': this.state.token
    }
    const data = {
      id: this.state.itemID,
    };
    
    await axios.delete('/stuff/'+this.state.itemID,{headers},{data});
    window.location='/home';
    

    
  };
  async componentDidMount(){
    const itemID = this.props.itemId;
    console.log(itemID);
    this.setState({itemID});
    if(this.state.token){
      const headers= {
        'Authorization': this.state.token
      }
      const params = {
        id: itemID,
      };
      const stuff=await axios.get('/stuff/'+itemID, {headers,params});
      this.setState({stuff})
      
    }
  }

  render(){
    if(this.state.token && !this.state.stuff.data){
      return <div className="Loading">Loading</div>
    }
    else if(this.state.token && this.state.stuff.data){
      const data=this.state.stuff.data;
      return (
     
        <div>
        <h1 className="form__title">Modify or delete</h1>
        <Formik
          initialValues={{ title: data.title, 
            description: data.description ,
            imageUrl: data.imageUrl,
            price:data.price}}
          
          onSubmit={this.modifyObject}
        >
          
          {({ errors, touched }) => (
            
            <Form className="form">
              <h2>Title </h2>
              <Field
                autoComplete={"off"}
                className="form__input"
                name="title"
                //placeholder="enter the name of the object"
                type="text"
              />
              <h2>Description </h2>
              <Field
                autoComplete={"off"}
                className="form__input"
                name="description"
                //placeholder="enter the description of the object"
                type="text"
              />
              <h2>Image</h2>
              <Field
                autoComplete={"off"}
                className="form__input"
                name="imageUrl"
                //placeholder="enter the url of the image"
                type="text"
              
              />
              <h2>Price</h2>
              <Field
                autoComplete={"off"}
                className="form__input"
                name="price"
                //placeholder="enter the price"
                type="number"
              />
              
              <button className="btn" type="submit">
                Modify
              </button>
              <button  className='btn' variant="contained" 
              color="secondary"
              onClick={this.deleteObject} >
              Delete
              </button>
            </Form>
          )}
        </Formik>
        </div>
        );
    }
    else{
      return <h1>Error: Object Not Found</h1>
    }
  }
}


export default ItemDetail;
