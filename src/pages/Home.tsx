import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, BookOpen, Building, Award, ArrowRight, Bell } from "lucide-react";

// Hero Images
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero4.jpeg";
import principal from "../assets/principalPhoto.jpeg";
import announcement1 from "../assets/sports.jpeg";
import announcement2 from "../assets/science.jpeg";
import announcement3 from "../assets/yoga.jpeg";

interface Announcement {
  id: number;
  title: string;
  content: string;
  priority: "high" | "medium" | "low";
  created_at: string;
  image?: string;
  link?: string;
}

// Announcements
const announcements: Announcement[] = [
  {
    id: 1,
    title: "Taluk level sports meet",
    content:
      "Congratulations to our school children who participated in the taluk level sports meet and got second place in the throw ball match.",
    priority: "high",
    created_at: "2025-09-10",
    image: announcement1,
    link: "https://www.facebook.com/share/p/1A3wQkteSx/",
  },
  {
    id: 2,
    title: "Science Exhibition",
    content:
      "Our students present innovative science projects at the school exhibition. A great opportunity to see young minds at work!",
    priority: "medium",
    created_at: "2025-09-02",
    image: announcement2,
    link: "https://www.facebook.com/share/p/16BB86m6eY/",
  },
  {
    id: 3,
    title: "World Yoga Day",
    content:
      "World Yoga Day was celebrated on 24-06-2025 at Poornima English School Arakere. Children and teachers all participated.",
    priority: "low",
    created_at: "2025-06-24",
    image: announcement3,
    link: "https://www.facebook.com/share/p/17RZzxce1v/",
  },
];

const Home = () => {
  const stats = [
    { icon: Users, label: "Students", value: "400+", color: "text-blue-600" },
    { icon: BookOpen, label: "Years of Excellence", value: "40+", color: "text-green-600" },
    { icon: Building, label: "Classrooms", value: "21", color: "text-purple-600" },
    { icon: Award, label: "Grades Offered", value: "M1-M3 & 1-10", color: "text-orange-600" },
  ];

  const highlights = [
    {
      title: "Quality Education",
      description: "Comprehensive education from Montessori through Grade 10 with experienced faculty.",
      icon: BookOpen,
    },
    {
      title: "Modern Infrastructure",
      description: "21 well-equipped classrooms and modern facilities for effective learning.",
      icon: Building,
    },
    {
      title: "Co-Educational Environment",
      description: "Fostering inclusive learning with equal opportunities for all students.",
      icon: Users,
    },
  ];

  const images = [hero1, hero2, hero3];
  const [currentImage, setCurrentImage] = useState(0);

   useEffect(() => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const latestAnnouncements = announcements
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative text-white bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Poornima Vidya Samsthe Arakere
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Excellence English Medium Education Since 1985
          </p>
          <p className="text-lg mb-8 text-blue-200 max-w-3xl mx-auto">
            Located in the serene village of Arakere, Srirangapatna, we provide quality education 
            from Montessori to Grade 10 in a nurturing rural environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center group"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <img
              src={principal}
              alt="Principal"
              className="rounded-lg shadow-lg w-64 h-64 object-cover"
            />
          </div>
          {/* Right Side: Message */}
           <div className="md:w-2/3"> 
           <h2 className="text-3xl font-semibold mb-4">Message from the Principal</h2> 
           <p className="text-gray-700 mb-4"> Welcome to <strong>POORNIMA VIDYA SAMSTHE ARAKERE</strong>! Since our establishment in 1985, we have been committed to providing quality education in a nurturing and inclusive environment. Our school, located in the rural heart of SRIRANGAPATNA, Karnataka, aims to develop well-rounded students who are academically proficient, socially responsible, and morally grounded. </p> 
           <p className="text-gray-700 mb-4"> We believe that every child has unique potential, and our dedicated team of teachers works tirelessly to foster curiosity, creativity, and critical thinking in our students. With a strong focus on academics, co-curricular activities, and the overall well-being of our students, we strive to create a safe and inspiring space for learning. </p> 
           <p className="text-gray-700 font-medium"> I invite parents, students, and the community to join us in this journey of knowledge, growth, and excellence. Together, we can nurture future leaders who will make a positive difference in society. </p>
            <p className="mt-4 text-gray-900 font-semibold">– Principal, POORNIMA VIDYA SAMSTHE ARAKERE</p> 
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <Bell className="h-8 w-8 text-blue-600 mr-3" />
              Latest Announcements
            </h2>
          </div>

          {latestAnnouncements.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestAnnouncements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="relative rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow"
                >
                  {announcement.image && (
                    <img
                      src={announcement.image}
                      alt={announcement.title}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                    <span className="text-sm text-gray-300 mb-2">
                      {new Date(announcement.created_at).toLocaleDateString()}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{announcement.title}</h3>
                    <p className="text-gray-200 mb-4 line-clamp-3">{announcement.content}</p>
                    {announcement.link && (
                      <a
                        href={announcement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all text-sm font-semibold"
                      >
                        Read More
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-2xl shadow-lg text-center">
              <Bell className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">No announcements at this time.</p>
            </div>
          )}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our School?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes POORNIMA VIDYA SAMSTHE ARAKERE a unique place for learning and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <highlight.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our School Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover opportunities for your child's growth and success at POORNIMA VIDYA SAMSTHE ARAKERE.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

