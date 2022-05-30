const axios = require('axios');
// 
const url_order='http://localhost/theme-plugin-1/wp-content/plugins/zsharevn-landing-page/ajax/form_zshare_vn/create.php';
export async function _order(data){
    let data_send=new FormData();
    // data_send.append('orderz',JSON.stringify(data.sp));
    // data_send.append('namez',data.user.z_name);
    // data_send.append('phonez',data.user.z_phone);
    // data_send.append('adressz',data.user.z_address);
    // data_send.append('notez',data.user.z_note);
    data_send.append('data',JSON.stringify(data));
        
    let response= await axios.post(url_order, 
        data_send
    )
    .then(function (response) {
        console.log("🚀 ~ file: axios.js ~ line 17 ~ response", response)
        return response.data.status         
    })
    .catch(function (error) {
        console.log("🚀 ~ file: axios.js ~ line 97 ~ action_create_or_edit_post ~ error", error)
        return false
    })
    return response;
}

 