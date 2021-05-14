import superagent from "superagent";
async function fetchDogBreed() {
  const apiUrl = "https://dog.ceo/api/breeds/list/all";
  const list = await superagent
    .get(apiUrl)
    .accept("json")
    .then((res) => res.body);

  //const list = await fetch(apiUrl).then((res) => res.json());
  return list.message;
}

export default fetchDogBreed;
