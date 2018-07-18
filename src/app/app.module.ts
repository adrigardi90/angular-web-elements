import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { TeamPollComponent } from './team-poll/team-poll.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamPollComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    TeamPollComponent
  ],
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    // CreateCustonElement Angular function
    const el = createCustomElement(TeamPollComponent, { injector: this.injector });
    // customElements belongs to the window not to Angular
    customElements.define('team-poll', el);
  }
}
