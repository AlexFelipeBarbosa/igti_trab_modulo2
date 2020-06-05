import { promises } from 'fs';
import e from 'express';

const statesFile = './dados/Estados.json';
const citiesFile = './dados/Cidades.json';
const files = './files';

let states;
let cities;

const processFiles = async () => {
  states = JSON.parse(await promises.readFile(statesFile, 'utf-8'));
  cities = JSON.parse(await promises.readFile(citiesFile, 'utf-8'));

  states.forEach((e) => {
    const cityState = cities.filter((c) => c.Estado === e.ID);
    promises.writeFile(`${files}/${e.Sigla}.json`, JSON.stringify(cityState));
  });
};

const readStateAmount = async (state) => {
  const citiesFile = JSON.parse(
    await promises.readFile(`${files}/${state}.json`, 'utf-8')
  );
  return citiesFile.length;
};

const totalByState = async () => {
  let total = [];
  await Promise.all(
    states.map(async (e) => {
      let tot = await readStateAmount(e.Sigla);

      let stateObj = { UF: e.Sigla, Total: tot };
      total.push(stateObj);
    })
  );
  return total;
};

const topFive = (total) => {
  total = total.sort((a, b) => b.Total - a.Total);

  let totalReturn = [];
  let tot = 0;

  for (let i = 0; i < 5; i++) {
    totalReturn.push(`${total[i].UF} - ${total[i].Total}`);
    tot += total[i].Total;
  }
  console.log('3: ');
  console.log(totalReturn);
  console.log('Soma das Quantidades: ' + tot);
};

const worstFive = (total) => {
  total = total.sort((a, b) => a.Total - b.Total);

  let totalReturn = [];
  let tot = 0;

  for (let i = 5; i > 0; i--) {
    totalReturn.push(`${total[i - 1].UF} - ${total[i - 1].Total}`);
    tot += total[i - 1].Total;
  }
  console.log('4: ');
  console.log(totalReturn);
  console.log('Soma das Quantidades: ' + tot);
};

const biggestCityNameByState = async (state) => {
  const citiesFile = JSON.parse(
    await promises.readFile(`${files}/${state}.json`, 'utf-8')
  );

  citiesFile
    .sort((a, b) => a.Nome.localeCompare(b.Nome))
    .sort((a, b) => b.Nome.length - a.Nome.length);

  const city = { UF: state, ...citiesFile[0] };
  return city;
};

const smallestCityNameByState = async (state) => {
  const citiesFile = JSON.parse(
    await promises.readFile(`${files}/${state}.json`, 'utf-8')
  );

  citiesFile
    .sort((a, b) => a.Nome.localeCompare(b.Nome))
    .sort((a, b) => a.Nome.length - b.Nome.length);

  const city = { UF: state, ...citiesFile[0] };
  return city;
};

const biggestStatesName = async () => {
  let states = [];
  await Promise.all(
    states.map(async (e) => {
      let city = await biggestCityNameByState(e.Sigla);
      states.push(city);
    })
  );
  let names = [];
  states
    .sort((a, b) => a.Sigla.localeCompare(b.Sigla))
    .forEach((e) => {
      names.push(`${e.Nome} - ${e.Sigla}`);
    });
  console.log('5: ');
  console.log(names);
};

const smallerStatesName = async () => {
  let states = [];
  await Promise.all(
    states.map(async (e) => {
      let city = await smallestCityNameByState(e.Sigla);
      states.push(city);
    })
  );
  let names = [];
  states
    .sort((a, b) => a.Sigla.localeCompare(b.Sigla))
    .forEach((e) => {
      names.push(`${e.Nome} - ${e.Sigla}`);
    });
  console.log('6: ');
  console.log(names);
};

const biggestCityName = () => {
  let biggestName = cities
    .sort((a, b) => a.Nome.localeCompare(b.Nome))
    .sort((a, b) => b.Nome.length - a.Nome.length)[0];

  let stateCity = states.find((e) => e.Id === biggestName.Estado);
  console.log('7: ');
  console.log(`${biggestName.Nome} - ${stateCity.UF}`);
};

const smallestCityName = () => {
  let smallestName = cities
    .sort((a, b) => a.Nome.localeCompare(b.Nome))
    .sort((a, b) => a.Nome.length - b.Nome.length)[0];

  let stateCity = states.find((e) => e.Id === smallestName.Estado);
  console.log('8: ');
  console.log(`${smallestName.Nome} - ${stateCity.Sigla}`);
};

processFiles().then(async () => {
  let total = await totalByState();
  topFive(total);
  worstFive(total);
  await biggestStatesName();
  await smallerStatesName();
  biggestCityName();
  smallestCityName();
});
