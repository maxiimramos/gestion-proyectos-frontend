import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Se ejecuta cada vez que cambias la pagina
 * @param request S
 * @returns 
 */
export function middleware(request: NextRequest) {
	const authToken = request.cookies.get('authToken')?.value
	console.log("TOKEN", authToken);
	if (request.nextUrl.pathname.startsWith('/dashboard') && !authToken) {
		const response = NextResponse.redirect(new URL('/login', request.url))
		response.cookies.delete('authToken')
		return response
	}
	if (authToken && request.nextUrl.pathname.startsWith('/login')) {
		console.log("TOKEN", authToken);
		const response = NextResponse.redirect(new URL('/dashboard', request.url))
		return response
	}
}
// Estas son las rutas sobre la que actua el middleware
export const config = {
	matcher: ['/login', '/dashboard'],
}