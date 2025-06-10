type Project = {
  id: number;
  name: string;
  description: string;
  stack: string[];
  img: string;
  link: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: 'Word counter',
    description: 'App to help you count characters, words and sentences.',
    stack: ['React', 'TypeScript', 'Vite'],
    img: './projectPhoto.jpg',
    link: 'https://dzik0.github.io/character-counter/',
  },
];
