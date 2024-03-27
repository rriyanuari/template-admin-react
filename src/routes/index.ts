import { lazy } from 'react';

const Dashboard = lazy(() => import('@/pages/dashboard'));

const Products = lazy(() => import('@/pages/products'));
const ProductForm = lazy(() => import('@/pages/products/productForm'));

const CustomerPage = lazy(() => import('@/pages/customers/'));

const Settings = lazy(() => import('@/pages/settings'));

const coreRoutes = [
	{
		path: 'dashboard',
		subRoutes: [
			{
				path: '',
				title: 'Dashboard',
				component: Dashboard,
			},
		],
	},
	{
		path: 'products',
		subRoutes: [
			{
				path: '',
				title: 'Products',
				component: Products,
			},
			{
				path: 'create',
				title: 'Create Product',
				component: ProductForm,
			},
		],
	},
	{
		path: 'customers',
		subRoutes: [
			{
				path: '',
				title: 'Customers',
				component: CustomerPage,
			},
		],
	},
	{
		path: 'settings',
		subRoutes: [
			{
				path: '',
				title: 'Settings',
				component: Settings,
			},
		],
	},
];

const routes = [...coreRoutes];
export default routes;
