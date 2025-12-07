import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'
import Section from './Section'
import "./styles.css";
export default class Layout extends Component {
  render() {
    return (
      <div>
       <Nav></Nav>
       <Header></Header>
       <Section></Section>
       <Footer></Footer>
      </div>
    )
  }
}
