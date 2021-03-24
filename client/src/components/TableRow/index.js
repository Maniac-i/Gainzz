import React from 'react';

function TableRow(props) {
  return(
    <tr>
      <th scope="row">{props.date}</th>
      <td>{props.sets}</td>
      <td>{props.reps}</td>
      <td>{props.weight}</td>
    </tr>
  )
}

export default TableRow;