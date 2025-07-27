import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Panel } from "../pages/Panel";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/panel" element={<Panel />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}