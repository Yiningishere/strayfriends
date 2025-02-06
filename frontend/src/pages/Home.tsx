import { Link } from 'react-router-dom';
import { Heart, Home as HomeIcon, Search, Calendar } from 'lucide-react';

const Home = () => {
  const testimonials = [
    {
      name: 'John & Luna',
      text: 'Adopting Luna was the best decision we ever made. The team at Stray Friends made the process so smooth.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Sarah & Max',
      text: 'Max has brought so much joy to our family. We are grateful to Stray Friends for bringing us together.',
      image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Mike & Bella',
      text: 'The dedication of the Stray Friends team is amazing. They truly care about finding the perfect match.',
      image: 'https://images.unsplash.com/photo-1558898479-33c0057a5d12?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1920&q=80"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Give a Stray Dog a Loving Home
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Every dog deserves a chance at happiness. Browse our available dogs and find your perfect companion.
            </p>
            <div className="space-x-4">
              <Link
                to="/dogs"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Find a Dog
              </Link>
              <Link
                to="/about"
                className="inline-block px-8 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600">Simple steps to find your new best friend</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Search, title: 'Browse', text: 'View our available dogs' },
              { icon: Calendar, title: 'Meet', text: 'Schedule a meet and greet' },
              { icon: Heart, title: 'Bond', text: 'Spend time getting to know them' },
              { icon: HomeIcon, title: 'Adopt', text: 'Complete the adoption process' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Dogs Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Dogs</h2>
            <p className="mt-4 text-xl text-gray-600">Meet some of our wonderful dogs looking for homes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Max',
                image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
                age: '2 years',
                breed: 'Labrador Mix'
              },
              {
                name: 'Luna',
                image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80',
                age: '1 year',
                breed: 'German Shepherd Mix'
              },
              {
                name: 'Buddy',
                image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
                age: '3 years',
                breed: 'Golden Retriever Mix'
              }
            ].map((dog, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dog.name}</h3>
                  <p className="text-gray-600 mb-4">{dog.age} • {dog.breed}</p>
                  <Link
                    to="/dogs"
                    className="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Meet {dog.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Happy Adoptions</h2>
            <p className="mt-4 text-xl text-gray-600">Stories from our adopters</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your New Best Friend?</h2>
          <p className="text-xl text-blue-100 mb-8">Browse our available dogs and start your adoption journey today</p>
          <Link
            to="/dogs"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors"
          >
            View Available Dogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;