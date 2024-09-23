import { LoaderFunction } from '@remix-run/node'
import { json, Link, Outlet, useLoaderData, useRouteError } from '@remix-run/react'

export const loader: LoaderFunction = () => {
	const mockData = { message: 'Hello from the server' }
	const response = json(mockData, {
		headers: { customHeader: 'Hello from server header' },
	})
	return response
}

export default function Settings() {
	const data = useLoaderData<{ message: string }>()
	return (
		<div className='flex flex-col gap-6'>
			Settings
			<nav className='flex flex-col gap-4'>
				<Link to='app'>App</Link>
				<Link to='profile'>Profile</Link>
			</nav>
			<p>Message from loader: {data.message}</p>
			<Outlet />
		</div>
	)
}

export function ErrorBoundary() {
	const error = useRouteError()
	if (error instanceof Error) {
		return (
			<div className='bg-red-300 border-2 border-red-600 rounded-md p-4'>
				<h1>Whoops, something went wrong</h1>
				<p>{error.message}</p>
			</div>
		)
	}

	return <div>An unexpected error has happened</div>
}
