export interface IEntry {
  title: string;
  month: number;
  year: number;
  day: number;
  time: string;
  mood: string;
  entry: string;
  userId: string;
}

export interface IJournalResponse {
  entries: IEntry[];
}

export interface IJournalRequest {
  userId: string;
}