import { chromium } from 'playwright';
import path from 'path';

async function generatePdf() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/cv', {
    waitUntil: 'networkidle',
  });

  const outputPath = path.resolve(process.cwd(), 'public/cv.pdf');

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
  });

  await browser.close();

  console.log(`✅ PDF generated at: ${outputPath}`);
}

// IMPORTANT: actually run it
generatePdf().catch((err) => {
  console.error('❌ PDF generation failed:', err);
  process.exit(1);
});
