import { commonAPI } from "./commonAPI";
import { serverUrl } from "./serverURL";

export const registerAPI=async(reqBody)=>{
   return await commonAPI('post',`${serverUrl}/api/register`,reqBody,"")
}

export const loginAPI=async(reqBody)=>{
   return await commonAPI('post',`${serverUrl}/api/login`,reqBody,{})
}
