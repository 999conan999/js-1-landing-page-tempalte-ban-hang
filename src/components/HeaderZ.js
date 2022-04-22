import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { get_icon } from '../lib/fs';
export default class HeaderZ extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
              <div className='cfir'>
                    Chào mừng bạn đến với Nội Thất An Bình
              </div>
              <div className='container'>
                  <div className='row'>
                      <div className='col-2 col-sm-2'>
                            <span className='menuz'>
                                {get_icon('menu','32px')}
                            </span>
                      </div>
                      <div className='col-8 col-sm-8 centerz'>
                            <img src='https://anbinhnew.com/wp-content/themes/flatsome-child/assets/img/anbinhnew.png' width={'200px'}/>
                      </div>
                      <div className='col-2 col-sm-2'>
                            <span className='menuz'>
                                {get_icon('cart','35px')}
                            </span>
                      </div>
                  </div>
              </div>
              <div className='bottom-header'>
              </div>
      </React.Fragment>
    );
  }
}

