/***
 * @model Schema for event (previously known as adventures log)
 */
export class Event {
  date: Date;
  details: string;
  text: string;

  constructor(date?: Date, details?: string, text?: string) {
    this.date = date || new Date();
    this.details = details || '';
    this.text = text || '';
  }
}
