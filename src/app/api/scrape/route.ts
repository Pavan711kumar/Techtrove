import { NextResponse } from 'next/server';
import { scrapeTargetWebsite } from '@/lib/scraper';

// This route can be triggered by Vercel Cron or GitHub Actions daily
export async function GET(request: Request) {
  try {
    // Add a simple authorization mechanism to prevent abuse
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');

    // Compare with your environment variable CRON_SECRET
    // if (secret !== process.env.CRON_SECRET) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const result = await scrapeTargetWebsite();
    
    if (result.success) {
      return NextResponse.json({ 
        message: 'Scraping job completed successfully',
        productsUpdated: result.count,
        data: result.data
      });
    } else {
      return NextResponse.json({ error: 'Scraping job failed', details: result.error }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
