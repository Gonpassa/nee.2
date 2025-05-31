export interface EntryField<T> {
  type: T;

}

export interface EntryHeading {
  heading: string;
  variant: HeadingVariantEnum;
}

export enum HeadingVariantEnum {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
}

export enum MoodEnum {
  HAPPY = 'happy',
  CALM = 'calm',
  NEUTRAL = 'neutral',
  ANXIOUS = 'anxious',
  SAD = 'sad',
}

export enum ContentTypeEnum {
  HEADING = 'heading',
  SUBHEADING = 'subheading',
  DATE = 'date',
  PARAGRAPH = 'paragraph',
}

export interface JournalContent {
  type: ContentTypeEnum;
  content: string;
  variant?: HeadingVariantEnum;
  date?: Date;
  mood?: MoodEnum;
  heading?: string;
}

export interface IJournalEntry {
  entryTitle: string;
  entryDate: Date;
  mood: MoodEnum;
  content: JournalContent[];
}
