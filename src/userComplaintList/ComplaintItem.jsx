import React from 'react'

const complaintItem = ({ id, subject, status, date }) => {
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{subject}</td>
            <td>{status}</td>
            <td>{date}</td>
        </tr>
    )
}

export default complaintItem