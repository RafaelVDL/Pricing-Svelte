// @ts-nocheck
import { writable } from "svelte/store";
import { get } from "svelte/store";
const pricingData = writable([])
const {subscribe,set,update} = pricingData

const isBrowser = typeof window !== "undefined";

function saveData(data) {
    if(!isBrowser) return;
    localStorage.setItem("pricing", JSON.stringify(data));
    set(data)
}

const pricingStore = () =>{
    isBrowser && localStorage.getItem("pricing") && set(JSON.parse(localStorage.getItem("pricing")))
    // console.log(typeof localStorage)
    return{
        subscribe,
        add:(data)=>{ 
            let values = get(pricingData)
            let val =  [...values,data];
            saveData(val);
        }
    }
}
 export const pricing = pricingStore()