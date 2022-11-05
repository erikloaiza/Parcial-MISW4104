import { getTestBed, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PlantService } from './plant.service';

import { Plant } from '../interfaces/plant';

import { getFakePlants } from '../utils/test';

describe('PlantService - getPlants', () => {
  let plantsService: PlantService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantService],
    });
    plantsService = TestBed.inject(PlantService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    getTestBed().resetTestingModule();
  });
  it('should be created', () => {
    expect(plantsService).toBeTruthy();
  });
  it('should return an Observable<Plant[]>', () => {
    const expectedPlants: Plant.Request[] = getFakePlants();

    plantsService.getPlants().subscribe(plants => {
      expect(plants).toEqual(expectedPlants);
    });

    const req = httpMock.expectOne(plantsService.baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(expectedPlants);
  });
});
