import React from 'react';
import { useState } from 'react';
import "./Style.css";


const Searchitems = (props: any) => {

    const [searchitems, setitems] = useState("");

    function handleSubmit(e: any) {
        e.preventDefault();

        const filterdata = props.booklist.filter((user: { title: string; }) => user.title === searchitems);
        props.searchdata(filterdata);
    }

    return (
        <div className='container'>

            <form onSubmit={(e) => handleSubmit(e)} className="form">


                <input type="text"
                    placeholder="Search books"
                    value={searchitems}
                    className='searchtypebox'
                    onChange={(e) => setitems(e.target.value)}
                />


                <input type={"submit"} className="button" />

            </form>

        </div >


    );

}

export default Searchitems;