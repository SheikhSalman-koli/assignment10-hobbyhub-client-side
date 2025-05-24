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
        // console.log(newGroup);

        // send Group data to the db
        fetch('https://assignment10-server-site-dusky.vercel.app/groups', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newGroup)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
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
                <h1 className="text-6xl text-fuchsia-500">Create Group</h1>
            </div>
            <form onSubmit={handleAddGroup}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Group Name */}
                    <fieldset className="fieldset border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">Group Name</label>
                        <input type="text" name='name' className="input w-full " placeholder="Group Name" required/>
                    </fieldset>
                    {/* Hobby Category */}
                    <fieldset className="fieldset border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">Hobby Category</label>
                        <select className="input w-full " name="category" id="day" required>
                                <option disabled={true}>Select A Category</option>
                                <option value="Drawing & Painting">Drawing & Painting</option>
                                <option value="Photography">Photography</option>
                                <option value="Video Gaming">Video Gaming</option>
                                <option value="Fishing">Fishing</option>
                                <option value="Running">Running</option>
                                <option value="Coding">Coding</option>
                                <option value="Swimming">Swimming</option>
                                <option value="Cooking">Cooking</option>
                                <option value="Fitness">Fitness</option>
                                <option value="Reading">Reading</option>
                                <option value="Writing">Writing</option>
                            </select>
                    </fieldset>
                    {/* Description */}
                    <fieldset className="fieldset  border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">Description</label>
                        <input type="text" name='dscription' className="input w-full " required placeholder="Description" />
                    </fieldset>
                    {/* Meeting Location */}
                    <fieldset className="fieldset  border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">Meeting Location</label>
                        <input type="text" name='Location' className="input w-full " required placeholder="Meeting Location" />
                    </fieldset>
                    {/* Max Members */}
                    <fieldset className="fieldset   border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">Max Members</label>
                        <input type="text" name='members' className="input w-full " required placeholder="Max Members" />
                    </fieldset>
                    {/* Start Date */}
                    <fieldset className="fieldset  border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">Start Date (deadline)</label>
                        <input type="date" name='date' className="input w-full " required placeholder="Start Date" />
                    </fieldset>
                    {/* User Name   */}
                    <fieldset className="fieldset  border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">User Name</label>
                        {
                            isLoading ? 
                            (<span className="loading loading-bars loading-lg"></span>)
                             : 
                             ( <input type="text" name='username' value={user?.displayName || ''} className="input w-full " placeholder="User Name" readOnly/>)
                        }
                       
                    </fieldset>
                    {/* User Email */}
                    <fieldset className="fieldset  border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box p-4">
                        <label className="label font-bold text-black text-[18px]">User Email</label>
                        {
                            isLoading ? 
                            (<span className="loading loading-bars loading-lg"></span>)
                            : 
                            (<input type="email" name='email' value={user?.email || ''} className="input w-full " placeholder="User Email" readOnly/>)
                        }
                        
                    </fieldset>   
                </div>


                <fieldset className="fieldset  border-2 border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-gray-50 rounded-box my-6 p-4">
                    <label className="label font-bold text-black text-[18px]">Photo</label>
                    <input type="text" name='photo' className="input w-full " required placeholder="Photo URL" />
                </fieldset>

                <input type="submit" className='btn w-full text-white text-[18px] bg-fuchsia-500 hover:bg-fuchsia-600' value="Create Group" />
            </form>
        </div>

    );
};

export default CreateGroup;