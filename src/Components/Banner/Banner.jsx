const Banner = () => {
    return (
        <div className="hero h-[450px]" style={{ backgroundImage: 'url(https://i.ibb.co/Q8zyBZh/ady-teenagerinro-s-Q0x-Xx-Qdfe-Y-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-75"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-3xl md:text-6xl font-bold text-white">Tech Garage</h1>
                    <p className="mb-5 text-xl md:text-3xl font-bold text-white">Where Cutting-Edge Meets Convenience!</p>
                    <p className="mb-5 text-lg md:text-2xl font-bold text-white">Discover the latest in tech innovation at our gadget store</p>                    
                </div>
            </div>
        </div>
    );
};

export default Banner;