import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { concatMap, delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private jokes: string[] = [
    "My boss said “dress for the job you want, not for the job you have.” So I went in as Batman.",
    "I went to the aquarium this weekend, but I didn’t stay long. There’s something fishy about that place.",
    "What do you call a sheep who can sing and dance? Lady Ba Ba.",
    "What do you call a French man wearing sandals? Philipe Fallop.",
    "Why can't dinosaurs clap their hands? Because they're extinct.",
    "I gave my handyman a to-do list, but he only did jobs 1, 3, and 5. Turns out he only does odd jobs.",
    "Who won the neck decorating contest? It was a tie.",
    "Where do rainbows go when they've been bad? To prism, so they have time to reflect on what they've done.",
    "Dogs can't operate MRI machines. But catscan.",
    "What do mermaids use to wash their fins? Tide.",
    "What did the skillet eat on its birthday? Pan-cakes.",
    "Why couldn't the produce manager make it to work? He could drive, but he didn't avocado.",
    "How is my wallet like an onion? Every time I open it, I cry.",
    "What do you call a dog who meditates? Aware wolf.",
    "What kind of fish do penguins catch at night? Star fish.",
    "Which vegetable has the best kung fu? Broc-lee.",
    "Can a frog jump higher than a house? Of course, a house can't jump.",
    "I was going to try an all almond diet, but that's just nuts.",
    "I tried to make up a joke about ghost but I couldn't. It had plenty of spirit but no body."
  ];

  private usedJokes: Set<string> = new Set();

  constructor() { }

  sendMessage(message: string): Observable<string> {
    if (this.usedJokes.size === this.jokes.length) {
      return of("Bot: No more jokes available.");
    }

    let randomJoke;
    do {
      randomJoke = this.jokes[Math.floor(Math.random() * this.jokes.length)];
    } while (this.usedJokes.has(randomJoke));

    this.usedJokes.add(randomJoke);

    return of(`${randomJoke}`);
  }

  getTypingObservable(message: string): Observable<string> {
    const words = message.split(' ');

    // Emit each word with a delay of 0.1 seconds
    return from(words).pipe(
      concatMap(word => of(word).pipe(delay(100))),
      map(word => word + ' ')
    );
  }
}
