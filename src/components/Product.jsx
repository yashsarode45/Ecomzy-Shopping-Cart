import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import { useState } from "react";
import { toast } from "react-hot-toast";
const Product = ({post}) => {
  
  const [selected, setselected] = useState(false);
  const{cart} = useSelector((state)=>state);
  const dispatcher = useDispatch();

  function handleAddClick() {
    dispatcher(add(post));
    // setselected(true);
    toast.success("Item Added!");

  }

  function handleRemoveClick() {
    console.log("In handleRemoveClick the post.id is ", post.id)
    dispatcher(remove(post.id));
    // setselected(false);
    toast.error("Item Remove!")
  }

  return (
    <div className="group flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024]
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl ">
      <div>
          <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
       <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
       {post.description.split(" ").slice(0,10).join(" ") + "..."}
       </p> 
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full object-contain"/>
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <p className="text-green-600 font-semibold">${post.price}</p>
        {cart.some((p) => p.id == post.id) ?
        (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700 group-hover:text-white
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in" onClick={handleRemoveClick}>
          REMOVE ITEM
        </button>):
        (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700 group-hover:text-white
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in" onClick={handleAddClick}>
          ADD TO CART
        </button>)}
      </div>
    </div>
  );
};

export default Product;
