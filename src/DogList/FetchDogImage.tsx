import superagent from "superagent";
async function fetchDogImage(prop: string) {
  try {
    const apiUrl = `https://dog.ceo/api/breed/${prop}/images`;
    const list = await superagent
      .get(apiUrl)
      .accept("json")
      .then((res) => res.body);
    return list.message;
  } catch (e) {
    return "Não existe essa raça, tente novamente com outra";
  }
  // const list = await fetch(apiUrl).then((res) => res.json());
}

export default fetchDogImage;
