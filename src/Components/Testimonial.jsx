import { useEffect, useState } from "react";
// import 'aos/dist/aos.css';


const Testimonial = () => {
    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch('https://assingment-10-tasmeo.vercel.app/review')
        .then(res=> res.json())
        .then(data=>setReview(data))
        },[])
console.log(review)
    
    return (
        <div className=" container mx-auto  ">
            
                <h1 className="text-6xl text-cyan-600 font-bold  pt-10  text-center "> Testimonial </h1>
                <h2 className="text-center pt-5 text-cyan-600">I recently had the pleasure of visiting The Drive<br/> Car Shop, and my   experience was nothing short of exceptional. From the<br/> moment I walked in,  I was impressed by their professionalism, extensive inventory, and outstanding customer service.</h2>
                <div className=" md:flex gap-10  text-center justify-center" >
                    
                    {
                        review.map((testimonial)=>(
                            <div key={testimonial?._id} className=" ">
                                <div className="bg-base-100 shadow-xl md:h-[380px]  md:w-[400px]   ">
                                    <img className="h-44 w-60 mt-10 mb-5" src={testimonial?.image} />
                                    <h1 className=" text-cyan-600 font-bold text-lg">{testimonial?.name}</h1>
                                    <h1 className=" text-cyan-600 ">{testimonial?.description}</h1>
                                </div>
                            </div>
                            
                        ))
                    }
                    
                </div>
            
        </div>
    );
};

export default Testimonial;
