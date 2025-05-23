import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './Context/AuthContext';
import { PiHandWaving } from "react-icons/pi";
import { SiRocket } from "react-icons/si";

const Extra1 = () => {

    const { user } = use(AuthContext)
    return (
        <div>
            <section className="bg-orange-100 text-center py-10 px-6 rounded-xl shadow-lg max-w-4xl mx-auto my-12">
                {
                    user ?
                        (<h2 className="text-3xl font-bold text-orange-700 mb-4 flex items-center justify-center">
                            <PiHandWaving /> Ready to Discover More Hobbies?
                        </h2>)
                        :
                        (
                            <h2 className="text-3xl font-bold text-orange-700 mb-4 flex items-center justify-center">
                                <SiRocket /> Join the Hobby Hub Community
                            </h2>

                        )
                }
                {
                    user ? (<p className="text-gray-800 text-lg mb-6">
                        Explore groups and connect with fellow hobbyists.
                    </p>) :
                        (<p className="text-gray-800 text-lg mb-6">
                            Sign up to explore new hobbies, connect with people who share your interests, and grow your passions.
                        </p>)
                }

                {
                    user ?
                        (<Link to='/allgroup'
                            className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
                        >Explore More</Link>)
                        :
                        (<Link to='/signin'
                            className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
                        >Get Started</Link>)
                }

            </section>
        </div>
    );
};

export default Extra1;