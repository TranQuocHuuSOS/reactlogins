import React, { Component , useContext} from "react";
import { CartContext } from "./CartContext";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import swal from "sweetalert";
const successAlert = (product) => {
  swal({
    title: "Thank you!",
    text: `You bought a ${product.name}! Your order is processing!`,
    icon: "success",
  });

  // Lấy danh sách sản phẩm đã chọn từ localStorage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  // Thêm sản phẩm mới vào danh sách
  cartItems.push(product);
  // Cập nhật danh sách sản phẩm đã chọn trong localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

class HomeUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      keyword: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        console.log(res);
        this.setState({
          products: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { products, keyword } = this.state;
    const search = products.filter((product) => {
      const productName = product.name.toLowerCase();
      const lowercaseKeyword = keyword.toLowerCase();
      return productName.includes(lowercaseKeyword);
    });

    return (
      <React.Fragment>
        <div>
          <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <div className="banner">
                  <img
                    src="https://bizweb.dktcdn.net/100/438/465/files/banh-ngot-5.jpg?v=1669955176914"
                    alt="height:300px; width: 100%;"
                  />
                  {/* <Slider {...settings}>
                    <div>
                      <img src="https://anhquanbakery.com/uploads/article/nhung-loai-banh-ngot-noi-tieng-tren-the-gioi-1591093362.jpg" alt="height:500px" />
                    </div>
                    <div>
                      <img src="https://bizweb.dktcdn.net/100/438/465/files/banh-ngot-5.jpg?v=1669955176914" alt="height:500px" />
                    </div>
                  </Slider> */}
                </div>
                <div className="mt-3 float-left">
                  <input
                    className="form-control search mb-3 ml-5"
                    name="keyword"
                    value={keyword}
                    onChange={this.onChange}
                    type="search"
                    placeholder="Search cakes"
                    aria-label="Search"
                  />
                </div>
                <h2>
                  <b>Các loại bánh tại cửa hàng</b>
                </h2>
                <div className="card-container">
                  {search.length > 0 ? (
                    search.map((product, index) => (
                      <ItemCard key={index} index={index} product={product} />
                    ))
                  ) : (
                    <p>No products found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </React.Fragment>
    );
  }
}

class ItemCard extends Component {
  render() {
    const { product, index } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <img src={product.image} height="200px" width="100%" alt="" />
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Loại Sản Phẩm: {product.name_category}</p>

          <p className="card-text">Xuất xứ: {product.origin}</p>
          <div className="card-text">
            Tình Trạng:{" "}
            <span
              className={
                product.tinhtranghang === true
                  ? "badge bg-success"
                  : "badge bg-danger"
              }
            >
              {product.tinhtranghang === true ? "Còn hàng" : "Hết hàng"}
            </span>
          </div>
          <div className="card-buttons">
            <NavLink to={`/Detail/${product.id}`} className="btn btn-primary">
              Chi tiết
            </NavLink>
            <NavLink to={{ pathname: "/Basket", state: { product } }}>
              <button
                type="button"
                className="btn btn-primary ml-1"
                onClick={() => successAlert(product.name)}>
                Đặt bánh
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeUser;
