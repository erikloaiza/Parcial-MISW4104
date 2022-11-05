import { faker } from '@faker-js/faker';

import { Plant } from '../interfaces/plant';

export function getFakePlants(
  numberOfPlants = faker.datatype.number({
    min: 10,
    max: 50,
  })
): Array<Plant.Request> {
  let plants: Array<Plant.Request> = [];
  for (let i = 0; i < numberOfPlants; i++) {
    plants.push(getFakePlant());
  }
  return plants;
}

export const getFakePlant = (): Plant.Request => ({
  id: faker.datatype.number(),
  nombre_comun: faker.name.fullName(),
  nombre_cientifico: faker.lorem.words(),
  tipo: faker.helpers.arrayElement(['Interior', 'Exterior']),
  altura_maxima: faker.datatype.number(),
  clima: faker.lorem.word(),
  sustrato_siembra: faker.lorem.text(),
});
