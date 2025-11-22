import React from 'react';
import { BookOpen, Users, Calendar, Award, Target, Clock, Languages, GraduationCap } from 'lucide-react';

const Academics = () => {
  const gradeStructure = [
    {
      category: 'Montessori',
      grades: 'Nursery - UKG',
      description: 'Foundation years focusing on basic skills, creativity, and social development',
      subjects: ['Basic Literacy', 'Numeracy', 'Art & Craft', 'Physical Activities', 'Moral Values'],
      color: 'bg-pink-100 border-pink-200 text-pink-800'
    },
    {
      category: 'Primary',
      grades: '1st - 5th Standard',
      description: 'Building fundamental academic skills and knowledge across core subjects',
      subjects: ['Kannada', 'English', 'Mathematics', 'Science', 'Social Studies', 'Environmental Studies','Drawing','Hindi'],
      color: 'bg-blue-100 border-blue-200 text-blue-800'
    },
    {
      category: 'Middle School',
      grades: '6th - 8th Standard',
      description: 'Expanding knowledge base with specialized subjects and critical thinking skills',
      subjects: ['Kannada', 'English', 'Mathematics', 'Science', 'Social Studies', 'Hindi','Computer Studies','Drawing','Physical Education'],
      color: 'bg-green-100 border-green-200 text-green-800'
    },
    {
      category: 'Secondary',
      grades: '9th - 10th Standard',
      description: 'Advanced learning preparing students for higher education and career paths',
      subjects: ['Kannada', 'English', 'Mathematics', 'Science', 'Social Studies', 'Hindi','Computer Education','Drawing','Physical Education'],
      color: 'bg-purple-100 border-purple-200 text-purple-800'
    }
  ];

  const academicFeatures = [
    {
      icon: Languages,
      title: 'English Medium Instruction',
      description: 'All subjects taught in English to ensure better comprehension and cultural connection',
      highlight: 'English Language Focus'
    },
    {
      icon: Calendar,
      title: 'Academic Calendar',
      description: 'Academic session begins in April following the Karnataka state education system',
      highlight: 'April Start'
    },
    {
      icon: Users,
      title: 'Co-Educational Environment',
      description: 'Equal learning opportunities for boys and girls in an inclusive setting',
      highlight: 'Gender Inclusive'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Well-structured curriculum covering all essential subjects from grades 1-10',
      highlight: 'State Syllabus'
    }
  ];

  const learningApproach = [
    {
      title: 'Traditional Values',
      description: 'Emphasis on moral values, discipline, and character development alongside academic excellence.',
      icon: Award
    },
    {
      title: 'Practical Learning',
      description: 'Hands-on learning experiences through projects, activities, and real-world applications.',
      icon: Target
    },
    {
      title: 'Individual Attention',
      description: 'Small class sizes allow teachers to provide personalized attention to each student.',
      icon: Users
    },
    {
      title: 'Holistic Development',
      description: 'Focus on overall personality development including academics, sports, and cultural activities.',
      icon: GraduationCap
    }
  ];

  const teachers = [
    {
      name: 'Mrs. Anjali Sharma',
      photo: '/assets/teachers/anjali.jpeg', // put actual image in public/assets/teachers/
      subject: 'Mathematics',
      qualification: 'M.Sc. Mathematics, B.Ed.'
    },
    {
      name: 'Mr. Ramesh Kumar',
      photo: '/assets/teachers/ramesh.jpeg',
      subject: 'Science',
      qualification: 'M.Sc. Physics, B.Ed.'
    },
    {
      name: 'Ms. Priya Patil',
      photo: '/assets/teachers/priya.jpeg',
      subject: 'English',
      qualification: 'M.A. English, B.Ed.'
    },
    {
      name: 'Mr. Suresh Rao',
      photo: '/assets/teachers/suresh.jpeg',
      subject: 'Social Studies',
      qualification: 'M.A. History, B.Ed.'
    }
  ];


  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Academics</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive academic program designed to nurture young minds 
            from pre-primary through 10th standard with excellence in education.
          </p>
        </div>

        {/* Academic Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Academic Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{feature.description}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Grade Structure */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Grade Structure & Curriculum</h2>
          <div className="space-y-6">
            {gradeStructure.map((grade, index) => (
              <div key={index} className={`rounded-xl border-2 ${grade.color} p-6`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{grade.category}</h3>
                    <p className="text-lg font-semibold mb-2">{grade.grades}</p>
                    <p className="text-gray-700 leading-relaxed">{grade.description}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Subjects Offered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {grade.subjects.map((subject, subjectIndex) => (
                      <span
                        key={subjectIndex}
                        className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Approach */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Teaching Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningApproach.map((approach, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <approach.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{approach.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Calendar */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Academic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Session Start</h3>
              <p className="text-gray-600">Academic session begins in April every year</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">School Hours</h3>
              <p className="text-gray-600">Regular school timings with structured daily schedule</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">Continuous assessment and annual examination system</p>
            </div>
          </div>
        </div>

        {/* Teachers Section */}
        {/* <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Esteemed Teachers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow text-center p-6">
                <img 
                  src={teacher.photo} 
                  alt={teacher.name} 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">{teacher.name}</h3>
                <p className="text-gray-600 font-medium">{teacher.subject}</p>
                <p className="text-gray-500 text-sm">{teacher.qualification}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Student Development */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Student Development Focus</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Academic Excellence</h3>
                <p className="text-gray-600">Strong foundation in core subjects with comprehensive curriculum</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Character Building</h3>
                <p className="text-gray-600">Emphasis on moral values, ethics, and responsible citizenship</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Future Readiness</h3>
                <p className="text-gray-600">Preparing students for higher education and career opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;