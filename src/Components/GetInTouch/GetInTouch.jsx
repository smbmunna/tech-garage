import { BsFillBuildingsFill, BsEnvelope } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaMobileAlt } from 'react-icons/fa';
const GetInTouch = () => {
    return (
        <div className='mx-8 md:mx-0 my-8 md:my-32 bg-[#2c2c2c91] dark:bg-[#e6e4e4b0] py-4'>
            <h1 className="text-3xl font-bold dark:text-gray-700 text-white text-center my-4 md:mb-4">Get in Touch</h1>
            <div className='md:grid md:grid-cols-3 items-center'>
                <div className='md:col-span-1'>
                    <div className="bg-transparent pb-10 h-full dark:text-gray-700 text-white items-center pl-10">
                        <div className="flex items-center pt-10 mb-10  dark:text-gray-700 text-white">
                            <HiOutlineLocationMarker className="text-3xl mr-3" />
                            <h3 className="text-3xl font-bold">Tech Garage</h3>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <BsFillBuildingsFill />
                            <p>Sector 04, Uttara, Dhaka 1230</p>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <FaMobileAlt />
                            <p>+789 558 69 85 +789 023 58 96</p>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <BsEnvelope />
                            <p>support@example.com</p>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-2'>
                    <form className="card-body ">
                        <h1 className='dark:text-gray-700 text-white text-xl font-bold'>Write to Us</h1>                        
                        <div className="form-control">
                            <input type="email" placeholder="Your Email" className="input input-bordered  rounded-none  text-white dark:text-black bg-gray-800 dark:bg-[#e6e4e4b0]" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Your message" className="input input-bordered rounded-none text-white dark:text-black bg-gray-800 dark:bg-[#e6e4e4b0]" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primarybtn btn-primary bg-[#2c2c2c91] dark:bg-slate-300 dark:text-black dark:border-none rounded-none text-white">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;