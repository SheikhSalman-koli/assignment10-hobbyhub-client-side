import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const AllGroups = () => {

    const [groups, setGroups] = useState([])
    const [loader, setLoader] = useState(false)
    // console.log(groups);

    useEffect(() => {
        setLoader(true)
        fetch('https://assignment10-server-site-dusky.vercel.app/groups')
            .then(res => res.json())
            .then(data => {
                setGroups(data)
                setLoader(false)
            })
    }, [])

    // https://assignment10-server-site-dusky.vercel.app/groups
    return (
        <div className=''>
            {
                loader ? <span className="loading loading-spinner loading-xl my-15 text-red"></span>
                    :
                    <div className='my-10'>
                        <h1 className="text-5xl font-bold text-fuchsia-500">All Created Groups</h1>
                        <div className="overflow-x-auto ">
                            <table className="table mt-8">
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
                                        <th>Location</th>
                                        <th>Description</th>
                                        <th>view details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}

                                    {
                                        groups.map((group, index) => <tr key={group._id}>
                                            <th className='hidden lg:block'>
                                                <label >
                                                    {index + 1}
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-16 w-16">
                                                            <img className="w-20 h-14"
                                                                src={group.photo}
                                                                alt="" />
                                                        </div>
                                                        </div>
                                                </div>
                                            </td>
                                            <td className='font-bold'>{group.name}</td>
                                            <td>{group.Location}</td>
                                            <td className='max-w-32 break-words truncate whitespace-nowrap overflow-hidden' title={group.dscription}>
                                                {group.dscription}
                                            </td>
                                            <th>
                                                <Link to={`/details/${group._id}`} className="btn btn-ghost bg-fuchsia-400 text-black hover:text-fuchsia-400 hover:bg-black">See More</Link>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

            }

        </div>
    );
};

export default AllGroups;