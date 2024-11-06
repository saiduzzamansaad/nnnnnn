import React from "react";
import { useRoutes } from "react-router-dom" ;
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";
import Five from "./pages/Five";
import FinalOutput from "./pages/FinalOutput";
import Download from "./pages/Download";



const ProjectRoutes = () =>{
    let element = useRoutes([
        
            {path: "/", element:<Home/>},
            {path: "/", element:<NotFound/>},
            {
                path: "0ne", 
                element:<One/>,

            },
            {
                path: "two", 
                element:<Two/>,

            },

            {
                path: "three", 
                element:<Three/>,

            },

            {
                path: "four", 
                element:<Four/>,

            },
            {
                path: "five", 
                element:<Five/>,

            },

            {
                path: "finaloutput", 
                element:<FinalOutpur/>,

            },

            {
                path: "download", 
                element:<Download/>,

            },

            

        
    ]);
    return element
};

export default ProjectRoutes;

