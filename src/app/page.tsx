import DownloadButton from './DownloadButton';
import { Folder, Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import {
  awards,
  certifications,
  education,
  featuredProjects,
  IFeaturedProject,
  interests,
  portfolioLinks,
  publications,
  skillCategories,
  volunteerExperiences,
  workExperiences,
} from '@@/data';
import { calculateDuration, getWidthClass } from '@@/helper';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 print:py-0 print:bg-white flex flex-col items-center">
      {/* Page 1 */}
      <div id="cv-container-page1" className="bg-white w-[297mm] h-[420mm] px-12 py-8 relative mb-8 print:mb-0 border border-gray-200 print:border-none shadow-2xl print:shadow-none break-after-page overflow-hidden">
      <header className="relative flex flex-col md:flex-row items-center justify-between border-b border-gray-200 pb-6 mb-6">
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mb-4 md:mb-0 shadow-md border border-gray-200 bg-gray-100">
          <Image src="/profile.webp" alt="Sanjari Alfian" fill sizes="176px" className="object-cover" priority />
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
              <Linkedin size={18} className="mr-2 text-gray-700" />
              LinkedIn
            </a>
            <a
              href="https://github.com/sanjari-dev"
              className="flex items-center hover:text-gray-900 transition duration-300"
            >
              <Github size={18} className="mr-2 text-gray-700" />
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
        <div className="absolute top-4 right-4 print:hidden">
          <DownloadButton />
        </div>
      </header>

      <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8 print:mb-4 print:border-none print:shadow-none print:p-0">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed text-base">
          An accomplished Senior Software Engineer and Quantitative Systems Developer with a proven track record of designing high-performance system architectures and leading complex engineering initiatives. While deeply experienced in modern Full-Stack development (Node.js, React), my core expertise extends into system-level programming using Rust and Python to optimize algorithmic performance. I excel in architecting robust data pipelines and time-series data management systems tailored for quantitative analysis. Recognized for bridging the gap between sophisticated backend engineering and scalable microservices, I consistently deliver measurable impacts—optimizing system throughput, reducing latency, and building highly scalable solutions that drive business growth.
        </p>
      </section>

      {workExperiences.length > 0 && (
        <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8 print:mb-4 print:border-none print:shadow-none print:p-0">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Work Experience</h2>
          <div className="border-l-4 border-teal-600 pl-4 space-y-6">
            {workExperiences.slice(0, 4).map((entry, index) => (
              <div
                key={index}
                className="relative mb-4 pb-4 last:mb-0 last:pb-0 border-b border-gray-200 last:border-b-0 print:break-inside-avoid"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xl font-semibold text-gray-800">{entry.company}</h3>
                  <p className="text-gray-600 italic text-sm">
                    {entry.dates} ({calculateDuration(entry.startDate, entry.endDate)})
                  </p>
                </div>
                <p className="text-gray-700 mb-2">{entry.title}</p>
                {entry.responsibilities && entry.responsibilities.length > 0 && (
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    {entry.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      </div>

      {/* Page 2 */}
      <div id="cv-container-page2" className="bg-white w-[297mm] h-[420mm] px-12 py-8 relative mb-8 print:mb-0 border border-gray-200 print:border-none shadow-2xl print:shadow-none break-after-page overflow-hidden">
      
      {workExperiences.length > 4 && (
        <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8 print:mb-4 print:border-none print:shadow-none print:p-0">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Work Experience (Continued)</h2>
          <div className="border-l-4 border-teal-600 pl-4 space-y-6">
            {workExperiences.slice(4).map((entry, index) => (
              <div
                key={index}
                className="relative mb-4 pb-4 last:mb-0 last:pb-0 border-b border-gray-200 last:border-b-0 print:break-inside-avoid"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xl font-semibold text-gray-800">{entry.company}</h3>
                  <p className="text-gray-600 italic text-sm">
                    {entry.dates} ({calculateDuration(entry.startDate, entry.endDate)})
                  </p>
                </div>
                <p className="text-gray-700 mb-2">{entry.title}</p>
                {entry.responsibilities && entry.responsibilities.length > 0 && (
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    {entry.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {education.length > 0 && (
        <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8 print:mb-4 print:border-none print:shadow-none print:p-0">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((entry, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-sm print:break-inside-avoid print:border-gray-300">
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
      )}
      </div>

      {/* Page 3 */}
      <div id="cv-container-page3" className="bg-white w-[297mm] h-[420mm] px-12 py-8 relative mb-8 print:mb-0 border border-gray-200 print:border-none shadow-2xl print:shadow-none break-after-page overflow-hidden">
      {skillCategories.length > 0 && (
        <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8 print:mb-4 print:border-none print:shadow-none print:p-0">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Skills</h2>
          <div className="space-y-6">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="print:break-inside-avoid">
                <h3 className="text-lg font-semibold text-teal-700 border-b border-gray-200 pb-2 mb-3">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4">
                  {category.items.map((skill, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-gray-800 font-medium mb-1 text-sm">{skill.name}</span>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`bg-teal-600 h-2 rounded-full ${getWidthClass(skill.grade)}`}
                          style={{ width: `${(skill.grade / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      </div>

      {/* Page 4 */}
      <div id="cv-container-page4" className="bg-white w-[297mm] h-[420mm] px-12 py-8 relative mb-8 print:mb-0 border border-gray-200 print:border-none shadow-2xl print:shadow-none break-after-page overflow-hidden">
      {featuredProjects.length > 0 && (
        <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8 print:mb-4 print:border-none print:shadow-none print:p-0">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project: IFeaturedProject, index: number) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300 ease-in-out group print:break-inside-avoid print:border-gray-300"
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
      )}
      </div>

      {/* Page 5 */}
      <div id="cv-container-page5" className="bg-white w-[297mm] h-[420mm] px-12 py-8 relative mb-8 print:mb-0 border border-gray-200 print:border-none shadow-2xl print:shadow-none break-after-page overflow-hidden">
      {portfolioLinks.length > 0 && (
        <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8 print:mb-4 print:border-none print:shadow-none print:p-0">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Portfolio</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-700">
            {portfolioLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-700 transition duration-300"
              >
                <Folder size={18} className="mr-2 text-gray-700" /> {link.name}
              </a>
            ))}
          </div>
        </section>
      )}

      {interests.length > 0 && (
        <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8 print:mb-4 print:border-none print:shadow-none print:p-0">
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
      )}

      {awards.length > 0 && (
        <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8 print:mb-4 print:border-none print:shadow-none print:p-0">
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
      )}

      {certifications.length > 0 && (
        <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8 print:mb-4 print:border-none print:shadow-none print:p-0">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Certifications</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-1 list-disc list-inside mt-2 text-gray-700">
            {certifications.map((cert, index) => (
              <li key={index}>
                {cert.name} <span className="text-gray-600 italic text-sm">({cert.year})</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {publications.length > 0 && (
        <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8 print:mb-4 print:border-none print:shadow-none print:p-0">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">Publications</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-1 list-disc list-inside mt-2 text-gray-700">
            {publications.map((pub, index) => (
              <li key={index}>
                {pub.name} <span className="text-gray-600 italic text-sm">({pub.year})</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {volunteerExperiences.length > 0 && (
        <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8 print:mb-4 print:border-none print:shadow-none print:p-0">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">
            Volunteer Experience
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-1 list-disc list-inside mt-2 text-gray-700">
            {volunteerExperiences.map((exp, index) => (
              <li key={index}>
                {exp.name} <span className="text-gray-600 italic text-sm">({exp.years})</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="border border-gray-200 rounded-lg p-4 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-4">References</h2>
        <p className="text-gray-700 leading-relaxed text-base">References available upon request.</p>
      </section>
      </div>
    </div>
  );
}
