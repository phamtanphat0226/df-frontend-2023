import React, { createRef, useRef } from 'react';
import './Books.css'
import Button from '../Button';
import Input from '../Input';
import TableBooksHead from './TableBooksHead';
import BooksTable from './TableBooksBody';
import Dialog from '../Dialog';
import FormDialog from '../Dialog/FormDialog';


function BookList() {
  const dialogRef = useRef()
  
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
              <BooksTable />
            </table>
            
      </section>
       <Dialog
        ref={dialogRef}
        content={<FormDialog/>}
    
        options={{
          title: "Add book",
          submitLabel: "Đồng ý",
          cancelLabel: "Hủy",
          allowClickOut: true,
        }} 
        
      />

      </main>
  )
}

export default BookList;