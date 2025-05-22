import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const FeaturedGroups = () => {

    const [groups, setGroups] = useState([])
    // const [showGroups, setShowGroups] = useState([])
    const [loader, setLoader] = useState(false)
    const sixGroups = groups.slice(0, 6)
    // console.log(sixGroups);

    useEffect(() => {
        setLoader(true)
        fetch('https://assignment10-server-site-dusky.vercel.app/groups')
            .then(res => res.json())
            .then(data => {
                setGroups(data)
                setLoader(false)
            })
    }, [])

    // useEffect(()=>{
    //     setShowGroups(groups.slice(0,6))
    // },[groups])

    return (
        <div className='my-15'>
            {
                loader ? (<span className="loading loading-spinner loading-xl my-15 text-red"></span>) :
                    (<div className="overflow-x-auto">
                        <h1 className='text-5xl mb-4'>Featured Groups</h1>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='hidden lg:block'>
                                        <label>
                                            <p>No.</p>
                                        </label>
                                    </th>
                                    <th>Profile</th>
                                    <th>Name</th>
                                    <th className='hidden lg:block'>Location</th>
                                    <th className='hidden lg:block'>Description</th>
                                    <th>view details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    sixGroups.map((group, index) => <tr key={group._id}>
                                        <th className='hidden lg:block'>
                                            <label >
                                                {index + 1}
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={group.photo}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td className='font-bold'>{group.name}</td>
                                        <td className='hidden lg:block'>{group.Location}</td>
                                        <td className='hidden lg:block'>
                                            {group.dscription}
                                        </td>
                                        <th>
                                            <Link to={`/details/${group._id}`} className="btn btn-ghost hover:btn-primary">details</Link>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>)
            }

        </div>
    );
};

export default FeaturedGroups;