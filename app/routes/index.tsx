import { LinksFunction } from '@remix-run/node'
import favicon from '../../public/favicon.ico?url'
import logo from '../../public/logo-light.png?url'

export const links: LinksFunction = () => {
	return [
		{ rel: 'icon', href: favicon },
		{ rel: 'preload', href: logo, as: 'image' },
	]
}

export default function Index() {
	return (
		<div className='flex h-screen items-center justify-center'>
			<h1>Home</h1>
			<p>Welcome!</p>
		</div>
	)
}
