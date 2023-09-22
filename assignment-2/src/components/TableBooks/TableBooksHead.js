import React from 'react'
import './Books.css'

function TableBooksHead() {
  return (
    <thead className="table__header">
        <tr className="table__row">
        <th className="table__heading">Name</th>
        <th className="table__heading">Author</th>
        <th className="table__heading">Topic</th>
        <th className="table__heading">Action</th>
        </tr>
    </thead>
  )
}

export default TableBooksHead;