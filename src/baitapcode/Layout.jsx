import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Card from './Card'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Card></Card>
        <Footer></Footer>
        
      </div>
    )
  }
}
