
export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
