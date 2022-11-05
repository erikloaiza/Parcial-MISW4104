import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { Plant } from '../../interfaces/plant';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
})
export class PlantComponent implements OnInit {
  plants: Plant.Request[] = [];
  totalByType: [Plant.Request['tipo'], number][] = [];

  constructor(private plantsService: PlantService) {}

  ngOnInit(): void {
    this.getPlantsList().then(plants => {
      this.plants = plants;
      this.setTotalizeByType();
    });
  }

  getPlantsList() {
    return new Promise<Plant.Request[]>(resolve => {
      this.plantsService.getPlants().subscribe(response => {
        resolve(response);
      });
    });
  }

  setTotalizeByType() {
    const accumulator = {} as Record<Plant.Request['tipo'], number>;
    for (const { tipo } of this.plants) {
      if (accumulator[tipo] == undefined) accumulator[tipo] = 0;
      accumulator[tipo]++;
    }
    this.totalByType = Object.entries(accumulator) as typeof this.totalByType;
  }
}
