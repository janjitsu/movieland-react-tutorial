import { useEffect, useContext } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Search from 'pages/Search/Search.js';
import Home from 'pages/Home/Home.js';
import { SessionContext } from "providers/Session";

const AppRoutes = () => {
    const { user, checkUserLogin } = useContext(SessionContext);
    useEffect(() => {
        isValid();
    }, []);

    const isValid = async () => {
        await checkUserLogin();
    };

    return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>

    );
}

export default AppRoutes;
