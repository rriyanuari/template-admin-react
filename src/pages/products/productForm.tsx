import { NavLink } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import GeneralForm from './forms/generalForm';

const ProductForm = () => {
	return (
		<>
			<div className="space-y-0.5">
				<h2 className="text-2xl font-bold tracking-tight">Create Product</h2>
				<p className="text-muted-foreground">Add new product to your system.</p>
			</div>

			<Separator />
			<div className="mx-auto grid w-full items-start gap-6 md:grid-cols-[150px_1fr] ">
				<nav className="flex md:flex-col gap-4 text-muted-foreground">
					<NavLink
						to="#"
						className="font-semibold text-primary-foreground bg-primary p-2 rounded"
					>
						General
					</NavLink>
					<NavLink
						to="#"
						className="font-semibold text-primary p-2 rounded"
					>
						Image
					</NavLink>
				</nav>

				<Separator className="md:hidden" />

				<div className="grid gap-6 md:pl-10 md:border-l">
					<div className="space-y-0.5 hidden md:block">
						<h2 className="text-2xl font-bold tracking-tight">
							Detail Product
						</h2>
						{/* <p className="text-muted-foreground">Add new product to your system.</p> */}
					</div>

					<Separator className="hidden md:block" />

					<GeneralForm />
				</div>
			</div>
		</>
	);
};

export default ProductForm;
