import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlidesComponent } from './slides/slides.component';
@NgModule({
  declarations: [SlidesComponent],
  exports: [SlidesComponent],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class ComponentsModule {}
