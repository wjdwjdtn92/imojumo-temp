const getData = async () => {
  const data = await fetch(
    '/interpark/search.api?key=E0BB99BE7454764B7D85DF3CFA54BE53432BF7EF242CAF399775E259AB4BA9A1&query=%EC%82%BC%EA%B5%AD%EC%A7%80&output=json'
  )
    .then((response) => response.json())
    .then((jsonData) => jsonData.item);

  return data;
};

export default getData;
