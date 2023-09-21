import { Component } from '@angular/core';
import {
  ChannelService,
  ChatClientService,
  StreamI18nService,
} from 'stream-chat-angular';

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
    // Copy and paste your credentials here
    const apiKey = '';
    const userId = '';
    const userToken = '';
    this.chatService.init(apiKey, userId, userToken, {
      logger: (_, message, extraData: any) => {
        if (
          typeof extraData?.tags === 'string' &&
          extraData.tags.includes('message list main')
        ) {
          console.log(message);
        }
      },
    });
    this.streamI18nService.setTranslation();
  }

  async ngOnInit() {
    const channel = this.chatService.chatClient.channel(
      'messaging',
      'talking-about-angular',
      {
        // add as many custom fields as you'd like
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
        name: 'Talking about Angular',
      }
    );
    await channel.create();
    this.channelService.shouldMarkActiveChannelAsRead = false;
    this.channelService.init({
      type: 'messaging',
      members: { $in: ['zitaszuperagetstreamio'] },
    });
  }
}
