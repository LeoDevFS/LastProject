import { createContext,useContext,useState } from "react";
import useFetch from "../hooks/useFetch";

export const DataContext = createContext()

export function DataContextProvider ({ children }){

    const [urlApi, setUrlApi] = useState('http://localhost:3000')

    const data = useFetch(urlApi)
    
    const productos = data
  
  return(
   < DataContext.Provider value={productos}>
    { children}
   </DataContext.Provider>
  )
   
}


export function useDataContext(){
    const context  = useContext(DataContext)

    return context
}