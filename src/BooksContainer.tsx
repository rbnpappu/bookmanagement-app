
import React, { ReactNode } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


import Display from './Compnents/BookShelve';
import SearchBook from './Compnents/SearchBook';
export interface bookproperties {
  id: string,
  title: string,
  category: string,
  cover: {
    image: string
  },
  subtitle: string
}

const BooksContainer = () => {
  const [books, setbooks] = useState<bookproperties[]>([]);



  const [searchbook, setsearchbook] = useState<bookproperties[]>([]);

  useEffect(() => {
    fetch('http://localhost:3002/data.json')
      .then(response => response.json())
      .then(response => setbooks(response));

  }, []);

  let setofcategoriesofbook = [...Array.from(new Set(books.map(book => book.category)))];
  let categories = setofcategoriesofbook.map((str) => ({ value: str }));

  const searchbookresult = (book: bookproperties[]) => {
    setsearchbook(book);


  }
  return (
    <div>
      <SearchBook books={books} searchbookresult={searchbookresult} />
      {
        searchbook.length === 0 ?

          <Display books={books} categrory={"All books"} />
          :
          <Display books={searchbook} categrory={"Result"} />
      }

      {

        searchbook.length === 0 ?
          categories.map((category: any) => {
            const listofbook = books.filter((book: { category: string; }) => book.category === category.value);

            return (
              <>

                <Display books={listofbook} categrory={category.value} />

                <br />

              </>

            )
          }
          )
          :
          null
      }
    </div>
  );


}

export default BooksContainer;

