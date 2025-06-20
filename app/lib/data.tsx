// lib/data.ts

export type UserStory = {
  id: string;
  title: string;
  description: string;
  effort: number;
  priority: 'MUST' | 'SHOULD' | 'COULD' | 'WOULD';
  remainingEffort: number;
};

export const mockUserStories: UserStory[] = [
  {
    id: '1',
    title: 'Connexion utilisateur',
    description: 'Permet à un utilisateur de rejoindre un projet via un code.',
    effort: 3,
    priority: 'MUST',
    remainingEffort: 9,
  },
  {
    id: '2',
    title: 'Créer une user story',
    description: 'Le PO peut créer une user story.',
    effort: 2,
    priority: 'SHOULD',
    remainingEffort: 6,
  },
  {
    id: '3',
    title: 'Générer un QR Code',
    description: 'Affiche un QR Code pour le partage du projet.',
    effort: 1,
    priority: 'COULD',
    remainingEffort: 3,
  },
];
