import {Routes} from '@angular/router';
import {HomeComponent} from "../pages/home/home.component";
import {CupidsbowComponent} from "../pages/cupidsbow/cupidsbow.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "cupids-bow",
    component: CupidsbowComponent
  }
];
