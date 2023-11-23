import React, { Component } from 'react'
import Cart from './Cart'
import { shoeArr } from './data'
import List from './List'

export default class ExShoe extends Component {
 state = {
    shoeArr : shoeArr,
    cart : [],
 }
 handleAddToCart = (shoe) => {
  // let cloneCart = [...this.state.cart];
  // let index = cloneCart.findIndex((item)=>{
  //     return item.id == shoe.id;
  // })
  // console.log('index: ', index);  
  // if(index == -1){
  // //    th1 sp chua co trong gio hang
  // let newShoe = {...shoe,soLuong:1};
  // cloneCart.push(newShoe)
  // }
  // else{
  //     // th2: update truong so soLuong
  //     cloneCart[index].soLuong++;
  // }
  
  // this.setState({cart:cloneCart});
let cloneCart = [...this.state.cart];
let index = cloneCart.findIndex((item)=>{
  return item.id == shoe.id;
})
console.log('index: ', index);
if(index == -1){
let newShoe = {...shoe,soLuong:1};
cloneCart.push(newShoe)
}
else{
  cloneCart[index].soLuong++;
}

this.setState({cart:cloneCart})

  }

  handleDelete = (id)=> {
    // filter
   let newCart =this.state.cart.filter((item)=>{
    return id != item.id
   })
    this.setState({cart:newCart})
    
    
    
    }

 
    render() {
   
    return (
      <div className='row'>
        <Cart handleDelete={this.handleDelete} cart = {this.state.cart}></Cart>
        <List handleAddToCart={this.handleAddToCart} list = {this.state.shoeArr} ></List>
      </div>
    )
  }
}
