import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavbarLeft = () => {
    return (
        <nav>
            <Link to={'/home'} className='link-logo'>
                <i className="bi bi-twitter"></i>
            </Link>
            <ul>
                <li>
                    <NavLink to={'/home'} className={({ isActive }) => isActive ? 'link-active' : 'link-default'}>
                        <i className="bi bi-house-door-fill"></i>
                        <i className="bi bi-house-door"></i>
                        <span>Home</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/explore'} className={({ isActive }) => isActive ? 'link-active' : 'link-default'}>
                        <i className="bi bi-hash"></i>
                        <i className="bi bi-hash"></i>
                        <span>Explore</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/communities'} className={({ isActive }) => isActive ? 'link-active' : 'link-default'}>
                        <i className="bi bi-people-fill"></i>
                        <i className="bi bi-people"></i>
                        <span>Communities</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/notifications'} className={({ isActive }) => isActive ? 'link-active' : 'link-default'}>
                        <i className="bi bi-bell-fill"></i>
                        <i className="bi bi-bell"></i>
                        <span>Notifications</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/messages'} className={({ isActive }) => isActive ? 'link-active' : 'link-default'}>
                        <i className="bi bi-envelope-fill"></i>
                        <i className="bi bi-envelope"></i>
                        <span>Messages</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/bookmarks'} className={({ isActive }) => isActive ? 'link-active' : 'link-default'}>
                        <i className="bi bi-bookmark-fill"></i>
                        <i className="bi bi-bookmark"></i>
                        <span>Bookmarks</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/profile'} className={({ isActive }) => isActive ? 'link-active' : 'link-default'}>
                        <i className="bi bi-person-fill"></i>
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/more'} className={({ isActive }) => isActive ? 'link-active' : 'link-default'}>
                        <i className="bi bi-three-dots"></i>
                        <i className="bi bi-three-dots"></i>
                        <span>More</span>
                    </NavLink>
                </li>
            </ul>
            <button className='tweet-btn'>Tweet</button>
            <div className="profile">
                <div className="profile__img">
                    <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="profile photo" />
                </div>
                <div className="profile__info">
                    <span>Guido Pastorino</span>
                    <span>@PastorinoGuido</span>
                </div>
                <div className="profile__btn">
                    <button><i className="bi bi-three-dots"></i></button>
                </div>
            </div>
        </nav>
    )
}

export default NavbarLeft