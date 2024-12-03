import React, { useEffect, useState } from 'react';

function Summarized4() {
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                // Create the summarizer instance
                const summarizer = await ai.summarizer.create();

                // User-provided text to summarize
                const someUserText2 = `
                    Nutrition is vital for overall and reproductive health, playing a key role in hormonal balance, fertility, and pregnancy outcomes. A balanced diet with essential nutrients supports reproductive functions, while poor dietary habits can lead to deficiencies and imbalances that harm reproductive health. Macronutrients are crucial, with proteins aiding hormone production and egg and sperm development, healthy fats like omega-3s regulating hormones and reducing inflammation, and complex carbohydrates stabilizing blood sugar for hormonal balance. Micronutrients are equally important; iron supports ovulation and prevents anemia, folic acid reduces neural tube defect risks, vitamin D aids hormone regulation, and zinc improves sperm quality and ovulation. Nutritional needs also vary by life stage. Pre-conception diets rich in antioxidants, folate, and iron prepare the body for conception, while pregnancy requires protein, calcium, and folic acid for fetal development. Postpartum, nutrient-dense foods aid recovery and lactation. Modern diets often lack nutrients due to processed foods, excessive sugar, and insufficient fiber or healthy fats, impacting hormone production and gut health. A nutrient-rich diet is essential for reproductive health, and consulting healthcare professionals can provide tailored guidance for optimizing fertility and overall well-being.
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
                    src="https://cdn.shopify.com/s/files/1/0253/8494/3691/files/2._Infographic_Nutrition_for_women_s_health.jpg?v=1600296693"
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

export default Summarized4;
