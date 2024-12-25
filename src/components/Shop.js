// import React, {useEffect, useState} from 'react';
import React,{useState, useEffect} from "react";
import axios from "axios";

const Shop = () => {
  const [products, setProducts]= useState([])
  const[image1, setImage1] = useState(null)
  const[image2, setImage2] = useState(null)
  const[image3, setImage3] = useState(null)
  const[image4, setImage4] = useState(null)

  const getAllProducts = async () => {
    try{
      const result = await axios.get("https://fakestoreapi.com/products")
      setProducts(result.data)
        }catch(err){
          console.log(err)
        }
  }

  const getImage1 = async () => {
    try
    {
      const respones = await axios.get("https://fakestoreapi.com/products/2")
      setImage1(respones.data.image)
    }catch(err){
       console.log(err)
    }
  }

  const getImage2 = async () => {
    try
    {
      const respones = await axios.get("https://fakestoreapi.com/products/6")
      setImage2(respones.data.image)
    }catch(err){
       console.log(err)
    }
  }

  const getImage3 = async () => {
    try
    {
      const respones = await axios.get("https://fakestoreapi.com/products/14")
      setImage3(respones.data.image)
    }catch(err){
       console.log(err)
    }
  }

  const getImage4 = async () => {
    try
    {
      const respones = await axios.get("https://fakestoreapi.com/products/20")
      setImage4(respones.data.image)
    }catch(err){
       console.log(err)
    }
  }

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    getAllProducts();
    getImage1()
    getImage2()
    getImage3()
    getImage4()
  }, []);

  return (
    <>
    <div className="site-blocks-cover inner-page" data-aos="fade">
    <div className="container">
      <div className="row">
        <div className="col-md-6 ml-auto order-md-2 align-self-start">
          <div className="site-block-cover-content">
            <h2 className="sub-title">#New Summer Collection 2019</h2>
            <h1>Arrivals Sales</h1>
            <p>
              <a href="#" className="btn btn-black rounded-0">
                Shop Now
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6 order-1 align-self-end">
          <img src="images/model_4.png" alt="Image" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>  
  <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="title-section mb-5 col-12">
          <h2 className="text-uppercase">All Products</h2>
          <div class="d-flex">
            <div className="dropdown mr-1 ml-md-auto">
          <button
            type="button"
            className="btn btn-white btn-sm dropdown-toggle px-4"
            id="dropdownMenuOffset"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Catigory
          </button>
  
            <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
              <a className="dropdown-item" href="#">
                Men
              </a>
              <a className="dropdown-item" href="#">
                Women
              </a>
              <a className="dropdown-item" href="#">
                Jewelery
              </a>
              <a className="dropdown-item" href="#">
                Electronic
              </a>
              </div>
            </div> 
            </div>
          </div>
        

      </div>
      <div className="row">
        {products?.map((product, index) => {
          return(
            <div className="col-lg-4 col-md-6 item-entry mb-4" key={index}>
          <a href={`/product_detail?id=${product.id}`} className="product-item md-height bg-gray d-block">
            <img src={product.image} alt="Image" className="img-fluid" />
          </a>
          <h2 className="item-title">
            <a href={`/product_detail?id=${product.id}`}>{product.title}</a>
          </h2>
          <strong className="item-price">{product.price}</strong>
        </div>
          )
        })}
      </div>
    </div>
  </div>
  <div className="site-section">
  <div className="container">
    <div className="title-section mb-5">
      <h2 className="text-uppercase">
        <span className="d-block">Discover</span> The Collections
      </h2>
    </div>
    <div className="row align-items-stretch">
      <div className="col-lg-4">
      <div className="product-item sm-height bg-gray mb-4">
          <a href="#" className="product-category">
          Women
            {/* Women <span>25 items</span> */}
          </a>
          <img src={image4} alt="Image" className="img-fluid" />
        </div>
        <div className="product-item sm-height bg-gray mb-4">
          <a href="#" className="product-category">
          Men
            {/* Men <span>25 items</span> */}
          </a>
          <img src={image1} alt="Image" className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="product-item sm-height bg-gray mb-4">
          <a href="#" className="product-category">
          Jewelery
            {/* Jewelery <span>25 items</span> */}
          </a>
          <img src={image2} alt="Image" className="img-fluid" />
        </div>
        <div className="product-item sm-height bg-gray">
          <a href="#" className="product-category">
          Electronic
            {/* Electronic <span>25 items</span> */}
          </a>
          <img src={image3} alt="Image" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</div>
</>

  )
}

export default Shop
