import mongoose from 'mongoose';

export interface IEntry extends mongoose.Document {
  title: string;
  month: number;
  year: number;
  day: number;
  time: string;
  mood: string;
  entry: string;
  userId: string;
}

const EntrySchema = new mongoose.Schema({
  title: String,
  month: Number,
  year: Number,
  day: Number,
  time: String,
  mood: String,
  entry: String,
  userId: String,
});

export const Entry = mongoose.model<IEntry>('Entry', EntrySchema);
