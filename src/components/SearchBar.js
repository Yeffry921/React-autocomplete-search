import { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event) => {
    const searchTerm = event.target.value
    setWordEntered(searchTerm)
    
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
    if (searchTerm === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }

  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onChange={handleFilter} value={wordEntered} />
        <div className="searchIcon">
          {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id='clearBtn' onClick={clearInput} /> }
        </div>
      </div>
      {filteredData.length !== 0 ? (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="#">
                <p>{value.title}</p>
              </a>
            )
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
