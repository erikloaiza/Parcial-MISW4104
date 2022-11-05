import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PlantService } from 'src/app/services/plant.service';

import { PlantComponent } from './plant.component';
import { getFakePlants } from 'src/app/utils/test';
import { Observable } from 'rxjs';

describe('PlantComponent', () => {
  let component: PlantComponent;
  let fixture: ComponentFixture<PlantComponent>;
  let debug: DebugElement;
  let plantService: PlantService;

  const totalTestPlants = 3; //change this to undefined to randomize tests

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantComponent],
      providers: [PlantService],
    }).compileComponents();

    const fakePlants = getFakePlants(totalTestPlants);

    plantService = TestBed.inject(PlantService);
    spyOn(plantService, 'getPlants').and.returnValue(
      new Observable(subscriber => {
        subscriber.next(fakePlants);
      })
    );

    fixture = TestBed.createComponent(PlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have n plants', () => {
    expect(component.plants.length).toEqual(totalTestPlants);
  });
  fit('should have a table with n + 1 rows', () => {
    expect(debug.query(By.css('table'))).toBeTruthy();
    expect(debug.queryAll(By.css('table tr')).length).toEqual(
      totalTestPlants + 1
    );
  });
});
