import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router';

const FeaturedCard = ({ group }) => {
    const data = group

    return (
        <div>
            <Fade>
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img className='w-full h-50 lg:h-60' src={data.photo} alt="" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="card-title">{data.name}</h2>
                        <p><span className='font-bold'>Category</span>:{data.category}</p>
                        <p><span className='font-bold'>Description</span>{data.dscription}</p>
                        <p><span className='font-bold'>Location</span>:{data.Location}</p>
                        <div className="card-actions justify-end">
                              <Link to={`/details/${group._id}`} className="btn btn-primary hover:btn-warning">details</Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default FeaturedCard;