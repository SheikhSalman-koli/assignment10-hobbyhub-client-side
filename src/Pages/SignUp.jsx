import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../Componants/Context/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser, updateUser, setUser, loginByGoogle } = use(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value

        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        const upperCase = /(?=.*[A-Z])/
        const lower = /(?=.*[a-z])/
        const minimum = /.{6,}/

        if (!upperCase.test(password) === true) {
            toast.error("Must have an Uppercase letter in the password!")
            return
        }
        if (!lower.test(password) === true) {
            toast.error("Must have a Lowercase letter in the password!")
            return
        }
        if (!minimum.test(password) === true) {
            toast.error("Length must be at least 6 character!")
            return
        }
        createUser(email, password)
            .then((result) => {
                const usser = result.user
                // console.log(usser);
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...usser, displayName: name, photoURL: photo });
                        navigate('/')
                        Swal.fire({
                            title: 'logged in successfully',
                            icon: 'success'
                        })
                    })
                    .catch((error) => {
                        toast.error(error.message)
                    })
            })

            .catch((error) => {
                toast.error(error.message)
            })
    }


    const signWithGoogle = () => {
        loginByGoogle()
            .then(result => {
                const usser = result.user
                setUser(usser)
                Swal.fire('logged in successfully')
                navigate('/')
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    return (
        <div className='my-5'>
            <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 border-2 border-gray-30 font-light">
                <div className="card-body">
                    <h2 className='text-2xl font-bold'>Create an acount</h2>

                    <form onSubmit={handleRegister} className="fieldset space-y-5">

                        <input name='name' type="text" className="border-b-1 text-[16px] font-semibold border-gray-200 focus:outline-none" placeholder="Name" />

                        <input name='photo' type="text" className="border-b-1 text-[16px] font-semibold border-gray-200 focus:outline-none" placeholder="Photo_url" />

                        <input name='email' type="email" className="border-b-1 text-[16px] font-semibold border-gray-200 focus:outline-none" placeholder="Email" />

                        <input name='password' type="password" className="border-b-1 text-[16px] font-semibold border-gray-200 focus:outline-none" placeholder="Password" />

                        <button type='submit' className="btn btn-primary  text-white text-[20px] mt-4">Register</button>
                        {/* {showError && <p className='text-[18px] font-bold text-red-500 italic'>{showError}</p>} */}
                        <p className='text-center text-[18px] font-semibold'>Already have an acount? <Link to='/signin'><span className='font-semibold text-indigo-600 text-[18px]'>Login</span></Link></p>
                    </form>
                </div>
            </div>

            <div className='max-w-sm mx-auto text-center  mt-4'>
                <div className='flex justify-center items-center gap-2'>
                    <p className='border-b-1 border-gray-300 w-[35%]'></p>
                    <p>or</p>
                    <p className='border-b-1 border-gray-300 w-[35%]'></p>
                </div>
                <div className='flex flex-col space-y-3 '>
                    {/* onClick={signWithGoogle} */}
                    <button onClick={signWithGoogle} className="btn bg-white rounded-4xl   text-[16px] font-semibold text-black border-black">
                        <svg aria-label="Google logo" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                </div>
            </div>

        </div>
    );
};

export default SignUp;