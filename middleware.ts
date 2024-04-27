import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Se ejecuta cada vez que cambias la pagina
 * @param request S
 * @returns 
 */
export function middleware(request: NextRequest) {
	const authTokens = request.cookies.get('authTokens')?.value
	
	if (request.nextUrl.pathname.startsWith('/dashboard') && !authTokens) {
		const response = NextResponse.redirect(new URL('/login', request.url))
		response.cookies.delete('authTokens')
		return response
	}
	if (authTokens && request.nextUrl.pathname.startsWith('/login')) {
		const response = NextResponse.redirect(new URL('/dashboard', request.url))
		return response
	}
}
// Estas son las rutas sobre la que actua el middleware
export const config = {
	matcher: ['/login', '/dashboard'],
}