import React from 'react'
import Link from 'next/link'

const AllRoutes = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/beachlisting">Beach Listing</Link>
      <Link href="/admin-dashboard">Admin Dashboard</Link>
    </nav>
  )
}

export default AllRoutes