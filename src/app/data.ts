export interface ISkill {
  name: string;
  grade: number;
}

export interface ISkillCategory {
  category: string;
  items: ISkill[];
}

export const skillCategories: ISkillCategory[] = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', grade: 5 },
      { name: 'TypeScript', grade: 5 },
      { name: 'Golang', grade: 5 },
      { name: 'Python', grade: 4 },
      { name: 'Java', grade: 4 },
      { name: 'PHP', grade: 4 },
      { name: 'C#', grade: 4 },
      { name: 'Rust', grade: 4 },
      { name: 'C++', grade: 2 },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'HTML & CSS', grade: 5 },
      { name: 'React', grade: 4 },
      { name: 'Vue.js', grade: 4 },
      { name: 'Tailwind CSS', grade: 4 },
      { name: 'Quasar', grade: 5 },
      { name: 'Flutter', grade: 3 },
    ],
  },
  {
    category: 'Backend & Microservices',
    items: [
      { name: 'Node.js / Express', grade: 5 },
      { name: 'Laravel', grade: 4 },
      { name: 'Codeigniter', grade: 4 },
      { name: 'Sequelize', grade: 5 },
      { name: 'RESTful APIs', grade: 5 },
      { name: 'Sitecore', grade: 3 },
      { name: 'MochaJS & JUnit', grade: 4 },
      { name: 'ASP.NET', grade: 2 },
    ],
  },
  {
    category: 'Databases & Data Engineering',
    items: [
      { name: 'PostgreSQL', grade: 5 },
      { name: 'MySQL', grade: 5 },
      { name: 'ClickHouse', grade: 4 },
      { name: 'SQL Server', grade: 4 },
      { name: 'MongoDB', grade: 3 },
      { name: 'Redis', grade: 4 },
      { name: 'DBeaver & DBSchema', grade: 4 },
      { name: 'DataGrip & Rider', grade: 4 },
      { name: 'Solr', grade: 3 },
    ],
  },
  {
    category: 'System Architecture & AI',
    items: [
      { name: 'Microservices', grade: 5 },
      { name: 'High-Performance Computing', grade: 4 },
      { name: 'Docker & Compose', grade: 4 },
      { name: 'Kubernetes', grade: 3 },
      { name: 'CI/CD Pipelines', grade: 4 },
      { name: 'Web Security', grade: 4 },
      { name: 'Nginx', grade: 4 },
      { name: 'Agile Development', grade: 4 },
      { name: 'Machine Learning', grade: 3 },
      { name: 'Google Gemini (AI)', grade: 4 },
      { name: 'Antigravity (Python)', grade: 5 },
      { name: 'Monolithic Apps', grade: 4 },
      { name: 'IIS', grade: 3 },
      { name: 'Windows PowerShell', grade: 3 },
      { name: 'WebStorm & Goland', grade: 4 },
      { name: 'JetBrains IDEs', grade: 5 },
    ],
  },
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
    name: 'Geonera (Strategy Discovery Machine)',
    year: '2025 - Present',
    description:
      'Engineered the Strategy Discovery Machine (ESSE) utilizing Bayesian Optimization and Genetic Programming within an advanced walk-forward engine to systematically identify robust quantitative strategies. Spearheaded the system migration from Python to Rust to maximize algorithmic performance. Architected complex Data Definition Language (DDL) schemas using ClickHouse to efficiently manage and query massive datasets of candle and tick data.',
    technologies: 'Rust, Python, ClickHouse',
    features: 'Top-N Strategy Selection Engine, Strategy Export Layer, Walk-Forward Validation',
    url: '#',
  },
  {
    name: 'HOPE (Sistem Informasi Rumah Sakit)',
    year: '2024 - Present',
    description:
      'Hospital Information System for managing hospital operations, electronic medical records (EMR), and patient data integrations.',
    technologies: 'Node.js, React, TypeScript, SQL',
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
    responsibilities: [
      'Developed and maintained the Hospital Information System (HOPE) utilizing React and TypeScript, accelerating daily hospital operations and EMR integrations by [X]%.',
      'Engineered a high-performance backend architecture using Node.js and SQL to seamlessly manage patient records, reducing data retrieval latency by [X]%.',
      'Designed interactive user interfaces that improved medical staff productivity and overall user satisfaction by [X]%.'
    ],
  },
  {
    company: 'PT Nusantara Duta Solusindo',
    title: 'Full Stack Developer (as vendor)',
    dates: 'June 2024 - Present',
    startDate: '2024-06-25',
    endDate: 'Present',
    responsibilities: [
      'Delivered critical healthcare systems for key clients as a vendor, achieving a [X]% improvement in project delivery timelines with high-quality code standards.',
      'Collaborated seamlessly with client internal teams to deploy new healthcare features and resolve complex software bugs, decreasing system downtime by [X]%.'
    ],
  },
  {
    company: 'PT Blend Media Kreasi',
    title: 'Sitecore Developer',
    dates: 'March 2023 - June 2024',
    startDate: '2023-03-25',
    endDate: '2024-06-25',
    responsibilities: [
      'Developed and managed enterprise-grade Content Management System (CMS) platforms using Sitecore, increasing content deployment speed by [X]%.',
      'Architected and implemented integrated Form Dashboard features, boosting data tracking efficiency and management accuracy by [X]%.',
      'Optimized website performance and streamlined system integrations, which improved overall page load speeds by [X]%.'
    ],
  },
  {
    company: 'PT Solusi Inovasi Pesat',
    title: 'Middle Fullstack Developer',
    dates: 'March 2022 - March 2023',
    startDate: '2022-03-25',
    endDate: '2023-03-25',
    responsibilities: [
      'Architected and deployed an integrated Marketing & Sales application utilizing Laravel and Vue.js (Quasar), accelerating sales tracking processes by [X]%.',
      'Engineered the end-to-end Mitrahino Productivity ERP solution using Express.js and Quasar, resulting in a [X]% increase in client operational productivity.',
      'Designed scalable relational database architectures and RESTful APIs, improving system communication efficiency across platforms by [X]%.'
    ],
  },
  {
    company: 'PT. Modernesia Teknologi Informatika',
    title: 'Software Developer / Backend Developer',
    dates: 'March 2019 - March 2022',
    startDate: '2019-03-01',
    endDate: '2022-03-25',
    responsibilities: [
      'Designed and developed robust backend services for massive public infrastructure systems (Tron, Teman Bus, JakParkir) using Express.js, handling over [Y] million daily transactions.',
      'Implemented high-availability API integrations and optimized operational management platforms, reducing system latency by [X]% under peak loads.'
    ],
  },
  {
    company: 'Berbagi Kerja ID',
    title: 'PKL Berbagi Kerja',
    dates: 'January 2021 - June 2021',
    startDate: '2021-01-01',
    endDate: '2021-06-30',
    responsibilities: [
      'Spearheaded the full-cycle development of the "Berbagi Kerja" startup platform from UI/UX design to implementation, increasing user acquisition by [X]%.',
      'Engineered scalable backend architecture and an internal finance module using Express.js, improving transaction processing speed by [X]%.'
    ],
  },
  {
    company: 'Aquamatika',
    title: 'Private Math Tutor & Home Math Teacher',
    dates: 'August 2017 - May 2020',
    startDate: '2017-08-01',
    endDate: '2020-05-31',
    responsibilities: [
      "Delivered comprehensive mathematics training programs, improving student academic scores and conceptual understanding by [X]%.",
      'Customized and evaluated pedagogical methods tailored to individual learning capabilities, resulting in a [X]% increase in student satisfaction.'
    ],
  },
  {
    company: 'LPM Quantumatika Ciampea',
    title: 'Tentor Matematika SD/SMP/SMA',
    dates: 'June 2017 - October 2018',
    startDate: '2017-06-01',
    endDate: '2018-10-31',
    responsibilities: [
      'Taught mathematics subjects to a diverse range of students from elementary to high school levels, consistently raising class averages by [X]%.',
      'Provided advanced training and coaching to fellow tutors as an Instructor Tentor, enhancing overall teaching quality by [X]%.',
      'Co-managed institution operations, including teaching schedules, financial management, and marketing strategies, which increased student enrollment by [X]%.'
    ],
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