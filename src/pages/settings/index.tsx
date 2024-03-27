import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { NavLink } from 'react-router-dom';

const SettingsPage = () => {
	return (
		<main className="container flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4">
			<div className="mx-auto grid w-full max-w-6xl gap-2">
				<h1 className="text-3xl font-semibold">Settings</h1>
			</div>
			<div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
				<nav className="grid gap-4 text-sm text-muted-foreground">
					<NavLink
						to="#"
						className="font-semibold text-primary"
					>
						General
					</NavLink>
					<NavLink to="#">Security</NavLink>
					<NavLink to="#">Integrations</NavLink>
					<NavLink to="#">Support</NavLink>
					<NavLink to="#">Organizations</NavLink>
					<NavLink to="#">Advanced</NavLink>
				</nav>
				<div className="grid gap-6">
					<Card>
						<CardHeader>
							<CardTitle>Store Name</CardTitle>
							<CardDescription>
								Used to identify your store in the marketplace.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form>
								<Input placeholder="Store Name" />
							</form>
						</CardContent>
						<CardFooter className="border-t px-6 py-4">
							<Button>Save</Button>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Plugins Directory</CardTitle>
							<CardDescription>
								The directory within your project, in which your plugins are
								located.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form className="flex flex-col gap-4">
								<Input
									placeholder="Project Name"
									defaultValue="/content/plugins"
								/>
								<div className="flex items-center space-x-2">
									<Checkbox
										id="include"
										defaultChecked
									/>
									<label
										htmlFor="include"
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										Allow administrators to change the directory.
									</label>
								</div>
							</form>
						</CardContent>
						<CardFooter className="border-t px-6 py-4">
							<Button>Save</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</main>
	);
};

export default SettingsPage;
