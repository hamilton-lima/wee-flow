import { Injectable } from '@angular/core';
import { LoremIpsum } from "lorem-ipsum";

@Injectable({
  providedIn: 'root'
})
export class LoremIpsumService {
  private lorem: LoremIpsum;

  sentence(): string {
    return this.lorem.generateSentences(1);
  }

  constructor() { 
    this.lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 16,
        min: 4
      }
    });
  }
}
