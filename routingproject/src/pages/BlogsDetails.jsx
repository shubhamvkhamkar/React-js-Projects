import React from 'react'
import Header from '../comman/Header';
import { useLocation } from 'react-router-dom';
import { blogs } from '../Data/blogs';

export default function BlogsDetails() {
    let uselocation = useLocation();
    let currentId= uselocation.pathname.split('/')[2]
    let currentData = blogs.filter((v)=> v.id==currentId)[0 ]
      return (
    <div>
        <Header/>
        <>
         <h1>{currentData.title}
              
         </h1>
         <p>{currentData.body}</p>
         </>
    </div>
  )
}
