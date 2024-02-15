import { FaRegBell } from "react-icons/fa"
import AdminSidebar from "../components/AdminSidebar"
import { BsSearch } from "react-icons/bs"
import userImg  from "../assets/userimg.png"
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../assets/data.json"

// const userImg = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fuser%2F&psig=AOvVaw3l0eqLnEVPLwmmzC6ijdNP&ust=1708022676041000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPjHi7y-q4QDFQAAAAAdAAAAABAE"

const Dashboard = () => {
  return (
    <div className="admin-container">
      
      {/* SideBar */}

      <AdminSidebar />
      
      {/* Main */}

      <main className="dashboard">

        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Seach for data, user, docs" />
          <FaRegBell />
          <img src={userImg} alt="userImage" />
        </div>

        <section className="widget-container">
          <WidgetItem
            percent={80}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0,115,255)"
          
          />
          <WidgetItem
            percent={-20}
            
            value={400}
            heading="Users"
            color="rgb(0 198 202)"
          
          />
          <WidgetItem
            percent={60}
            amount={true}
            value={23000}
            heading="Transaction"
            color="rgb(255, 196 , 0)"
          
          />
          <WidgetItem
            percent={30}
           
            value={1000}
            heading="Products"
            color="rgb(76 0 255)"
          
          />
          
        </section>

        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/* Graph here */}
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {
                data.categories.map((i) => (
                  <CategoryItem
                    key={i.heading}
                heading={i.heading}
                value={i.value}
                color={`hsl(${i.value*4},${i.value}%,55%)`}
              />
                ))
              }
            </div>
          </div>
        </section>

      </main>
    </div>
  )
};

interface WidgetItemProps{
  heading: string,
  value: number,
  percent: number,
  color: string,
  amount?:boolean
}

const WidgetItem = ({heading,value,percent,color,amount=false}:WidgetItemProps) =>(
  <article className="widget" >
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {
        percent > 0 ? (<span className="green"> <HiTrendingUp/> +{percent}%{" "} </span> )
                     : (<span className="red"> <HiTrendingDown/> -{percent}%{" "} </span>)
      }
    </div>

    <div className="widget-circle"
      style={{
        background:`conic-gradient(
          ${color} ${Math.abs(percent)/100*360}deg,
          rgb(255,255,255) 0
        )`
      }}
    >
      <span style={{ color }}>{ percent}%</span>
    </div>

  </article>
)

interface CategoryItemProps{
  color: string,
  value: number,
  heading:string,
}

const CategoryItem = ({color,value,heading}:CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{
        backgroundColor: color,
        width:`${value}%`
      }}></div>
    </div>
    <span>{ value}%</span>
  </div>
)

export default Dashboard