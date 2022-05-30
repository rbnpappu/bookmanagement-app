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



const Tryanderror = (props: any) => {

    const [bookself, setSelf] = useState<bookstyle[]>(props.bookdata.slice(0, 5));
    const [value, setValue] = useState(5);
    function rightEncounterRendering() {
        setValue(value + 5)
        console.log(value);
        setSelf(props.bookdata.slice(value, value + 5));
    }
    console.log(props.bookdata);

    function leftEncounterRendering() {
        if (value === 5) {
            return;
        }
        setValue(value - 5)
        setSelf(props.bookdata.slice(value, value + 5));
    }


    return (
        <div className='render' style={{ top: "900px", padding: "120px" }}>

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

            <button type='submit' className='right' placeholder="submit" onClick={rightEncounterRendering}>Right</button>
            <button type='submit' className='left' placeholder="submit" onClick={leftEncounterRendering}>Left</button>


        </div>
    );

}
export default Tryanderror;