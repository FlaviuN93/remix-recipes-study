import {
	Links,
	Meta,
	NavLink,
	Outlet,
	Scripts,
	ScrollRestoration,
	useMatches,
	useNavigation,
	useResolvedPath,
} from '@remix-run/react'
import type { LinksFunction, MetaFunction } from '@remix-run/node'
import './tailwind.css'
import { ReactNode, useEffect } from 'react'
import { DiscoverIcon, HomeIcon, RecipeBookIcon, SettingsIcon } from './components/icons'
import classNames from 'classnames'

export const meta: MetaFunction = () => {
	return [
		{ title: 'Remix Recipes' },
		{ name: 'description', content: 'Welcome to Remix Recipes App!' },
	]
}

export const links: LinksFunction = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
]

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body className='md:flex md:h-screen'>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	const matches = useMatches()

	useEffect(() => {
		console.log(matches)
	}, [matches])
	return (
		<>
			<nav className='bg-primary text-white'>
				<ul className='flex md:flex-col'>
					<AppNavLink to='/'>
						<HomeIcon />
					</AppNavLink>
					<AppNavLink to='discover'>
						<DiscoverIcon />
					</AppNavLink>
					<AppNavLink to='app'>
						<RecipeBookIcon />
					</AppNavLink>
					<AppNavLink to='settings'>
						<SettingsIcon />
					</AppNavLink>
				</ul>
			</nav>
			<div className='p-4'>
				<Outlet />
			</div>
		</>
	)
}

type AppNavLinkProps = {
	children: ReactNode
	to: string
}

function AppNavLink({ children, to }: AppNavLinkProps) {
	const navigation = useNavigation()
	const path = useResolvedPath(to)
	const isLoading = navigation.state === 'loading' && navigation.location.pathname === path.pathname

	return (
		<li className='w-16'>
			<NavLink to={to}>
				{({ isActive }) => (
					<div
						className={classNames(
							'py-4 flex justify-center hover:bg-primaryLight',
							isActive ? 'bg-primaryLight' : '',
							isLoading ? 'animate-pulse bg-primaryLight' : ''
						)}
					>
						{children}
					</div>
				)}
			</NavLink>
		</li>
	)
}
