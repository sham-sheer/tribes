import React from 'react';


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchString: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleFilter(this.state.searchString);
  }

  render() {
    return (
      <div>
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
          <form onSubmit={this.handleSubmit} className="form-inline">
           <div className="form-group mb-2">
              <input
                name="Issue"
                type="text"
                className="form-control"
                placeholder="Search Events here"
                value={this.state.searchString}
                onChange={this.handleChange} />
            </div>
           <div>
           <input
             type="submit"
             value="Search"
             className="btn btn-outline-dark col-sm form-group mb-2" />
            </div>
        </form>
          </div>
        </div>
      </nav>

    </div>
    );
  }
}
