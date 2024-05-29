// / 1329ecfe, 2a3ef1a3, 0011a8

function Footer() {
  return (
    <footer className="bg-[#3748e3] text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 text-gray-200 ">Our company is committed to recycling plastic and providing high-quality recycled materials for reuse. We strive to make a positive impact on the environment by reducing plastic waste and promoting sustainability.</p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="text-gray-200">
            <li><a href="#" className="hover:text-white transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Courses</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <ul className="text-gray-200">
            <li><a href="#" className="hover:text-white transition-colors duration-300">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Reddit</a></li>
          </ul>
        </div>
        <div className="text-gray-200">
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p><strong>Location:</strong> Telangana, India</p>
          <p><strong>City:</strong> Hyderabad</p>
          <p><strong>Postal Code:</strong> 500032</p>
          <p><strong>Email:</strong> <a href="mailto:info@reuseme.com">info@reuseme.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+914567890">(+91) 456-7890</a></p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Available in India</h2>
          <ul className="text-gray-200">
            <li>Hyderabad</li>
            <li>Delhi </li>
            <li>Banglore</li>
            <li>Kerala</li>
            <li>Tamil Nadu</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs pt-8 text-white">© 2024 Reuse Plastic. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
