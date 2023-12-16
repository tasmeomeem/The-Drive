import bannerImg from "../../assets/Images/banner-2.jpg"
const Banner = () => {
    return (
        <div className="container mx-auto relative h-[400px] md:h-[550px] lg:h-[750px] w-full">
            <img src={bannerImg} className="w-full md:h-[700px] h-[400px]  " />

            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 ">
                <h1 className="text-xl md:text-3xl lg:text-5xl text-cyan-600 font-bold">Choose Your <span className="font-bold">Loved One</span></h1>
                <h1 className="text-xl md:text-2xl lg:text-3xl text-cyan-600">All Brand New Cars...</h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-cyan-600">Up to 5% Discount</h2>
                <button className="btn btn-accent btn-sm mt-5 bg-cyan-400 text-cyan-800 font-bold">Visit</button>
            </div>
        </div>


    );
};

export default Banner;