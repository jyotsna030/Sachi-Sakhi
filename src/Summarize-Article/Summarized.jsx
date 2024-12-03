import React, { useEffect, useState } from 'react';

function Summarized() {
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                // Create the summarizer instance
                const summarizer = await ai.summarizer.create();

                // User-provided text to summarize
                const someUserText2 = `
                    Hormonal imbalances impact women at different stages of life, affecting growth, metabolism, mood, and reproductive health. These imbalances occur when hormone levels are too high or low, often influenced by conditions or lifestyle factors. A hormonal imbalance results from an overproduction or deficiency of hormones produced by glands such as the ovaries, thyroid, and adrenal glands. Symptoms can include irregular or heavy periods, weight changes, hair thinning or excessive growth, sleep disturbances, reduced libido, fatigue, and mood swings. Key causes include PCOS, where excess androgens disrupt menstruation; thyroid disorders that affect hormone balance; stress, which triggers cortisol and disrupts other hormones; menopause, marked by a decline in estrogen and progesterone; diet, as excess sugar or deficiencies can impact hormones; and medications like birth control or steroids that alter hormone levels. Diagnosis involves physical exams, medical history, blood tests to check hormone levels, and sometimes imaging like ultrasounds or MRIs. Treatment varies based on the cause and may include medications such as hormonal therapy or birth control, lifestyle changes like a balanced diet, regular exercise, and stress management, as well as supplements like magnesium, zinc, and vitamin D. Herbal remedies such as ashwagandha or maca root may also be considered, but consulting a doctor is advised. In some cases, medical interventions such as surgery or additional medications may be needed for conditions like PCOS or thyroid issues. Prevention focuses on a healthy lifestyle that includes a nutrient-rich diet, regular physical activity, adequate sleep, stress management, and limited alcohol or caffeine intake. Early diagnosis and treatment are crucial to enhancing quality of life and preventing complications.
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
                    src="https://www.womenshealthnetwork.com/wp-content/uploads/2022/11/Symptoms-of-Hormonal-Imbalance-1.jpg"
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

export default Summarized;
