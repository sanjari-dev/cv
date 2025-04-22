import { Download, Folder, Globe, Mail, MapPin, Phone } from 'lucide-react';
import {
  awards,
  certifications,
  education,
  featuredProjects,
  interests,
  portfolioLinks,
  publications,
  skills,
  volunteerExperience,
  workExperience,
} from './data';
import { getWidthClass } from './helper';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-8 py-10 bg-white shadow-2xl rounded-lg my-6 max-w-3xl md:max-w-4xl lg:max-w-5xl border border-gray-200">
      <header className="relative flex flex-col md:flex-row items-center justify-between border-b border-gray-200 pb-6 mb-8">
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mb-4 md:mb-0 shadow-md border border-gray-200">
          <Image
            src="https://cdn.skuy.co.id/tayap67548_linxues_com/2025/04/66c15893_sanjari.png"
            alt="Sanjari's Photo"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div className="text-center md:text-left flex-grow md:ml-8">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">Sanjari</h1>
          <p className="text-2xl text-gray-700 mt-2 mb-1">Software Engineer</p>
          <p className="text-base text-gray-600 italic mb-3">"Tiada Hari Tanpa Senyuman"</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-y-1 gap-x-4 mt-3 text-gray-600 text-base">
            <span className="flex items-center">
              <Mail size={18} className="mr-2 text-gray-700" /> sanjari.alfian.01@gmail.com
            </span>
            <a
              href="https://wa.me/6285888048606"
              className="flex items-center hover:text-green-600 transition duration-300"
            >
              <Phone size={18} className="mr-2 text-gray-700" /> +62 858 8804 8606
            </a>
            <span className="flex items-center">
              <MapPin size={18} className="mr-2 text-gray-700" /> Jakarta, Indonesia
            </span>
            <a
              href="https://www.linkedin.com/in/sanjari-alfian"
              className="flex items-center hover:text-blue-700 transition duration-300"
            >
              <Image
                width={18}
                height={18}
                src="https://cdn.skuy.co.id/tayap67548_linxues_com/2025/04/be427d70_icons8-linkedin-48.png"
                alt="LinkedIn"
                className="mr-2 text-gray-700"
              />
              LinkedIn
            </a>
            <a
              href="https://github.com/sanjari-dev"
              className="flex items-center hover:text-gray-900 transition duration-300"
            >
              <Image
                width={18}
                height={18}
                src="https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/github.svg"
                alt="GitHub"
                className="mr-2 text-gray-700"
              />
              GitHub
            </a>
            <a href="https://sanjari.my.id" className="flex items-center hover:text-blue-700 transition duration-300">
              <Globe size={18} className="mr-2 text-gray-700" /> Personal Website
            </a>
            <a href="https://geoaiti.com" className="flex items-center hover:text-blue-700 transition duration-300">
              <Globe size={18} className="mr-2 text-gray-700" /> Geoaiti
            </a>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <button
            className="flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-300 ease-in-out"
            aria-label="Download CV"
          >
            <Download size={20} className="text-gray-600" />
          </button>
        </div>
      </header>
      <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed text-base">
          An experienced Software Developer with in-depth expertise in Full Stack Web Development. Proficient in
          building scalable and efficient web applications, from Backend development using Node.js and SQL/NoSQL
          databases, to implementing responsive and interactive user interfaces with React and Tailwind CSS. Possesses a
          proven track record in leading technical teams (Tech Leader), collaborating in Agile environments, and a
          strong passion for learning new technologies and contributing to innovative projects.
        </p>
      </section>
      <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Work Experience</h2>
        <div className="border-l-4 border-teal-600 pl-4 space-y-6">
          {workExperience.map((entry, index) => (
            <div
              key={index}
              className="relative mb-4 pb-4 last:mb-0 last:pb-0 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-xl font-semibold text-gray-800">{entry.company}</h3>
                <p className="text-gray-600 italic text-sm">{entry.dates}</p>
              </div>
              <p className="text-gray-700 mb-2">{entry.title}</p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                {entry.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((entry, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-xl font-semibold text-gray-800">{entry.institution}</h3>
                <p className="text-gray-600 italic text-sm">{entry.years}</p>
              </div>
              <p className="text-gray-700 mb-1">{entry.degree}</p>
              <p className="text-gray-700 text-sm">{entry.details}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-gray-800 font-medium mb-1">{skill.name}</span>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`bg-teal-600 h-3 rounded-full ${getWidthClass(skill.grade)}`}
                  style={{ width: `${(skill.grade / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300 ease-in-out group"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-600 italic text-sm">{project.year}</p>
              </div>
              <p className="text-gray-700 mb-2 text-sm">{project.description}</p>
              <p className="text-gray-700 text-xs mb-2">Technologies: {project.technologies}</p>
              <p className="text-gray-700 text-xs mb-2">Key features: {project.features}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Portfolio</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-700">
          {portfolioLinks.map((link, index) => (
            <a key={index} href={link.url} className="flex items-center hover:text-blue-700 transition duration-300">
              <Folder size={18} className="mr-2 text-gray-700" /> {link.name}
            </a>
          ))}
        </div>
      </section>

      <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3 text-gray-700">
          {interests.map((interest, index) => (
            <span
              key={index}
              className="bg-gray-200 px-4 py-1 rounded-full text-sm font-medium border border-gray-300 inline-block text-center"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">
          Awards and Recognition
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-1 list-disc list-inside mt-2 text-gray-700">
          {awards.map((award, index) => (
            <li key={index}>
              {award.name} <span className="text-gray-600 italic text-sm">({award.year})</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Certifications</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-1 list-disc list-inside mt-2 text-gray-700">
          {certifications.map((cert, index) => (
            <li key={index}>
              {cert.name} <span className="text-gray-600 italic text-sm">({cert.year})</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Publications</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-1 list-disc list-inside mt-2 text-gray-700">
          {publications.map((pub, index) => (
            <li key={index}>
              {pub.name} <span className="text-gray-600 italic text-sm">({pub.year})</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Volunteer Experience</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-1 list-disc list-inside mt-2 text-gray-700">
          {volunteerExperience.map((exp, index) => (
            <li key={index}>
              {exp.name} <span className="text-gray-600 italic text-sm">({exp.years})</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">References</h2>
        <p className="text-gray-700 leading-relaxed text-base">References available upon request.</p>
      </section>
    </div>
  );
}
