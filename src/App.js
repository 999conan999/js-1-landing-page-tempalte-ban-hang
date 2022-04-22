import React, { Component } from 'react';
import {get_star,get_icon,get_random_css} from './lib/fs';
import Sliderz from './components/slider';
import Accordion from 'react-bootstrap/Accordion';
import Modal_checkout from './components/Modal_checkout';
import Modal_status from './components/Modal_status';
import HeaderZ from './components/HeaderZ';
import FooterZ from './components/FooterZ';
import facebook from './lib/facebook.png'
import zalo from './lib/zalo.png'
import call from './lib/call.png'
import map from './lib/map.png'
const items=[
     {
       img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-gia-re-mau-xanh.jpg",
       title:{
         id:"GA01",
         price_from:1300000,
         price_to:0,
         message:'',
         product_attributes:'Giường sắt màu xanh dương'
       },
     },
     {
       img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/Giuong-sat-hop-cao-cap-don-gian.jpg",
       title:{
         id:"GB01",
         price_from:0,
         price_to:0,
         message:'Giá tùy theo kích thước',
         product_attributes:'Giường sắt màu hồng'
       },
     },
     {
       img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-hoang-gia-hcm-noi-that-an-binh-1-720x720.jpg",
       title:{
         id:"HG01",
         price_from:0,
         price_to:3500000,
         message:'Miễn phí vận chuyển',
         product_attributes:'Giường sắt màu trắng-xanh dương'
       },
     },
     {
       img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/Giuong-sat-don-1m2-mau-ngang-2.jpg",
       title:{
         id:"GC01",
         price_from:2300000,
         price_to:3500000,
         message:'Giá tùy theo kích thước',
         product_attributes:'Giường sắt màu nâu'
       },
     },
   ];
