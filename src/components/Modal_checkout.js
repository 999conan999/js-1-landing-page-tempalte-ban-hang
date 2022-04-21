import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import {get_icon} from '../lib/fs'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import iconz  from './iconz.svg'
export default class Modal_checkout extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment> xxx
        <Modal
          show={this.props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className='wrapz'
        >
          <div className=''>
              <div className='header-modalz'>
                  <span className='titlez'>Tủ sắt có gương 2 cánh giá rẻ [sơn dầu]</span>
                  <span className='devvn-popup-close'>X</span>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-12 col-lg-6'>
                  <div className='row'>
                    <div className='col-4'>
                      <div className='war'>
                        <img src="https://anbinhnew.com/wp-content/uploads/2021/01/Ban-hoc-doi-bang-nhua-cho-be-trai-va-gai-1.jpg" class="img-thumbnail"/>
                        <div>
                          <p ><span style={{padding:"3px",fontSize: '13px'}}>Giá :</span><span className='prz'>1.650.000 đ</span></p>
                        </div>
                        <div class="devvn_prod_variable"> 
                          <div class="quantity" > 
                          <span class="syx">-</span>
                          <span id="quantity-one" style={{fontSize: '14px', padding: '1px 5px'}}>1</span> <span class="syx" >+</span> </div> 
                        </div>
                      </div>

                    </div>
                    <div className='col-8'>
                       <div className='wabz'>
                         <p>*Lựa chọn kích thước: </p>
                         <div>
                           <button className='btnz'> 
                              1mx2m
                              <img className='selected-indicator' src={iconz}/>
                           </button>
                           <button className='btnz'> 
                              1m2x2m
                              <img className='selected-indicator' src={iconz}/>
                           </button>
                           <button className='btnz'> 
                              1m4x2m
                              <img className='selected-indicator' src={iconz}/>
                           </button>
                           <button className='btnz'> 
                              1m6x2m
                              <img className='selected-indicator' src={iconz}/>
                           </button>
                           <button className='btnz'> 
                              1m8x2m
                              <img className='selected-indicator' src={iconz}/>
                           </button>
                           <button className='btnz'> 
                              80cmx2m
                              <img className='selected-indicator' src={iconz}/>
                           </button>
                           <button className='btnz'> 
                              80cmx2m
                              <img className='selected-indicator' src={iconz}/>
                           </button>
                         </div>
                       </div>
                       <div className='wabz'>
                         <p>*Lựa chọn mẫu và màu sắc: </p>
                         <div>
                           <button className='btnz'> 
                              Màu vàng
                              <img className='selected-indicator' src={iconz}/>
                           </button>
                           <button className='btnz'> 
                              màu trắng xanh
                              <img className='selected-indicator' src={iconz}/>
                           </button>
                           <button className='btnz'> 
                              Màu gỗ đậm
                              <img className='selected-indicator' src={iconz}/>
                           </button>
                           <button className='btnz'> 
                             Màu Gỗ nhạt
                              <img className='selected-indicator' src={iconz}/>
                           </button>
                           <button className='btnz'> 
                              Màu kem
                              <img className='selected-indicator' src={iconz}/>
                           </button>
            
                         </div>
                       </div>
                    </div>
                    <div style={{margin:'15px 0px 10px 9px'}}>
                      <span>Tổng cộng:</span> <span style={{fontWeight:'600',color:'#d50000'}} >1.650.000 đ</span>
                    </div>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-lg-6'>
                  yyyyyy
                </div>
              </div>
          </div>



          {/* <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Đặt hàng
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
              <img src="https://anbinhnew.com/wp-content/uploads/2021/01/Ban-hoc-doi-bang-nhua-cho-be-trai-va-gai-1.jpg" class="img-thumbnail"/>
            </div>
          </div>
          <Form className='card p-2 '>
            <Form.Text className="text-muted">
            </Form.Text>
            <div className='row'>
              <div className='col-xs-12 col-sm-12 col-md-4 col-lg-6'>
                <Form.Group className="mb-3">
                  <Form.Label>Họ và tên:</Form.Label>
                  <Form.Control type="text" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
                </div>
              <div className='col-xs-12 col-sm-12 col-md-4 col-lg-6'>
                <Form.Group className="mb-3">
                  <Form.Label >Số điện thoại:</Form.Label>
                  <Form.Control type="number"   />
                  <Form.Text className="text-muted" >
                  </Form.Text>
                </Form.Group>
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Địa chỉ:</Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label >Lời nhắn:</Form.Label>
                <Form.Control as="textarea" rows={3} />
                <Form.Text className="text-muted" >
                </Form.Text>
              </Form.Group>
            </div>

          </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer> */}
        </Modal>
      </React.Fragment>
    );
  }
}

