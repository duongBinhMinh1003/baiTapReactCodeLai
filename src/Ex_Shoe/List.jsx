import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
  render() {
    let { list } = this.props;
    console.log(this.props.list);
    return (
      <div className="col-6 row">
        {this.props.list.map((item) => {
          return (
            <Item
              handleAddToCart={this.props.handleAddToCart}
              key={item.id}
              data={item}
            ></Item>
          );
        })}
      </div>
    );
  }
}
