import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Searchitems from './searchitems';
import "./Style.css";
export interface bookstyle {
    id: string,
    title: string,
    category: string,
    cover: {
        img: string
    }
}



const Display = (props: any) => {

    const [bookself, setSelf] = useState<bookstyle[]>(props.booklist.slice(0, 5));
    const [value, setValue] = useState(5);
    function rightEncounterRendering() {
        setValue(value + 5)
        console.log(value);
        setSelf(props.booklist.slice(value, value + 5));
    }

    function leftEncounterRendering() {
        if (value === 5) {
            return;
        }
        setValue(value - 5)
        setSelf(props.booklist.slice(value, value + 5));
    }

    // useEffect(() => {
    //     setSelf(props.booklist.slice(value, value + 5));
    // }, [value || 0])

    return (
        <div className='sub-container'>

            {


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
            <button type='submit' className='button-left' placeholder="submit" onClick={leftEncounterRendering}>Left</button>
            <br />

        </div>
    );

}
export default Display;