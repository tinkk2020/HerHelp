
export enum UserMode {
  EMPLOYER = 'EMPLOYER',
  PROVIDER = 'PROVIDER'
}

export type TabType = 'HOME' | 'SCHOOL' | 'MESSAGE' | 'PROFILE';

export interface ServiceItem {
  id: string;
  name: string;
  icon: string;
}

export interface Provider {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  orders: number;
  tags: string[];
  distance: string;
  time: string;
}

export interface ChatMessage {
  id: string;
  sender: 'me' | 'other';
  text: string;
  time: string;
}
