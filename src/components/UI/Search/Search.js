import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Search.sass";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.onUpdateSearchInput = this.onUpdateSearchInput.bind(this);
  }

  onUpdateSearchInput(e) {
    const termVal = e.target.value;
    const { onUpdateSearch } = this.props;
    this.setState((state) => {
      return {
        term: state.term + termVal,
      };
    });
    onUpdateSearch(termVal);
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          className="search_input"
          placeholder="Поиск по записям"
          onChange={this.onUpdateSearchInput}
        />
        <button type="button" className="search_button">
          <i className="fas fa-search" />
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  onUpdateSearch: PropTypes.func,
};

Search.defaultProps = {
  onUpdateSearch: () => {},
};

export default Search;
