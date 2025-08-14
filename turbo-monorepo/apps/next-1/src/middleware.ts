import { NextResponse, type NextRequest } from 'next/server';
import { server as mdw } from '@repo/utils';

export async function middleware(req: NextRequest) {
  const lang = mdw.getBrowserLanguage(req);

  const response: NextResponse = NextResponse.next();
  response.cookies.set('lang', lang);

  return response;
}

export const config = {
  matcher: ['/']
};
