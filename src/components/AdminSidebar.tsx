import { IconType } from "react-icons";
import { Link,  useLocation,Location } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill, } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

const AdminSidebar = () => {

  // const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside>
      <h2>logo.</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <Li
            url="/admin/dashboard"
            text="Dashboard"
            Icon={RiDashboardFill}
            location={location}
          />
          <Li
            url="/admin/product"
            text="Product"
            Icon={RiShoppingBag3Fill}
            location={location}
          />
          <Li
            url="/admin/customer"
            text="Customer"
            Icon={IoIosPeople}
            location={location}
          />
          <Li
            url="/admin/transaction"
            text="Transaction"
            Icon={AiFillFileText}
            location={location}
          />
         
        

          

        </ul>
      </div>
    </aside>
  )
};

interface LiProps {
  url: string,
  text: string,
  location: Location,
  Icon: IconType
}
const Li = ({url,location,Icon,text}:LiProps) => (
  <li style={ 
              {
                 backgroundColor:location.pathname.includes(url) ? "rgba(0,115,225,0.1)" : "white"
              }
            }
          >
            <Link to={url} style={{
              color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black"
            }} >
              <Icon/>
              {text}               
              </Link >
        </li>
)

export default AdminSidebar