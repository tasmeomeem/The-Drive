
const BrandCards = () => {
    const Brands = {Brand_logo,Brand_name};
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={Brand_logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{Brand_name}</h2>
                   
                </div>
            </div>
        </div>
    );
};

export default BrandCards;