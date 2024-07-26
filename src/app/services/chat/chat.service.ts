import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { concatMap, delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private jokes: string[] = [
    "My grandpa always said, Make sure you leave this world better than you found it. So, in his honor, I've been burying all my problems in the backyard. Now my garden's flourishing, and my therapist says I've really blossomed into a well-adjusted individual, though I'm not sure what'll happen when those skeletons start sprouting.",
    "If you're still stuck in a cycle of comparison, measuring your worth against others, it's time to hit pause and remember, you're a limited edition. Don't let anyone dull your sparkle.",
    "I am so tired. I barely slept last night. I was thinking about someone. What a waste of time. Don't be like me, if you ever feeling down. Just remember, there is love without sex. And there is sex without love. And there is you, without both.",
    "Sad or dissatisfied, listen. Always remember that you can do anything you put your mind to. Never give up on your dream and keep smiling, no matter what you are going through. If you fall down, just get up. And if you can't get up, your friends, your mom, your dad, your siblings, everyone around you are there to help you up. Just keep smiling, and for a good mood, here's Happy by Feral. Enjoy!",
    "I sometimes wonder what my parents did to fight boredom in the time before TV and Internet. So I asked my 11 brothers and sisters, but they didn't know either.",
    "If you buy a pet for your child, make sure it has a uniform color, so you can replace it more easily if it dies. If it has already died, say that you are taking it to the vet and simply swap it out.",
    "Diet tip! Eat in front of a mirror. Nothing kills your appetite faster than watching yourself inhale a whole plate of cookies like a gluttonous pig. Plus, it's a great way to practice your poker face.",
    "Okay, I understand that at some point in time, somebody saw a bug, on a bed, and just thought I'm going to name them bed bugs. Yeah, that makes sense. Now who the fuck named cockroaches?",
    "If you ever have to drive with special substances or something similar, put them in a package with your own address on it. In a world with police stops and searches, here is a life hack for you. If the police stop you, they can't do anything to you because they are not allowed to search your mail.",
    "Girls always ask why grown men are still playing video games. Well, it's the same reason you don't leave the house without your makeup. It's a nice little escape from reality.",
    "I started to understand something. The friendzone is basically like when someone turns you down for a job, but then has the audacity to call you every single week to complain about the guy they hired.",
    "When you think about it, dating is a lot like grocery shopping. You know what you should be looking for, but all bets are off when you see something delicious and bad for you.",
    "Here is your question of the day. You've been given a red button, and if you press it, you have a 70% chance of getting a billion dollars on the spot, and a 30% chance that your heart will stop immediately. So, would you press it?",
    // "You know, I'm starting to think that the main problem nowadays is that men are being told what a real man is by a woman who had no father.",
    // "Here's a question for ya. What does every woman have and it start with a V? And that she can use it to get what she wants? I know you're thinking of one thing, you sneaky bastard. But no, it's not her voice. It's the victim card.",
    "They say money can't buy happiness, but have you ever seen someone frown on a jet ski? Yeah, me neither. So, if you're feeling blue, just remember, you are not depressed, you are just broke.",
    "Two things you shouldn't post on social media. First, your money. I don't want to see your flashy cars or the fancy meals in some restaurant. Keep that to yourself, please. The second thing you shouldn't be posting on social media is your partner, simply because you don't have one.",
    // "What does the cop say when he shoots a ginger person? Well, I guess orange is the new black.",
    "What did the Secret Service say to Donald Trump during his assassination attempt? Donald! Duck",
    "Humor jokes are just like those Make-A-Wish kids, because they never get old! ",
    // "What's the difference between a potato and your sister? One is fat, lumpy, and full of carbs. The other is a potato.",
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
