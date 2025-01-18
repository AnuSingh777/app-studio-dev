import { FaStar } from 'react-icons/fa'; // Importing React Icons

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at Tech...XYZ",
      feedback:
        "Working with AppStudioDev was a game-changer for our business. Their innovative approach to design and seamless development process led to a product that stands out in the market. Our app's performance has been outstanding, and our clients love the user experience!",
      image: "https://physicaleducationandwellness.mit.edu/wp-content/uploads/Untitled-1.png", // Replace with actual images or URLs
    },
    {
      name: "James Williams",
      role: "Founder at Inno...xyz",
      feedback:
        "The team at AppStudioDev exceeded our expectations in every way. They delivered our app on time, provided regular updates, and took our vision to the next level. The collaboration was seamless, and the final result was exactly what we envisioned, if not better.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjeMPQzdfHxeQUf7JhKRResqV7m2-ZvG7mFg&s",
    },
    {
      name: "Emily Davis",
      role: "Product Manager at Future..xyz",
      feedback:
        "From start to finish, the process with AppStudioDev was smooth and professional. They listened to our needs, understood our goals, and turned our ideas into a stunning app that aligns perfectly with our brand. Their attention to detail and quality was exceptional.",
      image: "https://thedrugdeliverylab.ua.edu/uploads/1/3/8/1/138192922/published/emily.jpg?1718236689",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white">What Our Clients Say</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Our clients' satisfaction is our priority. See what they have to say about our top-notch services and solutions.
        </p>
        <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto border-4 border-teal-400"
              />
              <h3 className="mt-4 text-xl font-semibold text-teal-600">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="mt-4 text-gray-700 italic">
                "{testimonial.feedback}"
              </p>
              <div className="mt-6 flex justify-center items-center space-x-2">
                <FaStar className="text-yellow-400 h-6 w-6" />
                <FaStar className="text-yellow-400 h-6 w-6" />
                <FaStar className="text-yellow-400 h-6 w-6" />
                <FaStar className="text-yellow-400 h-6 w-6" />
                <FaStar className="text-yellow-400 h-6 w-6" />
              </div>
              <div className="mt-6 flex justify-center space-x-4">
                <button className="px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition duration-200">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
