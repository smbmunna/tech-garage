
import { CiDeliveryTruck } from "react-icons/ci";
import { AiTwotonePhone, AiOutlineDollarCircle } from "react-icons/ai";




const Special = () => {
    return (
        <div className=''>
            <h1 className="text-3xl font-bold text-white text-center my-8">What makes us Special</h1>
            <div className='lg:grid lg:grid-cols-3 lg:justify-center lg:gap-28'>
                <div className="flex gap-4 items-center">
                    <div>
                        <CiDeliveryTruck className='text-white text-6xl border' />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white mb-2">Fast Delivery</h1>
                        <p className="text-white">Fastes delivery available country wide Or pick up available items at Our Store.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div>
                        <AiOutlineDollarCircle className='text-white text-6xl border' />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white mb-2">Pay in Installments</h1>
                        <p className="text-white">You can pay over time when you choose to check out with Credit Card Monthly Installments.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div>
                        <AiTwotonePhone className='text-white text-6xl border' />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white mb-2">Customer Support</h1>
                        <p className="text-white">Have a question? Call a Specialist or chat online. Call 1‑800‑-55-88.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Special;