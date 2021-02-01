import React from "react";
import PropTypes from "prop-types";
import Search from "../UI/Search";
import SelectDate from "../UI/Select";
import "./SearchPanel.sass";

const SearchPanel = ({ notesList, onUpdateSearch, onChangeHandler }) => {
  return (
    <div className="search-panel">
      <SelectDate notesList={notesList} onChangeHandler={onChangeHandler} />
      <Search onUpdateSearch={onUpdateSearch} />
    </div>
  );
};

SearchPanel.propTypes = {
  notesList: PropTypes.arrayOf(PropTypes.object),
  onUpdateSearch: PropTypes.func,
  onChangeHandler: PropTypes.func,
};

SearchPanel.defaultProps = {
  notesList: [],
  onUpdateSearch: () => {},
  onChangeHandler: () => {},
};

export default SearchPanel;
