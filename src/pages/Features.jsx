import { PaperClipIcon, CpuChipIcon, DevicePhoneMobileIcon, ShieldCheckIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function Features() {
  const features = [
    {
      title: "Modern UI/UX Design",
      description: "We create intuitive and aesthetically pleasing interfaces that provide a seamless experience for your users. Our design process focuses on user-centered principles.",
      icon: <PaperClipIcon className="h-16 w-16 text-blue-500 mx-auto" />,
    },
    {
      title: "Scalable Solutions",
      description: "We build apps that grow with your business. Whether you're starting small or planning for future expansion, our solutions scale as your needs evolve.",
      icon: <CpuChipIcon className="h-16 w-16 text-blue-500 mx-auto" />,
    },
    {
      title: "High Performance",
      description: "Our apps are designed to deliver the best performance on any platform, ensuring fast load times, smooth transitions, and minimal resource usage.",
      icon: <DevicePhoneMobileIcon className="h-16 w-16 text-blue-500 mx-auto" />,
    },
    {
      title: "Cross-Platform Compatibility",
      description: "Our solutions are built to work seamlessly across multiple platforms, including web, Android, and iOS, providing a consistent experience to all users.",
      icon: <DevicePhoneMobileIcon className="h-16 w-16 text-blue-500 mx-auto" />,
    },
    {
      title: "Secure & Reliable",
      description: "We implement industry-standard security measures to protect your data and ensure your app’s reliability, even under high traffic loads.",
      icon: <ShieldCheckIcon className="h-16 w-16 text-blue-500 mx-auto" />,
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is always available to assist you with any technical issues or questions, ensuring a smooth user experience at all times.",
      icon: <HomeIcon className="h-16 w-16 text-blue-500 mx-auto" />,
    },
  ];

  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Our Features</h2>
        <p className="mt-2 text-lg md:text-xl text-gray-600">Why choose us to build your app? Here are just a few reasons:</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-6 text-gray-800">{feature.title}</h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
