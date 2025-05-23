import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { ImCross } from "react-icons/im";

const GroupDetails = () => {

    const group = useLoaderData()
    // console.log(group);
    const handleJoin = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "you have joined successfully!",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const currentDate = new Date();
    // const date = new Date();
    // const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    // console.log(formattedDate);
    const startDate = new Date(group.date);
    const isExpired = startDate < currentDate;

    return (
        <div>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg mt-8">
                <img src={group.photo} alt={group.name} className="w-full h-64 object-cover rounded" />
                <h2 className="text-3xl font-bold mt-4">{group.name}</h2>
                <p className="text-gray-600 mt-1 italic">{group.category}</p>

                <div className="mt-4">
                    <p className="mb-2"><span className='font-bold'>Description:</span> {group.dscription}</p>
                    <p className="mb-2"><span className='font-bold'>Meeting Location:</span> {group.Location}</p>
                    <p className="mb-2"><span className='font-bold'>Max Members:</span> {group.members}</p>
                    <p className="mb-2"><span className='font-bold'>Start Date:</span> {new Date(group.date).toLocaleDateString()}</p>
                    <p className="mb-2"><span className='font-bold'>Created By:</span> {group.username} ({group.email})</p>
                </div>
                {isExpired ? (
                    <p className="text-red-600 font-semibold flex items-center justify-center gap-1">
                        This group is no longer active.
                        <ImCross />
                    </p>
                ) : (
                    <button
                        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={handleJoin}
                    >
                        Join Group
                    </button>
                )}
            </div>
        </div>
    );
};

export default GroupDetails;