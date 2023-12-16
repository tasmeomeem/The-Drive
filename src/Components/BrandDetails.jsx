import { Link, useLoaderData } from "react-router-dom";

// import CarsCard from "./CarsCard";
import PropTypes from 'prop-types'; 
import Nav from "./Nav/Nav";
import { useEffect, useState } from "react";
import Footer from "./Footer";
// import { toToastItem } from "react-toastify/dist/utils";
const BrandDetails = () => {
    const cars = useLoaderData();
    // console.log(cars)

    const [singleCar, setSingleCar] = useState([]);
    console.log(singleCar)
    useEffect(()=>{
        fetch(`https://assingment-10-tasmeo.vercel.app/cars/${cars[0].Brand_name}`)
        .then(res=>res.json())
        .then(data=> setSingleCar(data))
    } ,[cars])
    return <div className="">
            <Nav/>
            <h1 className="text-5xl text-cyan-600 my-7 text-center font-bold">{cars[0].Brand_name}</h1>
        <div className="mt-6">
            {
                cars?.map(car=> <div key={car._id} className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={car.Banner1} className=" md:h-[550px] md:w-full w-full object-fill" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={car.Banner2} className="md:h-[550px] md:w-full w-full object-fill" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 

                <div id="slide3" className="carousel-item relative w-full">
                    <img src={car.Banner3} className="md:h-[550px] md:w-full w-full object-fill" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                
            </div>)
            }
        </div>
        {/* Car product section */}
        <div className="grid grid-col-1 md:grid-cols-2 gap-20 mx-8 xl:mx-20 my-24">
            {
                singleCar?.map(car=> <div key={car._id} className="card bg-base-100 shadow-xl h-400 ">
                <figure><img src={car?.photo} alt="" className="w-300  h-[350px]" /></figure>
                <div className="card-body ">
                    <p>Brand: {car?.brand}</p>
                    <h2 className="card-title">{car?.model}</h2>
                    <p>{car.details}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/Details/${car?._id}`}><button className="btn btn-primary">Details</button></Link>
                        <Link to={`/update/${car?._id}`}><button className="btn btn-primary">Update</button></Link>
                    </div>
                </div>
            </div>)

            }
        </div>
        <Footer></Footer>
    </div>        
}

BrandDetails.propTypes = {
    BrandDetails: PropTypes.object
};
export default BrandDetails;

