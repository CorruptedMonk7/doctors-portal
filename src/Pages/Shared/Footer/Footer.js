import React from 'react';
import foot from "../../../assets/images/footer.png"

const Footer = () => {
    return (
        <footer className=" p-10 text-black"
            style={{
                background: `url(${foot})`,
                backgroundSize: "cover"
            }}
        >
            <div className='footer'>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>

            <aside className='mt-32 text-center'>
                <p>Copyright © 2024 - All right reserved by Doctors Portal Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;