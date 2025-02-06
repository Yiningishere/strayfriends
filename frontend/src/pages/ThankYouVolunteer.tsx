import { Link } from 'react-router-dom';
import { Heart, ArrowLeft, Calendar } from 'lucide-react';

const ThankYouVolunteer = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Heart className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Volunteering!</h1>
          <p className="text-gray-600 mb-6">
            We've received your volunteer application and we're excited to have you join our team.
            Our volunteer coordinator will review your application and contact you within 2-3 business days
            to discuss the next steps.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-900">Orientation Session</h3>
                <p className="text-gray-600">
                  You'll be invited to attend a volunteer orientation session where you'll learn about our
                  procedures and meet other volunteers.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-900">Schedule Planning</h3>
                <p className="text-gray-600">
                  We'll work with you to create a volunteer schedule that fits your availability and interests.
                </p>
              </div>
            </div>
          </div>
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
            to="/about"
            className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouVolunteer;