export interface ISkill {
  name: string;
  grade: number;
}
export const skills: ISkill[] = [
  { name: 'HTML & CSS', grade: 5 },
  { name: 'JavaScript', grade: 5 },
  { name: 'Typescript', grade: 5 },
  { name: 'Express', grade: 5 },
  { name: 'Quasar', grade: 5 },
  { name: 'Sequelize', grade: 5 },
  { name: 'Laravel', grade: 4 },
  { name: 'Codeigniter', grade: 4 },
  { name: 'Flutter', grade: 3 },
  { name: 'Java', grade: 4 },
  { name: 'Git', grade: 4 },
  { name: 'C++', grade: 2 },
  { name: 'Python Lang', grade: 3 },
  { name: 'MongoDB', grade: 3 },
  { name: 'CI/CD', grade: 4 },
  { name: 'Docker', grade: 4 },
  { name: 'Docker Compose', grade: 4 },
  { name: 'Kubernetes', grade: 3 },
  { name: 'Redis', grade: 4 },
  { name: 'PostgresSQL', grade: 5 },
  { name: 'MySQL', grade: 5 },
  { name: 'Microservices', grade: 5 },
  { name: 'Golang', grade: 5 },
  { name: 'PHP', grade: 4 },
  { name: 'Web Security', grade: 4 },
  { name: 'Nginx', grade: 4 },
  { name: 'Agile Development', grade: 4 },
  { name: 'Tailwind CSS', grade: 4 },
  { name: 'React', grade: 4 },
  { name: 'VueJs', grade: 4 },
  { name: 'Restful', grade: 5 },
  { name: 'C#', grade: 4 },
  { name: 'Sitecore', grade: 3 },
  { name: 'Solr', grade: 3 },
  { name: 'Monolithic Apps', grade: 4 },
  { name: 'Machine Learning', grade: 3 },
  { name: 'MochaJS & JUnit', grade: 4 },
  { name: 'Rust', grade: 3 },
  { name: 'JetBrains IDEs', grade: 5 },
  { name: 'Google Gemini (AI)', grade: 4 },
  { name: 'Antigravity (Python)', grade: 5 },
  { name: 'Asp.Net', grade: 2 },
  { name: 'SQL Server', grade: 4 },
  { name: 'DBeaver & DBSchema', grade: 4 },
  { name: 'IIS', grade: 3 },
  { name: 'Windows PowerShell', grade: 3 },
  { name: 'WebStorm & Goland', grade: 4 },
  { name: 'DataGrip & Rider', grade: 4 },
];

export type IInterest = string;
export const interests: IInterest[] = [
  'Photography',
  'Hiking',
  'Reading Science Fiction',
  'Playing Chess',
  'Traveling',
  'Coding',
  'Music',
  'Gardening',
  'Bisnis',
];

export interface IAward {
  name: string;
  year: string;
}
export const awards: IAward[] = [];

export interface ICertification {
  name: string;
  year: string;
}

export const certifications: ICertification[] = [
  { name: 'Sharing Session Embedded System and IOT', year: '2022' },
  { name: 'Introduction to Data Science with Python', year: '2021' },
  { name: 'Introduction to Data Science With R', year: '2021' },
  { name: 'HCIA-Routing & Switching International', year: '2021' },
  { name: 'Introduction Cyber Security and Data Protection', year: '2021' },
  { name: 'Introduction to Programming using Python', year: '2020' },
  { name: 'R Fundamental For Data Science', year: '2020' },
  { name: 'Sertifikat Workshop Tetap Profit Selama Covid', year: '2020' },
  { name: 'MTCNA', year: '2019' },
  { name: 'Diksarkop XXXII', year: '2019' },
  { name: 'Training Python For Data Science By Rumah Koding', year: '2019' },
  { name: 'Microsoft Technology Associate Software Development Fundamentals', year: '2018' },
  { name: 'Pelatihan Aplikasi Windows dan Design Grafis', year: '2017' },
  { name: 'Matematika RIA IPB', year: '2016' },
];

export interface IPublication {
  name: string;
  year: string;
}
export const publications: IPublication[] = [];

export interface IVolunteerExperience {
  name: string;
  years: string;
}
export const volunteerExperiences: IVolunteerExperience[] = [];

export interface IPortfolioLink {
  name: string;
  url: string;
}
export const portfolioLinks: IPortfolioLink[] = [];

export interface IFeaturedProject {
  name: string;
  year: string;
  description: string;
  technologies: string;
  features: string;
  url: string;
}

export const featuredProjects: IFeaturedProject[] = [
  {
    name: 'Geonera (Aplikasi Signal Forex)',
    year: '2025 - Present',
    description:
      'Personal project: A Forex signal application providing real-time trading signals, market analysis, and user notifications.',
    technologies: 'Node.js, React Native, Python (Silakan disesuaikan)',
    features: 'Real-time Signals, Market Analysis, Push Notifications',
    url: '#',
  },
  {
    name: 'HOPE (Sistem Informasi Rumah Sakit)',
    year: '2024 - Present',
    description:
      'Hospital Information System for managing hospital operations, electronic medical records (EMR), and patient data integrations.',
    technologies: 'Node.js, React, TypeScript, SQL (Silakan disesuaikan)',
    features: 'Patient Management, Electronic Medical Records, Hospital Operations',
    url: '#',
  },
  {
    name: 'Mitrahino (Productivity)',
    year: '2022',
    description:
      'Providing PT Mirahino with Productivity complete solution, as part of MetaMine Integrated ERP System.',
    technologies: 'Express (NodeJS) & Quasar (Vuejs)',
    features: 'Productivity ERP System',
    url: '#',
  },
  {
    name: 'Marketing & Sales App',
    year: '2022',
    description:
      'Marketing & Sales System prepared for PT BMBBD (Binuang Mitra Bersama Blok Dua) in the integration of every Sales & Marketing business process.',
    technologies: 'Laravel (PHP) & Quasar (Vuejs)',
    features: 'Sales & Marketing Integration',
    url: '#',
  },
  {
    name: 'Sosial Media Analytic',
    year: '2021',
    description: 'Social Media Analytics Dashboard Application',
    technologies: 'Django',
    features: 'Analytics Dashboard',
    url: '#',
  },
  {
    name: 'Insurance Broking System (IBS)',
    year: '2021',
    description: 'Microservices Broking System',
    technologies: 'Spring',
    features: 'Microservices Architecture',
    url: '#',
  },
  {
    name: 'Berbagi Kerja',
    year: '2021',
    description: 'Startup application sharing work with lecturers',
    technologies: 'ExpressJS',
    features: 'Work Sharing',
    url: '#',
  },
  {
    name: 'JakParkir',
    year: '2020 - 2021',
    description: 'Parking Management Application in Jakarta',
    technologies: 'ExpressJS',
    features: 'Parking Management',
    url: '#',
  },
  {
    name: 'Prediksi Mata Uang Cryptocurrency',
    year: '2020',
    description: 'Digital currency prediction Big Data project',
    technologies: 'Python',
    features: 'Data Prediction',
    url: '#',
  },
  {
    name: 'Tron',
    year: '2020',
    description: 'Transportation Management Application in Bandung area',
    technologies: 'ExpressJS',
    features: 'Transportation Management',
    url: '#',
  },
  {
    name: 'PT. Kopi Sans',
    year: '2018',
    description:
      'Desktop application for managing coffee entrepreneurs (user management, payroll, barcode scanner data input, Ireport).',
    technologies: 'Java',
    features: 'Desktop GUI, Barcode Scanner, Report Printing',
    url: '#',
  },
  {
    name: 'Akutansi Aquamatika',
    year: '2017',
    description: 'Desktop application for financial management, teacher management, and employee management.',
    technologies: 'Visual Basic Application',
    features: 'Financial & Management System',
    url: '#',
  },
];

export interface IWorkExperience {
  company: string;
  title: string;
  dates: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export const workExperiences: IWorkExperience[] = [
  {
    company: 'PT Siloam International Hospitals Tbk (Siloam Hospitals)',
    title: 'Full Stack Developer',
    dates: 'June 2024 - Present',
    startDate: '2024-06-25',
    endDate: 'Present',
    responsibilities: [],
  },
  {
    company: 'PT Nusantara Duta Solusindo',
    title: 'Full Stack Developer (as vendor)',
    dates: 'June 2024 - Present',
    startDate: '2024-06-25',
    endDate: 'Present',
    responsibilities: [],
  },
  {
    company: 'PT Blend Media Kreasi',
    title: 'Sitecore Developer',
    dates: 'March 2023 - June 2024',
    startDate: '2023-03-25',
    endDate: '2024-06-25',
    responsibilities: ['Sitecore', 'Form Dashboard'],
  },
  {
    company: 'PT Solusi Inovasi Pesat',
    title: 'Middle Fullstack Developer',
    dates: 'March 2022 - March 2023',
    startDate: '2022-03-25',
    endDate: '2023-03-25',
    responsibilities: ['Marketing & Sales App', 'Mitrahino Productivity'],
  },
  {
    company: 'PT. Modernesia Teknologi Informatika',
    title: 'Software Developer / Backend Developer',
    dates: 'March 2019 - March 2022',
    startDate: '2019-03-01',
    endDate: '2022-03-25',
    responsibilities: ['Sangkara Cam', 'Tron', 'Teman Bus', 'SWJ', 'JakParkir'],
  },
  {
    company: 'Berbagi Kerja ID',
    title: 'PKL Berbagi Kerja',
    dates: 'January 2021 - June 2021',
    startDate: '2021-01-01',
    endDate: '2021-06-30',
    responsibilities: [
      'Landing Page Berbagi Kerja ID App',
      'Android App Berbagi Kerja',
      'Backend Berbagi Kerja',
      'Finance Dev',
      'UI/UX Design',
    ],
  },
  {
    company: 'Aquamatika',
    title: 'Private Math Tutor & Home Math Teacher',
    dates: 'August 2017 - May 2020',
    startDate: '2017-08-01',
    endDate: '2020-05-31',
    responsibilities: ['Private Tutoring', 'Math Coaching'],
  },
  {
    company: 'LPM Quantumatika Ciampea',
    title: 'Tentor Matematika SD/SMP/SMA',
    dates: 'June 2017 - October 2018',
    startDate: '2017-06-01',
    endDate: '2018-10-31',
    responsibilities: ['Math Teacher', 'Teaching Management', 'Financial Management', 'Marketing', 'Instructor Tentor'],
  },
];

export interface IEducation {
  institution: string;
  degree: string;
  years: string;
  details: string;
}
export const education: IEducation[] = [
  {
    institution: 'UIN Syarif Hidayatullah Jakarta',
    degree: 'Informatics Engineering',
    years: '2018 - 2022',
    details:
      'Undergraduate coursework focused on Software Engineering, Network Engineering, Artificial Intelligence, Machine Learning, and Robotic.',
  },
  {
    institution: 'SMAN 1 Ciampea',
    degree: 'Science (MIPA)',
    years: '2014 - 2017',
    details: 'Focused on exact subjects such as mathematics, physics, chemistry, and biology.',
  },
];