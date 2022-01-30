import React, { Component } from "react";
import axios from '../API/axios';


import Item from "../Item/Item.js";
import "./ItemList.css";


class Home extends Component{
  constructor(){
    super();
    this.state={
      token:localStorage.getItem("token"),
      stuff:{}
    }

  }

  async componentDidMount(){
    if(this.state.token){
      const headers= {
        'Authorization': this.state.token
      }
      try{const stuff=await axios.get('/stuff', {headers});
      this.setState({stuff})}
      catch(err){
        //disconnected
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("id");
        window.location.reload(false);
      }
    }
  }

  render(){
    if(this.state.token && !this.state.stuff.data){
      return <div className="Loading">Loading</div>
    }
    else if(this.state.token && this.state.stuff.data){
      const data=this.state.stuff.data;
      return (
     
        <div className="courses">
            {data.map(item => (
                <Item key={item._id} item={item} />
            ))}
        </div>
        );
    }
    else{
      return <h1>Home</h1>
    }
  }
}


export default Home;
