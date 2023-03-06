import React from "react";
import {Routes, Route} from "react-router-dom";
import {Home} from "../components/pages/Home";
import About from "../components/About";
import Login from "../components/Login";
import Extra from "../components/Extra";
import Profile from "../components/Profile";
import Authentication from "../auth/middleware/Authentication";
import Authorization from "../auth/middleware/Authorization";
import PERMISSIONS from "../auth/permissions/Permissions";

const RoutePath = () => {
 
	return (
		<Routes>
			<Route path='/' element={<Home />}/>
			<Route element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_ABOUT, PERMISSIONS.CAN_VIEW_ALL]}/>} >
				<Route path='about' element={<About/>}/>
			</Route>
			<Route element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_EXTRA, PERMISSIONS.CAN_VIEW_ALL]}/>} >
				<Route path='extra' element={<Extra/>}/>
			</Route>
			<Route
				path='profile'
				element={
					<Authentication location={''} user={{}}>
						<Profile/>
					</Authentication>
				}
			/>
			<Route path='login' element={<Login/>} />
		</Routes>
	);
	
};

export default RoutePath;
