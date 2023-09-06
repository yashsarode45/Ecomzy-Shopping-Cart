import { useState, useEffect } from "react";
import Product from '../components/Product'
import Spinner from "../components/Spinner";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);

  async function fetchProductsData() {
    setloading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setposts(data)
    } catch (error) {
      console.log("Error while fetching")
    }
    setloading(false)
  }

  useEffect(() => {
    fetchProductsData();
  }, [])
  
  

  return (
  <div>
    {
      loading ? (
        <Spinner />):
        posts.length > 0 ?
        (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>):
        <div className="flex justify-center items-center">
          No products to display
        </div>
    }
  </div>
    );
};

export default Home;
