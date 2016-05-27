import React, { Component, PropTypes } from 'react'
import style from './User.scss'

export const User = ({ user, onClick }) => (
  <div className={`row ${style.row}`} onClick={onClick}>
    <div className={`col-sm-4 ${style.leftPanel}`}>
        <img className={style.avatar} src={user.avatarUrl}/>
      </div>
      <div className="col-sm-8">
        <div className={style.userName}>{user.fullName} - {user.email}</div>
      </div>
    </div>
)

export default User
