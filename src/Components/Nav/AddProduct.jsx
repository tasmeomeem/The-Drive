import Swal from 'sweetalert2'
import Nav from './Nav';

const AddProduct = () => {

    const handleAddCar = event=>{
        event.preventDefault();
        const form = event.target;
        const photo = form.image.value;
        const brand = form.brand.value;
        const model = form.model.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        
        const addCars = {photo,brand,price,rating,model,details,}
        console.log(addCars);
         
        //get data//
        
        //send data 
        fetch('https://assingment-10-tasmeo.vercel.app/cars',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCars)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if (data.insertedId){
                form.reset();
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }
    return (
        <div>
            <Nav/>
            <div className="container mx-auto text-center bg-cyan-100 pt-20 mt-10">
            <h1 className="text-4xl font-bold text-cyan-600 pt-10">Add New Cars</h1>
            <h2 className="pt-3 text-cyan-600">Welcome to our car shop, where automotive dreams come to life! At our showroom, you&apos;ll discover a<br/>
                wide array of meticulously curated vehicles,ranging from sleek,stylish sedans to rugged and<br/>
                dependable SUVs, and everything in between. Our expert team of friendly and knowledgeable<br/>
                staff is here to guide you through your car-buying journey,offering personalized<br/>
                 advice and helping you find the perfect vehicle to suit your 
                 needs and preferences.</h2>
           <form onSubmit={handleAddCar} className="bg-cyan-100">
                <div className="md:flex  md:px-20 gap-5 justify-center mt-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-cyan-600 ">Image Url</span>
                        </label>
                        <label className="input-group">
                            <input  name="image" placeholder="Img url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-cyan-600">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:px-20 gap-5 justify-center mt-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-cyan-600">Car model</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="model" placeholder="text" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-cyan-600">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="amount" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className=" md:flex md:px-20 gap-5 justify-center mt-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-cyan-600">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Amount" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-cyan-600">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="pt-10 pb-28">
                    <button className="btn bg-cyan-600 text-cyan-500 text-xl rounded">Add Button</button>
                </div>

           </form>
            </div>
        </div>
        
    );
};

export default AddProduct ;