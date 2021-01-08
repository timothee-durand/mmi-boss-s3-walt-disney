import param from "@/param/param.js";
import axios from "axios";

export default {
    getHeaders(){
        return {}
    },

    getJson(type){
        return axios.get(param[type], {headers:this.getHeaders()}).then(resp => {
            return resp.data
        });
    },

    postJson(type, params) {
        return axios.post(param[type], params).then(resp => {
            return resp.data
        });
    }
}
