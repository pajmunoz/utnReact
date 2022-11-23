import { Route, Routes } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Registro from "../Pages/Registro/Registro";
import Main from "../Pages/Main";
import Profile from "../Pages/Profile/Profile";
import DetailPage from "../Pages/DetailPage/DetailPage";
import Login from "../Pages/Login/Login";
import BuyDetail from "../Pages/BuyDetail/BuyDetail";
import Congrats from "../Pages/Congrats/Congrats";


export default function RouteProvider() {
    return (
        <Routes>
            <Route path="/producto/:id" element={<DetailPage />} />
            <Route path="/" element={<Main />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/buy-detail" element={<BuyDetail />} />
            <Route path="/congrats" element={<Congrats />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}
