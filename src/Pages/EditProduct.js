import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
const successAlert = (name) => {
    swal({
      title: "Thank you!",
      text: `You updated a ${name}! Your order is processing!`,
      icon: "success",
    });
  };
function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [name_category, setName_category] = useState("");
    const [color, setColor] = useState("");
    const [material, setMaterial] = useState("");
    const [expiry_date, setExpiry_date] = useState("");
    const [origin, setOrigin] = useState("");
    const [tinhtranghang, setTinhtranghang] = useState("");
    const [description, setDescription] = useState("");
  
    useEffect(() => {
      fetchProduct();
    }, []);
  
    const fetchProduct = () => {
      axios
        .get(`http://localhost:3000/products/${id}`)
        .then((res)=>{
          const productData = res.data;
          setProduct(productData);
          setName(productData.name || "");
          setPrice(productData.price || 0);
          setImage(productData.image || "");
          setName_category(productData.name_category || "");
          setColor(productData.color || "");
          setMaterial(productData.material || "");
          setExpiry_date(productData.expiry_date || "");
          setOrigin(productData.origin || "");
          setTinhtranghang(productData.tinhtranghang || "");
          setDescription(productData.description || "");
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    const onSave = (event) => {
      event.preventDefault();
  
      const updatedProduct = {
        name: name,
        price: price,
        image: image,
        name_category: name_category,
        color: color,
        material: material,
        expiry_date: expiry_date,
        origin: origin,
        tinhtranghang: tinhtranghang,
        description: description,
      };
  
      axios
        .put(`http://localhost:3000/products/${product.id}`, updatedProduct)
        .then((res) => {
          toast.success("Cập nhật sản phẩm thành công", {});
          window.location.href = "/Home";
        })
        .catch((err) => {
          console.log(err);
        });
    };
  return (
    <div>
      <h1>Chỉnh sửa sản phẩm</h1>
      {product ? (
        <form onSubmit={onSave}>
          <div>
            <label>Tên sản phẩm:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value )}
            />
          </div>
          <div>
            <label>Giá:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice( e.target.value )}
            />
          </div>
          <div>
            <label>Ảnh:</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value )}
            />
          </div>
          <div>
            <label>Danh mục:</label>
            <input
              type="text"
              value={name_category}
              onChange={(e) => setName_category(e.target.value )}
            />
          </div>
          <div>
            <label>Màu sắc:</label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor( e.target.value )}
            />
          </div>
          <div>
            <label>Chất liệu:</label>
            <input
              type="text"
              value={material}
              onChange={(e) => setMaterial( e.target.value )}
            />
          </div>
          <div>
            <label>Ngày hết hạn:</label>
            <input
              type="text"
              value={expiry_date}
              onChange={(e) => setExpiry_date( e.target.value )}
            />
          </div>
          <div>
            <label>Xuất xứ:</label>
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin( e.target.value )}
            />
          </div>
          <div>
            <label>Tình trạng hàng:</label>
            <input
              type="text"
              value={tinhtranghang}
              onChange={(e) => setTinhtranghang( e.target.value )}
            />
          </div>
          <div>
            <label>Mô tả:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value )}
            />
          </div>
          <button type="submit" onClick={() => successAlert(name)}>Lưu</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default EditProduct;

