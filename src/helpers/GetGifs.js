export const getGifs = async (search) => {
  const url = `https://api.giphy.com/v1/gifs/search?limit=10&api_key=v231QN1p88WN9enc87J0b1yodQ6QodTc&q=${search}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  console.log(gifs);
  return gifs;
};
