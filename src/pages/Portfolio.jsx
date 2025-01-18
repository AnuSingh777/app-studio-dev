import { 
  AcademicCapIcon, 
  CodeBracketIcon, 
  ComputerDesktopIcon, 
  DevicePhoneMobileIcon,
  PresentationChartBarIcon
} from '@heroicons/react/24/outline'; // Importing icons

export default function Portfolio() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold text-white">Our Portfolio</h2>
        <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
          Explore our latest projects, carefully crafted with innovation and precision. We've built apps and websites across various industries with a focus on performance, design, and user experience.
        </p>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Project 1 */}
          <div className="bg-white p-6 h-full rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <ComputerDesktopIcon className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Web Development</h3>
            <p className="text-gray-600 mt-2">
              A fully responsive web app with a clean and modern design, built using the latest technologies for optimal performance.
            </p>
            <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">View Project</a>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 h-full rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <CodeBracketIcon className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Backend Development</h3>
            <p className="text-gray-600 mt-2">
              Building secure and scalable APIs using Node.js and Express, ensuring fast and reliable data processing.
            </p>
            <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">View Project</a>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-6 h-full rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <AcademicCapIcon className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Educational Platforms</h3>
            <p className="text-gray-600 mt-2">
              Creating engaging e-learning platforms with interactive features to enhance the learning experience.
            </p>
            <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">View Project</a>
          </div>

          {/* Project 4 */}
          <div className="bg-white p-6 h-full rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <DevicePhoneMobileIcon className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Mobile App Development</h3>
            <p className="text-gray-600 mt-2">
              Designing and developing native mobile applications for Android and iOS that provide intuitive user experiences.
            </p>
            <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">View Project</a>
          </div>

          {/* Project 5 */}
          <div className="bg-white p-6 h-full rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <PresentationChartBarIcon className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Data Analytics</h3>
            <p className="text-gray-600 mt-2">
              Developing powerful data analytics platforms that help businesses extract meaningful insights from complex datasets.
            </p>
            <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">View Project</a>
          </div>

          {/* Project 6 */}
          <div className="bg-white p-6 h-full rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <ComputerDesktopIcon className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">E-Commerce Solutions</h3>
            <p className="text-gray-600 mt-2">
              Building custom e-commerce websites with seamless shopping experiences and secure payment integrations.
            </p>
            <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}
