import superagent from "superagent";
async function fetchDogImage(prop: any) {
  const apiUrl = `https://dog.ceo/api/breed/${prop}/images`;
  const list = await superagent
    .get(apiUrl)
    .accept("json")
    .then((res) => res.body);
  // const list = await fetch(apiUrl).then((res) => res.json());
  return list.message;
}

export default fetchDogImage;
