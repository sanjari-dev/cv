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
export const awards: IAward[] = [
  // { name: 'Employee of the Year - PT Teknologi Maju', year: '2023' },
];

export interface ICertification {
  name: string;
  year: string;
}
export const certifications: ICertification[] = [
  // { name: 'AWS Certified Developer Associate', year: '2023' },
];

export interface IPublication {
  name: string;
  year: string;
}
export const publications: IPublication[] = [
  // { name: 'Building Scalable APIs with Node.js and Express (Tech Blog)', year: '2023' },
];

export interface IVolunteerExperience {
  name: string;
  years: string;
}
export const volunteerExperiences: IVolunteerExperience[] = [
  // { name: 'Code Mentor at Local Community Workshop', years: '2022-Present' },
];

export interface IPortfolioLink {
  name: string;
  url: string;
}
export const portfolioLinks: IPortfolioLink[] = [
  // { name: 'Online Portfolio', url: 'https://yourportfolio.com' },
];

export interface IFeaturedProject {
  name: string;
  year: string;
  description: string;
  technologies: string;
  features: string;
  url: string;
}
export const featuredProjects: IFeaturedProject[] = [
  // {
  //   name: 'Project Management Platform (Personal Project)',
  //   year: '2023',
  //   description: 'Web application for managing team tasks and projects.',
  //   technologies: 'React, Express.js, MongoDB, Socket.IO.',
  //   features: 'Real-time task updates, user authentication, project dashboards.',
  //   url: 'https://github.com/yourusername/project-management-platform',
  // },
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
    responsibilities: [],
  },
  {
    company: 'PT Solusi Inovasi Pesat',
    title: 'Web Developer',
    dates: 'March 2022 - March 2023',
    startDate: '2022-03-25',
    endDate: '2023-03-25',
    responsibilities: [],
  },
  {
    company: 'PT. Modernesia Teknologi Informatika',
    title: 'Software Developer',
    dates: 'March 2019 - March 2022',
    startDate: '2019-03-01',
    endDate: '2022-03-25',
    responsibilities: [],
  },
  {
    company: 'Aquamatika',
    title: 'Private Math Tutor',
    dates: 'August 2017 - May 2020',
    startDate: '2017-08-01',
    endDate: '2020-05-31',
    responsibilities: [],
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
    details: 'Focused on Software Engineering and Information Systems.',
  },
  {
    institution: 'SMAN 1 Ciampea',
    degree: 'Science',
    years: '2014 - 2017',
    details:
      'The focus of the Natural Sciences major in high school is on exact subjects such as mathematics, physics, chemistry, and biology.',
  },
];
