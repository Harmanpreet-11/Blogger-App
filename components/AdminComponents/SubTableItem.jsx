import { mongo } from 'mongoose';
import React from 'react'

const SubTableItem = ({email,mongoId,deleteEmail, date}) => {

    const emailDate = new Date(date);
  return (
        <tr className='bg-white border-b text-left'>
           <th scope='row' className='px-6 py-4 text-gray-900 whitespace-nowrap'>
            {email?email: "No Email"}
           </th>

           <td className='px-6 py-4 hidden sm:block'>
            {emailDate.toDateString()}
           </td>
           <td className='px-6 py-4 cursor-pointer' onClick={()=>deleteEmail(mongoId)}>
            X
           </td>
        </tr>  
  )
}

export default SubTableItem