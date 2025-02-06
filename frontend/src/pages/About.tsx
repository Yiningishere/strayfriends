import { Heart, Users, Home, Phone } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Dogs Rescued', value: '500+', icon: Heart },
    { label: 'Volunteers', value: '100+', icon: Users },
    { label: 'Dogs Adopted', value: '400+', icon: Home },
    { label: 'Years Active', value: '5+', icon: Phone }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Stray Friends</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Dedicated to giving every stray dog a second chance at happiness
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80"
            alt="Happy dogs"
            className="rounded-lg shadow-md w-full h-[400px] object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At Stray Friends, we believe every dog deserves a loving home. Our mission is to rescue, 
            rehabilitate, and rehome stray dogs while educating the community about responsible pet ownership.
          </p>
          <p className="text-gray-600">
            Through our network of dedicated volunteers and supporters, we work tirelessly to provide 
            care, shelter, and support for abandoned dogs while finding them their perfect forever homes.
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
            Join Our Mission
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How You Can Help</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Adopt</h3>
            <p className="text-gray-600">
              Give a loving home to one of our rescued dogs and change their life forever.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
            <p className="text-gray-600">
              Join our team of dedicated volunteers and help care for our rescued dogs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Donate</h3>
            <p className="text-gray-600">
              Support our mission with a donation to help cover medical care and supplies.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              role: 'Founder & Director',
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80'
            },
            {
              name: 'Mike Thompson',
              role: 'Head Veterinarian',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80'
            },
            {
              name: 'Emily Davis',
              role: 'Volunteer Coordinator',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80'
            }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;