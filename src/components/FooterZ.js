import React, { Component } from 'react';
import { get_icon } from '../lib/fs';
export default class FooterZ extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
              <div className='cfir' style={{marginTop:'100px'}}>
                  Design by anbinhnew.com
              </div>
      </React.Fragment>
    );
  }
}

