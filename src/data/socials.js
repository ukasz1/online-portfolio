import { FaGithub, FaLinkedin, FaEnvelopeOpen } from "react-icons/fa";

const socials = [
  {
    link: 'https://github.com/ukasz1',
    icon: <FaGithub className='icon github-icon' />
  },
  {
    link: 'https://www.linkedin.com/in/%C5%82ukasz-mitkowski-058883177',
    icon: <FaLinkedin className='icon linkedin-icon' />,
  },
  {
    link: 'mailto:lukaszmitkowski53@gmail.com',
    icon: <FaEnvelopeOpen className='icon email-icon' />,
  },
];

export default socials;