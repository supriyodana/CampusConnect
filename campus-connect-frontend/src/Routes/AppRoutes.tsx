import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import NoticeBoard from "../Pages/NoticeBoard";
import Profile from "../Pages/Profile";
import Classroom from "../Pages/Classroom";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notice-board" element={<NoticeBoard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/classroom" element={<Classroom />} />
        </Routes>
    )
}