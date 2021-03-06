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
import LazyImage from "./components/lazy-image";
import hoder from './components/placeHolder.jpg'
Number.prototype.format = function(n, x, s, c) {
var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
     num = this.toFixed(Math.max(0, ~~n));

return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};
const colorz=['#1598496b','#f50c0c59','#7d24c159','#0619c54d','#3fb9b9a8','#8bc34aed','#2196f387','#3f51b56b','#ddcf558c','#1598496b','#f50c0c59','#7d24c159','#0619c54d','#3fb9b9a8','#8bc34aed','#2196f387','#3f51b56b','#ddcf558c','#1598496b','#f50c0c59','#7d24c159','#0619c54d','#3fb9b9a8','#8bc34aed','#2196f387','#3f51b56b','#ddcf558c']
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
         is_xem_them:false,
         show_checkout:false,
         show_modal_status:false,
         step:false,
         p:0,
         data:{
          sp:{
            name:'',
            attributes_kt:'',
            price:0,
            attributes_ms:'',
            url_img:'',
            quantity:0,
          },
          user:{
            z_name:'',
            z_phone:'',
            z_address:'',
            z_note:''
          }
        },
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
    
    let sp=window.data.sp;
    let vc_1=window.data.narbar.vc_1===undefined?0:window.data.narbar.vc_1;
    if(sp!==undefined && !window.lock){
         let new_sp= sp.map((item_sp,i)=>{
          let vc_2=item_sp.vc_2==undefined?0:item_sp.vc_2;
          let add_vc=vc_1+vc_2;
          let new_sp_item={
               title:item_sp.title,
               danh_gia:item_sp.danh_gia,
               thong_tin_sp:item_sp.thong_tin_sp,
               thanh_toan:item_sp.thanh_toan,
               hinh_anh:item_sp.hinh_anh,
          }
          let bang_gia_sp=[]
          if(item_sp.bang_gia_sp!=undefined){
               item_sp.bang_gia_sp.forEach(e => {
                    bang_gia_sp.push({
                         title: e.title,
                         price:Number(e.price)+add_vc
                    })
               });
          }
          new_sp_item.bang_gia_sp=bang_gia_sp;
          try{
               new_sp_item.price_from=bang_gia_sp[0].price;
               new_sp_item.price_to=bang_gia_sp[bang_gia_sp.length-1].price;
          }catch(e){
               new_sp_item.price_from=0;
               new_sp_item.price_to=0;
          }

          return new_sp_item;
          })
          window.data.sp=new_sp;
     window.lock=true;          
    }

  }

  render() {
          let {show_checkout,show_modal_status,data_modal_selected,p,step,is_xem_them}=this.state;
          let data=window.data;
          if(data.mr!=undefined){
               if(data.mr.fb.replace(" ","")!="") data.comom.lien_he_facebook=data.mr.fb;
               if(data.mr.zl.replace(" ","")!="") data.comom.lien_he_zalo=data.mr.zl;
               if(data.mr.dt.replace(" ","")!="") data.comom.lien_he_dien_thoai=data.mr.dt;
               if(data.mr.ds.replace(" ","")!="") data.comom.footer_title=data.mr.ds;
          }
    return (
      <React.Fragment>
               <HeaderZ 
                    header_title={data.comom.header_title}
                    logo_url={data.comom.logo_url}
               />
               <div className='container'>
                    <div className='row'>
                         <h1 className='title-page'>
                              {data.title_page}
                         </h1>
                         <div className='hidenz'>
                              <ins>{data.price_ads}??</ins><span>C??n h??ng</span>
                         </div>
                         <div className='mo-ta'>
                              {data.des_short_page}
                         </div>
                    </div>
               </div>
               <div className='row mg-0'>
                    <div className='col-12 col-xl-12 col-xxl-1'></div>
                    <div className='col-12 col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-7'>
                         <div className='row'>
                              {this.show_mau_sp(data.sp,data.comom)}
                         </div>
                    </div>
                    <div id="thong-tin" className='col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4'>
                         <div className='wrap-tt container'>
                              <div className='row sh'>
                                   <div className='col-12 col-sm-12 picz'>
                                        {/* <img src={data.narbar.url_1} className="imgz img-top" /> */}
                                        {data.narbar.url_1!=''&&<LazyImage
                                             srcset={data.narbar.url_1}
                                             src={hoder}
                                             className="imgz img-top"
                                             width="100%"
                                        />}
                                   </div>
                                   <div className='col-12 col-sm-6 picz'>
                                        {/* <img src={data.narbar.url_2} className="imgz"/> */}
                                        {data.narbar.url_2!=''&&<LazyImage
                                             srcset={data.narbar.url_2}
                                             src={hoder}
                                             className="imgz"
                                             width="100%"
                                        />}
                                   </div>
                                   <div className='col-12 col-sm-6 picz'>
                                        {/* <img src={data.narbar.url_3} className="imgz"/> */}
                                        {data.narbar.url_3!=''&&<LazyImage
                                             srcset={data.narbar.url_3}
                                             src={hoder}
                                             className="imgz"
                                             width="100%"
                                        />}
                                   </div>
                              </div>
                              <div className='container'>
                                   <div className='wrazz'>
                                        <div className='title-about'>
                                             {data.narbar.title}
                                        </div>
                                       <div>
                                             {data.narbar.des_show}
                                             {!is_xem_them&&<span className='xxo'
                                                  onClick={()=>this.setState({is_xem_them:true})}
                                             >Xem th??m</span> }
                                             <br/>
                                             {<span style={{fontSize:"14px",display:is_xem_them?"block":"none"}}>{data.narbar.des_hiden}<br/></span>}
                                             <span style={{color:"blue"}}>*Nh???n giao h??ng to??n qu???c.</span>
                                       </div>
                                       <div>
                                       ??????????????? 4.8/5 - ????nh gi??
                                       </div>
                                   </div>
                                   <div>
                                        {data.narbar.dia_chi!=''&&<p className='textz'><strong>?????a ch???:</strong> {data.narbar.dia_chi}
                                        </p>}
                                        {data.narbar.cac_gio!=''&&<p className='textz'><strong>C??c gi???:</strong><span style={{color: 'rgba(24,128,56,1.0)'}}> {data.narbar.cac_gio}</span>
                                        </p>}
                                        {data.comom.lien_he_dien_thoai!=''&&<p className='textz'><strong>??i???n tho???i:</strong><a href={`tel:${data.comom.lien_he_dien_thoai}`} target="_blank" className='nbp'> {data.comom.lien_he_dien_thoai}</a></p>}
                                        {data.narbar.trang_thai_hien_tai!=''&&<p className='textz'><strong>Tr???ng th??i hi???n t???i:</strong> {data.narbar.trang_thai_hien_tai}
                                        </p>}
                                        {data.narbar.ngay_thanh_lap!=''&&<p className='textz'><strong>Ng??y th??nh l???p:</strong> {data.narbar.ngay_thanh_lap}
                                        </p>}
                                        {data.narbar.nguoi_dai_dien!=''&&<p className='textz'><strong>Ng?????i ?????i di???n:</strong> {data.narbar.nguoi_dai_dien}
                                        </p>}
                                        {data.narbar.stk!=''&&<p className='textz'><strong>S??? t??i kho???n ng??n h??ng: </strong> {data.narbar.stk}
                                        </p>}
                                        <div>
                                              <p className='textz'><strong>Li??n h???:</strong></p>
                                             <div style={{textAlign: 'center'}}>
                                                  {data.comom.lien_he_zalo!=''&&<a href={data.comom.lien_he_zalo} target="_blank" className='icon-contact'>
                                                       <img src={zalo} />
                                                       <br/>
                                                       Zalo
                                                  </a>}
                                                  {data.comom.lien_he_facebook!=''&&<a href={data.comom.lien_he_facebook}  target="_blank" className='icon-contact'>
                                                       <img src={facebook} />
                                                       <br/>
                                                       Facebook 
                                                  </a>}
                                                  {data.comom.lien_he_dien_thoai!=''&&<a href={`tel:${data.comom.lien_he_dien_thoai}`} className='icon-contact' style={{width:"92px"}} target="_blank">
                                                       <img src={call} />
                                                       ??i???n tho???i
                                                  </a>}
                                             </div>
                                        </div>
                                       {data.narbar.google_map!=''&&data.narbar.pic_map!=''&&<div>
                                             <p className='textz'><strong>Google map:</strong></p>
                                             <div className="mapz">
                                                  <a href={data.narbar.google_map}  target="_blank">
                                                       {/* <img src={data.narbar.pic_map} className="imgz img-top"/> */}
                                                       {data.narbar.pic_map!=''&&<LazyImage
                                                            srcset={data.narbar.pic_map}
                                                            src={hoder}
                                                            className="imgz img-top"
                                                            width="100%"
                                                       />}
                                                  </a>
                                             </div>
                                        </div>}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <FooterZ footer_title={data.comom.footer_title} />
               <Modal_checkout
                    show={show_checkout}
                    handleClose={()=>this.setState({show_checkout:false})}
                    p={p}
                    data_modal_selected={data_modal_selected}
                    action_step_1_to_server={()=>this.setState({show_modal_status:true,show_checkout:false,step:false})}
                    action_step_2_to_server={(data)=>{
                         this.setState({
                              step:true,
                              data:data
                         })
                    }}
               />
               <Modal_status
                    onHide={()=>this.setState({show_modal_status:false})}
                    show={show_modal_status}
                    step={step}
                    data={this.state.data}
               />
               
      </React.Fragment>
    );
  }
  //
  show_mau_sp=(sp,comom)=>{
     let rs=[];
     sp.forEach((e,i) => {
          rs.push(
          <div className='col-12 col-sm-6 col-md-12 col-lg-6' key={i}>
               <div className='wrap-card card-1' style={{backgroundColor: colorz[i]}}>
                    <div className="tieu-de">
                         <h2 className='title-1'>
                              {e.title}
                         </h2>
                    </div>
                    <div className="danh-gia">
                         <span>????nh gi??  :</span>
                         {get_star(e.danh_gia)}
                         <span className={`ribbon ${get_random_css()}`}>M???u s??? {i+1}</span>
                    </div>
                    <Sliderz
                     items={e.hinh_anh} 
                     price_from={e.price_from}
                     price_to={e.price_to}
                    />
                    <div className='xem-sp'>
                         <p className='wrz'>
                              <a className="button1" href={comom.lien_he_zalo} target="_blank">
                                   <span className='zalo'>
                                   Chat Zalo
                                   </span>
                              </a>
                         </p>
                         <p className='wrz'>
                              <a className="button1" href={`tel:${comom.lien_he_dien_thoai}`} target="_blank">
                                   <span>
                                   G???i ??i???n
                                   </span>
                              </a>
                         </p>
                    </div>
                    <Accordion >
                         {e.thong_tin_sp.length>0&&<Accordion.Item eventKey="0">
                              <Accordion.Header> <a>* Th??ng tin s???n ph???m</a></Accordion.Header>
                              <Accordion.Body>
                                   <div className='table-x'>
                                        <table className='table-z1' border='1'>
                                             <tbody>
                                                  {e.thong_tin_sp.map((item,i)=>{
                                                       return  <tr className='tr-z1' key={i}>
                                                                      <td className='td-z1 f-2'>
                                                                      <strong>{item.title}</strong>
                                                                      </td>
                                                                      <td className='td-z2 f-8'>
                                                                           {item.des}
                                                                      </td>
                                                                 </tr>
                                                  })}
                                             </tbody>
                                        </table>
                                   </div>
                              </Accordion.Body>
                         </Accordion.Item>}
                         {e.bang_gia_sp.length>0&&<Accordion.Item eventKey="1">
                              <Accordion.Header><a>* B???ng gi?? s???n ph???m</a></Accordion.Header>
                              <Accordion.Body>
                                   <div className='table-x'>
                                        <table className='table-z1' border='1'>
                                             <tbody>
                                                   {e.bang_gia_sp.map((item,i)=>{
                                                       return  <tr className='tr-z1' key={i}>
                                                            <td className='td-z1'>
                                                            <strong>{item.title}</strong>
                                                            </td>
                                                            <td className='td-z2 fss'>
                                                            {Number(item.price).format(0, 3, '.', ',')} ??
                                                            </td>
                                                            <td className='td-z2'>
                                                            <button  className="btn btn-primary" 
                                                            style={{backgroundColor:"#ff9826"}}
                                                            onClick={()=>{
                                                                 let {p} =this.state;
                                                                 this.setState({
                                                                 show_checkout:true,
                                                                 p:p+1,
                                                                 data_modal_selected:{
                                                                      value_selected:item,
                                                                      sp:e
                                                                 }
                                                                 })
                                                            }}>Mua</button>
                                                       </td>
                                                  </tr>
                                                  })}
                                             </tbody>
                                        </table>
                                   </div>
                              </Accordion.Body>
                         </Accordion.Item>}
                         {e.thanh_toan.length>0&&<Accordion.Item eventKey="2">
                              <Accordion.Header><a>* Thanh to??n</a></Accordion.Header>
                              <Accordion.Body>
                                        {e.thanh_toan.map((item,i)=>{
                                             return  <p key={i}>{item}</p>
                                        })}
                                   <div>
                                        <span className='thong-tin'>Th??ng tin v??? ch??ng t??i ???? <a href="#thong-tin">{window.data.comom.ten_thuong_hieu}</a></span>
                                   </div>
                              </Accordion.Body>
                         </Accordion.Item>}
                    </Accordion>
               </div>
          </div> 
          )
     });
     return rs;
  }

}

export default App;
