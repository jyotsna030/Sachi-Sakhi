import React, { useEffect, useState } from 'react';

function Summarized7() {
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                // Create the summarizer instance
                const summarizer = await ai.summarizer.create();

                // User-provided text to summarize
                const someUserText2 = `
                    Menopause is a natural milestone marking the end of menstrual cycles, typically occurring between ages 45 and 55, with an average age of 51. It signifies the cessation of menstruation for 12 consecutive months and includes stages like perimenopause (the transitional phase) and postmenopause. While this period brings hormonal changes, understanding its symptoms and adopting coping strategies can transform it into an empowering experience.

                    Common menopause symptoms include hot flashes, night sweats, and sleep disturbances, which can disrupt daily life. Mood swings, anxiety, and vaginal dryness are also prevalent due to hormonal fluctuations. Declining estrogen levels may lead to bone density loss, increasing the risk of osteoporosis, while metabolic changes often result in weight gain.

                    Managing menopause effectively involves a multifaceted approach. A balanced diet rich in calcium, vitamin D, and phytoestrogens supports bone health and alleviates symptoms. Regular exercise, including strength training and aerobics, enhances mood and cardiovascular health. Stress management techniques like yoga or meditation can promote emotional resilience. For severe symptoms, consulting a healthcare provider about hormone replacement therapy (HRT) is beneficial. Staying hydrated, maintaining sleep hygiene, and building a supportive network further aid in managing this transition.

                    Menopause also presents opportunities for growth and self-discovery. By embracing hobbies, prioritizing mental health, and celebrating achievements, women can redefine this phase as a new chapter. With the right strategies and support, menopause becomes not an end but a transformative beginning filled with strength and optimism.
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
                    src="https://www.bumrungrad.com/getattachment/71394f8d-e67b-4f23-bb9a-69aa4574012e/image.jpg"
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

export default Summarized7;
