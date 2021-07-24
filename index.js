// Code your solutions in this file
const mname = [ 'Lisa', 'Kaitlin', 'Jan' ];
const msg = [];
function writeCards(mname,word){
    for (let i = 0 ; i < mname.length; i++){
        msg[i] = 'Thank you, '+mname[i]+', for the wonderful '+word+' gift!';
        console.log(msg[i]);
        
    }
    return msg
}

function countDown(n){
    while(n >= 0){
        console.log(n);
        n-- ;
    }
}