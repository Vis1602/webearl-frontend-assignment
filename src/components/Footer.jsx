import { Facebook, Linkedin, Twitter, Mail } from 'lucide-react';
import logo from '../assets/Logo.png'; // Adjust the path as necessary
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-white py-8 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-blue-100 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row">
          {/* Agency logo and info - Left side */}
          <div className="flex-shrink-0 md:w-1/4 mb-6 md:mb-0 pr-4">
            <div className="flex items-center mb-3">
              <div className="text-blue-500 mr-2">
                <img src={logo} alt="Agency Logo" className="h-10 w-auto" />
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-3">
              Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.
            </p>
            
            <div className="text-xs text-gray-500">
              © Skyex Theme 2020
            </div>
          </div>
          
          {/* Navigation links - Right side */}
          <div className="flex-grow flex flex-col md:flex-row md:justify-between">
            {/* Company section */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-blue-700 font-semibold uppercase text-sm mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500 text-sm">Donec dignissim</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 text-sm">Curabitur egestas</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 text-sm">Nam posuere</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 text-sm">Aenean facilisis</a></li>
              </ul>
            </div>
            
            {/* Services section */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-blue-700 font-semibold uppercase text-sm mb-3">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500 text-sm">Class convallis</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 text-sm">Vestibulum faucibus</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 text-sm">Quisque lacinia purus</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 text-sm">Aliquam nec ex</a></li>
              </ul>
            </div>
            
            {/* Resources section */}
            <div>
              <h3 className="text-blue-700 font-semibold uppercase text-sm mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500 text-sm">Suspendisse porttitor</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 text-sm">Nam posuere</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 text-sm">Curabitur egestas</a></li>
              </ul>
            </div>
            
            {/* Social and Language - Rightmost column */}
            <div className="mt-6 md:mt-0">
              {/* Social media icons */}
              <div className="flex space-x-3 mb-4">
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                  <Mail size={16} />
                </a>
              </div>
              
              {/* Language selector */}
              <div>
                <button className="flex items-center border border-gray-300 rounded px-3 py-1 text-sm hover:bg-gray-50">
                  <span className="mr-1">🌐</span>
                  <span>English - En</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;