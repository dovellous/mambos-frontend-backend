import React, { Suspense, lazy } from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import {Loader} from "../components/layout/widgets/preloader/Loader";
import Authentication from "../auth/middleware/Authentication";
import Authorization from "../auth/middleware/Authorization";
import PERMISSIONS from "../auth/permissions/Permissions";
const Header        = lazy(() => import("../components/layout/header/Header"));
const Navigation    = lazy(() => import("../components/layout/header/Navigation"));
const Footer        = lazy(() => import("../components/layout/footer/Footer"));
const Home          = lazy(() => import("../components/pages/landing/Home"));
const Dashboard     = lazy(() => import("../components/pages/landing/Dashboard"));
const Profile       = lazy(() => import("../components/pages/settings/Profile"));
const Login         = lazy(() => import("../components/pages/auth/Login"));

const RoutePath = () => {
	
	const location:any = useLocation();
	
	const loginPath:string = '/auth/sign-in';
	
	const noNavigationOnViews:string[] = ['/auth/sign-in', '/auth/sign-up', '/auth/forgot-password', '/auth/change-password', '/auth/email-verification'];
 
	return (
		<Suspense fallback={<Loader />}>
		<Routes>
			<Route path='/home' element={<Home />}/>
			{!noNavigationOnViews.includes(location.path) && (
				<>
					<Header />
					<Navigation />
				</>
			)}
			<Route element={<Authorization loginPath={loginPath} permissions={[PERMISSIONS.CAN_VIEW_DASHBOARD, PERMISSIONS.CAN_VIEW_ALL]}/>} >
				<Route path='/' element={<Dashboard />}/>
			</Route>
			<Route
				path='/settings/profile'
				element={
					<Authentication loginPath={loginPath} >
						<Profile/>
					</Authentication>
				}
			/>
			{!noNavigationOnViews.includes(location.path) && (
				<Footer />
			)}
			<Route path='/auth/sign-in' element={<Login/>} />
			<Route path='/auth/sign-up' element={<Login/>} />
			<Route path='/auth/forgot-password' element={<Login/>} />
			<Route path='/auth/change-password' element={<Login/>} />
			<Route path='/auth/email-verification' element={<Login/>} />
		</Routes>
		</Suspense>
	);
	
};

export default RoutePath;
