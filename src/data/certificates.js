import { FaFreeCodeCamp, FaGoogle, } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

const certificates = [
  {
    id: 1,
    name: 'React Tutorial and Project Course',
    icon: <SiUdemy />,
    issuedBy: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-a61f51ce-9178-47f5-8fb3-6ef5d80f8ca6',
    number: null
  },
  {
    id: 2,
    name: 'NodeJs and Project Course',
    issuedBy: 'Udemy',
    icon: <SiUdemy />,
    link: 'https://www.udemy.com/certificate/UC-9e25d55e-4706-46e4-9a76-255b1c16284b',
    number: null
  },
  {
    id: 3,
    name: 'JavaScript Algorithms and Data Structures',
    issuedBy: 'FreeCodeCamp',
    icon: <FaFreeCodeCamp />,
    link: 'https://www.freecodecamp.org/certification/ukasz/javascript-algorithms-and-data-structures',
    number: null
  },
  {
    id: 4,
    name: 'Responsive Web Design',
    issuedBy: 'FreeCodeCamp',
    icon: <FaFreeCodeCamp />,
    link: 'https://www.freecodecamp.org/certification/ukasz/responsive-web-design',
    number: null
  },
  {
    id: 5,
    name: 'Podstawy marketingu internetowego',
    issuedBy: 'Google',
    icon: <FaGoogle />,
    link: 'https://learndigital.withgoogle.com/internetowerewolucje/validate-certificate-code',
    number: 'nr ZVGD74DGC',
  },
  {
    id: 6,
    name: 'Wprowadzenie do baz danych',
    issuedBy: 'Akademia Kodu',
    icon: null,
    link: 'https://www.testportal.pl/DownloadCertificate.html?a=KdUXFY2ekj4%2FoD%2Bh5rcFmQ%3D%3D&t=ddtBJmvrfVR9',
    number: null
  },
  {
    id: 7,
    name: 'LCCI English B2',
    issuedBy: 'LCCI International Qualifications',
    icon: null,
    link: null,
    number: null
  },
  {
    id: 8,
    name: 'Pearson Test of English B2',
    issuedBy: 'Pearson Education Ltd.',
    icon: null,
    link: null,
    number: null
  },
];

export default certificates;

