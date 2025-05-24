import React from 'react';
import logo from '../assets/hibby-logo.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlineAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-fuchsia-300 text-black p-10">
                <nav>
                    <div className='flex gap-2 items-center'>
                        <img className='w-11 h-11 rounded-full border-2' src={logo} alt="" />
                        <p className="text-2xl font-bold">HobbyHub</p>
                    </div>
                    <p className="">HobbyHub is your space to explore passions.</p>
                    <h3 className='text-[20px] font-bold'>follow us</h3>
                    <div className='flex gap-1 items-center'>
                        <a href='https://www.facebook.com' target='_blank'> <FaFacebook /></a>
                        <a href='https://www.twitter.com'  target='_blank'><FaTwitter /></a>
                        <a href='https://www.youtube.com'  target='_blank'><FaYoutube></FaYoutube></a>
                        <a href='https://www.instagram.com'target='_blank'><RiInstagramFill /></a>
                    </div>
                </nav>

                <nav>
                    <h6 className="footer-title"> Explore</h6>
                    <a className="link link-hover"> Browse Hobbies</a>
                    <a className="link link-hover">Featured Groups</a>
                    <a className="link link-hover">Events Calendar </a>
                    <a className="link link-hover">All Projects</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Help & FAQ</a>
                    <a className="link link-hover">Contact Us</a>
                    <p  className='flex gap-2 items-center'><MdOutlineAddIcCall />+88 01875540498</p>
                    <p  className='flex gap-2 items-center'><MdEmail />assalmanmuhammad@gmail.com</p>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;