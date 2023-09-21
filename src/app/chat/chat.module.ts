import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import {
  StreamAutocompleteTextareaModule,
  StreamChatModule,
} from 'stream-chat-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    StreamAutocompleteTextareaModule,
    StreamChatModule,
    RouterModule.forChild([{ path: '', component: ChatComponent }]),
  ],
})
export class ChatModule {}