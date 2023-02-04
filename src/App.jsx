import { useState, useEffect } from 'react';
import getData from './uttils/api/interpark';

function App() {
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    (async () => {
      setSearchList(await getData());
    })();
  }, []);

  console.log(searchList);
  return searchList.map((item) => <div key={item.itemId}>{item.title}</div>);
}

export default App;
