import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

import useLocalStorage from '../../hooks/useLocalStorage';
import './Books.css'
import Button from '../Button';
import Input from '../Input';
import TableBooksHead from './TableBooksHead';
import Dialog from '../Dialog';
import useLocalStorage from '../../hooks/useLocalStorage';


function BookList() {
  const dialogRef = useRef()
  const [books, addbooks, editbooks, deletebooks] = useLocalStorage("bookList", [
    {
      name: "123",
      author: "123",
      topic: "133"
    }
  ])

  return (
    <main id="container">
          <header className="container__heading">
            <h1 className="container__heading-title">Book List</h1>
            <div>
              <Input placeholder="Search book"  />
              <Button label="Add book" primary onClick={() => dialogRef.current.handleOpen()}/>
            </div>
          </header>
          <section className="container__content">
            <table className="content__table">
              <TableBooksHead />
              <tbody className="table__body">
              {books.map((book, index) => {
                return (
                <tr className="table__row" key={index}>
                  <td className="table__data">{book.name}</td>
                  <td className="table__data">{book.author}</td>
                  <td className="table__data">{book.topic}</td>
                  <td className="table__data">
                      <Button label={<FontAwesomeIcon icon={faPenToSquare} />} small warn />
                      <Button label={<FontAwesomeIcon icon={faTrash} />} small danger />
                  </td>
                </tr>  
                )
              })}  
            </tbody>
            </table>
            
      </section>
      <Dialog
        type="addBookForm"
        ref={dialogRef}
        options={{
          title: "Add book",
          submitLabel: "Submit",
          cancelLabel: "Cancel",
          allowClickOut: true,
        }} 
        
      />

      </main>
  )
}

export default BookList;