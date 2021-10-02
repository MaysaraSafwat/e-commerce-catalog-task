import axios from "axios";

export const fetchData = async (endpoint)=>{
    try{
     const res = await axios.get(`http://test-api.edfa3ly.io/${endpoint}`)
     return res.data;
    }catch(err){
        console.log(err)
      }
 }