import React, { useContext } from "react";
import { ThemeContext } from "../Store/Context";
import { BookContext } from "../Store/BookContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  console.log(books)
  console.log(isLightTheme ,light)
  const theme = isLightTheme ? light : dark;
  console.log(theme)
  
  return theme && (
    <>
      <div style={{background:theme.bg,color:theme.syntax,padding:"30px"}}>
        <ul>
          {books.map((book,i)=>(
            <li key={i} style={{background:theme.ui,padding:"10px", marginBottom:"10px",textAlign:"center"}}>{book.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};


export default BookList