import React from 'react';

interface Alumni {
  name: string;
  year: number;
  marks: string;
  currentStatus: string;
  messageToSchool: string;
  photo?: string;
}

const AlumniPage = () => {
  // All alumni data
  const alumniList: Alumni[] = [
    {
      name: 'Rohit Kumar',
      year: 2020,
      marks: '92%',
      currentStatus: 'Pursuing B.Tech in Computer Science',
      messageToSchool: 'Poornima V. Samsthe Arakere laid a strong foundation for my academic and personal growth.',
      photo: '/assets/alumni/rohit.jpeg',
    },
    {
      name: 'Anjali Sharma',
      year: 2020,
      marks: '95%',
      currentStatus: 'Studying MBBS at Bangalore Medical College',
      messageToSchool: 'I am grateful to my teachers for their guidance and encouragement throughout school.',
      photo: '/assets/alumni/anjali.jpeg',
    },
    {
      name: 'Priya Patil',
      year: 2021,
      marks: '89%',
      currentStatus: 'Studying Bachelor of Arts in Literature',
      messageToSchool: 'The school helped me explore my creativity and develop confidence.',
      photo: '/assets/alumni/priya.jpeg',
    },
    {
      name: 'Vikram Singh',
      year: 2021,
      marks: '91%',
      currentStatus: 'Preparing for competitive exams in Science',
      messageToSchool: 'Thanks to the excellent teaching and supportive environment, I am excelling in my studies.',
      photo: '/assets/alumni/vikram.jpeg',
    },
    {
      name: 'Sneha Rao',
      year: 2022,
      marks: '93%',
      currentStatus: 'Pursuing Engineering in AI & ML',
      messageToSchool: 'I cherish all the memories and guidance I received from my mentors.',
      photo: '/assets/alumni/sneha.jpeg',
    },
  ];

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Alumni of Poornima V. Samsthe Arakere</h1>

      {alumniList.length === 0 ? (
        <p className="text-center text-gray-600">No alumni records found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {alumniList.map((alumni, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              {alumni.photo && (
                <img
                  src={alumni.photo}
                  alt={alumni.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
              )}
              <h3 className="text-xl font-bold text-gray-900">{alumni.name}</h3>
              <p className="text-gray-600 mb-1">Year: {alumni.year}</p>
              <p className="text-gray-600 mb-1">Marks: {alumni.marks}</p>
              <p className="text-gray-600 mb-1 font-semibold">Currently: {alumni.currentStatus}</p>
              <p className="text-gray-500 text-sm italic mt-2">"{alumni.messageToSchool}"</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AlumniPage;
