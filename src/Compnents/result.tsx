import React from 'react';

import { useState } from 'react';
import "./Style.css";

import Parent from './parent';


const Result = (props: any) => {


    return (
        <div >
            {props.book.map((book: any) => {

                return (

                    <div className="book" key={book.id}>
                        <img src={book.cover.image} className="image" />
                        <label>{book.title}</label>
                    </div>
                )
            }
            )}


        </div>


    );

}

export default Result;