import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const AllGroups = () => {

    const [groups, setGroups] = useState([])
    const [loader, setLoader] = useState(false)
    // console.log(groups);

    useEffect(() => {
        setLoader(true)
        fetch('http://localhost:3000/groups')
            .then(res => res.json())
            .then(data => {
                setGroups(data)
                setLoader(false)
            })
    }, [])

    // <span className="loading loading-spinner loading-xl"></span>
    return (
        <div>
            {
                loader ? <span className="loading loading-spinner loading-xl my-15 text-red"></span>
                    :
                    <div className='my-10'>
                        <h1 className="text-6xl">All Created Groups</h1>
                        <div className="overflow-x-auto">
                            <table className="table mt-8">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th className='hidden lg:block'>
                                            <label>
                                                <p>serial</p>
                                            </label>
                                        </th>
                                        <th>Profile</th>
                                        <th>Name</th>
                                        <th>Location</th>
                                        <th className='hidden lg:block'>Description</th>
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
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={group.photo}
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>{group.name}</td>
                                            <td>{group.Location}</td>
                                            <td className='hidden lg:block'>
                                                {group.dscription}
                                            </td>
                                            <th>
                                                <Link to={`/details/${group._id}`} className="btn btn-ghost btn-xs">details</Link>
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