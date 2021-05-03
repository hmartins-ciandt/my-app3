import superagent from "superagent";
async function fetchDogBreed() {
  const apiUrl = "https://dog.ceo/api/breeds/list/all";
  const list = await superagent
    .get(apiUrl)
    .accept("json")
    .then((res) => res.body);

  //const list = await fetch(apiUrl).then((res) => res.json());
  const listAll = Object.keys(list.message).map(
    (dogName: string, index: number) => ({
      id: index + 1,
      name: dogName.substring(0, 1).toUpperCase().concat(dogName.substring(1)),
      scoldCount: 0,
    })
  );
  return list.message;
}

export default fetchDogBreed;
