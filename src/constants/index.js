import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  threejs,
  advice_generator,
  cadastro_de_pessoas,
  nft_preview_card,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const technologies = [
  {
    id: 'html',
    name: 'HTML',
    icon: html,
  },
  {
    id: 'css',
    name: 'CSS',
    icon: css,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: javascript,
  },
  {
    id: 'reactjs',
    name: 'React JS',
    icon: reactjs,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    id: 'threejs',
    name: 'Three JS',
    icon: threejs,
  },
  {
    id: 'git',
    name: 'git',
    icon: git,
  },
];

const projects = [
  {
    name: 'NFT Preview Card',
    description:
      'This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
    ],
    image: nft_preview_card,
    live_version_link:
      'https://miguellpc.github.io/nft-preview-card/',
    source_code_link: 'https://github.com/MiguellPC/nft-preview-card',
  },
  {
    name: 'Advice generator',
    description:
      'The perfect project to learn how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: advice_generator,
    live_version_link:
      'https://miguellpc.github.io/advice-generetor-app/',
    source_code_link:
      'https://github.com/MiguellPC/advice-generetor-app',
  },
  {
    name: 'Person Registry',
    description:
      "The 'Person Registry' application is a complete solution for managing individuals' information. With an intuitive interface and comprehensive features.",
    tags: [
      {
        name: 'Csharp',
        color: 'blue-text-gradient',
      },
      {
        name: 'asp.net',
        color: 'green-text-gradient',
      },
      {
        name: 'sqlite',
        color: 'pink-text-gradient',
      },
      {
        name: 'entity-framework',
        color: 'orange-text-gradient',
      },
    ],
    image: cadastro_de_pessoas,
    live_version_link:
      'https://cadastro-de-pessoas.azurewebsites.net/',
    source_code_link:
      'https://github.com/MiguellPC/Cadastro-de-pessoas',
  },
];

export { technologies, projects };
