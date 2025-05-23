import React from 'react';
import { BsFillPinAngleFill } from "react-icons/bs";

const Extra2 = () => {
    return (
        <div>
            <section className="bg-blue-50 py-8 px-6 rounded-xl shadow max-w-4xl mx-auto my-8 text-center">
                <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2"><span className='text-red-600'><BsFillPinAngleFill /></span> How It Works</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold">1. Discover</h3>
                        <p>Browse hobbies and find your community.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">2. Join</h3>
                        <p>Connect with like-minded enthusiasts.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">3. Create</h3>
                        <p>Start your own group and lead the fun.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Extra2;