import { renderHook } from '@testing-library/react';
import { userInfo } from 'os';
import React, { ReactNode } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import Bookshelve from './bookshelve';
import Categroy from './category';
import Searchitems from './searchitems';
import Display from './disolay';

interface bookstyle {
    id: string,
    title: string,
    category: string,
    cover: {
        img: string
    }
}

const Parent = (props: any) => {
    const [booklist, setData] = useState<bookstyle[]>([]);

    const fields = [];


    const [searchbook, setSearchData] = useState<bookstyle[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/data.json')
            .then(response => response.json())
            .then(response => setData(response));

    }, []);

    let category = [...Array.from(new Set(booklist.map(item => item.category)))];
    let categorydata = category.map((str) => ({ value: str }));
    const fields1: JSX.Element[] = [];
    const searchdata = (data: any) => {
        setSearchData(data);


    }






















    return (
        <div>


            <Searchitems booklist={booklist} searchdata={searchdata} />


            {
                searchbook.length === 0 ?

                    <Bookshelve booklist={booklist} style={{ top: "30px" }} />


                    :
                    <Bookshelve booklist={searchbook} />






            }

            {

                categorydata.map((cat: any) => {
                    const filterdata = booklist.filter((user: { category: string; }) => user.category === cat.value);

                    return (
                        <>
                            <Display booklist={filterdata} cat={cat.value} />
                            <br />

                        </>

                    )
                }





                )
            }


        </div>



    );


}

export default Parent;

function cat(cat: any): React.ReactNode {
    throw new Error('Function not implemented.');
}
