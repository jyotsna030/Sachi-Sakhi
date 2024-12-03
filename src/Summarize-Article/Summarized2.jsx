import React, { useEffect, useState } from 'react';

function Summarized2() {
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                // Create the summarizer instance
                const summarizer = await ai.summarizer.create();

                // User-provided text to summarize
                const someUserText2 = `
                    Pregnancy is an exciting journey, but it’s also a time when myths and misinformation can cause confusion. One common myth is that you need to eat for two. In reality, pregnancy requires only a modest increase of 300–500 extra calories per day during the second and third trimesters. Focus on eating nutrient-rich foods instead of simply consuming more. Another myth is that exercise is dangerous during pregnancy. On the contrary, moderate activities like walking, swimming, and prenatal yoga can improve circulation, reduce stress, and enhance overall well-being. Always consult your doctor before starting a new fitness routine. Many also believe that morning sickness only occurs in the morning, but it can happen at any time of the day or night, especially in the first trimester. Another misconception is that you must avoid coffee entirely. Most experts agree that up to 200 mg of caffeine daily, equivalent to one 12-ounce cup, is generally safe. Lastly, the idea that heartburn indicates your baby will have hair is largely anecdotal. While some studies suggest a possible connection between pregnancy hormones and hair growth, heartburn is more commonly caused by hormonal relaxation of the esophageal sphincter. By understanding these myths and focusing on facts, you can make informed decisions for a healthy pregnancy. Always consult your healthcare provider for personalized advice.
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
                    src="https://cells4life.com/wp-content/uploads/2022/12/Picture-1.jpg"
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

export default Summarized2;
