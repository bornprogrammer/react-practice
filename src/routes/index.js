import React, { lazy } from "react";
import Contact from "../Pages/Contact";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Albums from "../Pages/Resources/Albums";
import Comments from "../Pages/Resources/Comments";
import Photos from "../Pages/Resources/Photos";
import Posts from "../Pages/Resources/Posts";
import Resource from "../Pages/Resources/Resource";
import Users from "../Pages/Resources/Users";
import Layout from "../components/Layout";
import { useRoutes } from "react-router-dom";
import Loadable from "../components/Loadable";
import PostDetail from "../Pages/Resources/PostDetail";
import Todo from "../Pages/Resources/Todo";

const AboutReadonly = Loadable(lazy(() => import("../Pages/About")));

const Routes = {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <AboutReadonly />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
        },
        {
            path: "/resource",
            element: <Resource />,
            children: [
                {
                    path: "comments",
                    element: <Comments />
                },
                {
                    path: "posts",
                    // index: true,
                    element: <Posts />,
                },
                {
                    path: "addposts",
                    // index: true,
                    element: <Posts />,
                },
                {
                    path: "posts/:postId",
                    element: <PostDetail />,
                },
                {
                    path: "photos",
                    element: <Photos />
                }
                ,
                {
                    path: "users",
                    element: <Users />
                },
                {
                    path: "albums",
                    element: <Albums />
                },
                {
                    path: "todo",
                    element: <Todo />
                }
            ]
        }
    ]
};

const MainRoutes = () => {
    console.log("main routes rendered");
    return useRoutes([Routes]);
}

export default React.memo(MainRoutes);