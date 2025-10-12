import { FiMail, FiTwitter } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { IconType } from 'react-icons';

export interface SocialLink {
  name: string;
  link: string | null;
  icon: IconType
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    link: "https://github.com/cookiejarr1/portfolio",
    icon: FiGithub
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/cyrus-layugan/",
    icon: FiLinkedin
  },
  {
    name: "Twitter",
    link: "https://twitter.com",
    icon: FiTwitter
  },

];

export const footerLinks: SocialLink[] = [
  {
    name: "GitHub",
    link: "https://github.com/cookiejarr1/portfolio",
    icon: FiGithub
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/cyrus-layugan/",
    icon: FiLinkedin
  },
  {
    name: "Twitter",
    link: "https://twitter.com",
    icon: FiTwitter
  },
  {
    name: "Email",
    link: "mailto:jarodlayugan@gmail.com",
    icon: FiMail
  },

];