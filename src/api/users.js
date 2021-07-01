/**
 * 06/30/2021
 * Codes for user controller.
 * @author Kent Vincent Dela Cruz
 */
import axios from 'axios';

export const loginUser = async()=>{
    try{
        console.log("Login user function called");
        const res =  await axios.post('',{
            email: '',
            password: ''
        })
        if(res.status === 0)
            throw res.message
        
        localStorage.setItem('access_token',"wdi0192u3lkndaszxcn,masdj;kpoqiwepoi");
        return true;
    }
    catch(err){
        console.log(err);
        return false;
    }
}
export const getUsers = async()=> {
    console.log("Get user function called");
    try{
        const res =  await axios.post('http://localhost:5001',{
            email: '',
            password: ''
        })
        if(res.status === 0)
            throw res.message
        
        localStorage.setItem('access_token',"wdi0192u3lkndaszxcn123dsmasdjskpoqiwepoi");
        return true;
    }
    catch(err){
        return false;
    }
}
