import React, { Component } from 'react'
import './spinner.css';

export default class Spinner extends Component {
  render() {
    return (
        <div class="text-center spinner-border" role="status">
        {/* <span class="sr-only">Loading...</span> */}
      </div>
        )
  }
}
