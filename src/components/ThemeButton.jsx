import React, { useState, useEffect } from "react";

const ThemeButton = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    useEffect(() => {
        if (localStorage.getItem("theme") === null) setTheme("light");
        if (localStorage.getItem("theme") === "light") setTheme("light");
        if (localStorage.getItem("theme") === "dark") setTheme("dark");

        console.log(theme)
    }, []);

    useEffect(() => {
        setCurrentTheme(theme);

        if (theme === "dark") {
            document.documentElement.style.colorScheme = 'dark'
            document.body.classList.add("dark-theme")
        } else {
            document.documentElement.style.colorScheme = 'light'
            document.body.classList.remove("dark-theme")
        }
    }, [theme]);

    const setCurrentTheme = (currentTheme) => {
        localStorage.setItem("theme", currentTheme);
    };

    const changeTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={(e) => changeTheme(e)}
                checked={theme === 'dark' ? true : false}
            />

            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Dark Theme
            </label>
        </div>
    )
}

export default ThemeButton