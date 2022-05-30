import React from 'react';
import { useState } from 'react';
import { bookstyle } from './bookshelve';
import "./Style.css";


const Categroy = (booklist: any) => {

	const uniqueValuesSet = new Set();


	const filteredArr = booklist.filter((obj: { category: string; }) => {
		// check if name property value is already in the set
		const isPresentInSet = uniqueValuesSet.has(obj.category);

		// add name property value to Set
		uniqueValuesSet.add(obj.category);

		// return the negated value of
		// isPresentInSet variable
		return !isPresentInSet;
	});


	return uniqueValuesSet;

}

export default Categroy;