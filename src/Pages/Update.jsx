import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Componants/Context/AuthContext';
import { toast } from 'react-toastify';


const Update = () => {
    const { user, isLoading } = use(AuthContext)

    const group = useLoaderData()
    const { _id, name, category, dscription, Location, members, date, photo } = group
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
                }
                // console.log(data);
            })
    }

    return (
        <div className='mb-8'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl">Update Group</h1>
            </div>
            <form onSubmit={handleUpdate}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Group Name */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Group Name</label>
                        <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Group Name" />
                    </fieldset>
                    {/* Hobby Category */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Hobby Category</label>
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
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Description</label>
                        <input type="text" name='dscription' defaultValue={dscription} className="input w-full" placeholder="Description" />
                    </fieldset>
                    {/* Meeting Location */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Meeting Location</label>
                        <input type="text" name='Location' defaultValue={Location} className="input w-full" placeholder="Meeting Location" />
                    </fieldset>
                    {/* Max Members */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Max Members</label>
                        <input type="text" name='members' defaultValue={members} className="input w-full" placeholder="Max Members" />
                    </fieldset>
                    {/* Start Date */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Start Date</label>
                        <input type="text" name='date' defaultValue={date} className="input w-full" placeholder="Start Date" />
                    </fieldset>
                    {/* User Name   */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">User Name</label>
                        {
                            isLoading ?
                                (<span className="loading loading-bars loading-lg"></span>)
                                :
                                (<input type="text" name='username' value={user?.displayName || ''} className="input w-full" placeholder="User Name" readOnly />)
                        }
                    </fieldset>
                    {/* User Email */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">User Email</label>
                        {
                            isLoading ?
                                (<span className="loading loading-bars loading-lg"></span>)
                                :
                                (<input type="email" name='email' value={user?.email || ''} className="input w-full" placeholder="User Email" readOnly />)
                        }
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Photo URL" />
                </fieldset>
                <input type="submit" className='btn w-full' value="Update Group" />
            </form>
        </div>
    );
};

export default Update;