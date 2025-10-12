import { FiMail, FiTwitter } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { IconType } from 'react-icons';

export interface SocialLink {
  name: string;
  link: string | null;
  icon: IconType
}

export const navSocialLinks: SocialLink[] = [
  {
    name: "GitHub",
    link: "https://github.com",
    icon: FiGithub
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com",
    icon: FiLinkedin
  },
  {
    name: "Twitter",
    link: "https://twitter.com",
    icon: FiTwitter
  },

];

export const contactSocialLinks: SocialLink[] = [
  {
    name: "GitHub",
    link: "https://github.com",
    icon: FiGithub
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com",
    icon: FiLinkedin
  },
  {
    name: "Twitter",
    link: "https://twitter.com",
    icon: FiTwitter
  },

];

export const footerSocialLinks: SocialLink[] = [
  {
    name: "GitHub",
    link: "https://github.com",
    icon: FiGithub
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com",
    icon: FiLinkedin
  },
  {
    name: "Twitter",
    link: "https://twitter.com",
    icon: FiTwitter
  },
  {
    name: "Email",
    link: "mailto:hello@cookie.dev",
    icon: FiMail
  },

];