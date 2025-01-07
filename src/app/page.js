// src/app/pages.js
import ClientSideHome from '@/components/ClientSideHome';
import './globals.css';

export default async function Home() {
  let companies = [];

  try {
    const res = await fetch('http://localhost:3000/api/companies');
    console.log(res);
    if (!res.ok) {
      throw new Error('Error fetching data');
    }

    companies = await res.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <ClientSideHome companies={companies} />
  );
}
