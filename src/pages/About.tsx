import React from 'react';
import { Calendar, MapPin, Users, BookOpen, Award, Target } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '1987', event: 'School established in Arakere, Srirangapatna' },
    { year: '1990', event: 'Added pre-primary section for early education' },
    { year: '1995', event: 'Computer lab established with basic facilities' },
    { year: '2000', event: 'Library expanded with 600+ books collection' },
    { year: '2010', event: 'Infrastructure improvements and boundary wall construction' },
    { year: '2020', event: 'Digital learning initiatives introduced' },
  ];
  // const milestones = [
  //   {
  //     year: '1987',
  //     title: 'School Established',
  //     description: 'POORNIMA V. SAMSTHE ARAKERE was founded with a vision to provide quality education to rural communities.'
  //   },
  //   {
  //     year: '1995',
  //     title: 'Infrastructure Expansion',
  //     description: 'Added more classrooms and facilities to accommodate growing student population.'
  //   },
  //   {
  //     year: '2005',
  //     title: 'Computer Education',
  //     description: 'Introduced computer education with 5 functional computers to prepare students for digital age.'
  //   },
  //   {
  //     year: '2015',
  //     title: 'Library Enhancement',
  //     description: 'Expanded library collection to over 600 books covering diverse subjects and interests.'
  //   }
  // ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Our School</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn about our rich history, mission, and commitment to educational excellence 
            in the rural community of ARAKERE, Karnataka.
          </p>
        </div>

        {/* School Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <img
              src="public/assets/students.jpeg"
              alt="Students studying"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              POORNIMA V. SAMSTHE ARAKERE has been a beacon of education in the rural landscape of 
              Karnataka since 1987. As a private unaided institution, we have maintained our commitment 
              to providing quality education while staying deeply rooted in our community values.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Located in the SRIRANGAPATNA block of MANDYA district, our school serves the educational 
              needs of the local community, offering comprehensive education from grades 1 to 10, 
              including a pre-primary section.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Established</p>
                  <p className="text-gray-600">1987</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Karnataka, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Type</p>
                  <p className="text-gray-600">Co-Educational</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Medium</p>
                  <p className="text-gray-600">English</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-600 to-emerald-600"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <div className="text-gray-700">{milestone.event}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To provide quality education that nurtures young minds, builds character, and prepares 
              students for future challenges while preserving our cultural values and traditions. 
              We strive to create an inclusive learning environment where every child can thrive.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be a leading educational institution in rural Karnataka, recognized for academic 
              excellence, moral values, and holistic development of students. We envision empowering 
              our students to become responsible citizens and future leaders.
            </p>
          </div>
        </div>

        {/* Key Facts */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">School Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Grades Offered</h4>
              <p className="text-gray-600">1st to 10th Standard</p>
              <p className="text-gray-600">Pre-Primary Section</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Academic Session</h4>
              <p className="text-gray-600">Starts in April</p>
              <p className="text-gray-600">Annual System</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Management</h4>
              <p className="text-gray-600">Private Unaided</p>
              <p className="text-gray-600">Independent Institution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;