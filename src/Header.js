import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import { useDataLayerValue } from './DataLayer';
import { Avatar } from '@material-ui/core';

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__search">
        <SearchIcon />
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search for Artists, Songs, or Podcasts"
        />
      </div>
      <div className="header__avatar">
        <Avatar src={user?.images[0].url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
