import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
export default class Modal_status extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
        <Modal
          show={this.props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={()=>this.props.onHide()}
        >
           <Toast show={true} className="toastz p-3" >
                <Toast.Header 
                  style={{color:'#28a745'}}
                  onClick={()=>this.props.onHide()}
                >
                      
                      <strong className="me-auto">
                      ✔️ Đặt hàng thành công!
                      </strong>
                      {/* <small>11 mins ago</small> */}
                </Toast.Header>
                <Toast.Body>
                  👉 Chúng tôi sẽ liên hệ lại bạn ngay, để hẹn lịch giao hàng.
                </Toast.Body>
            </Toast>
        </Modal>
      </React.Fragment>
    );
  }
}

