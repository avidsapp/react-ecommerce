import React from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
  constructor() {
    super()

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasErrored: true
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if(this.state.hasErrored) {
      return (
        <div className='error-image-overlay'>
          <img className='error-image-container' src='https://i.imgur.com/O0DCcQy.png' />
          <h3 className='error-text'>Sorry, this page is broken</h3>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
