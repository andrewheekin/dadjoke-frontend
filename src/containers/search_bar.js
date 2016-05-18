import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendJoke } from '../actions/index';
import { testPost } from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { phone: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ phone: event.target.value });
  }

  onFormSubmit(event) {
    // prevents form submission by clicking submit or enter
    event.preventDefault();

    // send joke to phone
    this.props.testPost(this.state.phone);
    this.setState({ phone: '' });
  }

  render() {
    return (
      <div>
        <h5>Enter a phone number</h5>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <MaskedInput
            name="phone"
            mask="(111) 111-1111"
            placeholder="(123) 456-7890"
            className="form-control"
            value={this.state.phone}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Send dadjoke</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ testPost }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
