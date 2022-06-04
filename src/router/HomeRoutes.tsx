import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

const homeUrl = process.env.PUBLIC_URL;

export const homeRoutes = [
    {
        path:homeUrl,
        exact : true,
        children: <Home />
    },
    {
        path:homeUrl + "/user_management",
        exact : false,
        children: <UserManagement />
    },
    {
        path:homeUrl + "/setting",
        exact : false,
        children: <Setting />
    },
    {
        path:"*",
        exact : false,
        children: <Page404 />
    },
]