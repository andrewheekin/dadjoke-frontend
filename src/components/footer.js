import React from 'react';

export default () => {
  return (
    <div>
      <div className="row footer">
        <div className="col-md-4 footer-link"><a href="https://en.wikipedia.org/wiki/Dad_joke" className="h4">About</a></div>
        <div className="col-md-4 footer-link"><a href="mailto:andrewheekin@gmail.com?subject=New dadjoke&body=Here's a new dadjoke:" className="h4">Submit joke</a></div>
        <div className="col-md-4 footer-link"><a href="https://github.com/andrewheekin/dadjoke" className="h4">Github</a></div>
      </div>
    </div>
  );
}