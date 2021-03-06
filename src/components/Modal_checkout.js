import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import {validate_phone} from '../lib/fs'
import {_order,_telegram} from './axios'
const iconz=<svg  className='selected-indicator '  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
<g fill="none" fill-rule="evenodd">
  <g>
    <g>
      <g>
        <g>
          <g>
            <g>
              <g>
                <path fill="#0D5CB6" d="M0 0h16c2.21 0 4 1.79 4 4v16L0 0z" transform="translate(-804 -366) translate(180 144) translate(484 114) translate(16 80) translate(0 28) translate(124)" />
                <g fill="#FFF">
                  <path d="M4.654 7.571L8.88 3.176c.22-.228.582-.235.81-.016.229.22.236.582.017.81L5.04 8.825c-.108.113-.258.176-.413.176-.176 0-.33-.076-.438-.203L2.136 6.37c-.205-.241-.175-.603.067-.808.242-.204.603-.174.808.068L4.654 7.57z" transform="translate(-804 -366) translate(180 144) translate(484 114) translate(16 80) translate(0 28) translate(124) translate(7.5)" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>
</g>
</svg>

export default class Modal_checkout extends Component {
  constructor (props) {
    super(props)
    // this.myRef1 = React.createRef();
    // this.myRef2 = React.createRef();
    // this.myRef3 = React.createRef();
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
  action_dat_hang=async()=>{
    let {data_info,data_modal_selected,selected_attributes,quantity}=this.state;
    let list=[true,true,true,true];
    let message=[];
    let status =true;
    if(data_info.name==""||data_info.name==" "||data_info.name.length<2) {
      list[0]=false;
      message.push(<span className='ms-z'>*H??? V?? T??N b???n kh??ng ???????c ????? tr???ng.</span>);
      status=false;
    }
    if(data_info.phone==""||!validate_phone(data_info.phone)) {
      list[1]=false;
      message.push(<span className='ms-z'>*S??? ??I???N THO???I kh??ng ch??nh x??c.</span>);
      status=false;
    }
    if(data_info.address==""||data_info.address.length<8) {
      list[2]=false;
      message.push(<span className='ms-z'>*?????A CH??? b???n c???n ??i???n th??m th??ng tin ????? ch??ng t??i giao h??ng d??? h??n </span>);
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
      let data={
        sp:{
          name:data_modal_selected.sp.title,
          attributes_kt:data_modal_selected.value_selected.title,
          price:data_modal_selected.value_selected.price,
          attributes_ms:selected_attributes.product_attributes,
          url_img:selected_attributes.img_url,
          quantity:quantity,
          z_note:data_info.note,
          url_sp:window.location.href,
          // ma_sp:
        },
        user:{
          z_name:data_info.name,
          z_phone:data_info.phone,
          z_address:data_info.address,
        }
      }
      this.props.action_step_1_to_server()
      // senddata to sercer here
      let a=await _order(data);
      if(a){
        _telegram(data);
        this.props.action_step_2_to_server(data);
      }else{
        alert("?????t h??ng kh??ng th??nh c??ng!")
      }
    //  await setTimeout(()=>{
    //     this.props.action_step_2_to_server(data)
    //     console.log("???? ~ file: Modal_checkout.js ~ line 111 ~ Modal_checkout ~ awaitsetTimeout ~ data", data)
    //   },3000)      
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
                  <span className='dong' onClick={()=>this.props.handleClose()}>????ng</span>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-12 col-lg-6'>
                  <div className='row'>
                    <div className='col-4'>
                      <div className='war'>
                        <img src={selected_attributes.img_url} className="img-thumbnail"/>
                        <div>
                          <p ><span style={{padding:"3px",fontSize: '13px'}}>Gi?? :</span><span className='prz'>{Number(data_modal_selected.value_selected.price).format(0, 3, '.', ',')} ??</span></p>
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
                         <p>*L???a ch???n m???u v?? m??u s???c: </p>
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
                                            {iconz}
                                          </button>
                                }
                             })
                           }
                         </div>
                       </div>
                       <div className='wabz'>
                         <p>*L???a ch???n k??ch th?????c: </p>
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
                                        {iconz}
                                      </button>
                             })
                           }
                         </div>
                       </div>

                    </div>
                    <div style={{margin:'15px 0px 10px 9px'}}>
                      <span>T???ng c???ng:</span> <span style={{fontWeight:'600',color:'#d50000'}} >{(Number(quantity)*Number(data_modal_selected.value_selected.price)).format(0, 3, '.', ',')} ??</span>
                    </div>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-lg-6'>
                  <div className='row'>
                      <div className='wapz'>
                        <div className='popup-customer-info-title'>Th??ng tin ng?????i mua</div>
                        <div className='wapzz'>
                          <div className="popup-customer-info-group"> 
                            <div className="popup-customer-info-item-2"> 
                              <input type="text" className={`inp ${validate_list.list[0]?'':'wr'}`} placeholder="H??? v?? t??n(b???t bu???c)"
                                // ref={this.myRef1}
                                // onFocus={()=>this.myRef1.current.scrollIntoView()}
                                value={data_info.name}
                                onChange={(e)=>{
                                  data_info.name=e.target.value;
                                  this.setState({data_info:data_info})
                                }}
                              /> 
                            </div> 
                            <div className="popup-customer-info-item-2"> 
                              <input type="number"  className={`inp ${validate_list.list[1]?'':'wr'}`} placeholder="S??? ??i???n tho???i(b???t bu???c)"
                                // onFocus={()=>this.myRef1.current.scrollIntoView()}
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
                               placeholder="?????a ch???"
                                style={{ height: '72px', minHeight: 'inherit'}}
                                // ref={this.myRef2}
                                // onFocus={()=>this.myRef2.current.scrollIntoView()}
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
                              <textarea className="inp" placeholder="Ghi ch?? ????n h??ng" style={{ height: '72px', minHeight: 'inherit'}}
                                // ref={this.myRef3}
                                // onFocus={()=>this.myRef3.current.scrollIntoView()}
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
                              >?????t h??ng ngay</button>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>
          {/* <div className='viewz'></div> */}
        </Modal>
      </React.Fragment>
    );
  }
}

