import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import { get_icon } from '../lib/fs';

export default class Modal_status extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    let {data}=this.props
    return (
      <React.Fragment>
        <Modal
          show={this.props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {!this.props.step&&<div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>}
          {this.props.step&&<div className='container'>
          <div className='row'>
            <div className='col-12' style={{padding:"0px"}}>
              <div style={{textAlign:"center"}}>
                <div className='w-icon'>
                  <span className='icon-checkz'>{get_icon('check','62px','#33a938')}</span>
                </div>
                <h2 style={{paddingTop:"25px"}}>Đặt hàng thành công!</h2>
              </div>
            </div>
            <div className='col-12'>
              <p style={{textAlign: 'left', marginBottom: '8px', color: 'currentColor',marginTop: '12px'}}>Thông tin đơn hàng :</p>
              <table style={{borderCollapse: 'collapse', width: "100%"}} className="tabz">
                 <thead> 
                    <tr style={{backgroundColor: 'burlywood'}}> 
                      <th style={{backgroundColor: 'burlywood',color: 'black',fontSize: '14px',}}>Tên sản phẩm</th> 
                      <th style={{backgroundColor: 'burlywood',color: 'black',fontSize: '14px',}}>Giá thành</th> 
                      <th style={{backgroundColor: 'burlywood',color: 'black',fontSize: '14px',}}>Số lượng</th> 
                      <th style={{backgroundColor: 'burlywood',color: 'black',fontSize: '14px',}}>Thành tiền</th>
                    </tr>
                  </thead>
                    <tbody> 
                      <tr>
                        <td data-column="Tên sản phẩm" style={{backgroundColor: 'white'}}><a style={{color: '#333',fontSize: '14px',backgroundColor: 'white',}}>{data.sp.name}<span style={{marginBottom: '0px', display: 'block',}}> Kích thước : {data.sp.attributes_kt}</span><span style={{marginBottom: '7px', display: 'block',}}> Mẫu : {data.sp.attributes_ms}</span></a>
                        </td>
                        <td data-column="Giá" style={{color: '#333',fontSize: '14px',backgroundColor: 'white'}}>{data.sp.price}</td>
                        <td data-column="Số lượng" style={{color: '#333',fontSize: '14px',backgroundColor: 'white'}}>{data.sp.quantity}</td>
                        <td data-column="Thành tiền" style={{color: '#333',fontSize: '14px',backgroundColor: 'white'}}>{(Number(data.sp.quantity)*Number(data.sp.price)).format(0, 3, '.', ',')} đ</td>
                      </tr>
                      <tr> 
                        <td></td>
                        <td></td>
                        <td style={{fontWeight: '600',fontSize: '14px'}}>Tổng tiền: </td> 
                        <td style={{fontWeight: '600', color: 'blue',fontSize: '14px',}}>{(Number(data.sp.quantity)*Number(data.sp.price)).format(0, 3, '.', ',')} đ</td>
                      </tr> 
                    </tbody>
              </table>
              <div className='showzs'>
                <p>Thông tin người nhận: </p>
                <p>Tên: <b>{data.user.z_name}</b></p>
                <p>Địa chỉ: <b>{data.user.z_address}</b></p>
                <p>Điện thoại: <b>{data.user.z_phone}</b></p>
                <p>Ghi chú: <b> {data.sp.z_note}</b></p>
              </div>
              <div class="footer-pp"> 
                <p class="bnt-home" onClick={()=>this.props.onHide()}>Đóng</p>
              </div>
            </div>
          </div>
        </div>}


        </Modal>
      </React.Fragment>
    );
  }
}

