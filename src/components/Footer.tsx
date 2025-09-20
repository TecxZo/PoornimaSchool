import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">POORNIMA V. SAMSTHE ARAKERE</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              A premier educational institution established in 1987, committed to providing quality education 
              in a nurturing environment. We focus on holistic development of our students through academic 
              excellence and character building.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">ARAKERE Village</p>
                  <p className="text-gray-300">SRIRANGAPATNA Block</p>
                  <p className="text-gray-300">MANDYA District, Karnataka</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <p className="text-gray-300">+91 XXXX-XXXXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <p className="text-gray-300">info@poornima-school.edu.in</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/academics" className="text-gray-300 hover:text-blue-400 transition-colors">Academics</a></li>
              <li><a href="/infrastructure" className="text-gray-300 hover:text-blue-400 transition-colors">Infrastructure</a></li>
              <li><a href="/facilities" className="text-gray-300 hover:text-blue-400 transition-colors">Facilities</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()}  POORNIMA V. SAMSTHE ARAKERE. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Established 1987 | Excellence in Education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;