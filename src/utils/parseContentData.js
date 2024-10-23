import React from "react";

function ParseContentData(data){
   return Object.keys(data).map(key =>{
        return{
            id: key,    //key i id olarak ata
            ...data[key] //hangi key e denk geliyorsa o datayı cıkart
        }
    })
    .sort(function (a, b) {
        return a.date > b.date ? -1 : a.date > b.date ? 1 : 0 ;
    })             
}

export default ParseContentData;