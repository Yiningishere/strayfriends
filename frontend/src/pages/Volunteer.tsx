import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Calendar, Clock, Send, AlertCircle } from 'lucide-react';
import axios from 'axios';

const Volunteer = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    availability: [] as string[],
    interests: [] as string[],
    experience: '',
    reason: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const availabilityOptions = [
    'Weekday Mornings',
    'Weekday Afternoons',
    'Weekday Evenings',
    'Weekend Mornings',
    'Weekend Afternoons',
    'Weekend Evenings'
  ];

  const interestOptions = [
    'Dog Walking',
    'Feeding and Care',
    'Transportation',
    'Event Support',
    'Administrative Work',
    'Social Media',
    'Fundraising'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, array: 'availability' | 'interests') => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [array]: checked
        ? [...prev[array], value]
        : prev[array].filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await axios.post('http://localhost:3000/api/volunteers', formData);
      navigate('/thank-you-volunteer');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitError('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Become a Volunteer</h1>
        <p className="text-xl text-gray-600">Join our team and help make a difference in dogs' lives</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {[
          {
            icon: Heart,
            title: 'Make a Difference',
            description: 'Help stray dogs find loving homes and get the care they need'
          },
          {
            icon: Calendar,
            title: 'Flexible Schedule',
            description: 'Choose volunteer hours that work best for you'
          },
          {
            icon: Clock,
            title: 'Any Time Commitment',
            description: 'Whether you can give an hour or a day, every bit helps'
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <item.icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Availability</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {availabilityOptions.map((option) => (
                <label key={option} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value={option}
                    checked={formData.availability.includes(option)}
                    onChange={(e) => handleCheckboxChange(e, 'availability')}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Areas of Interest</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {interestOptions.map((option) => (
                <label key={option} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value={option}
                    checked={formData.interests.includes(option)}
                    onChange={(e) => handleCheckboxChange(e, 'interests')}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience and Motivation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Experience and Motivation</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Experience with Dogs
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about any previous experience working with dogs..."
                />
              </div>
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to volunteer? *
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us why you'd like to volunteer with us..."
                />
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Contact Name *
                </label>
                <input
                  type="text"
                  id="emergencyContact"
                  name="emergencyContact"
                  required
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Contact Phone *
                </label>
                <input
                  type="tel"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  required
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {submitError && (
            <div className="flex items-center text-red-600">
              <AlertCircle className="h-5 w-5 mr-2" />
              {submitError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Send className="h-5 w-5 mr-2" />
                Submit Application
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;