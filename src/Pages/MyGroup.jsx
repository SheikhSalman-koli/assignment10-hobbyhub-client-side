import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Componants/Context/AuthContext';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyGroup = () => {

    const { user } = use(AuthContext)

    const [groups, setGroups] = useState([])
    const [remaining, setRemaining] = useState([])
    const [loader, setLoader] = useState(false)

    // console.log(remaining);
    useEffect(() => {
        setLoader(true)
        fetch('http://localhost:3000/groups')
            .then(res => res.json())
            .then(data => {
                setGroups(data)
                setLoader(false)
            })
    }, [])

    useEffect(() => {
        const matchedEmailGroups = groups.filter(group => group.email == user?.email)
        setRemaining(matchedEmailGroups)
    }, [groups, user])

    const handleDelet = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/groups/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const afterdelet = remaining.filter(item => item._id !== id)
                            setRemaining(afterdelet)
                        }
                    })
            }
        });
    }

    return (
        <div>
            {remaining.length > 0 ?
                (<div>
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
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    remaining.map((group, index) => <tr key={group._id}>
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
                                        <td>{group.Location}</td>
                                        <td className='max-w-32 break-words truncate whitespace-nowrap overflow-hidden' title={group.dscription}>
                                            {group.dscription}
                                        </td>
                                        <th>
                                            <Link to={`/update/${group._id}`} className='btn btn-sm hover:btn-warning'><MdEdit size={20} /></Link>
                                            <button onClick={() => handleDelet(group._id)} className='btn btn-sm hover:btn-warning mt-1'><MdDelete size={20} /></button>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>

                </div >)
                :
                (<div>
                    {
                        loader ? <span className="loading loading-spinner loading-xl my-15 text-red"></span>
                            :
                            <div className='my-5 lg:my-10  p-6 lg:p-15 space-y-4'>
                                <h1 className='text-6xl text-red-500 font-bold'>Opps!</h1>
                                <h1 className='font-bold'>you did not create any Group yet</h1>
                                <Link to='/create' className='btn hover:btn-primary'>Create Group</Link>
                            </div>
                    }
                </div>)}
        </div >
    );
};

export default MyGroup;