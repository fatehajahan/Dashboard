import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'
import { Outlet } from 'react-router'

const Home = () => {
    return (
        <div className='flex'>
            <div>
                <Sidebar />
            </div>
            <div className='w-full'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Home