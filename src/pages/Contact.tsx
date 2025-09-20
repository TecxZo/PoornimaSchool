import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'POORNIMA V. SAMSTHE ARAKERE',
        'ARAKERE Village',
        'SRIRANGAPATNA Block',
        'MANDYA District, Karnataka, India'
      ],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+91 XXXX-XXXXXX',
        'Office Hours: 9:00 AM - 4:00 PM',
        'Monday to Saturday'
      ],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@poornima-school.edu.in',
        'principal@poornima-school.edu.in',
        'Response within 24 hours'
      ],
      color: 'text-purple-600'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Admission Information',
    'Academic Programs',
    'Infrastructure Details',
    'Fee Structure',
    'Other'
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with POORNIMA V. SAMSTHE ARAKERE for inquiries about admissions, 
            academic programs, or any other information you need.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100 text-center">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <info.icon className={`h-8 w-8 ${info.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Please enter your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-semibold"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-4">
                <div className="text-center text-gray-500">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">School Location Map</p>
                  <p className="text-sm">ARAKERE Village, SRIRANGAPATNA Block</p>
                  <p className="text-sm">MANDYA District, Karnataka</p>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Accessibility:</strong> The school is accessible by all-weather roads, 
                  making it convenient for students throughout the year.
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Saturday</p>
                    <p className="text-gray-600">9:00 AM - 1:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Sunday</p>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> For urgent matters during non-office hours, 
                  please send an email and we'll respond as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;