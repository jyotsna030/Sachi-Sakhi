import React, { useEffect, useState } from 'react';

function Summarized8() {
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                // Create the summarizer instance
                const summarizer = await ai.summarizer.create();

                // User-provided text to summarize
                const someUserText2 = `
                    Postpartum depression (PPD) is a serious condition that can affect many new mothers, going beyond the temporary "baby blues" to impact emotional, mental, and physical well-being. Symptoms include persistent sadness, loss of interest in activities, fatigue, sleep disturbances, appetite changes, irritability, anxiety, and difficulty bonding with the baby. PPD can be caused by hormonal changes, sleep deprivation, personal history of depression or anxiety, and stressful life events like financial issues or lack of support. Effective coping strategies involve seeking professional help, whether through therapy or medication, and communicating openly with partners, friends, or family. Joining support groups can also offer reassurance and connection with others who understand. Self-care is crucial—set aside time for activities that bring comfort, practice relaxation techniques, and prioritize rest. Maintaining a healthy lifestyle with a balanced diet and light exercise can help boost mood and energy levels. If symptoms persist or worsen, it’s essential to seek immediate medical attention. Remember, asking for help shows strength, not weakness, and with the right support, recovery and brighter days are possible.
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
                    src="https://www.romsons.in/cdn/shop/articles/Postpartum-Depression-Signs-and-Symptoms-for-New-Mothers-01.jpg?v=1709373615"
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

export default Summarized8;
