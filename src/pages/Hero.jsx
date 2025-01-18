import { DevicePhoneMobileIcon, DeviceTabletIcon, ComputerDesktopIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Build Amazing Apps with App Studio
        </h1>
        
        {/* Hero Description */}
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          At App Studio, we specialize in designing, developing, and delivering world-class digital products. Whether you're looking to build stunning Android and iOS apps, or full-featured web platforms, we create seamless, scalable, and user-friendly solutions tailored for your business needs.
        </p>

        {/* Platforms & Services Description */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Android App */}
          <div className="text-center">
            <DevicePhoneMobileIcon className="mx-auto mb-4 w-20 h-20 text-green-600" />
            <h3 className="text-xl font-semibold">Android Apps</h3>
            <p className="text-md font-medium text-gray-200 mt-2">
              We create native Android apps optimized for performance, speed, and intuitive user experience. From e-commerce to social platforms, we cover all app needs.
            </p>
          </div>

          {/* iOS App */}
          <div className="text-center">
            <DeviceTabletIcon className="mx-auto mb-4 w-20 h-20 text-black" />
            <h3 className="text-xl font-semibold">iOS Apps</h3>
            <p className="text-md font-medium text-gray-200 mt-2">
              Our iOS applications are designed to deliver high-quality user experiences with seamless integration on iPhones, iPads, and Apple Watches.
            </p>
          </div>

          {/* Web Development */}
          <div className="text-center">
            <ComputerDesktopIcon className="mx-auto mb-4 w-20 h-20 text-blue-600" />
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="text-md font-medium text-gray-200 mt-2">
              We build responsive, high-performance websites with cutting-edge technology. Whether it's a landing page or a complex platform, we can handle it all.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="text-center">
            <UserGroupIcon className="mx-auto mb-4 w-20 h-20 text-pink-600" />
            <h3 className="text-xl font-semibold">UI/UX Design</h3>
            <p className="text-md font-medium text-gray-200 mt-2">
              Our UI/UX design team crafts stunning, user-centric interfaces that provide an engaging experience. We focus on ease of use and modern design principles.
            </p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <a
          href="#contact"
          className="mt-12 inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-50 hover:scale-105 transform transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
