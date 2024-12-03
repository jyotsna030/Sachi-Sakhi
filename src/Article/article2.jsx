import React from 'react';

const article2 = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Article Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            5 Myths About Pregnancy Debunked
          </h1>
          <p className="text-gray-600 mt-2">
            Separating fact from fiction to ensure a healthy and informed pregnancy journey.
          </p>
        </header>

        {/* Article Image */}
        <img
          src="https://cells4life.com/wp-content/uploads/2022/12/Picture-1.jpg"
          alt="5 Myths About Pregnancy Debunked"
          className="w-full h-auto rounded-lg mb-8"
        />

        {/* Article Content */}
        <section className="space-y-6">
          {/* Introduction */}
          <p className="text-lg text-gray-700">
            Pregnancy is a time filled with excitement and anticipation, but it's also a period rife with misinformation. To help expectant mothers make informed decisions, we’ve tackled five common myths about pregnancy and provided the facts you need.
          </p>

          {/* Myth 1 */}
          <h2 className="text-2xl font-semibold text-gray-800">Myth 1: You Should Eat for Two</h2>
          <p className="text-lg text-gray-700">
            Many people believe that being pregnant means doubling your food intake. The truth is, pregnancy requires only a modest increase in calories, around 300–500 extra calories per day during the second and third trimesters. Focus on eating nutrient-rich foods rather than simply eating more.
          </p>

          {/* Myth 2 */}
          <h2 className="text-2xl font-semibold text-gray-800">Myth 2: Exercise During Pregnancy is Dangerous</h2>
          <p className="text-lg text-gray-700">
            Contrary to popular belief, regular, moderate exercise is beneficial during pregnancy. Activities like walking, swimming, and prenatal yoga can improve circulation, reduce stress, and promote overall well-being. Always consult with your healthcare provider before starting a new fitness routine.
          </p>

          {/* Myth 3 */}
          <h2 className="text-2xl font-semibold text-gray-800">Myth 3: Morning Sickness Only Happens in the Morning</h2>
          <p className="text-lg text-gray-700">
            The term "morning sickness" is misleading. Nausea and vomiting during pregnancy can occur at any time of the day or night. For some women, it lasts throughout the day, especially in the first trimester.
          </p>

          {/* Myth 4 */}
          <h2 className="text-2xl font-semibold text-gray-800">Myth 4: You Can’t Drink Coffee</h2>
          <p className="text-lg text-gray-700">
            While it’s important to limit caffeine intake during pregnancy, you don’t have to give it up entirely. Most experts agree that consuming up to 200 mg of caffeine per day (about one 12-ounce cup of coffee) is safe for most pregnant women.
          </p>

          {/* Myth 5 */}
          <h2 className="text-2xl font-semibold text-gray-800">Myth 5: Heartburn Means Your Baby Will Have Hair</h2>
          <p className="text-lg text-gray-700">
            This popular myth is partially based on anecdotal evidence. While some studies suggest a correlation between pregnancy hormones and both heartburn and baby hair growth, heartburn is more commonly caused by the hormonal relaxation of the esophageal sphincter.
          </p>

          {/* Conclusion */}
          <p className="text-lg text-gray-700 mt-4">
            Pregnancy myths can lead to unnecessary stress or confusion. By understanding the facts, you can focus on what truly matters: a healthy pregnancy and a joyful journey into motherhood. Always consult trusted healthcare professionals for advice tailored to your unique situation.
          </p>
        </section>
      </div>
    </div>
  );
};

export default article2;
