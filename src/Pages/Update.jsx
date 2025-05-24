import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Componants/Context/AuthContext';
import { toast } from 'react-toastify';


const Update = () => {
    const { user, isLoading } = use(AuthContext)

    const group = useLoaderData()
    const { _id, name, category, dscription, Location, members, date, photo } = group
    const navigate = useNavigate()
    // console.log(group);

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const updatedGroup = Object.fromEntries(formData.entries())
        // console.log(updatedGroup);

        fetch(`https://assignment10-server-site-dusky.vercel.app/groups/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedGroup)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('updated successfully!')
                    navigate(`/details/${_id}`)
                }
                // console.log(data);
            })
    }

    return (
        <div className='mb-8'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl text-fuchsia-500">Update Group</h1>
            </div>
            <form onSubmit={handleUpdate}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Group Name */}
                    <fieldset className="fieldset border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label text-black text-[18px]">Group Name</label>
                        <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Group Name" />
                    </fieldset>
                    {/* Hobby Category */}
                    <fieldset className="fieldset border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label text-black text-[18px]">Hobby Category</label>
                        <select className="input w-full" defaultValue={category} name="category" id="day">
                            {/* <option disabled={true}>Select A Category</option> */}
                            <option value="Drawing & Painting">Drawing & Painting</option>
                            <option value="Photography">Photography</option>
                            <option value="Video Gaming">Video Gaming</option>
                            <option value="Fishing">Fishing</option>
                            <option value="Running">Running</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Cooking">Cooking</option>
                            <option value="Reading">Reading</option>
                            <option value="Writing">Writing</option>
                        </select>
                    </fieldset>
                    {/* Description */}
                    <fieldset className="fieldset border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label text-black text-[18px] font-bold">Description</label>
                        <input type="text" name='dscription' defaultValue={dscription} className="input w-full" placeholder="Description" />
                    </fieldset>
                    {/* Meeting Location */}
                    <fieldset className="fieldset border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label text-black text-[18px] font-bold">Meeting Location</label>
                        <input type="text" name='Location' defaultValue={Location} className="input w-full" placeholder="Meeting Location" />
                    </fieldset>
                    {/* Max Members */}
                    <fieldset className="fieldset border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label text-black text-[18px] font-bold">Max Members</label>
                        <input type="text" name='members' defaultValue={members} className="input w-full" placeholder="Max Members" />
                    </fieldset>
                    {/* Start Date */}
                    <fieldset className="fieldset border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label text-black text-[18px] font-bold">Start Date</label>
                        <input type="date" name='date' defaultValue={date} className="input w-full" placeholder="Start Date" />
                    </fieldset>
                    {/* User Name   */}
                    <fieldset className="fieldset border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label text-black text-[18px] font-bold">User Name</label>
                        {
                            isLoading ?
                                (<span className="loading loading-bars loading-lg"></span>)
                                :
                                (<input type="text" name='username' value={user?.displayName || ''} className="input w-full" placeholder="User Name" readOnly />)
                        }
                    </fieldset>
                    {/* User Email */}
                    <fieldset className="fieldset border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label text-black text-[18px] font-bold">User Email</label>
                        {
                            isLoading ?
                                (<span className="loading loading-bars loading-lg"></span>)
                                :
                                (<input type="email" name='email' value={user?.email || ''} className="input w-full" placeholder="User Email" readOnly />)
                        }
                    </fieldset>
                </div>
                <fieldset className="fieldset border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box my-6 p-4">
                    <label className="label text-black text-[18px] font-bold">Photo</label>
                    <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Photo URL" />
                </fieldset>
                <input type="submit" className='btn w-full text-white text-[18px] bg-fuchsia-500 hover:bg-fuchsia-600' value="Update Group" />
            </form>
        </div>
    );
};

export default Update;