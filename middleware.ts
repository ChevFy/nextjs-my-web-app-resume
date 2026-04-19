import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ["en", "th"]
const defaultLocale = locales[0]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl 
  
  // 1. ตรวจสอบว่ามี locale อยู่ใน path หรือยัง
  const pathHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (pathHasLocale) return


  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  
  return NextResponse.rewrite(request.nextUrl)
}
 
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
}