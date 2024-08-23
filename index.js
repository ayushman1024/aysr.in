import React from 'react';
import { Linkedin, Mail, Phone, Calendar, MapPin, Book, Code, Briefcase } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen font-sans">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto border-4 border-white shadow-lg">
              <img src="/api/placeholder/200/200" alt="Ayushman Srivastava" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Ayushman Srivastava</h1>
            <p className="text-xl md:text-2xl mb-4">Senior Software Developer</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="mailto:ayushman1024@gmail.com" className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition duration-300">
                <Mail className="mr-2" size={18} /> Email
              </a>
              <a href="tel:+916393854516" className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition duration-300">
                <Phone className="mr-2" size={18} /> Call
              </a>
              <a href="https://www.linkedin.com/in/ayushman1024/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition duration-300">
                <Linkedin className="mr-2" size={18} /> LinkedIn
              </a>
              <a href="https://www.github.com/ayushman1024" target="_blank" rel="noopener noreferrer" className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8 transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-indigo-700">
                <Briefcase className="mr-2" /> Experience
              </h2>
              {[
                {
                  title: "Senior Tech Consultant",
                  company: "Ernst and Young",
                  period: "May 2024 - Present",
                  location: "Pune, India",
                  description: [
                    "Working in an Advanced Engineering team as a Back-end developer.",
                    "Worked on client's financial fraud detection software.",
                    "Technologies: Java, Spring Boot, MySQL, Rest API and Micro-services"
                  ]
                },
                {
                  title: "Associate Software Engineer",
                  company: "Goldman Sachs",
                  period: "Oct 2022 - Dec 2023",
                  location: "Bengaluru, India",
                  description: [
                    "Worked in Client Driven Booking team of Synthetics Products Group Engineering.",
                    "Developed and implemented enhancements for the Booker applications.",
                    "Handled multiple critical client demands projects and delivered solutions within tight deadlines."
                  ]
                },
                {
                  title: "Software Development Engineer - 1",
                  company: "Astrotalk",
                  period: "Dec 2020 - Sep 2022",
                  location: "Remote",
                  description: [
                    "Developed various APIs from scratch for projects including Live Events, Consultant Scoring System, Timetable, and Free Kundali.",
                    "Helped reduce server costs by 20% by optimizing application performance.",
                    "Significantly improved API performance, reducing homepage load time from 2000ms to 400ms."
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="mb-6 border-l-4 border-indigo-500 pl-4">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-600 mb-2">{job.company}</p>
                  <p className="text-sm text-gray-500 mb-2 flex items-center">
                    <Calendar className="mr-2" size={14} /> {job.period}
                    <MapPin className="ml-4 mr-2" size={14} /> {job.location}
                  </p>
                  <ul className="list-disc list-inside text-gray-700">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="bg-white rounded-lg shadow-lg p-6 mb-8 transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-indigo-700">
                <Code className="mr-2" /> Projects
              </h2>
              {[
                {
                  title: "FVD PITA (Goldman Sachs)",
                  description: "Point in time contract term amendment feature",
                  details: [
                    "Engineered an addition to the Bulkupdate infrastructure to handle updates to the Term of synthetic contracts that are already in effect.",
                    "Worked in conjunction with several teams and stakeholders to facilitate the implementation of this change across various systems."
                  ]
                },
                {
                  title: "Live Events (Astrotalk)",
                  description: "Live Streaming Platform",
                  details: [
                    "Developed back-end for live video streaming platform with messaging and call support that can handle huge traffic.",
                    "Developed using Spring Boot, Agora, MySQL, AWS EC2, ElastiCache Redis."
                  ]
                },
                {
                  title: "Kundli Software (Astrotalk)",
                  description: "Kundli Report Generating tool",
                  details: [
                    "Researched and Developed the back-end for the Kundli Application in Python and wrote Rest APIs for front-end platforms.",
                    "Core features: Birth Kundli, Panchanga, predictive content, and transit notifications.",
                    "Made application to support 5 major Indic Languages."
                  ]
                }
              ].map((project, index) => (
                <div key={index} className="mb-6 bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-indigo-600">{project.title}</h3>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <ul className="list-disc list-inside text-gray-700">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>

          <div>
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8 transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-indigo-700">
                <Code className="mr-2" /> Technical Skills
              </h2>
              <div className="space-y-2">
                {[
                  { category: "Languages", skills: "Java, Python, SQL" },
                  { category: "Frameworks", skills: "Spring Boot, Flask" },
                  { category: "Databases", skills: "MySQL, MongoDB, Redis, Hibernate, SQLAlchemy" },
                  { category: "Tools", skills: "Docker, Jenkins, Swagger, Postman" },
                  { category: "Others", skills: "Git, Maven, AWS Services" }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded">
                    <span className="font-semibold text-indigo-600">{item.category}:</span> {item.skills}
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-indigo-700">
                <Book className="mr-2" /> Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">B.Tech. Computer Science Engineering</h3>
                  <p className="text-gray-600">Shri Ramswaroop Memorial University</p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <Calendar className="mr-2" size={14} /> August 2015 – June 2019
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Higher Secondary</h3>
                  <p className="text-gray-600">Central Board of Secondary Education</p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <Calendar className="mr-2" size={14} /> 2015
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Ayushman Srivastava. All rights reserved.</p>
          <p className="mt-2">Passionate about creating efficient and scalable software solutions.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;
