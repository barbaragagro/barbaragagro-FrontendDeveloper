import React, { useState } from 'react';
import { SearchContext } from '../../context/SearchContext';
import SearchComponent from './SearchComponent';
import DataGridComponent from './datagrid/DataGridComponent';

function SearchContainer() {
  const [searchInput, setSearchInput] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [launchFilter, setLaunchFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  return (
    <SearchContext.Provider
      value={{
        searchInput,
        setSearchInput,
        statusFilter,
        setStatusFilter,
        launchFilter,
        setLaunchFilter,
        typeFilter,
        setTypeFilter,
      }}
    >
      <SearchComponent />
      <DataGridComponent />
    </SearchContext.Provider>
  );
}

export default SearchContainer;
