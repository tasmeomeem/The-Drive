import { useEffect, useState } from "react";
// import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Brand = () => {
    const [brands, setBrands] = useState([]);
    useEffect(()=>{
        fetch('https://assingment-10-tasmeo.vercel.app/brands')
        .then(res=> res.json())
        .then(data=>setBrands(data))
        },[])
    console.log(brands)
        
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl text-cyan-600 font-bold text-center pt-10">Our Brands</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center pb-10 pt-16 px-4 md:px-28">
                {brands.map((brand) => (
                <Link to={`/BrandDetails/${brand.Brand_name}`} key={brand?._id}>
                    <div className="text-center">
                    <img className="h-32 md:h-44 w-48 md:w-56 mx-auto" src={brand?.Brand_logo} alt={brand?.Brand_name} />
                    <h1 className="text-lg md:text-xl text-cyan-600 font-bold mt-2">{brand?.Brand_name}</h1>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    );
};


export default Brand;