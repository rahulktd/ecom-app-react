import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { getProductId } from "../../ApiService/api";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductId(id);
      setProductDetails(data);
    };

    fetchProductDetails();
  }, [id]);

  const handleBuyNow = ()=>{
    window.confirm('Prodduct is out of stock')
  }

  return (
    <div className="product-details-container">
      <img src={productDetails.image} alt="image" className="product-image" />

      <div className="product-info">
        <h2 className="produt-title">{productDetails.title}</h2>

        <p className="product-description">{productDetails.description}</p>

        <p className="product-price">{productDetails.price}</p>

        <button onClick={handleBuyNow} className="buy-now-btn">Buy</button>

        <Link to="/">
          <button className="go-back-btn">Go back</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
