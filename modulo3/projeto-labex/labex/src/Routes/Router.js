import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../RegularArea/Home'
import TripList from '../RegularArea/tripList'
import JoinTrip from '../RegularArea/jointrip'
import LogIn from '../AdmArea/logIn'
import AdminPage from '../AdmArea/adminPage'
import CreateTrips from '../AdmArea/CreateTrip'
import DetailsPage from '../AdmArea/DetailsPage'
import ErrorPage from '../Components/ErrorPage'

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="trips/" element={<TripList/>}/>
            <Route path="trips/join-trip/" element={<JoinTrip/>}/>
            <Route path="login/" element={<LogIn/>}/>
            <Route path="admin/" element={<AdminPage/>}/>
            <Route path="admin/create-trips/" element={<CreateTrips/>}/>
            <Route path="admin/details/:id" element={<DetailsPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}