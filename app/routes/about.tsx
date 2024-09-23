import { Link, Outlet } from '@remix-run/react'

export default function About() {
	return (
		<div className='flex flex-col gap-6'>
			About
			<nav className='flex flex-col gap-4'>
				<Link to='history'>History</Link>
				<Link to='team'>Team</Link>
			</nav>
			<Outlet />
		</div>
	)
}
