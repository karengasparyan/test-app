import {useEffect, useState} from 'react';
import axios from "axios";

function App() {
  const [value, setValue] = useState();
  const [resData, setResData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://localhost:4000/api/organizations?s=${value}`);
            setResData(result.data.data);
        };

        fetchData().then(r => r);
    }, [value]);

  const handleChange = (ev) => {
    setValue(ev.target.value)
  }

  return (
    <div className="App">
      <div className="input-wrapper">
        <label htmlFor="search">Search</label>
        <br />
        <input type="text"
               id="search"
               placeholder="Search"
               className="input-field"
               value={value}
               onChange={handleChange}
        />
      </div>
      <div>
          <p>{resData?.value}</p>
      </div>
    </div>
  );
}

export default App;
