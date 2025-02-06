import { Heart } from 'lucide-react';

const Dogs = () => {
  const dogs = [
    {
      id: 1,
      name: 'Buddy',
      age: '2 years',
      breed: 'Mixed Breed',
      description: 'Friendly and energetic mixed breed looking for a loving home.',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Luna',
      age: '1 year',
      breed: 'German Shepherd Mix',
      description: 'Sweet and gentle soul who loves cuddles and playing fetch.',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Max',
      age: '3 years',
      breed: 'Labrador Mix',
      description: 'Playful and well-trained dog great with children.',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Bella',
      age: '4 years',
      breed: 'Husky Mix',
      description: 'Energetic and loving dog looking for an active family.',
      image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      name: 'Charlie',
      age: '2 years',
      breed: 'Golden Retriever Mix',
      description: 'Friendly and social dog who loves everyone he meets.',
      image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'Daisy',
      age: '1 year',
      breed: 'Border Collie Mix',
      description: 'Smart and agile dog perfect for an active lifestyle.',
      image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Available Dogs</h1>
        <p className="text-xl text-gray-600">Meet our wonderful dogs waiting for their forever homes</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dogs.map((dog) => (
          <div key={dog.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="relative">
              <img 
                src={dog.image}
                alt={dog.name}
                className="w-full h-64 object-cover"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                <Heart className="h-6 w-6 text-red-500" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{dog.name}</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{dog.age}</span>
              </div>
              <p className="text-gray-600 mb-2">{dog.breed}</p>
              <p className="text-gray-700">{dog.description}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Meet {dog.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dogs;