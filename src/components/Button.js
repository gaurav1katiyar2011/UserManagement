import React from 'react';

const Button = (props) => {
  return (
    <button className="button button-primary" onClick={(e)=>{this.props.handleDelete()}}>
      <p className="button"><span>Delete </span></p>
      </button>
  )
}
export default Button