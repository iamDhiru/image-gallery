import React from 'react'
import Dropdown from 'react-dropdown';
import Select from "react-select";
const User = ({handleChange, users, inputValue}) => {
// making list of users adding id and name to the list so that we can make it as options for dropdown
const userValues = users && users.map(user => ({
    value: user.id,
    label: user.name
  }));

  return (
        <div className=' ' style={{display:"flex", justifyContent:"center"}}>
            {/* <Dropdown 
              className='form-control'
              id="user"
              options={userValues}
              onChange={handleChange}
              placeholder="Select User" 
              /> */}
              <div style={{minWidth:"300px"}} className='col-sm w-100'>
              <Select
                  options={userValues}
                  name="user"
                  onChange={handleChange}
              />
            </div>
        </div>
  )
}

export default User