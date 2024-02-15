import Header from "./Header"
import { Outlet } from "react-router-dom";
import "../css/DashBoard.css"
import FrontInfo from "./FrontInfo";

const DashboardLayout = () => {
    // const [open , setOpen] = useState(false)
    return (
        <div>
            <div className="header-container">
            <Header />
            </div>
            <FrontInfo/>
            <div className="outlet-container">.
            <Outlet/>
            </div>
        </div>
    )
  }

export default DashboardLayout;