import { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import getData from './uttils/api/interpark';

function App() {
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    (async () => {
      setSearchList(await getData());
    })();
  }, []);

  return (
    <>
      <ul>
        {searchList.map((item) => (
          <li key={item.itemId}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
      <GlobalStyle />
    </>
  );
}

export default App;
