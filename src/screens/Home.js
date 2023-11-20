import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";



export default function Home() {

  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    // console.log(response[0],response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  },[])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade carouseldesign "
        data-bs-ride="carousel"
       
      >
        <div className="carousel-inner "   >
        
          <div className="carousel-item active carouselWidth "data-bs-interval="3000" >
            <img
              src="//dvaraedairy.myshopify.com/cdn/shop/files/Banner_-_Vimicell.jpg?v=1678875549&amp;width=1200"
              className="d-block w-100  "
            
              alt="..."
            />
          </div>
          <div className="carousel-item carouselWidth" data-bs-interval="3000">
            <img
              src="https://dvaraedairy.myshopify.com/cdn/shop/files/Banner_-_New_Liv.jpg?v=1678875549"
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item carouselWidth" data-bs-interval="3000">
            <img
              src="https://dvaraedairy.myshopify.com/cdn/shop/files/Banner_-_Breed_Ezy.jpg?v=1678875537"
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item carouselWidth" data-bs-interval="2000">
            <img
              src="https://dvaraedairy.myshopify.com/cdn/shop/files/Banner_-_Vimical.jpg?v=16788755497"
              className="d-block w-100 fit-img"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className='container'>
        {
          foodCat !==[] ? foodCat.map((data)=>{
            return ( <div className="row mb-3">
              <div key={data._id} className="fs-3 m-3">
                {data.CategoryName}
                </div>
                <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                {foodItem !==[]? foodItem.filter((item)=>
                  item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                ).map(filterItems=>{
                  return (
                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                      {console.log(filterItems)}
                      <Card foodItem ={filterItems} options={filterItems.options[0]} />
                      </div>
                  )
                }): 
                
                <div>No Such Data Found</div>
               
              }</div> 
            )
          } ): ""
        }
        
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}



