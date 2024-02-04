"use client"

import {Cookies, useCookies} from 'next-client-cookies';
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

enum ECookiePreviewState{
	ON = 'on',
	OFF = 'off'
}


export const COOKIE_ID = 'preview'
const KEY = 'tiz'


function setCookie(cookies: Cookies, key: string, value: string ){
	cookies.set(key,value)
}


export function askPreviewMode(cookies: Cookies): boolean{
	const res = prompt("Abilita la preview mode") === KEY

	if(res) setCookie(cookies, COOKIE_ID, ECookiePreviewState.ON)
	else    setCookie(cookies, COOKIE_ID, ECookiePreviewState.OFF)

	return res
}

export function useCheckPreviewModeOn(cookies: Cookies){
	const res = cookies.get(COOKIE_ID) === ECookiePreviewState.ON ?? false
	if(res) return redirect('/')
}