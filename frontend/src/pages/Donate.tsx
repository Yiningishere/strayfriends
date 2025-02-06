import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Coffee, Gift } from 'lucide-react';

const Donate = () => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(50);
  const [customAmount, setCustomAmount] = useState('');

  const donationOptions = [
    { amount: 25, description: 'Food for one dog for a month' },
    { amount: 50, description: 'Veterinary check-up and vaccines' },
    { amount: 100, description: 'Emergency medical care' },
    { amount: 200, description: 'Complete care package for one dog' }
  ];

  const impactItems = [
    {
      icon: Coffee,
      title: 'Monthly Food',
      description: '$25 provides food for one dog for an entire month'
    },
    {
      icon: Heart,
      title: 'Medical Care',
      description: '$50 covers basic veterinary care and vaccinations'
    },
    {
      icon: Gift,
      title: 'Complete Care',
      description: '$200 provides full care including shelter and medical treatment'
    }
  ];

  const handleDonateClick = () => {
    const amount = selectedAmount === 'custom' ? customAmount : selectedAmount.toString();
    navigate('/payment', { state: { amount } });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Difference Today</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your donation helps us rescue, rehabilitate, and rehome stray dogs in need
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Donation Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Donation Amount</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {donationOptions.map((option) => (
              <button
                key={option.amount}
                onClick={() => setSelectedAmount(option.amount)}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  selectedAmount === option.amount
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-600'
                }`}
              >
                <div className="text-xl font-bold text-gray-900">${option.amount}</div>
                <div className="text-sm text-gray-600">{option.description}</div>
              </button>
            ))}
          </div>

          <div className="mb-8">
            <button
              onClick={() => setSelectedAmount('custom')}
              className={`w-full p-4 rounded-lg border-2 transition-colors ${
                selectedAmount === 'custom'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-600'
              }`}
            >
              <div className="text-xl font-bold text-gray-900 mb-2">Custom Amount</div>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full p-2 border rounded-md"
                onClick={(e) => e.stopPropagation()}
              />
            </button>
          </div>

          <button 
            onClick={handleDonateClick}
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            Continue to Payment
          </button>

          <div className="mt-6 text-center text-gray-600">
            <p className="text-sm">Secure payment processing • Tax deductible</p>
          </div>
        </div>

        {/* Impact Information */}
        <div className="space-y-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h2>
            <div className="space-y-6">
              {impactItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Help</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Monthly Giving</h3>
                <p className="text-gray-600">
                  Become a monthly donor and provide consistent support for our rescue efforts.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Corporate Matching</h3>
                <p className="text-gray-600">
                  Many employers match charitable donations. Check if your company participates.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Legacy Giving</h3>
                <p className="text-gray-600">
                  Make a lasting impact by including Stray Friends in your estate planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;