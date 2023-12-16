// import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
// import { AuthContext } from "./AuthProvider";
import Nav from "./Nav/Nav";
import Swal from "sweetalert2";
import Footer from "./Footer";


const Details = () => {
    // const {user}=useContext(AuthContext)
    const product = useLoaderData()
    console.log(product)
    const {model,brand,price,photo,details,rating}=product
    // const cart = {user_id:user?.uid,productId:product?._id}
    const  handleAddTOCart= ()=>{

        const newProduct= {model,brand,price,photo,details}
        fetch('https://assingment-10-tasmeo.vercel.app/addToCart',{
            method:'POST',headers:{'content-Type':'application/json'},body:JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
            Swal.fire({
                title: 'Success!',
                text: 'Add to Cart successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            
        })
        
        
    }
    
    return (
        <div>
            <Nav/>
            <div className="card bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-2">
                <figure><img src={photo} className="md:h-80 md:w-[380px] w-full"/></figure>
                <div className="card-body md:h-80 md:w-[380px] w-full">
                    <p className="font-bold text-2xl">Brand: {brand}</p>
                    <h2 className="card-title">Model: {model}</h2>
                    <p>{details}</p>
                    <p className="font-bold">Price: {price}</p>
                    <p className="font-bold">Rating:{rating}</p>
                    <div className="card-actions justify-end"> 
                        <Link to="/MyCart"><button onClick={handleAddTOCart} className="bg-cyan-600">Add to cart</button></Link>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Details;