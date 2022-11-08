import React from 'react'
import AsideLeft from './AsideLeft'
import MainContent from './MainContent'
import NavbarLeft from './NavbarLeft'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const Container = () => {
    return (
        <Router>
            <div className="container">
                <NavbarLeft />
                <Routes>
                    <Route path='*' element={<h1>404 not found</h1>}></Route>
                    <Route path='/' element={<MainContent />}></Route>
                    <Route path='/home' element={<MainContent />}></Route>
                    <Route path='/explore' element={<h1>explore</h1>}></Route>
                    <Route path='/communities' element={<h1>communities</h1>}></Route>
                    <Route path='/notifications' element={<h1>notifications</h1>}></Route>
                    <Route path='/messages' element={<h1>messages</h1>}></Route>
                    <Route path='/bookmarks' element={<h1>bookmarks</h1>}></Route>
                    <Route path='/profile' element={<h1>profile</h1>}></Route>
                    <Route path='/more' element={<h1>more</h1>}></Route>
                </Routes>
                <AsideLeft />
            </div>
        </Router>
    )
}

export default Container