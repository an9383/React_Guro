import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import NewsLetter from './NewsLetter'
// import Banner from '../banner/Banner'

const Layout: React.FC = () => (
    <div>
        {/* <Banner /> */}
        <Header />
        <main id="main">
            <Outlet />
        </main>
        <NewsLetter />
        <Footer />
    </div>
)

export const LayoutNone: React.FC = () => (
    <div>
        <Outlet />
    </div>
)

export default Layout
