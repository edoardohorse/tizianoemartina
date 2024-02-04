import { NextRequest, NextResponse } from 'next/server'
import { getCookies } from 'next-client-cookies/server';


export const config = {
	matcher: ['/'],
}

enum ECookiePreviewState{
	ON = 'on',
	OFF = 'off'
}

const COOKIE_ID = 'preview'

export function askPreviewModeOn(): boolean{
	const cookies = getCookies();
	const cookie = cookies.get(COOKIE_ID) ?? ECookiePreviewState.OFF
	return cookie === ECookiePreviewState.OFF
}


export default async function middleware(req: NextRequest) {
	const isInMaintenanceMode = askPreviewModeOn()
	const { pathname } = req.nextUrl;

	console.log(isInMaintenanceMode, pathname)
	// If in maintenance mode, point the url pathname to the maintenance page
	if (isInMaintenanceMode) {
		// req.nextUrl.pathname = `/courtesy`
		return NextResponse.redirect(new URL('/courtesy', req.url))
	}
	/*else if(pathname.includes("courtesy")){
		return NextResponse.rewrite(new URL('/', req.url))
	}*/



	return NextResponse.next()
}