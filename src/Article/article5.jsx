import React from 'react';

const article5 = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Article Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Workplace Wellness During Menstrual Cycles
          </h1>
          <p className="text-gray-600 mt-2">
            Understanding how to support menstrual health in the workplace for enhanced well-being and productivity.
          </p>
        </header>

        {/* Article Image */}
        <img
          src="https://img.freepik.com/premium-vector/life-work-balance-scales-woman-keep-harmony-choose-career-money-versus-health-time-leisure-business-comparison-stress-healthy-life-family-love-versus-job_458444-1321.jpg"
          alt="Workplace Wellness"
          className="w-full h-auto rounded-lg mb-8"
        />

        {/* Article Content */}
        <section className="space-y-6">
          <p className="text-lg text-gray-700">
            Menstrual health is an integral aspect of overall well-being, and its impact extends to the workplace. Addressing menstrual health challenges at work can enhance productivity, employee morale, and workplace inclusivity. However, stigma and lack of awareness often hinder open discussions and effective solutions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Common Challenges During Menstrual Cycles</h2>
          <p className="text-lg text-gray-700">
            Many individuals experience physical and emotional symptoms during their menstrual cycles, such as cramps, fatigue, and mood swings, which can affect their work performance. Common challenges include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">
              <strong>Pain and Discomfort:</strong> Menstrual cramps and headaches can reduce concentration and efficiency.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Fatigue:</strong> Hormonal changes often lead to tiredness and lower energy levels.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Mood Swings:</strong> Emotional fluctuations can affect interpersonal interactions and focus.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Creating a Supportive Workplace</h2>
          <p className="text-lg text-gray-700">
            Employers can foster a supportive environment by implementing policies and practices that address menstrual health needs. Key initiatives include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">
              <strong>Flexible Work Policies:</strong> Allow remote work or flexible hours during menstruation-related discomfort.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Menstrual Products:</strong> Provide free access to sanitary products in restrooms.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Awareness Campaigns:</strong> Conduct workshops to reduce stigma and educate employees about menstrual health.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Dedicated Spaces:</strong> Create wellness rooms for rest and relaxation during menstrual discomfort.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Self-Care Tips for Employees</h2>
          <p className="text-lg text-gray-700">
            Employees can take proactive steps to manage menstrual health at work. Helpful practices include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">
              <strong>Stay Hydrated:</strong> Drink plenty of water to reduce bloating and maintain energy levels.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Healthy Snacks:</strong> Opt for nutrient-rich snacks to boost energy and mood.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Light Exercise:</strong> Gentle stretching or walking can alleviate cramps and improve circulation.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Open Communication:</strong> Discuss needs with supervisors or HR for necessary accommodations.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
          <p className="text-lg text-gray-700">
            Addressing menstrual health in the workplace is essential for creating an inclusive and productive environment. By implementing supportive policies and encouraging open communication, employers can ensure the well-being of their employees while breaking down taboos surrounding menstruation. Together, these efforts contribute to a healthier, more equitable workplace.
          </p>
        </section>
      </div>
    </div>
  );
};

export default article5;
