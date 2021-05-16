import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { ChatDashboardComponent } from './chat-dashboard/chat-dashboard.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ChathistoryComponent } from './chathistory/chathistory.component';
import { ChatlistconvComponent } from './chatlistconv/chatlistconv.component'

import { HttpClientModule } from '@angular/common/http';
import { ChatstarComponent } from './chatstar/chatstar.component';
import { ChatlistitemComponent } from './chatlistitem/chatlistitem.component';
import { MessageUserComponent } from './message-user/message-user.component';
import { MessageBotComponent } from './message-bot/message-bot.component';
import { TopDashboardComponent } from './top-dashboard/top-dashboard.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ReviewTabComponent } from './review-tab/review-tab.component';
import { IntentDashboardComponent } from './intent-dashboard/intent-dashboard.component';
import { IntentTabComponent } from './intent-tab/intent-tab.component';
import { ChatTestComponent } from './chat-test/chat-test.component';
import { TestMessageBotComponent } from './test-message-bot/test-message-bot.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatChipsModule,
    MatNativeDateModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ChatDashboardComponent,
    ChathistoryComponent,
    ChatlistconvComponent,
    ChatstarComponent,
    ChatlistitemComponent,
    MessageUserComponent,
    MessageBotComponent,
    TopDashboardComponent,
    MainDashboardComponent,
    ReviewTabComponent,
    IntentDashboardComponent,
    IntentTabComponent,
    ChatTestComponent,
    TestMessageBotComponent,
  ]
})

export class AdminLayoutModule { }
