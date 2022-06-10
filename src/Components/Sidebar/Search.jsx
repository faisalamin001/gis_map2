import React, { useState } from "react";
import "./search.css";
import { IoMdSearch } from "react-icons/io";
import { jalozaiData as data } from "./../Map/jalozaiData";

const Search = () => {
  const [name, setName] = useState("");

  // the search result
  const [foundUsers, setFoundUsers] = useState([]);

  /* SEARCH */

  /*  var libraries = this.props.items,
     
  searchString = this.state.searchString.trim().toLowerCase();

if (searchString.length > 0) {

libraries = libraries.filter(function(i) {

  return i.name.toLowerCase().match( searchString );
});




  const byCategory = (user, category) => {
    if (category) {
      return user.category === category;
    } else return user;
  };
  const bySearch = (user, search) => {
    if (search) {
      return user.name.toLowerCase().includes(search.toLowerCase());
    } else return user;
  };



  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    let searchFruits = fruits.filter((fruit) => {
      return e.target.value !== "" && fruit.includes(e.target.value);
    });
    setSearchResult(searchFruits);
  };


} */
  /* SEARCH */

 
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = data.features.filter((user) => {
        return user.properties.fid.includes(keyword);
      });
      setFoundUsers(results);
    } else {
      setFoundUsers("");
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className='container'>
      <div className='form'>
        <div className='icon'>
          <IoMdSearch />
        </div>
        <input
          type='text'
          value={name}
          onChange={filter}
          placeholder='Search...'
        />
      </div>

      <div className='box'>
        <div className='user-list'>
          {foundUsers && foundUsers.length > 0
            ? foundUsers.map((user, index) => (
                <li key={index} className='user'>
                  <span className='user-id'>id: {user.properties.fid}</span>
                  <span className='user-name'>{user.properties.plot}</span>
                  <span className='user-age'>{user.properties.QUOTA}</span>
                </li>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Search;
