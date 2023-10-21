
const BrandEntry = () => {
    const handleAddBrand=event=>{
        event.preventDefault();
        const form= event.target;
        const name= form.name.value;
        const photo= form.photo.value;
        const brand= {name, photo};
        fetch('https://tech-garage-server.vercel.app/brands',{
            method:"POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(brand)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-transparent">
                <div className="hero-content">
                    <div className="card w-full max-w-sm shadow-2xl ">
                        <form onSubmit={handleAddBrand} className="card-body">
                            <h1 className="text-3xl font-bold text-center mb-4 text-white">Add Brand Details</h1>
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Brand Name" className="input input-bordered rounded-none text-black" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="photo" placeholder="Brand Image" className="input input-bordered rounded-none text-black" required />
                            </div>
                            <div>
                                <p className="text-red-700">{}</p>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary bg-[#2c2c2c91] rounded-none text-white ">Add Brand</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandEntry;