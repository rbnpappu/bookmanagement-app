import React from 'react';
import { useState } from 'react';
import { bookproperties } from './BooksContainer';
import "./Style.css";

export interface Props {

  books: bookproperties[],
  categrory: string
}

const Display = (props: Props) => {
  const [inital, setinit] = useState(0);
  const [final, setfinal] = useState(5);
  const [bookself, setSelf] = useState<bookproperties[]>(props.books.slice(inital, final));

  function leftEncounterRendering() {

    if (inital == 0) {
      setfinal(final);
      setinit(inital);
      return;
    }

    setinit(inital - 1);
    setfinal(final - 1);
    console.log(inital, final);
    setSelf(props.books.slice(inital, final));

  }
  function rightEncounterRendering() {
    if (inital == props.books.length && final > props.books.length) {
      setinit(inital - 2);
      setfinal(final - 2);
      return;
    }

    setinit(inital + 1);
    setfinal(final + 1);
    setSelf(props.books.slice(inital, final));

  }


  return (
    <div className='sub-container' >
      <h1 className='header'>{props.categrory}</h1>
      <button type='submit' className='button-left' placeholder="submit" onClick={leftEncounterRendering}>Left</button>
      {
        props.books.length == 1 ?
          props.books.map((book: bookproperties) => {

            return (
              <div className="book" key={book.id}>
                <img src={book.cover.image} className="image" />
                <label>{book.title}</label>
              </div>
            )
          }

          )
          :
          bookself.map((book: any) => {

            return (
              <div className="book" key={book.id}>
                <img src={book.cover.image} className="image" />
                <label>{book.title}</label>
              </div>
            )
          }

          )

      }


      <button type='submit' className='button-right' placeholder="submit" onClick={rightEncounterRendering}>Right</button>

    </div>
  );

}
export default Display;