import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckCircle, XCircle, AlertCircle, Eye, MapPin, Calendar, User, Mail, Phone } from 'lucide-react';

interface Sighting {
  id: string;
  location: string;
  date: string;
  description: string;
  dogSize: string;
  dogColor: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  additionalInfo: string;
  imageUrl: string;
  status: 'pending' | 'investigating' | 'resolved' | 'closed';
  createdAt: string;
}

const AdminDashboard = () => {
  const [sightings, setSightings] = useState<Sighting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedSighting, setSelectedSighting] = useState<Sighting | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'investigating' | 'resolved' | 'closed'>('all');

  useEffect(() => {
    fetchSightings();
  }, []);

  const fetchSightings = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/sightings');
      setSightings(response.data);
    } catch (err) {
      setError('Failed to fetch sightings');
    } finally {
      setLoading(false);
    }
  };

  const updateSightingStatus = async (id: string, status: Sighting['status']) => {
    try {
      await axios.patch(`http://localhost:3000/api/sightings/${id}`, { status });
      fetchSightings();
    } catch (err) {
      setError('Failed to update status');
    }
  };

  const filteredSightings = sightings.filter(sighting => 
    filter === 'all' ? true : sighting.status === filter
  );

  const getStatusColor = (status: Sighting['status']) => {
    const colors = {
      pending: 'text-yellow-600 bg-yellow-100',
      investigating: 'text-blue-600 bg-blue-100',
      resolved: 'text-green-600 bg-green-100',
      closed: 'text-gray-600 bg-gray-100'
    };
    return colors[status];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
        <div className="flex space-x-4">
          {['all', 'pending', 'investigating', 'resolved', 'closed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status as any)}
              className={`px-4 py-2 rounded-md ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      ) : error ? (
        <div className="text-center py-12 text-red-600">
          <AlertCircle className="h-12 w-12 mx-auto mb-4" />
          {error}
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sightings List */}
          <div className="space-y-4">
            {filteredSightings.map((sighting) => (
              <div
                key={sighting.id}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedSighting(sighting)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-900 font-medium">{sighting.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">{new Date(sighting.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(sighting.status)}`}>
                    {sighting.status}
                  </span>
                </div>
                <p className="text-gray-600 line-clamp-2">{sighting.description}</p>
              </div>
            ))}
          </div>

          {/* Sighting Details */}
          {selectedSighting && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Sighting Details</h2>
                <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(selectedSighting.status)}`}>
                  {selectedSighting.status}
                </span>
              </div>

              {selectedSighting.imageUrl && (
                <img
                  src={selectedSighting.imageUrl}
                  alt="Reported dog"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Location & Time</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                      <span>{selectedSighting.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <span>{new Date(selectedSighting.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dog Description</h3>
                  <div className="space-y-2">
                    <p><strong>Size:</strong> {selectedSighting.dogSize}</p>
                    <p><strong>Color:</strong> {selectedSighting.dogColor}</p>
                    <p><strong>Description:</strong> {selectedSighting.description}</p>
                    {selectedSighting.additionalInfo && (
                      <p><strong>Additional Info:</strong> {selectedSighting.additionalInfo}</p>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-400 mr-2" />
                      <span>{selectedSighting.contactName}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-400 mr-2" />
                      <span>{selectedSighting.contactEmail}</span>
                    </div>
                    {selectedSighting.contactPhone && (
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-400 mr-2" />
                        <span>{selectedSighting.contactPhone}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Update Status</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['investigating', 'resolved', 'closed'].map((status) => (
                      <button
                        key={status}
                        onClick={() => updateSightingStatus(selectedSighting.id, status as Sighting['status'])}
                        className={`px-4 py-2 rounded-md ${
                          selectedSighting.status === status
                            ? getStatusColor(status as Sighting['status'])
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;