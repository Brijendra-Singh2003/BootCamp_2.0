"use client"

import React, { useState } from 'react'
import { DrowerRoot, Drower, DrowerTrigger } from '../Drawrer/Drower'

export default function StudentList({students = []}) {

    const [user, setUser] = useState({});

  return (
    <DrowerRoot>
        {students.map((student)=>{
            <DrowerTrigger><h1 onClick={()=>{setUser(student)}}>{student.name}</h1></DrowerTrigger>
        })}
        <Drower {...user} />
    </DrowerRoot>
  )
}
