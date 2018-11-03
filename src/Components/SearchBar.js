import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    };
  }

  handleSearchInputKeyPress = (event) => {
    this.setState({
      searchString: event.target.value
    });
  }

  handleSearchButtonClicked = (event) => {
    event.preventDefault();
    this.props.handleFilter(this.state.searchString);
  }

  render() {
    return (
      <div className="input-search-container">
        <nav className="navigation-component">
          <form onSubmit={this.handleSearchButtonClicked} className="form-inline">
            <div className="search-input-box mb-2">
              <input
                name="Issue"
                type="text"
                className="form-control"
                placeholder="Enter event here"
                value={this.state.searchString}
                onChange={this.handleSearchInputKeyPress}/>
            </div>
            <div className="search-button">
             <input
               type="submit"
               value="Search"
               className="btn btn-outline-dark col-sm form-group mb-2"/>
            </div>
          </form>
        </nav>
      </div>
    );
  }
}
