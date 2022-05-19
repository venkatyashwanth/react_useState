import React from 'react'

export default function Myfunction(props) {
  return (
    <>
        <ul>
            {props.myarr.map((val,index)=>
                <li key={index}>{val}</li>
            )}
        </ul>
    </>
  )
}
