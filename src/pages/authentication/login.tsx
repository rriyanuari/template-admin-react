import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import imgCover from '@/assets/undraw/undraw_access_account_re_8spm.svg';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const navigate = useNavigate();

	const _submit = () => {
		navigate('/');
	};

	return (
		<div className="w-full min-h-screen lg:grid lg:grid-cols-2">
			<div className="flex items-center justify-center py-12">
				<div className="mx-auto grid w-[350px] gap-6">
					<div className="grid gap-2 text-center">
						<h1 className="text-3xl font-bold">Login</h1>
						<p className="text-balance text-muted-foreground">
							Enter your email below to login to your account
						</p>
					</div>
					<form onSubmit={_submit}>
						<div className="grid gap-4">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									required
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<a
										href="/forgot-password"
										className="ml-auto inline-block text-sm underline"
									>
										Forgot your password?
									</a>
								</div>
								<Input
									id="password"
									type="password"
									required
								/>
							</div>
							<Button
								type="submit"
								className="w-full"
							>
								Login
							</Button>
							<Button
								variant="outline"
								className="w-full"
							>
								Login with Google
							</Button>
						</div>
					</form>

					<div className="mt-4 text-center text-sm">
						Don&apos;t have an account?{' '}
						<a
							href="#"
							className="underline"
						>
							Sign up
						</a>
					</div>
				</div>
			</div>
			<div className="hidden bg-muted lg:block">
				<div className="flex justify-center items-center h-full">
					<img
						src={imgCover}
						alt="Image"
						width="600"
						height="600"
						className="w-[400px] dark:brightness-[0.2] dark:grayscale"
					/>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
