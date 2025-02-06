import { useLocation, useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Shield, CreditCard } from 'lucide-react';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const amount = location.state?.amount || '50.00';

  const initialOptions = {
    clientId: "ATXaCzfoL824Dk66jrsMEgJw1cRhZMVuZoe-MC-o0uAYAKREZM0alchPDKLoXOHSyrVwVGNJbLIFIfwW", // Replace with your PayPal client ID
    currency: "USD",
    intent: "capture"
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Complete Your Donation</h1>
        <p className="text-gray-600">Your generosity helps us care for more dogs in need</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Donation Summary</h2>
          <span className="text-2xl font-bold text-blue-600">${amount}</span>
        </div>

        <div className="border-t border-gray-200 pt-6 mb-8">
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="flex items-center text-gray-600">
              <Shield className="h-5 w-5 mr-2" />
              Secure Payment
            </div>
            <div className="flex items-center text-gray-600">
              <CreditCard className="h-5 w-5 mr-2" />
              SSL Encrypted
            </div>
          </div>

          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(_data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        currency_code: "USD", // Specify your currency code here
                        value: amount.toString() // Ensure amount is converted to string
                      }
                    }
                  ],
                  intent: 'CAPTURE'
                });
              }}
              onApprove={async (_data, actions) => {
                if (actions.order) {
                  // Handle successful payment
                  navigate('/thank-you');
                }
              }}
            />
          </PayPalScriptProvider>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>Your donation may be tax deductible. A receipt will be emailed to you.</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Impact</h3>
        <p className="text-gray-600">
          Your donation of ${amount} can help provide food, shelter, and medical care for our rescued dogs.
          Thank you for making a difference!
        </p>
      </div>
    </div>
  );
}

export default Payment;