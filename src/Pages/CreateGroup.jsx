import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Componants/Context/AuthContext';
import { BsListNested } from 'react-icons/bs';

const CreateGroup = () => {

    const {user,   isLoading} = use(AuthContext)

     const handleAddGroup = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newGroup = Object.fromEntries(formData.entries())
        console.log(newGroup);

        // send Group data to the db
        fetch('http://localhost:3000/groups', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newGroup)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: "A Group Created successfully!",
                        icon: "success",
                        draggable: true
                      });

                    //   form.reset()
                }
            })
    }

    return (
        <div className='mb-10'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl">Create Group</h1>
                {/* <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p> */}
            </div>
            <form onSubmit={handleAddGroup}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Group Name */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Group Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Group Name" />
                    </fieldset>
                    {/* Hobby Category */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Hobby Category</label>
                        <select className="input w-full" name="category" id="day">
                                <option disabled={true}>Select A Category</option>
                                <option value="Drawing & Painting">Drawing & Painting</option>
                                <option value="Photography">Photography</option>
                                <option value="Video Gaming">Video Gaming</option>
                                <option value="Fishing">Fishing</option>
                                <option value="Running">Running</option>
                                <option value="Cooking">Cooking</option>
                                <option value="Reading">Reading</option>
                                <option value="Writing">Writing</option>
                            </select>
                    </fieldset>
                    {/* Description */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Description</label>
                        <input type="text" name='dscription' className="input w-full" placeholder="Description" />
                    </fieldset>
                    {/* Meeting Location */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Meeting Location</label>
                        <input type="text" name='Location' className="input w-full" placeholder="Meeting Location" />
                    </fieldset>
                    {/* Max Members */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Max Members</label>
                        <input type="text" name='members' className="input w-full" placeholder="Max Members" />
                    </fieldset>
                    {/* Start Date */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Start Date</label>
                        <input type="text" name='date' className="input w-full" placeholder="Start Date" />
                    </fieldset>
                    {/* User Name   */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">User Name</label>
                        {
                            isLoading ? 
                            (<span className="loading loading-bars loading-lg"></span>)
                             : 
                             ( <input type="text" name='username' value={user?.displayName || ''} className="input w-full" placeholder="User Name" readOnly/>)
                        }
                       
                    </fieldset>
                    {/* User Email */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">User Email</label>
                        {
                            isLoading ? 
                            (<span className="loading loading-bars loading-lg"></span>)
                            : 
                            (<input type="email" name='email' value={user?.email || ''} className="input w-full" placeholder="User Email" readOnly/>)
                        }
                        
                    </fieldset>   
                </div>


                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
                </fieldset>

                <input type="submit" className='btn w-full' value="Create Group" />
            </form>
        </div>

    );
};

export default CreateGroup;