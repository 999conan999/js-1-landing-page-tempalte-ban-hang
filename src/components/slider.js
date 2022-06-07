import React, { Component } from 'react';
import Slider from "react-slick";
import { LazyLoadImage } from 'react-lazy-load-image-component';
class Sliderz extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null
    }
  }

  componentDidMount(){
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    })
  }
  //
  show_img_large=(items)=>{
    if(items!=undefined){
      let rs=[];
      items.forEach((e,i) => {
        let title=e;let show_ma_sp='';
        //
        let show_mess='';
        if(title!=undefined&&title.id!=undefined){
          show_ma_sp=`Mã sản phẩm: ${title.id}`;
          if(title.price_from==0&&title.price_to==0&&title.message==""){
          }else{
            show_mess=<div className='messz'>
              {title.price_from>0&&title.price_to>0&&<p style={{textAlign:'center',fontSize:'14px',color:'#fdfdfd',marginBottom:'0px'}}>Giá từ <span style={{fontWeight:'600',color:'#ede614',}}>{Number(title.price_from).format(0, 3, '.', ',')} đ</span> đến <span style={{fontWeight:'600',color:'#ede614',}}>{Number(title.price_to).format(0, 3, '.', ',')} đ</span></p>}
              {title.price_from>0&&title.price_to==0&&<p style={{textAlign:'center',fontSize:'14px',color:'#fdfdfd',marginBottom:'0px'}}>Giá <span style={{fontWeight:'600',color:'#ede614',}}>{Number(title.price_from).format(0, 3, '.', ',')} đ</span></p>}
              {title.price_from==0&&title.price_to>0&&<p style={{textAlign:'center',fontSize:'14px',color:'#fdfdfd',marginBottom:'0px'}}>Giá <span style={{fontWeight:'600',color:'#ede614',}}>{Number(title.price_to).format(0, 3, '.', ',')} đ</span></p>}
              {title.message!=''&&<p style={{textAlign:'center',color:'#fdfdfd',fontSize: '12px',marginBottom:'0px',height:'21px'}}>*{title.message}</p>}
            </div>
          }
        }
        //
        rs.push(
          <div className='handle'>
            <a>
              {/* <img src={e.img_url} width={'100%'}/> */}
              <LazyLoadImage
                    effect="blur"
                    src={e.img_url} 
                    width={'100%'}     
              />
            </a>
            {show_mess}
            <div className='ma-sp'>{show_ma_sp}</div>
          </div>
        )
      });
      return rs;
    }
  }
  //
  show_img_small=(items)=>{
    if(items!=undefined){
      let rs=[];
      items.forEach((e,i) => {
        rs.push(
          <div className='handle-1'>
            {/* <img src={e.img_url} width={'63px'}/> */}
            <LazyLoadImage
                    effect="blur"
                    src={e.img_url} 
                    width={'63px'}    
            />
          </div>
        )
      });
      return rs;
    }
  }
  //
  render() {
    let img_list=this.props.items;//[todo]
    let slidesToShow=5;
    if(img_list!=undefined){
      if(img_list.length<5) slidesToShow=img_list.length; 
    }
    const settings={
      lazyLoad: true,
    }
    return (
      <React.Fragment>  
          <div className='slider-z'>
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            arrows={false}
            infinite={false}
            {...settings}
          >
            {this.show_img_large(img_list)}
        </Slider>
        {/*  */}
        <div className='wrap-img-small'>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={slidesToShow}
            swipeToSlide={true}
            focusOnSelect={true}
            variableWidth={true}
            infinite={false}
            {...settings}
          >
            {this.show_img_small(img_list)}
          </Slider>
        </div>
          </div>
      </React.Fragment>
    );
  }
}

export default Sliderz;
