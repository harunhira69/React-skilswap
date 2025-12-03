import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Contact Info */}
        <div>
          <h6 className="text-lg font-bold mb-4">Contact Info</h6>
          <p className="text-sm mb-2">📍 Dhaka, Bangladesh</p>
          <p className="text-sm mb-2">📞 +880 1234-567890</p>
          <p className="text-sm mb-2">📧 support@skillswap.com</p>
          <p className="text-sm">⏰ 9:00 AM – 8:00 PM (Everyday)</p>
        </div>

        {/* Company Links */}
        <div>
          <h6 className="text-lg font-bold mb-4">Company</h6>
          <ul className="space-y-2">
          <Link to='/about'>
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">About Us</li>
          
          </Link>
           <Link to='/contact'>
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">Contact</li>
           
           </Link>
         <Link to='/jobs'>
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">Jobs</li>
         
         </Link>
            <Link to='/press'>
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">Press Kit</li>
            </Link>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h6 className="text-lg font-bold mb-4">Resources</h6>
          <ul className="space-y-2">
           <Link to='/blog'>
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">Blog</li>
           </Link>
            <Link to='/faq'>
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">FAQ</li>
            </Link>
            <Link to='/privacy-policy'>
                        <li className="hover:text-yellow-400 transition-colors cursor-pointer">Privacy Policy</li>
            </Link>

           <Link to='/terms'>
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">Terms of Service</li>
           </Link>
          </ul>
        </div>

        {/* Social Media */}
     <div>
  <h6 className="text-lg font-bold mb-4">Follow Us</h6>
  <div className="flex gap-4 text-xl mb-4">
    <a
      href="https://www.facebook.com/harun.sarkar.7946/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition-colors"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://x.com/harunabhi4"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition-colors"
    >
      <FaTwitter /> {/* keep Twitter icon for X */}
    </a>
    <a
      href="https://www.instagram.com/" // replace if you have Instagram
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition-colors"
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.linkedin.com/in/harunmern/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition-colors"
    >
      <FaLinkedinIn />
    </a>
    <a
      href="https://github.com/harunhira69"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition-colors"
    >
      <FaGithub />
    </a>
  </div>
  <p className="text-sm">Stay connected and get the latest updates!</p>
</div>

      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
        © 2025 SkillSwap. All rights reserved.  
        Built with ❤️ using React, Firebase & Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
