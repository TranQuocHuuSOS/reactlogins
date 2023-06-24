import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

import "bootstrap/dist/css/bootstrap.css";
const successAlert = (name) => {
  swal({
    title: "Thank you!",
    text: `You added a ${name}! Your order is processing!`,
    icon: "success",
  });
};
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      image: "",
      color: "",
      name_category: "",
      material: "",
      expiry_date: "",
      origin: "",
      description: "",
      tinhtranghang: true,
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      axios
        .get(`http://localhost:3000/products/${id}`)
        .then((res) => {
          var data = res.data;
          this.setState({
            id: data.id,
            name: data.name,
            price: data.price,
            image: data.image,
            color: data.color,
            name_category: data.name_category,
            material: data.material,
            expiry_date: data.expiry_date,
            origin: data.origin,
            description: data.description,
            tinhtranghang: data.tinhtranghang,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  onChange = (event) => {
    const { name, type, value } = event.target;

    if (name === "tinhtranghang") {
      this.setState({
        [name]: value === "true",
      });
    } else if (type === "file") {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.setState({
          [name]: reader.result,
        });
      };

      reader.readAsDataURL(file);
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  onSave = (e) => {
    e.preventDefault();
    const {
      id,
      name,
      price,
      image,
      name_category,
      color,
      material,
      expiry_date,
      origin,
      description,
      tinhtranghang,
    } = this.state;

    const productData = {
      name,
      price,
      image,
      color,
      name_category,
      material,
      expiry_date,
      origin,
      description,
      tinhtranghang,
    };

    if (id) {
      axios
        .put(`http://localhost:3000/products/${id}`, productData)
        .then((res) => {
         
          window.location.href = "/Home"; // Chuyển hướng đến trang chủ
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      if (
        name === "" &&
        price === "" &&
        image === "" &&
        material === "" &&
        expiry_date === ""
      ) {
      
        window.location.href = "/"; // Chuyển hướng đến trang chủ
      } else {
        axios
          .post("http://localhost:3000/products", productData)
          .then((res) => {
          
            window.location.href = "/Home"; // Chuyển hướng đến trang chủ
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  };

  onClear = () => {
    this.setState({
      name: "",
      price: "",
      image: "",
      color: "",
      name_category: "",
      material: "",
      expiry_date: "",
      origin: "",
      description: "",
      tinhtranghang: true,
    });
  };

  render() {
    const {
      name,
      price,
      image,
      name_category,
      color,
      material,
      expiry_date,
      origin,
      description,
      tinhtranghang,
    } = this.state;
    return (
      <React.Fragment>
        <div>
          <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="contentt">
                <div className="panel panel-warning col-md-8 ml">
                  <div className="container">
                    <div className="panel-body mt-4">
                      <form onSubmit={this.onSave}>
                        <div className="form-group">
                          <label>Tên Sản phẩm :</label>
                          <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label>Giá Sản phẩm ($) :</label>
                          <input
                            type="number"
                            name="price"
                            value={price}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label>Chọn Ảnh :</label>
                          <input
                            type="file"
                            name="image"
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </div>
                        <label>Loại sản phẩm:</label>
                        <select
                          className="form-control"
                          name="name_category"
                          value={name_category}
                          onChange={this.onChange}
                          required="required"
                        >
                          <option value="sản phẩm mới">mới</option>
                          <option value="sản phẩm hot">hot</option>
                          <option value="sản phẩm khuyến mãi">
                            khuyến mãi
                          </option>
                        </select>
                        <div className="form-group">
                          <label>Màu bánh :</label>
                          <input
                            type="text"
                            name="color"
                            value={color}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label>Nguyên liệu :</label>
                          <input
                            type="text"
                            name="material"
                            value={material}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label>Hạn sữ dụng :</label>
                          <input
                            type="date"
                            name="expiry_date"
                            value={expiry_date}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label>Xuất xứ :</label>
                          <input
                            type="text"
                            name="origin"
                            value={origin}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </div>
                        <label>Tình trạng hàng :</label>
                        <select
                          className="form-control"
                          name="tinhtranghang"
                          value={tinhtranghang}
                          onChange={this.onChange}
                          required="required"
                        >
                          <option value={true}>Còn hàng</option>
                          <option value={false}>Hết hàng</option>
                        </select>
                        <div className="form-group">
                          <label>Mô tả :</label>
                          <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </div>
                        <br />
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary" onClick={() => successAlert()}>
                            Lưu
                          </button>
                          &nbsp;
                          <button
                            type="button"
                            onClick={this.onClear}
                            className="btn btn-primary"
                          >
                            Clear
                          </button>
                          <a href="#" className="btn btn-primary ml-1">
                            Trở về
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Add;
