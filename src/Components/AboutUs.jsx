import { useEffect, useState } from "react";
// import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';

const AboutUs = () => {
    const [about, setAbout] = useState([]);
    useEffect(()=>{
        fetch('https://assingment-10-tasmeo.vercel.app/about')
        .then(res=> res.json())
        .then(data=>setAbout(data))
        },[])
console.log(about)
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl md:text-6xl text-cyan-600 font-bold text-center pt-10">About Us</h1>
            {about.map((about) => (
                <div key={about?._id} className="text-center mt-10">
                <img className="w-full md:w-[500px] h-auto md:h-[300px] mx-auto" src={about?.Image} />
                <h1 className="text-lg md:text-xl text-cyan-600 w-full mt-5">{about?.Description}</h1>
                </div>
            ))}
            </div>

    );
};

export default AboutUs;