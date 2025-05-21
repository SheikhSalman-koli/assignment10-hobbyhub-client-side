import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Componants/Context/AuthContext';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const MyGroup = () => {

    const {user} = use(AuthContext)

    const [groups, setGroups] = useState([])
    // console.log(groups);
    const matchedEmailGroups = groups.filter(group => group.email == user?.email)
    // console.log(matchedEmailGroups);

    useEffect(()=>{
        fetch('http://localhost:3000/groups')
        .then(res=>res.json())
        .then(data=> setGroups(data))
    },[])

    const handleDelet =()=>{
        console.log('object okkkkkkkkkkokok');
    }

    return (
        <div>
            {user ?
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
                            <th  className='hidden lg:block'>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            matchedEmailGroups.map((group, index) => <tr key={group._id}>
                                <th  className='hidden lg:block'>
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
                                <td  className='hidden lg:block'>
                                    {group.dscription}
                                </td>
                                <th>
                                  <button className='btn btn-ghost hover:btn-warning'><MdEdit   size={20}/></button>
                                  <button onClick={handleDelet} className='btn btn-ghost hover:btn-warning'><MdDelete size={20}/></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

             </div>)
            :
            (<p>you did not create any group yet</p>)}
        </div>
    );
};

export default MyGroup;