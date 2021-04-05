
import Header from './components/Header';
import {Box} from '@material-ui/core';
import {fetchData} from './service/api';
import { useEffect,useState} from 'react';
import Characters from './components/Characters';

const App = () => {
    const [text, setText] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
    const getData = async () => {
      const result = await fetchData(text)
      setData(result.data)
    }
    getData();
  }, [text]);

  const getText = (text) => {
    setText(text);
  }

  return (
      <Box>
        <Header getText = {getText} />
        <Characters data = {data} />
      </Box>
  );
}

export default App;
