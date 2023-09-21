import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Books.css'
import Button from '../Button';
import Input from '../Input';


function BookList() {
  
  return (
    <main id="container">
          <header className="container__heading">
            <h1 className="container__heading-title">Book List</h1>
            <div>
              <Input placeholder="Search book"  />
              <Button label="Add book" primary />
            </div>
          </header>
          <section className="container__content">
            <table className="content__table">
                <thead className="table__header">
                  <tr className="table__row">
                    <th className="table__heading">Name</th>
                    <th className="table__heading">Author</th>
                    <th className="table__heading">Topic</th>
                    <th className="table__heading">Action</th>
                  </tr>
                </thead>
                    <tbody className="table__body">
                      <tr className="table__row">
                          <td className="table__data">nameTest</td>
                          <td className="table__data">authorTest</td>
                          <td className="table__data">topicTest</td>
                          <td className="table__data">
                              <Button label={<FontAwesomeIcon icon={faPenToSquare} />} small warn />
                              <Button label={<FontAwesomeIcon icon={faTrash} />} small danger />
                          </td>
                      </tr>
                    </tbody>
            </table>
            
          </section>
        </main>
  )
}

export default BookList;