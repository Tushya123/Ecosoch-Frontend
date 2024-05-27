import React from 'react'
import { Fragment } from 'react'
import BlogsBanner from '../components/Blogs/BlogsBanner'
import BlogList from '../components/Blogs/BlogList'

function Blogs() {
  return (
    <Fragment>
      <BlogsBanner/>
      <BlogList/>
    </Fragment>
  )
}

export default Blogs
