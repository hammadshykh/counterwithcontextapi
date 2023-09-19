
import React , {createContext,useState} from "react";

export const BookContext = createContext()


const BookContextProvider = ({children})=>{
    const [books,setBooks] = useState([
        {title:"name of the wind",id:1},
        {title:"the way of kings",id:2},
        {title:"the final empire",id:4},
        {title:"the hero of ages",id:5}
    ])
    return <BookContext.Provider value={{books}}>{children}</BookContext.Provider>
}

export default BookContextProvider