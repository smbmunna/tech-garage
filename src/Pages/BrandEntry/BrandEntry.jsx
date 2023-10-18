
const BrandEntry = () => {
    const handleAddBrand=event=>{
        event.preventDefault();
        const form= event.target;
        const name= form.name.value;
        const photo= form.photo.value;
        console.log(name, photo);
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleAddBrand} className="card-body">
                            <h1 className="text-3xl font-bold text-center mb-4">Add Brand Details</h1>
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Brand Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="photo" placeholder="Brand Image" className="input input-bordered" required />
                            </div>
                            <div>
                                <p className="text-red-700">{}</p>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Add Brand</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandEntry;