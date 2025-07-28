import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Panel } from "../pages/Panel";
import { SignIn } from "../pages/SignIn"  

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/panel" element={<Panel />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}