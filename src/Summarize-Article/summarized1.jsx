import React, { useEffect, useState } from 'react';

function summarized1() {
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                // Create the summarizer instance
                const summarizer = await ai.summarizer.create();

                // User-provided text to summarize
                const someUserText2 = `
                    Menstrual health is vital to women’s overall well-being, influencing physical, emotional, and social health. Despite being a natural biological process, it is often surrounded by stigma and misinformation, leading to the neglect of critical health issues. A healthy menstrual cycle typically lasts 21–35 days with 3–7 days of bleeding, influenced by factors such as diet, stress, and hormonal balance. Common challenges include irregular periods, dysmenorrhea (painful cramps), heavy menstrual bleeding, premenstrual syndrome (PMS), polycystic ovary syndrome (PCOS), and endometriosis. These issues can arise from hormonal imbalances, thyroid disorders, stress, lifestyle factors, or medical conditions. Diagnosing menstrual irregularities involves reviewing medical history, conducting lab tests, and using imaging techniques like ultrasounds. Treatment may include medications, lifestyle adjustments, or surgery for severe cases. To maintain menstrual health, adopt a balanced diet, exercise regularly, get quality sleep, and manage stress. For persistent or severe issues, consulting a healthcare provider is essential. Proper care and awareness are key to ensuring better overall health and well-being.
                `;

                // Summarize the text
                const result2 = await summarizer.summarize(someUserText2);

                // Update the state with the summary result
                setSummary(result2.split('.').filter(item => item.trim().length > 0));

                // Destroy the summarizer to release resources
                summarizer.destroy();
            } catch (error) {
                console.error('Error while summarizing:', error);
            }
        };

        fetchSummary();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Key Takeaways</h1>
                    {/* Article Image */}
                    <img
                    src="https://regencyhealthcare.in/wp-content/uploads/2021/05/89.png"
                    alt="Hormonal Imbalance"
                    className="w-full h-auto rounded-lg mb-8"
                    />
                </header>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {summary.length > 0 ? (
                        summary.map((point, index) => <li key={index}>{point.trim()}</li>)
                    ) : (
                        <li>Loading summary...</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default summarized1;
