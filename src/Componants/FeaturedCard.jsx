import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router';

const FeaturedCard = ({ group }) => {
    const data = group

    return (
        <div>
            <Fade>
                <div className="card bg-base-100 border-1 border-fuchsia-200">
                    <figure>
                        <img className='w-full h-50 lg:h-60' src={data.photo} alt="" />
                    </figure>
                    <div className="py-5 px-3 text-center">
                        <h2 className="text-3xl font-bold">{data.name}</h2>
                        <p><span className='font-bold'>Category</span>:{data.category}</p>
                        <p className='px-10'><span className='font-bold'>Description</span>{data.dscription}</p>
                        <p><span className='font-bold'>Location</span>:{data.Location}</p>
                        <div className="card-actions justify-end">
                              <Link to={`/details/${group._id}`} className="btn btn-primary bg-fuchsia-400 text-black hover:text-fuchsia-400 hover:bg-black">details</Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default FeaturedCard;