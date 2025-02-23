import MetaLogo from "../assets/meta-logo.png";
import { Link } from "react-router-dom";
import {
  MdSpaceDashboard,
  MdPeople,
  MdBusiness,
  MdAccessTime,
  MdAttachMoney,
  MdWork,
  MdPersonAdd,
  MdEventNote,
  MdCalendarToday,
  MdSettings,
} from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

const DashboardSidebar = () => {
  const menus = [
    { icon: <MdSpaceDashboard />, title: "Dashboard", path: "/dashboard" },
    { icon: <MdPeople />, title: "Employees", path: "/employees" },
    { icon: <MdBusiness />, title: "Departments", path: "/departments" },
    { icon: <MdAccessTime />, title: "Attendance", path: "/attendance" },
    { icon: <MdAttachMoney />, title: "Payroll", path: "/payroll" },
    { icon: <MdWork />, title: "Jobs", path: "/jobs" },
    { icon: <MdPersonAdd />, title: "Recruitment", path: "/recruitment" },
    { icon: <MdEventNote />, title: "Leaves", path: "/leaves" },
    { icon: <MdCalendarToday />, title: "Holidays", path: "/holidays" },
    { icon: <MdSettings />, title: "Settings", path: "/settings" },
  ];

  return (
    <div className="flex flex-col items-start justify-center p-4 bg-gray-50 w-72 h-screen">
      <div className="flex gap-2 items-center">
        <img src={MetaLogo} alt="" width={40} height={40} />
        <h1 className="text-2xl font-bold font-content">HRM System</h1>
      </div>
      <ul className="flex-grow w-full mt-4 space-y-2">
        {menus.map((menus, index) => (
          <li key={index}>
            <Link
              to={menus.path}
              className="flex items-center px-2 py-4 gap-2 rounded-md hover:bg-gray-100 hover:border-gray-200 focus:border focus:border-gray-300"
            >
              {menus.icon}
              <span>{menus.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center w-full">
        <div className="flex gap-2 justify-between">
          <span className="flex gap-2 justify-center items-center p-2 cursor-pointer bg-gray-800 rounded-xl">
            {
              <FaLightbulb
                className="text-white text-2xl"
                width={48}
                height={48}
              />
            }
            <p className="text-white pr-1">Dark</p>
          </span>
          <span className="flex gap-2 justify-center items-center p-2 cursor-pointer bg-gray-100 rounded-xl">
            {
              <FaRegLightbulb
                className="text-gray-800 text-2xl"
                width={48}
                height={48}
              />
            }
            <p className="text-gray-800 pr-1">Dark</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
