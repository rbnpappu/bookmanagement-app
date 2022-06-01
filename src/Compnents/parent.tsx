import { renderHook } from '@testing-library/react';
import { userInfo } from 'os';
import React, { ReactNode } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactDOM, { render } from 'react-dom';


import Searchitems from './searchitems';
import Display from './DisplayBookshelve';

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



	const [searchbook, setSearchData] = useState<bookstyle[]>([]);

	useEffect(() => {
		fetch('http://localhost:3000/data.json')
			.then(response => response.json())
			.then(response => setData(response));

	}, []);

	let category = [...Array.from(new Set(booklist.map(item => item.category)))];
	let categorydata = category.map((str) => ({ value: str }));

	const searchdata = (data: any) => {
		setSearchData(data);


	}
	return (
		<div>
			<Searchitems booklist={booklist} searchdata={searchdata} />
			{
				searchbook.length === 0 ?

					<Display booklist={booklist} cat={"All books"} />
					:
					<Display booklist={searchbook} cat={"Result"} />
			}

			{

				searchbook.length === 0 ?
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
					:
					null
			}
		</div>
	);


}

export default Parent;

