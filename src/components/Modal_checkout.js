import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import {validate_phone} from '../lib/fs'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import iconz  from './iconz.svg';

export default class Modal_checkout extends Component {
  constructor (props) {
    super(props)
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
    this.myRef3 = React.createRef();
    this.state = {
      validate_list:{
        list:[true,true,true,true],
        message:''
      },
      data_info:{
        name:'',
        phone:'',
        address:'',
        note:''
      },
      selected_attributes:{
        img_url:"",
        product_attributes:''
      },
      quantity:1,
      data_modal_selected:{
          value_selected:{
              title:'',
              price:0
          },
          sp:{
          title:'',
          danh_gia:5,
          hinh_anh:[],
          thong_tin_sp:[],
          bang_gia_sp:[],
          thanh_toan:[]
        }
      },
    }
  }
  //
  async componentWillReceiveProps(nextProps){
    if(nextProps.p!==this.props.p){
      let data_modal_selected=nextProps.data_modal_selected;
      let selected_attributes={
        img_url:data_modal_selected.sp.hinh_anh[0]!=undefined?data_modal_selected.sp.hinh_anh[0].img_url:'',
        product_attributes:data_modal_selected.sp.hinh_anh[0]!=undefined?data_modal_selected.sp.hinh_anh[0].product_attributes:''
      };
      this.setState({
        selected_attributes:selected_attributes,
        data_modal_selected:data_modal_selected
      })
    }
  }
  // dat hang
  action_dat_hang=()=>{
    let {data_info}=this.state;
    let list=[true,true,true,true];
    let message=[];
    let status =true;
    if(data_info.name==""||data_info.name==" "||data_info.name.length<2) {
      list[0]=false;
      message.push(<span className='ms-z'>*HỌ VÀ TÊN bạn không được để trống.</span>);
      status=false;
    }
    if(data_info.phone==""||!validate_phone(data_info.phone)) {
      list[1]=false;
      message.push(<span className='ms-z'>*SỐ ĐIỆN THOẠI không chính xác.</span>);
      status=false;
    }
    if(data_info.address==""||data_info.address.length<8) {
      list[2]=false;
      message.push(<span className='ms-z'>*ĐỊA CHỈ bạn cần điền thêm thông tin để chúng tôi giao hàng dễ hơn </span>);
      status=false;
    }
    if(!status){
      this.setState({
        validate_list:{
          list:list,
          message:message
        }
      })
    }else{
      // gui data here
    }
  }
  // 
  render() {
    let {data_modal_selected,selected_attributes,quantity,data_info,validate_list}=this.state
    let check="";
    
    return (
      <React.Fragment>
        <Modal
          show={this.props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className='wrapz'
          onHide={()=>this.props.handleClose()}
        >
          <div className=''>
              <div className='header-modalz'>
                  <span className='titlez'>{data_modal_selected.sp.title}</span>
                  <span className='devvn-popup-close' onClick={()=>this.props.handleClose()}>X</span>
                  <span className='dong' onClick={()=>this.props.handleClose()}>Đóng</span>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-12 col-lg-6'>
                  <div className='row'>
                    <div className='col-4'>
                      <div className='war'>
                        <img src={selected_attributes.img_url} className="img-thumbnail"/>
                        <div>
                          <p ><span style={{padding:"3px",fontSize: '13px'}}>Giá :</span><span className='prz'>{data_modal_selected.value_selected.price.format(0, 3, '.', ',')} đ</span></p>
                        </div>
                        <div className="devvn_prod_variable"> 
                          <div className="quantity" > 
                          <span className="syx"
                            onClick={()=>this.setState({quantity:quantity-1>1?quantity-1:1})}
                          >-</span>
                          <span id="quantity-one" style={{fontSize: '14px', padding: '1px 5px'}}>{quantity}</span> <span className="syx" 
                            onClick={()=>this.setState({quantity:quantity+1})}
                          >+</span> </div> 
                        </div>
                      </div>

                    </div>
                    <div className='col-8'>
                      <div className='wabz'>
                         <p>*Lựa chọn mẫu và màu sắc: </p>
                         <div>
                         {
                             data_modal_selected.sp.hinh_anh.map((item,i)=>{
                                if(check.search(item.id+',')<0){
                                  check+=item.id+',';
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
                                }
                             })
                           }
                         </div>
                       </div>
                       <div className='wabz'>
                         <p>*Lựa chọn kích thước: </p>
                         <div>
                           {
                             data_modal_selected.sp.bang_gia_sp.map((item,i)=>{

                               return <button className={`btnz  ${item.title==data_modal_selected.value_selected.title?'z-active':''}`} key={i}
                                onClick={()=>{
                                  let {data_modal_selected}=this.state;
                                  data_modal_selected.value_selected=item
                                    this.setState({data_modal_selected:data_modal_selected,quantity:1})
                                }}
                               > 
                                        {item.title}
                                        <img className='selected-indicator ' src={iconz}/>
                                      </button>
                             })
                           }
                         </div>
                       </div>

                    </div>
                    <div style={{margin:'15px 0px 10px 9px'}}>
                      <span>Tổng cộng:</span> <span style={{fontWeight:'600',color:'#d50000'}} >{(quantity*data_modal_selected.value_selected.price).format(0, 3, '.', ',')} đ</span>
                    </div>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-lg-6'>
                  <div className='row'>
                      <div className='wapz'>
                        <div className='popup-customer-info-title'>Thông tin người mua</div>
                        <div className='wapzz'>
                          <div className="popup-customer-info-group"> 
                            <div className="popup-customer-info-item-2"> 
                              <input type="text" className={`inp ${validate_list.list[0]?'':'wr'}`} placeholder="Họ và tên(bắt buộc)"
                                ref={this.myRef1}
                                onFocus={()=>this.myRef1.current.scrollIntoView()}
                                value={data_info.name}
                                onChange={(e)=>{
                                  data_info.name=e.target.value;
                                  this.setState({data_info:data_info})
                                }}
                              /> 
                            </div> 
                            <div className="popup-customer-info-item-2"> 
                              <input type="number"  className={`inp ${validate_list.list[1]?'':'wr'}`} placeholder="Số điện thoại(bắt buộc)"
                                onFocus={()=>this.myRef1.current.scrollIntoView()}
                                value={data_info.phone}
                                onChange={(e)=>{
                                  data_info.phone=e.target.value;
                                  this.setState({data_info:data_info})
                                }}
                              /> 
                            </div> 
                          </div>
                        </div>
                        <div className='wapzz'>
                          <div className="popup-customer-info-group"> 
                            <div className="popup-customer-info-item-1"> 
                              <textarea  className={`inp ${validate_list.list[2]?'':'wr'}`} 
                               placeholder="Địa chỉ"
                                style={{ height: '72px', minHeight: 'inherit'}}
                                ref={this.myRef2}
                                onFocus={()=>this.myRef2.current.scrollIntoView()}
                                value={data_info.address}
                                onChange={(e)=>{
                                  data_info.address=e.target.value;
                                  this.setState({data_info:data_info})
                                }}
                                
                              ></textarea> 
                              </div>
                          </div>
                        </div>
                        <div className='wapzz'>
                          <div className="popup-customer-info-group"> 
                            <div className="popup-customer-info-item-1"> 
                              <textarea className="inp" placeholder="Ghi chú đơn hàng" style={{ height: '72px', minHeight: 'inherit'}}
                                ref={this.myRef3}
                                onFocus={()=>this.myRef3.current.scrollIntoView()}
                                value={data_info.note}
                                onChange={(e)=>{
                                  data_info.note=e.target.value;
                                  this.setState({data_info:data_info})
                                }}
                              ></textarea> 
                              </div>
                          </div>
                        </div>
                        <div className='wapzz'>
                          {validate_list.message}
                        </div>
                        <div className='wapzz'>
                          <div className="popup-customer-info-group"> 
                            <div className="popup-customer-info-item-1"> 
                              <button  type="button" className="devvn-order-btn"
                                onClick={()=>this.action_dat_hang()}
                              >Đặt hàng ngay</button>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>
          <div className='viewz'></div>
        </Modal>
      </React.Fragment>
    );
  }
}

