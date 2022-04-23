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
      selected_attributes:{
        img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-gia-re-mau-xanh.jpg",
        product_attributes:'Giường sắt màu xanh dương'
      },
      quantity:1,
      data_modal_selected:{
          value_selected:{
              title:'1mx2m',
              price:1250000
          },
          sp:{
          title:'Giường x sắt giá rẻ 8 tấc, 80cm, 1m, 1m2, 1m4, 1m6 1m8 x dài 2m',
          danh_gia:4.5,
          hinh_anh:[
            {
                  img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-gia-re-mau-xanh.jpg",
                  id:"GA01",
                  price_from:1300000,
                  price_to:0,
                  message:'',
                  product_attributes:'Giường sắt màu xanh dương'
            },
            {
                img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/Giuong-sat-hop-cao-cap-don-gian.jpg",
                id:"GB01",
                price_from:0,
                price_to:0,
                message:'Giá tùy theo kích thước',
                product_attributes:'Giường sắt màu hồng'
            },
            {
                img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-hoang-gia-hcm-noi-that-an-binh-1-720x720.jpg",
                id:"HG01",
                price_from:0,
                price_to:3500000,
                message:'Miễn phí vận chuyển',
                product_attributes:'Giường sắt màu trắng-xanh dương'
            },
            {
                img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/Giuong-sat-don-1m2-mau-ngang-2.jpg",
                id:"GC01",
                price_from:2300000,
                price_to:3500000,
                message:'Giá tùy theo kích thước',
                product_attributes:'Giường sắt màu nâu'
            },
          ],
          thong_tin_sp:[
            {
              title:'xxxGiá Giường sắt giá rẻ',
              des:'+x Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).'
            },
            {
              title:'xChất liệu',
              des:'+xcx Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).'
            },
            {
              title:'Kích thước hỗ trợ',
              des:'🔔🔔🔔 + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).'
            },
          ],
          bang_gia_sp:[
            {
              title:'1mx2m',
              price:1250000
            },
            {
              title:'1m2x2m',
              price:1350000
            },
            {
              title:'1m4x2m',
              price:1450000
            },
            {
              title:'1m6x2m',
              price:1550000
            },
          ],
          thanh_toan:[
            '🔔🔔🔔 + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).',
            '🔔🔔🔔 + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).',
            '🔔🔔🔔 + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).',
          ]
        }
      },
    }
  }
  render() {
    let {data_modal_selected,selected_attributes,quantity}=this.state
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
                  <span className='titlez'>{data_modal_selected.sp.title}</span>
                  <span className='devvn-popup-close'>X</span>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-12 col-lg-6'>
                  <div className='row'>
                    <div className='col-4'>
                      <div className='war'>
                        <img src={selected_attributes.img_url} class="img-thumbnail"/>
                        <div>
                          <p ><span style={{padding:"3px",fontSize: '13px'}}>Giá :</span><span className='prz'>{data_modal_selected.value_selected.price.format(0, 3, '.', ',')} đ</span></p>
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
                           {
                             data_modal_selected.sp.bang_gia_sp.map((item,i)=>{

                               return <button className={`btnz  ${item.title==data_modal_selected.value_selected.title?'z-active':''}`} key={i}
                                onClick={()=>{
                                  let {data_modal_selected}=this.state;
                                  data_modal_selected.value_selected=item
                                    this.setState({data_modal_selected:data_modal_selected})
                                }}
                               > 
                                        {item.title}
                                        <img className='selected-indicator ' src={iconz}/>
                                      </button>
                             })
                           }
                         </div>
                       </div>
                       <div className='wabz'>
                         <p>*Lựa chọn mẫu và màu sắc: </p>
                         <div>
                         {
                             data_modal_selected.sp.hinh_anh.map((item,i)=>{

                               return <button className={`btnz ${selected_attributes.product_attributes==item.product_attributes?"z-active":""}`} key={i}
                                onClick={()=>{
                                  let {selected_attributes}=this.state;
                                  selected_attributes={
                                    img_url:item.img_url,
                                    product_attributes:item.product_attributes
                                  }
                                    this.setState({selected_attributes:selected_attributes})
                                }}
                               > 
                                        {item.product_attributes}
                                        <img className='selected-indicator ' src={iconz}/>
                                      </button>
                             })
                           }
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

