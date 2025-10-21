import React from 'react';

const Footer = () => {
    return (
<div className='bg-neutral text-neutral-content p-10'>
          <footer className="footer 
          sm:footer-horizontal ">
  <nav>
    <h6 className="footer-title">Contact Info</h6>
    <a className="link link-hover"> Address: Dhaka, Bangladesh</a>
    <a className="link link-hover"> Phone: +880 1234-567890</a>
    <a className="link link-hover">Email: support@skillswap.com  </a>
    <a className="link link-hover">Support Hours: 9:00 AM – 8:00 PM (Everyday)</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
 
</footer>
<nav>
    <p className='flex items-center justify-center mt-5'>
        © 2025 SkillSwap. All rights reserved.
Built with ❤️ using React, Firebase & Tailwind CSS.

    </p>
</nav>
</div>
    );
};

export default Footer;