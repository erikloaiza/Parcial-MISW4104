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

  constructor(private plantsService: PlantService) {}

  ngOnInit(): void {
    this.getPlantsList().then(plants => {
      console.log({ plants });
      this.plants = plants;
    });
  }

  getPlantsList() {
    return new Promise<Plant.Request[]>(resolve => {
      this.plantsService.getPlants().subscribe(response => {
        resolve(response);
      });
    });
  }
}
