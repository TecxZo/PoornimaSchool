import React from 'react';
import { 
  BookOpen, Computer, Activity, Utensils, Bus, Shield, Heart, Users,
  Building, Droplets, Zap, Car
} from 'lucide-react';

// Import all images from src/assets
import computerLab from '../assets/computerClass.jpeg';
import playGround from '../assets/playGround.jpeg';

const SchoolDetailsPage: React.FC = () => {
  const facilities = [
    {
      icon: Computer,
      title: 'Computer Education',
      description: 'Modern computer education facility with 5 functional computers to introduce students to digital literacy and technology skills.',
      features: ['5 Functional Computers', 'Basic Computer Skills', 'Digital Literacy', 'Technology Exposure'],
      available: true,
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Activity,
      title: 'Playground & Sports',
      description: 'Dedicated playground space for physical activities, sports, and recreational activities to ensure holistic development of students.',
      features: ['Open Playground', 'Physical Activities', 'Sports Equipment', 'Recreational Space'],
      available: true,
      color: 'bg-purple-100 text-purple-600'
    },
  ];

  const supportServices = [
    { icon: Shield, title: 'Safe Environment', description: 'Partial boundary wall and security measures ensure a safe learning environment.', color: 'text-blue-600' },
    { icon: Bus, title: 'Easy Accessibility', description: 'School is accessible via all-weather roads, ensuring year-round connectivity.', color: 'text-green-600' },
    { icon: Users, title: 'Inclusive Education', description: 'Co-educational environment promoting equality and inclusive learning.', color: 'text-purple-600' },
    { icon: Heart, title: 'Student Welfare', description: 'Focus on student well-being, character development, and moral values.', color: 'text-red-600' }
  ];

  const infrastructureFeatures = [
    { icon: Building, title: 'Private School Building', description: 'Well-maintained private building housing all educational facilities', status: 'Excellent Condition', color: 'bg-blue-100 text-blue-600' },
    { icon: Users, title: '15 Classrooms', description: 'Spacious classrooms designed for optimal learning environment', status: 'Good Condition', color: 'bg-green-100 text-green-600' },
    { icon: BookOpen, title: 'Additional Rooms', description: '2 specialized rooms for non-teaching activities and events', status: 'Functional', color: 'bg-purple-100 text-purple-600' },
    { icon: Shield, title: 'Headmaster Office', description: 'Separate administrative room for school management', status: 'Well-Equipped', color: 'bg-orange-100 text-orange-600' }
  ];

  const utilities = [
    { icon: Zap, title: 'Electricity Connection', description: 'Reliable power supply throughout the school premises', status: 'Connected' },
    { icon: Droplets, title: 'Drinking Water', description: 'Clean tap water facility available for all students and staff', status: 'Functional' },
    { icon: Car, title: 'All-Weather Road Access', description: 'School is easily accessible via well-maintained roads', status: 'Excellent' },
    { icon: Shield, title: 'Partial Boundary Wall', description: 'Security infrastructure to ensure student safety', status: 'In Place' }
  ];

  const specialFacilities = [
    { title: 'Computer Lab', description: '5 functional computers for digital education', image: computerLab },
    { title: 'Library', description: 'Well-stocked library with 602 books across various subjects', image: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Playground', description: 'Open space for physical activities and sports', image: playGround }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Facilities Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">School Facilities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the comprehensive facilities and services available at POORNIMA V. SAMSTHE ARAKERE 
            designed to support student learning and development.
          </p>
        </div>

        {/* Core Facilities */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Core Facilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg ${facility.color} flex items-center justify-center flex-shrink-0`}>
                    <facility.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{facility.title}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        facility.available ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {facility.available ? 'Available' : 'Not Available'}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{facility.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {facility.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <service.icon className={`h-12 w-12 mx-auto mb-4 ${service.color}`} />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">School Infrastructure</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our well-planned infrastructure designed to provide a conducive learning 
            environment for students across all grade levels.
          </p>
        </div>

        {/* Infrastructure Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Building & Classrooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructureFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{feature.description}</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                  {feature.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Facilities */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Special Facilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialFacilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={facility.image} alt={facility.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Utilities & Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Utilities & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {utilities.map((utility, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                <utility.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{utility.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{utility.description}</p>
                <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {utility.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SchoolDetailsPage;
