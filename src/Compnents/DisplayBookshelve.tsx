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
    const [init, setinit] = useState(0);
    const [value, setvalue] = useState(5);


    const [bookself, setSelf] = useState<bookstyle[]>(props.booklist.slice(init, value));




    function leftEncounterRendering() {

        if (init == 0) {
            setvalue(value);
            setinit(init);
            return;
        }

        setinit(init - 1);
        setvalue(value - 1);
        console.log(init, value);
        setSelf(props.booklist.slice(init, value));

    }
    function rightEncounterRendering() {
        if (init == props.booklist.length && value > props.booklist.length) {
            setinit(init - 2);
            setvalue(value - 2);
            return;
        }

        setinit(init + 1);
        setvalue(value + 1);
        console.log(init, value);
        setSelf(props.booklist.slice(init, value));

    }


    return (
        <div className='sub-container' >
            <h1 className='header'>{props.cat}</h1>


            <button type='submit' className='button-left' placeholder="submit" onClick={leftEncounterRendering}>Left</button>
            {
                props.booklist.length == 1 ?
                    props.booklist.map((book: any) => {

                        return (

                            <div className="book" key={book.id}>
                                <img src={book.cover.image} className="image" />
                                <label>{book.title}</label>
                            </div>
                        )
                    }

                    )
                    : bookself.map((book: any) => {

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

            <br />

        </div>
    );

}
export default Display;