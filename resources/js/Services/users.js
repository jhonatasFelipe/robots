
import http from "../http/http.js";

export const getRobots = async (amonth) => {
    try{
        return await http.get('/users',{'params':{'size': amonth}});
    }
    catch(error){
        console.error(error);
    }
    
}