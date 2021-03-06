import { AXIOS_REQUEST } from "../auth/index"
import { toast } from "react-toastify"
import {history} from "../../../history"

export const Bonusmenuload = (type,email) =>{
    return async (dispatch) =>{
        var rdata = await AXIOS_REQUEST("promotions/bonus_menuloads",{type, email})
            if(rdata.status){
                dispatch({ type: "PROMOTIONS_BONUS_DATA", payload: rdata.data });
            }else{
                toast.error(rdata.data);   
            }
    }
}

export const Claim_request = (data) =>{
    return async ()=>{
        var rdata = await AXIOS_REQUEST("promotions/Claim_request",{data : data});
        if(rdata.status){
            history.push("/welcometobonuspage",{state : rdata.data});
        }else{

        }
    }
}