import axios from "axios";

export const fetchData = async (filters)=>{
    try{
     const res = await axios.get(`http://test-api.edfa3ly.io/product?${filters}`)
     return res.data;
    }catch(err){
        console.log(err)
      }
 }

 export const fetchCategoriesData = async ()=>{
  try{
   const res = await axios.get(`http://test-api.edfa3ly.io/category`)
   return res.data;
  }catch(err){
      console.log(err)
    }
}
