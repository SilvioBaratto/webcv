import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor() { }

  sendMessage(message: string): Observable<string> {
    // Simulate a backend response with a delay
    const simulatedResponses = [
      "Hello! How can I assist you today?",
      "I'm here to help with any questions you might have.",
      "Can you provide more details?",
      "Let's dive deeper into that topic."
    ];
    const randomResponse = simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)];
    return of(randomResponse).pipe(delay(1000)); // Simulate a 1-second delay
  }
}
