import { Suspense, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import {
	Ghost,
	GhostIcon,
	Home,
	Package,
	Package2,
	SettingsIcon,
	ShoppingCart,
	Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { Navbar } from '@/components/molecules/navbar';
import { Loader } from '@/components/atoms/loader';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

const AdminLayout = () => {
	const [isSmall, setIsSmall] = useState(true);

	const navigationRoutes: navigationRoutes[] = [
		{
			label: 'Dashboard',
			link: 'dashboard',
			icon: <Home className="h-6 w-6" />,
			badge: 0,
		},
		{
			label: 'Products',
			link: 'products',
			icon: <Package className="h-6 w-6" />,
			badge: 6,
		},
		{
			label: 'Customers',
			link: 'customers',
			icon: <Users className="h-6 w-6" />,
			badge: 0,
		},
		{
			label: 'Orders',
			link: 'orders',
			icon: <ShoppingCart className="h-6 w-6" />,
			badge: 10,
		},
	];

	const bottomNavigationRoutes: navigationRoutes[] = [
		{
			label: 'Settings',
			link: 'settings',
			icon: <SettingsIcon className="h-6 w-6" />,
			badge: 0,
		},
	];

	return (
		<TooltipProvider>
			<div className="flex min-h-screen w-full">
				<div
					className={`fixed hidden border-r bg-muted/40 lg:block h-screen transition-all duration-500 ${
						isSmall ? 'w-[var(--sidebarwsm)]' : 'w-[var(--sidebarw)]'
					}`}
				>
					<div className="flex h-full max-h-screen flex-col gap-2">
						<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
							<span
								onClick={() => setIsSmall(!isSmall)}
								className={`flex items-center ${
									isSmall && 'justify-center'
								} gap-2 font-semibold`}
							>
								<Package2 className="h-6 w-6" />
								{!isSmall && <span className="">Acme Inc</span>}
							</span>
							<Button
								variant="outline"
								size="icon"
								className="ml-auto h-8 w-8 sr-only"
							>
								{/* <Bell className="h-4 w-4" /> */}
								<span>Toggle notifications</span>
							</Button>
						</div>
						<SimpleBar
							autoHide={false}
							className="max-h-[calc(100vh-140px)]"
						>
							<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
								{navigationRoutes.map((item, idx) => (
									<NavLink
										key={idx}
										to={item.link}
									>
										{({ isActive }) => (
											<Tooltip>
												<TooltipTrigger asChild>
													<div
														className={`flex items-center gap-3 rounded px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
															isSmall && 'justify-center'
														} ${
															isActive &&
															'bg-primary text-secondary hover:text-secondary'
														}`}
													>
														{item.icon}
														{!isSmall && item.label}
														{!isSmall && item.badge > 0 && (
															<Badge
																className={`ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
																	isActive &&
																	'bg-secondary text-primary hover:text-primary'
																}`}
															>
																{item.badge}
															</Badge>
														)}
													</div>
												</TooltipTrigger>
												{isSmall && (
													<TooltipContent
														side="right"
														sideOffset={5}
													>
														{item.label}
													</TooltipContent>
												)}
											</Tooltip>
										)}
									</NavLink>
								))}
							</nav>
						</SimpleBar>

						<div className="mt-auto border-t p-2">
							{bottomNavigationRoutes.map((item, idx) => (
								<NavLink
									key={idx}
									to={item.link}
								>
									{({ isActive }) => (
										<Tooltip>
											<TooltipTrigger asChild>
												<div
													className={`flex items-center gap-3 rounded px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
														isSmall && 'justify-center'
													} ${
														isActive &&
														'bg-primary text-secondary hover:text-secondary'
													}`}
												>
													{item.icon}
													{!isSmall && item.label}
													{!isSmall && item.badge > 0 && (
														<Badge
															className={`ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
																isActive &&
																'bg-secondary text-primary hover:text-primary'
															}`}
														>
															{item.badge}
														</Badge>
													)}
												</div>
											</TooltipTrigger>
											{isSmall && (
												<TooltipContent
													side="right"
													sideOffset={5}
												>
													{item.label}
												</TooltipContent>
											)}
										</Tooltip>
									)}
								</NavLink>
							))}
						</div>
					</div>
				</div>
				<div
					className={`ml-auto flex flex-col w-full ${
						isSmall
							? 'lg:w-[calc(100%-var(--sidebarwsm))]'
							: 'lg:w-[calc(100%-var(--sidebarw))]'
					}`}
				>
					<Navbar
						navigationRoutes={navigationRoutes}
						isSmall={isSmall}
					/>
					<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 mt-16">
						<Suspense fallback={<Loader />}>
							<Outlet />
						</Suspense>
					</main>
				</div>
			</div>
		</TooltipProvider>
	);
};

export default AdminLayout;
