import React, { Component } from "react";

export default class Item extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="col-3">
        <img className="w-100" src={this.props.data.image} alt="" />
        <h4>{this.props.data.name}</h4>
        <button
          onClick={() => {
            this.props.handleAddToCart(this.props.data);
          }}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
    );
  }
}
