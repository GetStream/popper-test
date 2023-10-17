import { Component } from '@angular/core';
import { ChannelService, ChatClientService, StreamI18nService } from 'stream-chat-angular';

// Copy and paste your credentials here
const apiKey = '';
const userId = '';
const userToken = '';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService
  ) {
    this.chatService.init(apiKey, userId, userToken);
    this.streamI18nService.setTranslation();
  }

  async ngOnInit() {
    this.channelService.shouldMarkActiveChannelAsRead = false;
    this.channelService.init({
      type: 'messaging',
      members: { $in: [userId] },
    });
  }
}
