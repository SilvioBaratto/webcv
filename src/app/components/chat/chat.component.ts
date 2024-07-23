import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: { sender: string, text: string }[] = [];
  messageText: string = '';

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {}

  sendMessage(): void {
    if (this.messageText.trim()) {
      const userMessage = { sender: 'User', text: this.messageText };
      this.messages.push(userMessage);
      this.messageText = '';

      this.chatService.sendMessage(userMessage.text).subscribe(response => {
        const botMessage = { sender: 'Bot', text: response };
        this.messages.push(botMessage);
      });
    }
  }
}
