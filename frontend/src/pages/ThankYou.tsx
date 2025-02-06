import { Link } from 'react-router-dom';
import { Heart, Share2 } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Heart className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Donation!</h1>
          <p className="text-gray-600 mb-6">
            Your generosity helps us continue our mission of rescuing and caring for stray dogs.
            A receipt has been sent to your email.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Share Your Support</h2>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <Share2 className="h-5 w-5 mr-2" />
              Share on Facebook
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors">
              <Share2 className="h-5 w-5 mr-2" />
              Share on Twitter
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="block w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Return to Homepage
          </Link>
          <Link
            to="/dogs"
            className="block w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Meet Our Dogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;