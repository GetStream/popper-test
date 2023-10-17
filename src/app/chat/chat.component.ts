import { Component } from '@angular/core';
import { ChannelService, StreamMessage } from 'stream-chat-angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  message!: StreamMessage;

  constructor(private channelService: ChannelService) {
    this.channelService.activeChannelMessages$.subscribe(m => {
      this.message = m[0]
    });
  }

  async ngOnInit() {}
}
