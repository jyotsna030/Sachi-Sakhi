import React, { useEffect, useState } from 'react';

function Summarized5() {
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                // Create the summarizer instance
                const summarizer = await ai.summarizer.create();

                // User-provided text to summarize
                const someUserText2 = `
                    Menstrual health significantly impacts overall well-being, including workplace performance. Addressing menstrual health challenges can improve productivity, morale, and inclusivity, yet stigma often prevents open discussions. Many individuals face symptoms like cramps, fatigue, and mood swings during their cycles, which affect focus and efficiency. Common challenges include pain and discomfort, fatigue from hormonal changes, and mood swings impacting interpersonal interactions. Employers can foster a supportive environment by implementing policies such as flexible work options during discomfort, providing free menstrual products, conducting awareness workshops to reduce stigma, and creating wellness rooms for rest. Employees can also adopt self-care practices like staying hydrated to reduce bloating, choosing nutrient-rich snacks for energy, engaging in light exercise to alleviate cramps, and openly communicating needs with supervisors or HR for accommodations. Addressing menstrual health at work promotes inclusivity, well-being, and productivity, breaking down taboos and fostering a healthier, more equitable workplace.
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
                    src="https://img.freepik.com/premium-vector/life-work-balance-scales-woman-keep-harmony-choose-career-money-versus-health-time-leisure-business-comparison-stress-healthy-life-family-love-versus-job_458444-1321.jpg"
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

export default Summarized5;
