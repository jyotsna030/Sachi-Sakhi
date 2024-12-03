import React from 'react';

const article1 = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Article Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Understanding Menstrual Health: A Comprehensive Guide
          </h1>
          <p className="text-gray-600 mt-2">
            Learn about menstrual health, common challenges, and effective solutions for better well-being.
          </p>
        </header>

        {/* Article Image */}
        <img
          src="https://regencyhealthcare.in/wp-content/uploads/2021/05/89.png"
          alt="Understanding Menstrual Health"
          className="w-full h-auto rounded-lg mb-8"
        />

        {/* Article Content */}
        <section className="space-y-6">
          {/* Introduction */}
          <p className="text-lg text-gray-700">
            Menstrual health is a cornerstone of women's overall well-being, influencing physical, emotional, and social health. Despite being a natural biological process, it is often surrounded by misinformation and stigma, which can lead to neglect of critical health issues. This guide aims to provide a clear understanding of menstrual health, common challenges, and ways to maintain it.
          </p>

          {/* What is Menstrual Health? */}
          <h2 className="text-2xl font-semibold text-gray-800">What is Menstrual Health?</h2>
          <p className="text-lg text-gray-700">
            Menstrual health refers to the state of well-being in relation to the menstrual cycle. A healthy menstrual cycle is typically 21–35 days long and involves 3–7 days of bleeding. Factors such as diet, stress, hormonal balance, and underlying medical conditions can impact menstrual health, making awareness and care essential.
          </p>

          {/* Common Menstrual Challenges */}
          <h2 className="text-2xl font-semibold text-gray-800">Common Menstrual Challenges</h2>
          <p className="text-lg text-gray-700">
            Many women experience menstrual challenges that range from mild discomfort to debilitating conditions. These include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">
              <strong>Irregular Periods:</strong> Cycles that are shorter, longer, or vary significantly each month.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Dysmenorrhea:</strong> Severe menstrual cramps caused by uterine contractions.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Heavy Menstrual Bleeding (HMB):</strong> Excessive blood loss during periods, often requiring medical attention.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Premenstrual Syndrome (PMS):</strong> Physical and emotional symptoms like mood swings, bloating, and fatigue that occur before menstruation.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Polycystic Ovary Syndrome (PCOS):</strong> A hormonal disorder causing irregular periods, acne, and weight gain.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Endometriosis:</strong> A condition where tissue similar to the uterine lining grows outside the uterus, causing pain and irregularities.
            </li>
          </ul>

          {/* Causes of Menstrual Irregularities */}
          <h2 className="text-2xl font-semibold text-gray-800">Causes of Menstrual Irregularities</h2>
          <p className="text-lg text-gray-700">
            Menstrual irregularities can arise due to a variety of factors, such as:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700"><strong>Hormonal Imbalances:</strong> Disruptions in estrogen and progesterone levels.</li>
            <li className="text-lg text-gray-700"><strong>Thyroid Disorders:</strong> Overactive or underactive thyroid glands.</li>
            <li className="text-lg text-gray-700"><strong>Stress and Lifestyle Factors:</strong> Chronic stress, poor sleep, and unhealthy diets.</li>
            <li className="text-lg text-gray-700"><strong>Medical Conditions:</strong> Conditions like PCOS and endometriosis.</li>
            <li className="text-lg text-gray-700"><strong>Medications:</strong> Contraceptives, anticoagulants, and other drugs.</li>
          </ul>

          {/* Diagnosis and Treatment */}
          <h2 className="text-2xl font-semibold text-gray-800">Diagnosis and Treatment</h2>
          <p className="text-lg text-gray-700">
            Diagnosing menstrual irregularities involves:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">
              Reviewing medical history and conducting physical examinations.
            </li>
            <li className="text-lg text-gray-700">
              Running lab tests to assess hormone levels or detect underlying conditions.
            </li>
            <li className="text-lg text-gray-700">
              Using imaging techniques like ultrasounds for further evaluation.
            </li>
          </ul>
          <p className="text-lg text-gray-700">
            Treatments vary based on the cause and severity of the issue. Common approaches include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700"><strong>Medications:</strong> Hormonal therapies, pain relievers, or medications for specific conditions.</li>
            <li className="text-lg text-gray-700"><strong>Lifestyle Adjustments:</strong> Regular exercise, a nutritious diet, and stress management techniques.</li>
            <li className="text-lg text-gray-700"><strong>Surgical Interventions:</strong> For severe cases like fibroids or endometriosis.</li>
          </ul>

          {/* Prevention Tips */}
          <h2 className="text-2xl font-semibold text-gray-800">Prevention Tips for Better Menstrual Health</h2>
          <p className="text-lg text-gray-700">
            Adopting healthy habits can help maintain menstrual health:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">Maintain a balanced diet rich in whole foods.</li>
            <li className="text-lg text-gray-700">Exercise regularly but avoid overtraining.</li>
            <li className="text-lg text-gray-700">Get 7–9 hours of quality sleep per night.</li>
            <li className="text-lg text-gray-700">Manage stress with relaxation techniques.</li>
            <li className="text-lg text-gray-700">Limit alcohol and caffeine consumption.</li>
          </ul>

          <p className="text-lg text-gray-700 mt-4">
            If you experience persistent or severe menstrual issues, consult a healthcare provider promptly to explore the most appropriate solutions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default article1;
