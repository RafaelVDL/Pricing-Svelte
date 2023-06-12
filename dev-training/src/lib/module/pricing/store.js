// @ts-nocheck
import { writable } from "svelte/store";
const {subscribe, set, update} = writable([])


const pricingStore = () =>{
    return{
        subscribe,
        add:(data)=>{
            update(val=> val ?[...val,data]:[data])
        }
    }
}
 export const pricing = pricingStore()