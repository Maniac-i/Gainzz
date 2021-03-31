import React from 'react';

 function DetailsTable(props) {
   return(
<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Sets</th>
      <th scope="col">Reps</th>
      <th scope="col">Weight</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {props.children}
  </tbody>
</table>
   )
 }

 export default DetailsTable;