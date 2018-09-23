import React from 'react'
export const UserDetail=({data,handleDelete})=>{
    return (
        <div className="card-body">
            <div className="wrapper">
                <img src={data.avatar} alt="CZ" className="image--cover" />
            </div>
            <p className="display-name">{data.first_name} </p>
            <button className="button button-primary" onClick={(e)=>{handleDelete(data)}} >
                <p className="button"><span>Delete </span></p>
            </button>
        </div>
    )
}