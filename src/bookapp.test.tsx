import React from 'react';
import { render, screen, getByText, fireEvent } from '@testing-library/react';

import Searchbook from './Compnents/searchbook';
import Display from './Compnents/DisplayBookshelve';
interface props {
  id: string,
  title: string,
  category: string,
  cover: {
    img: string
  }
}



const books: any = [{
  "id": "343625f0-0702-4f68-a482-9a79d6a05366",
  "title": "Fist of the North Star",
  "subtitle": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat.Nulla nisl.Nunc nisl.", "author": { "first_name": "Geri", "last_name": "Solleme", "email": "gsolleme0@cafepress.com" }, "publisher": "Geri Solleme", "publisherDate": "6 / 5 / 1959", "category": "Horror", "isbn": "0338475589", "pagecount": 75, "isEbook": false, "description": "Duis aliquam convallis nunc.Proin at turpis a pede posuere nonummy.Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.Integer ac neque.\n\nDuis bibendum.Morbi non quam nec dui luctus rutrum.Nulla tellus.\n\nIn sagittis dui vel nisl.Duis ac nibh.Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti.In eleifend quam a odio.In hac habitasse platea dictumst.", "cover": { "image": "https://random.imagecdn.app/500/150" }
}
]

test('Should check Data renders or not', () => {

  const book: any = {
    title: "Bela Kiss: Prologue"
  }
  const { container, getByText } = render(<Display books={books} categrory={"horror"} />);
  expect(getByText("Fist of the North Star")).toBeInTheDocument();

}



)



test('Should check it takes categrory or not', () => {

  const book: any = {
    title: "Bela Kiss: Prologue"
  }
  const { container, getByText } = render(<Display books={books} categrory={"horror"} />);
  expect(getByText("horror")).toBeInTheDocument();

}



)


const searchlist =
  [{
    "id": "343625f0-0702-4f68-a482-9a79d6a05366",
    "title": "Fist of the North Star", "subtitle": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.", "author": { "first_name": "Geri", "last_name": "Solleme", "email": "gsolleme0@cafepress.com" }, "publisher": "Geri Solleme", "publisherDate": "6/5/1959", "category": "Horror", "isbn": "0338475589", "pagecount": 75, "isEbook": false, "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.", "cover": { "image": "https://random.imagecdn.app/500/150" }
  },
  {
    "id": "631449ff-136c-4047-95fd-c483d96b091c",
    "title": "Bela Kiss: Prologue", "subtitle": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.", "author": { "first_name": "Stevena", "last_name": "Walak", "email": "swalak1@prlog.org" }, "publisher": "Stevena Walak", "publisherDate": "11/21/1983", "category": "Thriller", "isbn": "7788594524", "pagecount": 53, "isEbook": true, "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.", "cover": { "image": "https://random.imagecdn.app/500/150" }
  }, {
    "id": "41339827-1a1a-4ec8-a587-a560b031c2fe",
    "title": "Apache Territory ", "subtitle": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.", "author": { "first_name": "Dolley", "last_name": "Court", "email": "dcourt2@alibaba.com" }, "publisher": "Dolley Court", "publisherDate": "6/24/1957", "category": "Thriller", "isbn": "5925784702", "pagecount": 68, "isEbook": false, "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.", "cover": { "image": "https://random.imagecdn.app/500/150" }
  },
  {
    "id": "e540656e-f26d-43ef-93b9-56803fce7ab1",
    "title": "Grotesque (Gurotesuku)", "subtitle": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.", "author": { "first_name": "Herby", "last_name": "Riddington", "email": "hriddington3@e-recht24.de" }, "publisher": "Herby Riddington", "publisherDate": "6/28/2016", "category": "Science Fiction", "isbn": "7569411182", "pagecount": 78, "isEbook": true, "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.", "cover": { "image": "https://random.imagecdn.app/500/150" }
  },
  {
    "id": "f03a3c21-6002-44ba-a06b-2afb4af944b2",
    "title": "Cure, The", "subtitle": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.", "author": { "first_name": "Emlynne", "last_name": "Thirlwall", "email": "ethirlwall4@umn.edu" }, "publisher": "Emlynne Thirlwall", "publisherDate": "11/3/1974", "category": "Economic", "isbn": "5869582403", "pagecount": 81, "isEbook": false, "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.", "cover": { "image": "https://random.imagecdn.app/500/150" }
  }


  ]
let searchbook = {
  "id": "f03a3c21-6002-44ba-a06b-2afb4af944b2",
  "title": "Cure, The", "subtitle": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.", "author": { "first_name": "Emlynne", "last_name": "Thirlwall", "email": "ethirlwall4@umn.edu" }, "publisher": "Emlynne Thirlwall", "publisherDate": "11/3/1974", "category": "Economic", "isbn": "5869582403", "pagecount": 81, "isEbook": false, "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.", "cover": { "image": "https://random.imagecdn.app/500/150" }
}



it('Should be able to type input element', async () => {
  render(
    <Searchbook books={searchlist} searchbookresult={searchbook} />);

  const inputElement = screen.getByPlaceholderText(/Search books/i);
  fireEvent.change(inputElement, { target: { value: "Cure, The" } });
  expect((inputElement)).toBeInTheDocument();

}
)
