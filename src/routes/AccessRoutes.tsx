import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

export const PublicRoute = () => {
	const isLoggedIn = Cookies.get('myCredential');

	return isLoggedIn ? (
		<Navigate
			to="/dashboard"
			replace
		/>
	) : (
		<Outlet />
	);
};

export const PrivateRoute = () => {
	const isLoggedIn = Cookies.get('myCredential');

	return isLoggedIn ? (
		<Outlet />
	) : (
		<Navigate
			to="/auth"
			replace
		/>
	);
	return <Outlet />;
};
