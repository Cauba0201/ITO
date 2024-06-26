import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import AlertPage from "../pages/latency/AlertPage";
import ButtonPage from "../pages/latency/ButtonPage";
import DashboardMainPage from "../pages/dashboardmain/DashboardMainPage";
import PhoneCall from "../pages/phonecall/PhoneCall";
import DataTraffic from "../pages/datatraffic/DataTraffic";
import Support from "../pages/support/Support";
import MapView from "../pages/mapview/MapView";
import ManageTeamPage from "../pages/latency/ButtonPage";
import InvoicesBalances from "../pages/contact/InvoicesBalances";
import ContactInformationPage from "../pages/contact/ContactInformation";

// Icon
import HomeIcon from "@mui/icons-material/Home";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import SupportIcon from "@mui/icons-material/Support";
import MapIcon from "@mui/icons-material/Map";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/dashboard-main",
    element: <DashboardMainPage />,
    state: "dashboard-main",
    sidebarProps: {
      displayText: "Dashboard Main",
      icon: <HomeIcon />,
    },
  },
  {
    path: "/signalandquality",
    element: <DashboardPageLayout />,
    state: "signalandquality",
    sidebarProps: {
      displayText: "Signal & Quality",
      icon: <SignalCellularAltIcon />,
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "signalandquality.index",
      },
      {
        path: "/signalandquality/default",
        element: <DefaultPage />,
        state: "signalandquality.default",
        sidebarProps: {
          displayText: "Average Signal Level",
        },
      },
      {
        path: "/signalandquality/analytics",
        element: <AnalyticsPage />,
        state: "signalandquality.analytics",
        sidebarProps: {
          displayText: "Analytic",
        },
      },
      {
        path: "/signalandquality/saas",
        element: <SaasPage />,
        state: "signalandquality.saas",
        sidebarProps: {
          displayText: "Saas",
        },
      },
    ],
  },
  {
    path: "/phone-call",
    element: <PhoneCall />,
    state: "phone-call",
    sidebarProps: {
      displayText: "Phone Call",
      icon: <PhoneIcon />,
    },
  },
  {
    path: "/data-traffic",
    element: <DataTraffic />,
    state: "data-traffic",
    sidebarProps: {
      displayText: "Data Traffic",
      icon: <ArticleOutlinedIcon />,
    },
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Latency",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Alert",
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Button",
        },
      },
    ],
  },
  {
    path: "/contact",
    element: <ComponentPageLayout />,
    state: "contact",
    sidebarProps: {
      displayText: "Contact",
      icon: <SupportAgentIcon />,
    },
    child: [
      {
        path: "/contact/manage-team",
        element: <ManageTeamPage />,
        state: "contact.manage-team",
        sidebarProps: {
          displayText: "Manage Team",
        },
      },
      {
        path: "/contact/contact-information",
        element: <ContactInformationPage />,
        state: "contact.contact-information",
        sidebarProps: {
          displayText: "Contact Information",
        },
      },
      {
        path: "/contact/invoices-balances",
        element: <InvoicesBalances />,
        state: "contact.invoices-balances",
        sidebarProps: {
          displayText: "Invoices Balances",
        },
      },
    ],
  },
  {
    path: "/map-view",
    element: <MapView />,
    state: "map-view",
    sidebarProps: {
      displayText: "Map View",
      icon: <MapIcon />,
    },
  },
  {
    path: "/support",
    element: <Support />,
    state: "support",
    sidebarProps: {
      displayText: "Support",
      icon: <SupportIcon />,
    },
  },
];

export default appRoutes;
