import { NextRequest } from 'next/server';

export function getBrowserLanguage(req: NextRequest): string {
  const acceptLanguage = req.headers.get('accept-language');

  if (acceptLanguage) {
    return acceptLanguage.split(',')[0].split('-')[0];
  }

  return '';
}
