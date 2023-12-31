import React, { useEffect, useState ,useRef } from "react";
import { useDispatchCart,useCart } from "./ContextReducer";
import { useNavigate } from 'react-router-dom'

export default function Card(props) {

  let priceRef = useRef();
  let navigate = useNavigate();
  let dispatch = useDispatchCart();
  let data = useCart();
  let foodItem = props.foodItem;
let options = props.options;
let priceOption = Object.keys(options);
const [qty,setQty] =useState('1')
const [size,setSize] = useState("")

const handleClick = () => {
  if (!localStorage.getItem("authToken")) {
    navigate("/login")
  }
}
const handleQty = (e) => {
  setQty(e.target.value);
}
const handleOptions = (e) => {
  setSize(e.target.value);
}
const handleAddToCart =async()=>{
// await dispatch ({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
// console.log(data);
let food = []
for (const item of data) {
  if (item.id === foodItem._id) {
    food = item;

    break;
}
}
console.log(food)
console.log(new Date())
if (food !== []) {
  if (food.size === size) {
    await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
    return
  }
  else if (food.size !== size) {
    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
    console.log("Size different so simply ADD one more to the list")
    return
  }
  return
}

await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })



}

let finalPrice = qty * parseInt(options[size]);
useEffect(()=>{
  setSize(priceRef.current.value)
},[])
// console.log(options);
  return (
    <div>

      <div className="container text-center">
        <div className="card" style={{ width: "18rem", maxHeight: "480px",marginTop:"20px",boxShadow: "0px 5px 10px black",filter: 'blur(20)',borderRadius:"10px"}}>
          <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:'200px', objectFit:'fill'}} />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <hr></hr>
            <p className="card-text">{props.foodItem.description}</p>
            <div className="container w-100">
              <select className="m-2 h-100  bg-success rounded text-black" style={{ select: "#FF0000" }}  onClick={handleClick} onChange={handleQty}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  )
                })}
              </select>
              <select className="m-2 h-100  bg-success rounded" ref={priceRef}  style={{ select: "#FF0000" }} onClick={handleClick} onChange={handleOptions}>
              {priceOption.map((data)=>{
                // console.log(data);
                  return  <option key={data} value={data}> {data}</option> 
              })}
              </select>
              <div className="d-inline h-100 fs-5">&#8377;{finalPrice}/-</div>
            </div>
            <hr></hr>
            <button className="btn btn-success " onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
