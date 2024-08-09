// Network call code
// Code fetches the data from the backend and give to us 
import URL from '../utils/constant.js';
async function doNetworkCall(){
   
    try{
    const response=await fetch(URL);
    const object=await response.json();
    return object; // wrap Promises
    }
    catch(err){
        console.log('Some Problem in API Call ',err);
        throw err;
    }

    // const promise=fetch(); // Assign to  new thread
    // // fetch is async call it calls the other threads
    // console.log('Primise is :'+promise);
    // promise.then(response=>{
    //     console.log('response is ', response);
    //     const promise2=response.json(); // Deserilization  (JSON to object)
    //     promise2.then(data=> console.log('Data is ',data))
    //     .catch(e=> console.log('JSON parse Error',e));
    // }).catch(err=>{
    //     console.log('Error is ',err);
    // });
    // console.log('Good Bye');
}
export default doNetworkCall;