Number.prototype.format = function(n, x, s, c) {
var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
     num = this.toFixed(Math.max(0, ~~n));

return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};
 
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
         show_checkout:false,
         show_modal_status:false
    }
  }
  render() {
          let {show_checkout,show_modal_status}=this.state;
    return (
      <React.Fragment>
               <HeaderZ/>
               <div className='row mg-0'>
                    <div className='col-12 col-xl-12 col-xxl-1'></div>
                    <div className='col-12 col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-7'>
                         <div className='row'>
                              <div className='col-12 col-sm-6 col-md-12 col-lg-6'>
                                   <div className='wrap-card card-1' style={{backgroundColor: 'rgb(151 199 237)'}}>
                                        <div className="tieu-de">
                                             <h2 className='title-1'>
                                                  Giường sắt giá rẻ 8 tấc, 80cm, 1m, 1m2, 1m4, 1m6 1m8 x dài 2m 
                                             </h2>
                                        </div>
                                        <div className="danh-gia">
                                             <span>Đánh giá  :</span>
                                             {get_star(2.5)}
                                             <span className={`ribbon ${get_random_css()}`}>Mẫu số 1</span>
                                        </div>
                                        <Sliderz items={items}/>
                                        <div className='xem-sp'>
                                             <p className='wrz'>
                                                  <a className="button1" href='tel:0963226771' target="_blank">
                                                       <span className='zalo'>
                                                       {/* {get_icon('phone','25px')} */}
                                                       Chat Zalo
                                                       </span>
                                                  </a>
                                             </p>
                                             <p className='wrz'>
                                                  <a className="button1" href='tel:0963226771' target="_blank">
                                                       <span>
                                                       {/* {get_icon('phone','25px')} */}
                                                       Gọi điện
                                                       </span>
                                                  </a>
                                             </p>
                                        </div>
                                        <Accordion >
                                             <Accordion.Item eventKey="0">
                                                  <Accordion.Header> <a>* Thông tin sản phẩm</a></Accordion.Header>
                                                  <Accordion.Body>
                                                       <div className='table-x'>
                                                            <table className='table-z1' border='1'>
                                                                 <tbody>
                                                                      <tr className='tr-z1'>
                                                                           <td className='td-z1 f-2'>
                                                                           <strong> Giá Giường sắt giá rẻ</strong>
                                                                           </td>
                                                                           <td className='td-z2 f-8'>
                                                                           + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).
                                                                           </td>
                                                                      </tr>
                                                                      <tr className='tr-z1'>
                                                                           <td className='td-z1 f-2'>
                                                                           <strong> Chất liệu</strong>
                                                                           </td>
                                                                           <td className='td-z2 f-8'>
                                                                           + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).
                                                                           </td>
                                                                      </tr>
                                                                      <tr className='tr-z1'>
                                                                           <td className='td-z1 f-2'>
                                                                           <strong> Kích thước hỗ trợ</strong>
                                                                           </td>
                                                                           <td className='td-z2 f-8'>
                                                                           🔔🔔🔔 + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).
                                                                           </td>
                                                                      </tr>
                                                                 </tbody>
                                                            </table>
                                                       </div>
                                                  </Accordion.Body>
                                             </Accordion.Item>
                                             <Accordion.Item eventKey="1">
                                                  <Accordion.Header><a>* Bảng giá sản phẩm</a></Accordion.Header>
                                                  <Accordion.Body>
                                                       <div className='table-x'>
                                                            <table className='table-z1' border='1'>
                                                                 <tbody>
                                                                      <tr className='tr-z1'>
                                                                           <td className='td-z1 f-2'>
                                                                           <strong> Giá</strong>
                                                                           </td>
                                                                           <td className='td-z2 f-7'>
                                                                           + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).
                                                                           </td>
                                                                           <td className='td-z2 f-1'>
                                                                           <button className="btn btn-danger" onClick={()=>this.setState({show_checkout:true})}>Mua</button>
                                                                           </td>
                                                                      </tr>
                                                                      <tr className='tr-z1'>
                                                                           <td className='td-z1 f-2'>
                                                                           <strong> Chất liệu</strong>
                                                                           </td>
                                                                           <td className='td-z2 f-7'>
                                                                           + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).
                                                                           </td>
                                                                           <td className='td-z2 f-1'>
                                                                           <button  className="btn btn-danger" onClick={()=>this.setState({show_modal_status:true})}>Mua</button>
                                                                           </td>
                                                                      </tr>
                                                                      <tr className='tr-z1'>
                                                                           <td className='td-z1 f-2'>
                                                                           <strong> Kích thước hỗ trợ</strong>
                                                                           </td>
                                                                           <td className='td-z2 f-7'>
                                                                           🔔🔔🔔 + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).
                                                                           </td>
                                                                           <td className='td-z2 f-1'>
                                                                           <button className="btn btn-danger">Mua</button>
                                                                           </td>
                                                                      </tr>
                                                                 </tbody>
                                                            </table>
                                                       </div>
                                                  </Accordion.Body>
                                             </Accordion.Item>
                                             <Accordion.Item eventKey="2">
                                                  <Accordion.Header><a>* Thanh toán</a></Accordion.Header>
                                                  <Accordion.Body>
                                                       <p>🔔🔔🔔 + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).</p>
                                                       <div>
                                                            <span className='thong-tin'>Thông tin về chúng tôi 👉 <a href="#thong-tin">Nội thất An bình</a></span>
                                                       </div>
                                                  </Accordion.Body>
                                             </Accordion.Item>
                                        </Accordion>
                                   </div>
                              </div>
                              <div className='col-12 col-sm-6 col-md-12 col-lg-6'>
                              <div className='wrap-card card-1' style={{backgroundColor: '#1598496b'}}>
                                        <div className="tieu-de">
                                             <h2 className='title-1'>
                                                  Giường sắt giá rẻ 8 tấc, 80cm, 1m, 1m2, 1m4, 1m6 1m8 x dài 2m 
                                             </h2>
                                        </div>
                                        <div className="danh-gia">
                                             <span>Đánh giá  :</span>
                                             {get_star(2.5)}
                                             <span className={`ribbon ${get_random_css()}`}>Mẫu số 1</span>
                                        </div>
                                        <Sliderz items={items}/>
                                        <div className='xem-sp'>
                                             <p className='wrz'>
                                                  <a className="button1" href='tel:0963226771' target="_blank">
                                                       <span className='zalo'>
                                                       {/* {get_icon('phone','25px')} */}
                                                       Chat Zalo
                                                       </span>
                                                  </a>
                                             </p>
                                             <p className='wrz'>
                                                  <a className="button1" href='tel:0963226771' target="_blank">
                                                       <span>
                                                       {/* {get_icon('phone','25px')} */}
                                                       Gọi điện
                                                       </span>
                                                  </a>
                                             </p>
                                        </div>
                                         <Accordion >
                                             <Accordion.Item eventKey="0">
                                                  <Accordion.Header> <a>* Thông tin sản phẩm</a></Accordion.Header>
                                                  <Accordion.Body>
                                                       <div className='table-x'>
                                                            <table className='table-z1' border='1'>
                                                                 <tbody>
                                                                      <tr className='tr-z1'>
                                                                           <td className='td-z1 f-2'>
                                                                           <strong> Giá Giường sắt giá rẻ</strong>
                                                                           </td>
                                                                           <td className='td-z2 f-8'>
                                                                           + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).
                                                                           </td>
                                                                      </tr>
                                                                      <tr className='tr-z1'>
                                                                           <td className='td-z1 f-2'>
                                                                           <strong> Chất liệu</strong>
                                                                           </td>
                                                                           <td className='td-z2 f-8'>
                                                                           + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).
                                                                           </td>
                                                                      </tr>
                                                                      <tr className='tr-z1'>
                                                                           <td className='td-z1 f-2'>
                                                                           <strong> Kích thước hỗ trợ</strong>
                                                                           </td>
                                                                           <td className='td-z2 f-8'>
                                                                           🔔🔔🔔 + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).
                                                                           </td>
                                                                      </tr>
                                                                 </tbody>
                                                            </table>
                                                       </div>
                                                  </Accordion.Body>
                                             </Accordion.Item>
                                             <Accordion.Item eventKey="1">
                                                  <Accordion.Header><a>* Bảng giá sản phẩm</a></Accordion.Header>
                                                  <Accordion.Body>
                                                       <div className='table-x'>
                                                            <table className='table-z1' border='1'>
                                                                 <tbody>
                                                                      <tr className='tr-z1'>
                                                                           <td className='td-z1 f-2'>
                                                                           <strong> Giá</strong>
                                                                           </td>
                                                                           <td className='td-z2 f-7'>
                                                                           + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).
                                                                           </td>
                                                                           <td className='td-z2 f-1'>
                                                                           <button className="btn btn-danger">Mua</button>
                                                                           </td>
                                                                      </tr>
                                                                      <tr className='tr-z1'>
                                                                           <td className='td-z1 f-2'>
                                                                           <strong> Chất liệu</strong>
                                                                           </td>
                                                                           <td className='td-z2 f-7'>
                                                                           + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).
                                                                           </td>
                                                                           <td className='td-z2 f-1'>
                                                                           <button  className="btn btn-danger">Mua</button>
                                                                           </td>
                                                                      </tr>
                                                                      <tr className='tr-z1'>
                                                                           <td className='td-z1 f-2'>
                                                                           <strong> Kích thước hỗ trợ</strong>
                                                                           </td>
                                                                           <td className='td-z2 f-7'>
                                                                           🔔🔔🔔 + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).
                                                                           </td>
                                                                           <td className='td-z2 f-1'>
                                                                           <button className="btn btn-danger">Mua</button>
                                                                           </td>
                                                                      </tr>
                                                                 </tbody>
                                                            </table>
                                                       </div>
                                                  </Accordion.Body>
                                             </Accordion.Item>
                                             <Accordion.Item eventKey="2">
                                                  <Accordion.Header><a>* Thanh toán</a></Accordion.Header>
                                                  <Accordion.Body>
                                                       <p>🔔🔔🔔 + Sắt hộp ( chịu lực nặng 600kg) + Sơn tĩnh điện (chống rỉ sét).</p>
                                                       <div>
                                                            <span className='thong-tin'>Thông tin về chúng tôi 👉 <a href="#thong-tin">Nội thất An bình</a></span>
                                                       </div>
                                                  </Accordion.Body>
                                             </Accordion.Item>
                                        </Accordion>
                                       {/*  */}
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div id="thong-tin" className='col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4'>
                         <div className='wrap-tt container'>
                              <div className='row sh'>
                                   <div className='col-12 col-sm-12 picz'>
                                        <img src="https://cdn2.tieudungplus.vn/media/uploaded/9/2016/07/05/cua_hang_tl.jpg" class="imgz img-top"/>
                                   </div>
                                   <div className='col-12 col-sm-6 picz'>
                                        <img src="https://media-cdn-v2.laodong.vn/storage/newsportal/2021/8/19/943822/Google-6.jpg?w=800&crop=auto&scale=both" class="imgz"/>
                                   </div>
                                   <div className='col-12 col-sm-6 picz'>
                                        <img src="https://media-cdn-v2.laodong.vn/storage/newsportal/2021/8/19/943822/Google-6.jpg?w=800&crop=auto&scale=both" class="imgz"/>
                                   </div>
                              </div>
                              <div className='container'>
                                   <div className='wrazz'>
                                        <div className='title-about'>
                                             Nội thất An Bình New
                                        </div>
                                       <div>
                                             Cửa hàng cung cấp đồ nội thất Hồ Chí Minh...
                                             <span className='xxo'>Xem thêm</span> 
                                             <br/>
                                             {false&&<span style={{fontSize:"14px"}}>Nội thất An Bình Chuyên cung cấp các đồ dùng nội thất như: giường ngủ, nệm, bàn học, tủ quần áo, tủ hồ sơ, ...v.v. Những các vật dụng nội thất cho căn nhà của bạn, từ vật dụng đơn giản đến việc thiết kế theo yêu cầu. Với phạm vi hoạt động tại khu vực Hồ Chí Minh, hiện nay chúng tôi đã và đang dần mở rộng sang các khu vực lân cận, chuyên cung cấp sỉ và lẻ các mặt hàng nội thất đẹp nhất đến tận tay người tiêu dùng.<br/></span>}
                                             <span style={{color:"blue"}}>*Nhận giao hàng toàn quốc.</span>
                                       </div>
                                       <div>
                                       ⭐⭐⭐⭐⭐ 4.8/5 - đánh giá
                                       </div>
                                   </div>
                                   <div>
                                        <p className='textz'><strong>Địa chỉ:</strong> Số nhà 19, đường số 17, quốc lộ 13 cũ, Hiệp Bình Phước, Thành phố Thủ Đức.
                                        </p>
                                        <p className='textz'><strong>Các giờ:</strong><span style={{color: 'rgba(24,128,56,1.0)'}}> Mở cửa cả ngày</span>
                                        </p>
                                        <p className='textz'><strong>Điện thoại:</strong><a href="tel:0326397884" target="_blank" className='nbp'> 0326.397.884</a>
                                        </p>
                                        <p className='textz'><strong>Trạng thái hiện tại:</strong> Đang hoạt động.
                                        </p>
                                        <p className='textz'><strong>Ngày thành lập:</strong> 20 tháng 4, 2013.
                                        </p>
                                        <p className='textz'><strong>Người đại diện:</strong> Lê Thị Thúy.
                                        </p>
                                        <p className='textz'><strong>Số tài khoản ngân hàng:</strong> 0381000530472 Vietcombank Lê Thị Thuý.
                                        </p>
                                        <div>
                                              <p className='textz'><strong>Liên hệ:</strong></p>
                                             <div style={{textAlign: 'center'}}>
                                                  <a href="#" className='icon-contact'>
                                                       <img src={zalo} /><br/>
                                                       Zalo
                                                  </a>
                                                  <a href="#" className='icon-contact'>
                                                       <img src={facebook} /><br/>
                                                       Facebook 
                                                  </a>
                                                  <a href="#" className='icon-contact' style={{width:"92px"}}>
                                                       <img src={call} />
                                                       Điện thoại
                                                  </a>
                                             </div>
                                        </div>
                                        <p className='textz'><strong>Google map:</strong></p>
                                        <div className="mapz">
                                             <a href="#">
                                                   <img src={map} class="imgz img-top"/>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <FooterZ/>
               <Modal_checkout
                    show={show_checkout}
                    handleClose={()=>this.setState({show:false})}
               />
               <Modal_status
                    onHide={()=>this.setState({show_modal_status:false})}
                    show={show_modal_status}
               />
               
      </React.Fragment>
    );
  }

}

export default App;
