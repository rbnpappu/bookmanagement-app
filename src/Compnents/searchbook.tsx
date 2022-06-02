import React from 'react';
import { useState } from 'react';
import { bookproperties } from './BooksContainer';
import "./Style.css";

interface Props {
    books: bookproperties[],
    searchbookresult: any
}

const Searchbook = (props: Props) => {

    const [searchbookquery, setbook] = useState("");

    function handleSubmit(e: any) {
        e.preventDefault();

        const filterdata = props.books.filter((book: { title: string; }) => book.title === searchbookquery);

        props.searchbookresult(filterdata);
    }
    console.log(searchbookquery);
    return (
        <div className='container'>

            <form onSubmit={(e) => handleSubmit(e)} className="form">


                <input type="text"
                    placeholder="Search books"
                    value={searchbookquery}
                    className='searchtypebox'
                    onChange={(e) => setbook(e.target.value)}
                />


                <input type={"submit"} className="button" />

            </form>

        </div >


    );

}

export default Searchbook;