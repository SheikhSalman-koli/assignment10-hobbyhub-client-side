import React, { useEffect, useState } from 'react';
import FeaturedCard from './FeaturedCard';

const FeaturedGroups = () => {

    const [groups, setGroups] = useState([])
    // const [showGroups, setShowGroups] = useState([])
    const [loader, setLoader] = useState(false)
    const sixGroups = groups.slice(0, 6)
    // console.log(sixGroups);

    useEffect(() => {
        setLoader(true)
        fetch('http://localhost:3000/groups')
            .then(res => res.json())
            .then(data => {
                setGroups(data)
                setLoader(false)
            })
    }, [])


    return (
        <div className='my-15'>
            {
                loader ? (<span className="loading loading-spinner loading-xl my-15 text-red"></span>) :
                    (
                        <div>
                        <h1 className='text-5xl mb-4'>Featured Groups with Reveal</h1>
                     <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                        {
                            sixGroups.map(item => <FeaturedCard key={item._id} group={item}></FeaturedCard>)
                        }
                     </div>
                        </div>
                    )
            }

        </div>
    );
};

export default FeaturedGroups;