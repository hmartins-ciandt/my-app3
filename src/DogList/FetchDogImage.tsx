async function fetchDogImage(prop: any) {
  const apiUrl = `https://dog.ceo/api/breed/${prop}/images`;
  const list = await fetch(apiUrl).then((res) => res.json());

  //console.log(list);
  return list.message;
}

export default fetchDogImage;
