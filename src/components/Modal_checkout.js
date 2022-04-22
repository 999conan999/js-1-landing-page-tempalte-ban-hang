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
      <React.Fragment>
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
                  <div className='row'>
                      <div className='wapz'>
                        <div className='popup-customer-info-title'>Thông tin người mua</div>
                        <div className='wapzz'>
                          <div class="popup-customer-info-group"> 
                            <div class="popup-customer-info-item-2"> 
                              <input id="ten" type="text" class="inp" placeholder="Họ và tên(bắt buộc)"/> 
                            </div> 
                            <div class="popup-customer-info-item-2"> 
                              <input id="sdt" type="tel" class="inp" placeholder="Số điện thoại(bắt buộc)"/> 
                            </div> 
                          </div>
                        </div>
                        <div className='wapzz'>
                          <div class="popup-customer-info-group"> 
                            <div class="popup-customer-info-item-1"> 
                              <textarea id="dia_chi" class="inp" placeholder="Địa chỉ(bắt buộc)" style={{ height: '72px', minHeight: 'inherit'}}></textarea> 
                              </div>
                          </div>
                        </div>
                        <div className='wapzz'>
                          <div class="popup-customer-info-group"> 
                            <div class="popup-customer-info-item-1"> 
                              <textarea id="dia_chi" class="inp" placeholder="Ghi chú đơn hàng" style={{ height: '72px', minHeight: 'inherit'}}></textarea> 
                              </div>
                          </div>
                        </div>
                        <div className='wapzz'>
                          <div class="popup-customer-info-group"> 
                            <div class="popup-customer-info-item-1"> 
                              <button  type="button" class="devvn-order-btn">Đặt hàng ngay</button>
                            </div>
                          </div>
                        </div>
                      {/*  */}
                      {/*  */}
                      </div>
                  </div>
                </div>
              </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

