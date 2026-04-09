import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales =  [ "en", "th"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl 
  
  const pathHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathHasLocale) return

  const locale = 'en'
  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}