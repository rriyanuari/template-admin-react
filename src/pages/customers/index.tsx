import { z } from 'zod';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { UserNav } from './components/user-nav';
import { taskSchema } from './data/schema';

import TaskData from './data/tasks.json';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

// Simulate a database read for tasks.
function getTasks() {
	const data = TaskData;

	return z.array(taskSchema).parse(data);
}

const CustomerPage = () => {
	const tasks = getTasks();

	return (
		<>
			<div className="container h-full flex-1 flex-col space-y-8 md:flex">
				<div className="flex items-center justify-between space-y-2">
					<div>
						<h2 className="text-3xl font-semibold tracking-tight">Customers</h2>
						<p className="text-muted-foreground">
							Here&apos;s a list of your customer all the time!
						</p>
					</div>
					<div className="flex items-center space-x-2">
						<Button className="gap-2">
							<Plus className="w-6 h-6" />
							Add new customer
						</Button>
					</div>
				</div>
				<DataTable
					data={tasks}
					columns={columns}
				/>
			</div>
		</>
	);
};

export default CustomerPage;
