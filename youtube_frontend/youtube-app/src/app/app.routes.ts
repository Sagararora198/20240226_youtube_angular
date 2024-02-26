import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SettingComponent } from './setting/setting.component';

export const routes: Routes = [
    {
        path:'',
        component:HomepageComponent
    },
    {
        path:'setting',
        component:SettingComponent
        
    },
    {
        path:'subscription',
        component:SubscriptionComponent
        
    }
];
