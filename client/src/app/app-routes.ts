import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SubregionalOrganizationComponent } from './pages/subregional-organization/subregional-organization.component';
import { CompetitionsComponent } from './pages/competitions/competitions.component';

export const AppRoutes = [
  {
    path: "home",
    component: HomeComponent,
    title: "Home"
  },
  {
    path: "about",
    component: AboutComponent,
    title: "About"
  },
  {
    path: "subregional_organization",
    component: SubregionalOrganizationComponent,
    title: "Sub-Regional Organizations"
  },
  {
    path: "competitions",
    component: CompetitionsComponent,
    title: "Competitions"
  }
];