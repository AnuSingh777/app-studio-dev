import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons

export default function Contact() {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-white tracking-wide">Contact Us</h2>
        <p className="mt-4 text-lg text-center text-gray-200 max-w-4xl mx-auto">
          We would love to hear from you! Fill out the form below or reach us through the contact details.
        </p>

        {/* Contact Form */}
        <div className="mt-12 grid sm:grid-cols-1 lg:grid-cols-2 gap-12">
          <form className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-800" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="mt-2 block w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-800" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="mt-2 block w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-800" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message"
                className="mt-2 block w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 focus:outline-none transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-800">Get in Touch</h3>
            <p className="mt-4 text-gray-600">
              Reach out to us through the following contact details:
            </p>
            <ul className="mt-6 space-y-6 text-gray-600">
              <li className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                <span className="font-semibold">Address:</span> 53 Main Street, Suite 500, lakhnow, UP
              </li>
              <li className="flex items-center space-x-4">
                <FaEnvelope className="text-indigo-600 text-xl" />
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:studiodev777@gmail.com" className="text-indigo-600 hover:underline">
                studiodev777@gmail.com
                </a>
              </li>
           
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
