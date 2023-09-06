import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";
const Cart = () => {
  const {cart} = useSelector((state)=>state)
  const [totalAmount, settotalAmount] = useState(0);

  useEffect(() => {
    settotalAmount(cart.reduce((total,item)=>total+=item.price,0))
  }, [cart])
  
  
  return (
  <div>
    {
      cart.length===0 ?
      (<div className="min-h-[80vh] flex flex-col items-center justify-center">
        <p className="text-gray-700 font-semibold text-xl mb-2">
        Your cart is empty!
        </p>
        <NavLink to="/">
          <button className="bg-green-600 uppercase hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
            Shop Now
          </button>
        </NavLink>
      </div>):
      (<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
          {cart.map((item,index) => (
            <CartItem key={item.id} item={item} itemIndex={index}/>
          ))}
          </div> 
          <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
              <div className="flex flex-col gap-5 ">
                  <p className="font-semibold text-xl text-green-800 ">YOUR CART</p>
                  <h1 className="font-semibold text-5xl text-green-700  -mt-5">SUMMARY</h1>
                  <p className="text-xl"><span className="text-gray-700 font-semibold text-xl">Total Items:</span> {cart.length} </p>
              </div>

              <div className="flex flex-col">
                <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> {totalAmount} </p>
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">Checkout Now</button>
              </div>
            </div> 
          </div>
      </div>
        )
    }

  </div>
    );
};

export default Cart;
