import React, { useEffect, useState } from 'react';

function Summarized9() {
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                // Create the summarizer instance
                const summarizer = await ai.summarizer.create();

                // User-provided text to summarize
                const someUserText2 = `
                    Menstrual pain, or dysmenorrhea, affects many women, but several home remedies can help manage it naturally. Heat therapy, such as using a heating pad or taking a warm bath, helps increase blood flow, relax muscles, and reduce pain. Herbal teas like chamomile, ginger, and peppermint are beneficial due to their anti-inflammatory properties, helping to ease cramps and bloating. Light exercise, including yoga poses like Child’s Pose or a brisk walk, boosts circulation and releases endorphins for natural pain relief. Essential oils, such as lavender or peppermint, can be massaged into the lower abdomen for their muscle-relaxing effects; always do a patch test beforehand. Staying hydrated and eating magnesium-rich foods, like spinach and bananas, can also help, while avoiding caffeine and salty foods can reduce symptoms. Prioritizing rest through good sleep, mindfulness meditation, or engaging in hobbies supports overall well-being. These methods, paired with a healthy lifestyle, can alleviate menstrual pain. However, if pain persists or worsens, consult a healthcare professional for guidance.
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
                    src="https://assets-api.familiprix.com/uploads/articles/sharing_images/thumbnail_natural-remedies-for-menstrual-pain-og.png?v=63870215868"
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

export default Summarized9;
