// src/app/api/companies/route.js
import db from '../../../lib/db'; // Path to the db.js file you just created

export async function GET() {
  try {
    const res = await db.query('SELECT * FROM companies');
    const companies = res.rows; // Get the rows from the result
    return new Response(JSON.stringify(companies), { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(
      JSON.stringify({ error: 'Error fetching data' }),
      { status: 500 }
    );
  }
}
