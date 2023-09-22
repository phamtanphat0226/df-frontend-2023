import React from 'react'
import './Books.css'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import useLocalStorage from '../../hooks/useLocalStorage'

function BooksTable() {
  const [books] = useLocalStorage("bookList", [
    {
      name: "Lập Trình JavaScript Cơ Bản",
      author: 'John Doe',
      topic: 'HTML/CSS'
    },
    {
      name: "Lập Trình JavaScript Cơ Bản",
      author: 'John Doe',
      topic: 'HTML/CSS'
    },
  ])
  
  return (
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
  )
}

export default BooksTable