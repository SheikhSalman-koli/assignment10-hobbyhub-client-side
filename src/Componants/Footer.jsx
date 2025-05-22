import React from 'react';
import logo from '../assets/hibby-logo.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title"> About HobbyHub</h6>
                    <div className='flex gap-2 items-center'>
                        <img className='w-14 h-14 rounded-full border-2' src={logo} alt="" />
                        <a className="link link-hover">HobbyHub</a>
                    </div>
                    <p className="">HobbyHub is your space <br /> to explore passions, <br />meet creative minds, <br /> and grow your hobbies <br /> into something special.</p>
                    <div className='flex gap-1 items-center'>
                        <span> <FaFacebook /></span>
                        <span><FaTwitter /></span>
                        <span><FaYoutube></FaYoutube></span>
                        <span><RiInstagramFill /></span>
                    </div>
                </nav>

                <nav>
                    <h6 className="footer-title"> Explore</h6>
                    <a className="link link-hover"> Browse Hobbies</a>
                    <a className="link link-hover">Featured Groups</a>
                    <a className="link link-hover">Spotlight Hobbies</a>
                    <a className="link link-hover">Events Calendar </a>
                    <a className="link link-hover">All Projects</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Help & FAQ</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms of Use</a>
                    <a className="link link-hover">Feedback Form</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;