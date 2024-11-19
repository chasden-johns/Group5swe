import * as React from 'react'
import { Outlet } from "react-router-dom"
import Layout from '@/components/layout'

const App = () => {
  return (
      <Layout>
        <div className="flex flex-col h-full bg-red-300">
          <Outlet />
        </div>
      </Layout>
  )
}


export default App