import { useLoaderData } from "react-router-dom";
import Nav from "./Nav/Nav";
import Swal from "sweetalert2";



const Update = () => {
    const update = useLoaderData()
    console.log(update)
    const {price,photo,brand,model,rating,details,_id}=update
    const handleUpdate = event=>{
        event.preventDefault();
        const form = event.target;
        const photo = form.image.value;
        const brand = form.brand.value;
        const model = form.model.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        
        const updateProduct = {photo,brand,price,rating,model,details,}
        console.log(updateProduct);
         
        
        fetch(`https://assingment-10-tasmeo.vercel.app/Product/${_id}`,{
            method: 'Put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            
            if (data.modifiedCount>0){
                form.reset();
                Swal.fire({
                    title: 'Success!',
                    text: 'Update successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }
    return (
        <div>
            <Nav/>
            <h1 className="text-4xl font-bold text-cyan-600 pt-10 text-center pb-10">Update Product</h1>
            <form onSubmit={handleUpdate} className="bg-cyan-100 pt-10">
                <div className="md:flex  md:px-20 gap-5 justify-center mt-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-cyan-600 ">Image Url</span>
                        </label>
                        <label className="input-group">
                            <input  name="image" defaultValue={photo} placeholder="Img url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-cyan-600">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" defaultValue={brand} placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:px-20 gap-5 justify-center mt-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-cyan-600">Car model</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="model" defaultValue={model} placeholder="text" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-cyan-600">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="amount" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className=" md:flex md:px-20 gap-5 justify-center mt-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-cyan-600">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Amount" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-cyan-600">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="pt-10 pb-28 text-center">
                    <button className="btn bg-cyan-600 text-cyan-500 text-xl rounded">Update product</button>
                </div>

            </form>
            
        </div>
    );
};

export default Update;