import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BlogPage} from '../blog/blog';
import { ControlPage } from '../control/control';
import { DenunciasPage } from '../denuncias/denuncias';
import { ZonaPage } from '../zona/zona';
import { ListPage } from '../list/list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  blogpage = BlogPage;
  controlpage = ControlPage;
  denunciaspage = DenunciasPage;
  zonapage = ZonaPage;
  listpage = ListPage;
  constructor(public navCtrl: NavController) {
  }

}
