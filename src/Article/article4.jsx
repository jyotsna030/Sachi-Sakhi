import React from 'react';

const article4 = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Article Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            The Impact of Nutrition on Reproductive Health
          </h1>
          <p className="text-gray-600 mt-2">
            Exploring how balanced nutrition plays a vital role in enhancing reproductive health and well-being.
          </p>
        </header>

        {/* Article Image */}
        <img
          src="https://cdn.shopify.com/s/files/1/0253/8494/3691/files/2._Infographic_Nutrition_for_women_s_health.jpg?v=1600296693"
          alt="Nutrition and Reproductive Health"
          className="w-full h-auto rounded-lg mb-8"
        />

        {/* Article Content */}
        <section className="space-y-6">
          <p className="text-lg text-gray-700">
            Nutrition is a cornerstone of overall health, and its significance extends to reproductive health as well. A balanced diet rich in essential nutrients can support hormonal balance, enhance fertility, and improve pregnancy outcomes. On the other hand, poor dietary habits can lead to deficiencies and hormonal imbalances that negatively impact reproductive health.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">The Role of Macronutrients</h2>
          <p className="text-lg text-gray-700">
            Macronutrients like carbohydrates, proteins, and fats are essential for maintaining energy levels and supporting the body's reproductive functions. Key points include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">
              <strong>Proteins:</strong> Crucial for the production of reproductive hormones and the development of egg and sperm cells.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Healthy Fats:</strong> Omega-3 fatty acids, found in fish and nuts, help regulate hormones and reduce inflammation.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Complex Carbohydrates:</strong> Whole grains and vegetables stabilize blood sugar levels, promoting hormonal balance.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Micronutrients and Their Impact</h2>
          <p className="text-lg text-gray-700">
            Micronutrients play a critical role in reproductive health. Deficiencies in vitamins and minerals can lead to complications such as infertility or pregnancy-related issues.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">
              <strong>Iron:</strong> Prevents anemia and supports healthy ovulation and pregnancy.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Folic Acid:</strong> Essential for preventing neural tube defects in developing fetuses.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Vitamin D:</strong> Aids in hormone regulation and improves fertility.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Zinc:</strong> Supports sperm quality and ovulation.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Nutrition for Different Life Stages</h2>
          <p className="text-lg text-gray-700">
            Nutritional needs vary across different life stages, and specific focus areas include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">
              <strong>Pre-Conception:</strong> A diet rich in antioxidants, folate, and iron prepares the body for conception.
            </li>
            <li className="text-lg text-gray-700">
              <strong>During Pregnancy:</strong> Adequate protein, calcium, and folic acid intake is vital for fetal development.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Postpartum:</strong> Nutrient-dense foods support recovery and lactation.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Common Nutritional Challenges</h2>
          <p className="text-lg text-gray-700">
            Modern diets often lack essential nutrients due to processed food consumption and poor dietary habits. Common challenges include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">Excessive sugar and refined carbohydrate intake leading to insulin resistance.</li>
            <li className="text-lg text-gray-700">Insufficient fiber intake, affecting gut health and hormone detoxification.</li>
            <li className="text-lg text-gray-700">Low consumption of healthy fats necessary for hormone production.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
          <p className="text-lg text-gray-700">
            A nutrient-rich diet is a fundamental aspect of maintaining reproductive health. By prioritizing balanced meals and addressing specific nutritional needs, individuals can enhance their fertility and overall well-being. Consulting with a healthcare provider or a nutritionist can provide tailored advice for achieving optimal reproductive health through proper nutrition.
          </p>
        </section>
      </div>
    </div>
  );
};

export default article4;
