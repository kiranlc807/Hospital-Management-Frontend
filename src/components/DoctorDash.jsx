import DoctorHeader from "./DoctorHeader"
import { Outlet } from "react-router-dom";
import "../css/DashBoard.css"
import { Provider } from "react-redux";
import appStore from "../utils/store/AppStore";

const DashboardLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="header-container">
            <DoctorHeader/>
            </div>
            <div className="outlet-container">
            <Outlet/>
            </div>
        </Provider>
    )
  }

export default DashboardLayout;