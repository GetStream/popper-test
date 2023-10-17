import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamAutocompleteTextareaModule, StreamChatModule } from 'stream-chat-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StreamAutocompleteTextareaModule,
    StreamChatModule
  ],
  exports: [StreamChatModule]
})
export class SharedModule { }
