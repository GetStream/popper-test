import { Component } from '@angular/core';
import { ChannelService, StreamMessage } from 'stream-chat-angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  message!: StreamMessage;

  constructor(private channelService: ChannelService) {
    this.channelService.activeChannelMessages$.subscribe(m => {
      this.message = m[0]
    });
  }

  async ngOnInit() {}
}
