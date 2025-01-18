import { FaAndroid, FaApple, FaChrome } from 'react-icons/fa'; // Importing icons for Android, iOS, and Web

export default function About() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white">About Us</h2>
        <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
          At App Studio, we specialize in developing top-notch mobile and web applications that empower businesses and delight users. Whether it's creating seamless Android and iOS apps or building powerful web solutions, our goal is to bring your ideas to life through innovative design and reliable development.
        </p>
        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaAndroid className="text-green-500 h-16 w-16 mx-auto" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">Android App Development</h3>
            <p className="mt-4 text-gray-600">
              Our team excels at building intuitive and powerful Android apps that run smoothly on a variety of devices. From simple apps to complex, data-driven solutions, we create custom Android applications to suit your business needs.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaApple className="text-gray-800 h-16 w-16 mx-auto" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">iOS App Development</h3>
            <p className="mt-4 text-gray-600">
              We specialize in creating sleek and user-friendly iOS applications that deliver exceptional performance and user experience. From native apps to advanced integrations, we ensure your iOS app meets the highest standards.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaChrome className="text-blue-500 h-16 w-16 mx-auto" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">Web Development</h3>
            <p className="mt-4 text-gray-600">
              Whether you need a dynamic website or a robust web application, our web development services are tailored to create seamless and interactive online experiences. We use modern technologies to build scalable and secure web solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
