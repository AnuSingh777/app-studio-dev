import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About Section */}
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-3xl font-bold text-white">AppStudioDev</h2>
            <p className="text-lg text-gray-300">Transforming ideas into innovative solutions. At AppStudioDev, we build apps that drive business growth and customer success.</p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-blue-400 transition duration-300 ease-in-out">Home</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition duration-300 ease-in-out">Portfolio</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition duration-300 ease-in-out">About</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition duration-300 ease-in-out">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
                <FaFacebook className="h-8 w-8 text-gray-300" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
                <FaTwitter className="h-8 w-8 text-gray-300" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transform hover:scale-110 transition-all duration-300">
                <FaLinkedin className="h-8 w-8 text-gray-300" />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transform hover:scale-110 transition-all duration-300">
                <FaGithub className="h-8 w-8 text-gray-300" />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-xl font-semibold text-white">Stay Updated</h3>
            <p className="text-gray-300">Join our newsletter to receive updates on new projects, news, and more!</p>
            <div className="flex items-center space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="p-2 w-full rounded-l-md text-black focus:outline-none"
              />
              <button className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700 transition-all duration-300 focus:outline-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} AppStudioDev. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
