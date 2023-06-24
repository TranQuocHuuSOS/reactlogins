import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


function Detail() {
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
    return (
      <div>
        <h1>Chi tiết sản phẩm</h1>
        {product ? (
          <form >
             <div>
              <p>Hình ảnh </p>
              <img style={{width:'100px', height: '100px'}} src={name}/>
            </div>
            <div>
              <label>Tên sản phẩm:</label>
              <input
                type="text"
                value={name}
                
              />
            </div>
            <div>
              <label>Giá:</label>
              <input
                type="number"
                value={price}
               
              />
            </div>
           
            <div>
              <label>Danh mục:</label>
              <input
                type="text"
                value={name_category}
              
              />
            </div>
            <div>
              <label>Màu sắc:</label>
              <input
                type="text"
                value={color}
              />
            </div>
            <div>
              <label>Chất liệu:</label>
              <input
                type="text"
                value={material}
              
              />
            </div>
            <div>
              <label>Ngày hết hạn:</label>
              <input
                type="text"
                value={expiry_date}
               
              />
            </div>
            <div>
              <label>Xuất xứ:</label>
              <input
                type="text"
                value={origin}
                
              />
            </div>
            <div>
              <label>Tình trạng hàng:</label>
              <input
                type="text"
                value={tinhtranghang}
               
              />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
             
              <textarea
                value={description}
             
              />
            </div>
           
          </form>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  
  export default Detail;