import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const GroupDetails = () => {

    const group = useLoaderData()
    console.log(group);

    const handleJoin = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "you have joined successfully!",
            showConfirmButton: false,
            timer: 2000
        });
    }

    //   if (!group) return <div>Loading...</div>;
    return (
        <div>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg mt-8">
                <img src={group.photo} alt={group.name} className="w-full h-64 object-cover rounded" />
                <h2 className="text-3xl font-bold mt-4">{group.name}</h2>
                <p className="text-gray-600 mt-1 italic">{group.category}</p>

                <div className="mt-4">
                    <p className="mb-2"><strong>Description:</strong> {group.dscription}</p>
                    <p className="mb-2"><strong>Meeting Location:</strong> {group.Location}</p>
                    <p className="mb-2"><strong>Max Members:</strong> {group.members}</p>
                    <p className="mb-2"><strong>Start Date:</strong> {new Date(group.date).toLocaleDateString()}</p>
                    <p className="mb-2"><strong>Created By:</strong> {group.username} ({group.email})</p>
                </div>

                <button
                    className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={handleJoin}
                >
                    Join Group
                </button>
            </div>
        </div>
    );
};

export default GroupDetails;