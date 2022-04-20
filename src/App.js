import React, { Component } from 'react';
import {get_star,get_icon,get_random_css} from './lib/fs';
import Sliderz from './components/slider';
import Accordion from 'react-bootstrap/Accordion'
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
    }
  }
  render() {
    return (
      <React.Fragment> xxx
               <div className='row mg-0'>
                    <div className='col-12 col-xl-1 col-xxl-2'>1</div>
                    <div className='col-12 col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-6'>
                         <div className='row'>
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
                                             <p>
                                                  <a className="button1" href='tel:0963226771' target="_blank">
                                                       <span>
                                                       {get_icon('phone','25px')}
                                                       Liên hệ
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
                                             <p>
                                                  <a className="button1" href='tel:0963226771' target="_blank">
                                                       <span>
                                                       {get_icon('phone','25px')}
                                                       Liên hệ
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
                    <div id="thong-tin" className='col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 col-xxl-4'>3</div>
               </div>
      </React.Fragment>
    );
  }
}

export default App;
