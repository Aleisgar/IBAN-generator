import { Detail } from "@raycast/api";
import { useEffect,useState } from "react";
import { fetchIban } from "./api";
import { Iban } from "./types";


export default function ibanCreator() {
  const [iban,setIban]=useState<Iban>()
  useEffect(()=>{
    async function fetchData(){
      try{
        const iban= await fetchIban();
       setIban(iban);
      }
    catch(error){
      console.error(error)

    }
 } fetchData()},[])
  return <Detail markdown={iban?.iban}></Detail> ;
}