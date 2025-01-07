'use client';

import { useState } from 'react';

export default function ClientSideHome({ companies }) {
    const [selectedCompany, setSelectedCompany] = useState(null);

    const handleCompanySelection = (company) => {
        // If the same company is clicked, deselect it (toggle behavior)
        setSelectedCompany((prev) => (prev?.id === company.id ? null : company));
    };

    return (
        <div className="">
            <div className="bg1">
                <div className="contenthome">
                    <h1 className="text-xl font-bold text-black comphead">Listed Companies</h1>

                    <ul className="componylist">
                        {Array.isArray(companies) && companies.length > 0 ? (
                            companies.map((company) => (
                                <li className="companyname" key={company.id}>
                                    <button
                                        onClick={() => handleCompanySelection(company)}
                                        className={`px-4 py-2 my-1 rounded ${selectedCompany?.id === company.id ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                                            }`}
                                    >
                                        {company.name}
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className="text-black">No companies found</li>
                        )}
                    </ul>

                </div>

                <div className="companydetails">
                    {selectedCompany && (
                        <div>
                            {/* <h2 className="text-lg font-bold">{selectedCompany.name}</h2> */}
                            <h3 className='about'>About: <strong>{selectedCompany.name}</strong></h3>
                            <p>{selectedCompany.details}</p>
                            <h3 className='font-bold directors'>Directors:</h3>
                            <ul>
                                {selectedCompany.directors.map((director, index) => (
                                    <li key={index}>{director}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
}
