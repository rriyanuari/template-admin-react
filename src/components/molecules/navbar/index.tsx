import { ModeToggle } from '@/components/atoms/darkMode/mode-toggle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CircleUser, Menu, Package2, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Navbar = (props: {
	navigationRoutes: navigationRoutes[];
	isSmall: boolean;
}) => {
	const { navigationRoutes, isSmall } = props;

	return (
		<header
			className={`z-50 fixed w-full flex h-14 items-center gap-4 border-b bg-primary-foreground px-4 lg:h-[60px] lg:px-6 ${
				isSmall
					? 'lg:w-[calc(100%-var(--sidebarwsm))]'
					: 'lg:w-[calc(100%-var(--sidebarw))]'
			}`}
		>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="shrink-0 lg:hidden"
					>
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent
					side="left"
					className="flex flex-col"
				>
					<nav className="grid gap-2 text-lg font-medium">
						<div className="flex items-center gap-2 text-lg font-semibold py-3 border-b">
							<Package2 className="h-6 w-6" />
							<span>Acme Inc</span>
						</div>

						{navigationRoutes.map((item, idx) => (
							<NavLink
								key={idx}
								to={item.link}
							>
								{({ isActive }) => (
									<div
										className={`mx-[-0.65rem] flex items-center gap-4 rounded px-3 py-2 text-muted-foreground hover:text-foreground ${
											isActive &&
											'bg-primary text-secondary hover:text-secondary'
										}`}
									>
										{item.icon}
										{item.label}
										{item.badge > 0 && (
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
								)}
							</NavLink>
						))}
					</nav>
					<div className="mt-auto"></div>
				</SheetContent>
			</Sheet>
			<div className="w-full flex-1">
				<form>
					<div className="relative">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search products..."
							className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
						/>
					</div>
				</form>
			</div>
			<ModeToggle />
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="secondary"
						size="icon"
						className="rounded-full"
					>
						<CircleUser className="h-5 w-5" />
						<span className="sr-only">Toggle user menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem>Logout</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	);
};
