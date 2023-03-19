import {
  Dashboard,
  Discipline,
  Doubts,
  FavChart,
  Library,
  Logout,
  Message,
  Notify,
  Report,
  Schedule,
  Setting,
  Video,
} from "@/assets/icon";

const data = [
  {
    id: 1,
    name: "dashboard",
    icon: <Dashboard />,
    url: "/dashboard",
  },
  {
    id: 2,
    name: "library",
    icon: <Library />,
    url: "/library",
  },
  {
    id: 3,
    name: "test",
    icon: <FavChart />,
    url: "/test",
  },
  {
    id: 3,
    name: "video",
    icon: <Video />,
    url: "/video",
  },
  {
    id: 4,
    name: "report",
    icon: <Report />,
    url: "/report",
  },
  {
    id: 5,
    name: "discipline",
    icon: <Discipline />,
    url: "/discipline",
  },
  {
    id: 6,
    name: "doubts",
    icon: <Doubts />,
    url: "/doubts",
  },
  {
    id: 7,
    name: "message",
    icon: <Message />,
    url: "/message",
  },
  {
    id: 8,
    name: "schedule",
    icon: <Schedule />,
    url: "/schedule",
  },
  {
    id: 8,
    name: "notify",
    icon: <Notify />,
    url: "/notify",
  },
  {
    id: 8,
    name: "setting",
    icon: <Setting />,
    url: "/setting",
  },
  {
    id: 8,
    name: "logout",
    icon: <Logout />,
    url: "/logout",
  },
];

export default data;
