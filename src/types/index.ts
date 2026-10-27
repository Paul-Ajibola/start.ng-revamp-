export interface Game {
  title: string;
  creator: string;
  category: string;
  icon: string;
  color: string;
  description: string;
}

export interface Category {
  title: string;
  count: number;
  icon: string;
  color: string;
}
