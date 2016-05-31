import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendJoke } from '../actions/index';


class PhoneInputGroup extends Component {
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
    this.props.sendJoke(this.state.phone);
    this.setState({ phone: '' });
  }

  render() {
    return (
      <div id="phone-div" className="col-md-9 col-md-offset-2">
        <div className="h3 phone-label-mobile">Enter a phone number</div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <MaskedInput
            id="phone-input"
            name="phone"
            mask="(111)111-1111"
            placeholder="(123) 456-7890"
            placeholderChar=" "
            className="form-control"
            value={this.state.phone}
            onChange={this.onInputChange}
            type="tel"
            required
          />
          <span className="desktop input-group-btn">
            <input type="submit" id="send-joke-btn" className="btn btn-secondary" value="Send dadjoke" />
          </span>
          <span className="mobile input-group-btn">
            <input type="submit" id="send-joke-btn-mobile" className="btn btn-secondary mobilebutton" value="Send" />
          </span>          
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendJoke }, dispatch);
}

export default connect(null, mapDispatchToProps)(PhoneInputGroup);
