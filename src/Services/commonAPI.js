import axios from 'axios';

export const commonAPI=async(httpMethod,url,reqBody,reqHeader)=>{
      const reqConfig={
        method:httpMethod,
        url:url,
        data:reqBody,
        headers:reqHeader?reqHeader:{
            "Content-Type":"application/json"
        }
      }
      return await axios(reqConfig).then((response)=>{
        return response
      })
      .catch((error)=>{
        return error.response || error
      })
}
