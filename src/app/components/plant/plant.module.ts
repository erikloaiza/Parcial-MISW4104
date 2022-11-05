import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantComponent } from './plant.component';

@NgModule({
  declarations: [PlantComponent],
  imports: [CommonModule],
  exports: [PlantComponent],
})
export class PlantModule {}
