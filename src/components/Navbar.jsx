import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

 
const Navbar = () => {
  const{cart} = useSelector((state)=>state);
  return (
    <div className="">
      <nav className="flex justify-between items-center h-20 max-w-6xl 
      mx-auto">
      <div className=" ml-5">
          <NavLink to="/">
              <div>
              <img src="./logo.png" className=" h-14"/>
              </div>
          </NavLink>
      </div>
      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                <NavLink to="/">
                  <p className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">Home</p>
                </NavLink>

                <NavLink to="/cart">
                  <div className="relative">
                      <FaShoppingCart className="text-2xl cursor-pointer hover:text-green-400 transition transform duration-200"/>
                      <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
                  </div>
                </NavLink>
      </div>
      </nav>
    </div>
    );
};

export default Navbar;
