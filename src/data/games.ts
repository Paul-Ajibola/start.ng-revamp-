import type { Category, Game } from '../types';

export const categories: Category[] = [
  { title: 'Endless runners', count: 38, icon: '🏃🏾', color: 'mint' },
  { title: 'Nigerian themed', count: 43, icon: '🚌', color: 'orange' },
  { title: 'Brainy games', count: 25, icon: '🧠', color: 'violet' },
  { title: 'Space and sci-fi', count: 8, icon: '🪐', color: 'blue' },
  { title: 'Racing and driving', count: 14, icon: '🏎️', color: 'pink' },
  { title: 'Catch and dodge', count: 29, icon: '🪁', color: 'yellow' },
  { title: 'Ancient ruins and treasure', count: 9, icon: '🗺️', color: 'gold' },
  { title: 'With friends', count: 8, icon: '🫶🏾', color: 'coral' },
];

export const games: Game[] = [
  { title: 'The Hangout', creator: 'satch.ng', category: 'With friends', icon: '🛝', color: 'mint', description: 'Meet up, make a move, and hang out.' },
  { title: 'Lagos Bike Rush', creator: 'OBA', category: 'Racing and driving', icon: '🏍️', color: 'orange', description: 'Take the fast lane through Lagos.' },
  { title: 'Boju Boju', creator: '99PlusOne', category: 'Nigerian themed', icon: '🙈', color: 'violet', description: 'Ready or not, here comes the fun.' },
  { title: 'Jemi Game Arcade', creator: 'Jemi', category: 'Brainy games', icon: '🕹️', color: 'pink', description: 'A pocket-sized trip to the arcade.' },
  { title: 'Job Hunt', creator: 'Raji', category: 'Nigerian themed', icon: '💼', color: 'blue', description: 'Your next big opportunity awaits.' },
  { title: 'Tesla Skyrun', creator: 'Favour', category: 'Space and sci-fi', icon: '🚀', color: 'violet', description: 'Race beyond the edge of the sky.' },
  { title: 'Danfo Make Way', creator: 'Okeke', category: 'Racing and driving', icon: '🚌', color: 'gold', description: 'One danfo. All of Lagos. Make way!' },
  { title: 'Inkbreak', creator: 'henryuks', category: 'Catch and dodge', icon: '🎨', color: 'coral', description: 'Make a splash and stay in the game.' },
];

export const newGames: Game[] = [
  { title: 'Lagos Legends', creator: 'Triple', category: 'Nigerian themed', icon: '⚔️', color: 'orange', description: 'A Lagos legend is born.' },
  { title: 'Bingo', creator: 'Hamzat', category: 'Brainy games', icon: '🎯', color: 'mint', description: 'Eyes down for a little luck.' },
  { title: 'Quiz', creator: 'Hamzat', category: 'Brainy games', icon: '💡', color: 'violet', description: 'How much do you know?' },
  { title: 'Ludo', creator: 'Hamzat', category: 'With friends', icon: '🎲', color: 'blue', description: 'A classic race home.' },
  { title: 'Whot', creator: 'Hamzat', category: 'With friends', icon: '🃏', color: 'pink', description: 'Deal yourself a winning hand.' },
];
