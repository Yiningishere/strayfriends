// Done by Yinging
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';

const ThankYouReport = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Heart className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Report!</h1>
          <p className="text-gray-600 mb-6">
            We appreciate you taking the time to report this stray dog. Our team will review your report
            and take appropriate action to help the dog. We'll contact you if we need any additional
            information.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Return to Homepage
          </Link>
          <Link
            to="/report-sighting"
            className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Report Another Sighting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouReport;