import React, { Component } from "react";

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    this.setState({
      cartItems: cartItems,
    });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        {cartItems.length > 0 ? (
          <div>
            <h2>Giỏ hàng</h2>
            {cartItems.map((product, index) => (
              <div key={index}>
                <p>ID: {product.id}</p>
                <p>Tên sản phẩm: {product.name}</p>
                {/* Hiển thị các thông tin khác về sản phẩm */}
              </div>
            ))}
          </div>
        ) : (
          <p>Giỏ hàng trống.</p>
        )}
      </div>
    );
  }
}

export default Basket;
