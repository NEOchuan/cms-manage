import { Button } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div>
        <Button type='primary'>Primary Button</Button>
        <Outlet/>
    </div>
  )
}


