import React from 'react'
import Welcome from '../Pages/Welcome/Welcome';
import { createBrowserRouter, } from "react-router-dom";
import Home from '../Pages/Home/Home';

const MainRouter = createBrowserRouter([ 
  {path: "/", element: <Welcome />,},
  {
    path: "/home",
    element: <Home />,
    loader: async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((props)=>{
          var date = new Date(props.timestamp);
          date = date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()+
          " "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds();
          var lat  = props.coords.latitude;
          var lon  = props.coords.longitude;
          console.log(date);
        },
        ()=>{
          console.log("No acsses location");
      });
      }
    },
  },
]);

export default MainRouter