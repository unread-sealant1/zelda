export type TimelineEvent = {
  id: string;
  date: string;
  title: string;
  story: string;
  photos?: string[];
  location?: string;
  notes?: string;
  isEmotionalPeak?: boolean;
  placeholderText?: string;
};

export type Memory = {
  id: string;
  title: string;
  description: string;
  highlight: string;
  category: 'emotion' | 'physical' | 'verbal';
};

export type Quote = {
  id: string;
  text: string;
  author: string;
  context?: string;
};

export type Letter = {
  id: string;
  title: string;
  date: string;
  content: string;
};

export type FutureEvent = {
  id: string;
  title: string;
  expectedDate?: string;
  description: string;
};
