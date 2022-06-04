const axios = require('axios');
// 
export async function _order(data){

    const url_order=window.home_url+'/wp-content/plugins/zsharevn-landing-page/ajax/form_zshare_vn/create.php';
    let data_send=new FormData();
    data_send.append('data',JSON.stringify(data));
    let response= await axios.post(url_order, 
        data_send
    )
    .then(function (response) {
        return response.data.status         
    })
    .catch(function (error) {
        console.log("🚀 ~ file: axios.js ~ line 97 ~ action_create_or_edit_post ~ error", error)
        return false
    })
    return response;
}
export  function _telegram(data){
    const url_order=window.home_url+'/wp-content/plugins/zsharevn-landing-page/ajax/form_zshare_vn/telegram.php';
    let data_send=new FormData();
    data_send.append('data',JSON.stringify(data));
    axios.post(url_order, data_send)
}

 