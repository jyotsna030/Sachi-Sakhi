import React, { useEffect, useState } from 'react';

function Summarized6() {
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                // Create the summarizer instance
                const summarizer = await ai.summarizer.create();

                // User-provided text to summarize
                const someUserText2 = `
                    Perimenopause, the transition to menopause, is a significant life phase marked by hormonal fluctuations and various physical and emotional changes. This period, lasting several years, often begins subtly, with early signs like irregular periods, hot flashes, sleep disturbances, and mood swings. Physical symptoms may include vaginal dryness, fatigue, weight changes, and hair thinning, while emotional and cognitive symptoms often manifest as memory issues, anxiety, depression, and loss of libido. These changes can impact daily life, but effective management is possible. Coping strategies include maintaining a healthy diet rich in nutrients to support hormonal balance, regular exercise to boost mood and energy, and stress management through mindfulness or yoga. Consulting a healthcare provider can provide tailored advice, including options like hormone therapy for severe symptoms. Recognizing and addressing perimenopause symptoms helps women navigate this natural transition with confidence, fostering empowerment and well-being as they prepare for menopause.
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
                    src="https://th.bing.com/th/id/OIP.I7OsOWuKH65MAWozZyUpCwHaHa?rs=1&pid=ImgDetMain"
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

export default Summarized6;
