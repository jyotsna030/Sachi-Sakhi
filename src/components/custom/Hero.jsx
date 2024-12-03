import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Container } from 'react-floating-action-button';

function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const articles = [
    { id: 1, image: 'https://regencyhealthcare.in/wp-content/uploads/2021/05/89.png', text: 'Understanding Menstrual Health: A Comprehensive Guide.',route: ['/article1' , '/Summarized1']},
    { id: 2, image: 'https://cells4life.com/wp-content/uploads/2022/12/Picture-1.jpg', text: 'Top 5 Myths About Pregnancy Debunked.', route: ['/article2' , '/Summarized2']},
    { id: 3, image: 'https://hormonetherapy.la/wp-content/uploads/2023/07/Female-Hormonal-Imbalance-Symptoms.jpg.webp', text: 'Hormonal Imbalance: What You Need to Know.',route: ['/article3' , '/Summarized']},
    { id: 4, image: 'https://cdn.shopify.com/s/files/1/0253/8494/3691/files/2._Infographic_Nutrition_for_women_s_health.jpg?v=1600296693', text: 'The Impact of Nutrition on Reproductive Health.',route: ['/article4' , '/Summarized4'] },
    { id: 5, image: 'https://img.freepik.com/premium-vector/life-work-balance-scales-woman-keep-harmony-choose-career-money-versus-health-time-leisure-business-comparison-stress-healthy-life-family-love-versus-job_458444-1321.jpg', text: 'Workplace Wellness During Menstrual Cycles.' ,route: ['/article5' , '/Summarized5']},
    { id: 6, image: 'https://th.bing.com/th/id/OIP.I7OsOWuKH65MAWozZyUpCwHaHa?rs=1&pid=ImgDetMain', text: 'Signs and Symptoms of Perimenopause.' ,route: ['/article6' , '/Summarized6']},
    { id: 7, image: 'https://www.bumrungrad.com/getattachment/71394f8d-e67b-4f23-bb9a-69aa4574012e/image.jpg', text: 'Navigating Menopause with Confidence.',route: ['/article7' , '/Summarized7'] },
    { id: 8, image: 'https://www.romsons.in/cdn/shop/articles/Postpartum-Depression-Signs-and-Symptoms-for-New-Mothers-01.jpg?v=1709373615', text: 'Dealing with Postpartum Depression.',route: ['/article8' , '/Summarized8'] },
    { id: 9, image:'https://assets-api.familiprix.com/uploads/articles/sharing_images/thumbnail_natural-remedies-for-menstrual-pain-og.png?v=63870215868', text: 'Home Remedies for Menstrual Pain Relief.' ,route: ['/article9' , '/Summarized9']},
  ];

  const scroll = (direction) => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft += direction === 'left' ? -300 : 300;
    }
  };

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  async function handleSearch() {
    if (!query.trim()) return; // Ignore empty input

    setLoading(true);

    // Add user message to chat
    setMessages((prev) => [...prev, { sender: 'user', text: query }]);

    try {
      const { available, defaultTemperature, defaultTopK } = await ai.languageModel.capabilities();
      if (available === 'no') {
        console.error('AI model is not available.');
        return;
      }

      const session = await ai.languageModel.create({
        temperature: defaultTemperature,
        topK: defaultTopK,
        systemPrompt: 'You are a helpful assistant.',
      });

      const stream = session.promptStreaming(query);
      let result = '';
      let previousChunk = '';

      for await (const chunk of stream) {
        const newChunk = chunk.startsWith(previousChunk)
          ? chunk.slice(previousChunk.length)
          : chunk;
        result += newChunk;
        previousChunk = chunk;

        // Add intermediate response to chat
        setMessages((prev) => [
          ...prev.filter((msg) => msg.sender !== 'aiTemp'),
          { sender: 'aiTemp', text: result },
        ]);
      }

      // Finalize AI response
      setMessages((prev) => [
        ...prev.filter((msg) => msg.sender !== 'aiTemp'),
        { sender: 'ai', text: result },
      ]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      setQuery(''); // Clear input field
    }
  };
  

  //format ai response
  function formatAIResponse(responseText) {
    // Split response into sections, based on certain criteria (e.g., headers, bullet points)
    const sections = responseText.split('\n');
    return sections.map((section, index) => {
      if (section.startsWith('* ')) {
        // Bullet point
        return <li key={index}>{section.replace('* ', '')}</li>;
      } else if (section.startsWith('### ')) {
        // Header 3
        return <h3 key={index} className="text-xl font-semibold">{section.replace('### ', '')}</h3>;
      } else if (section.startsWith('## ')) {
        // Header 2
        return <h2 key={index} className="text-2xl font-bold">{section.replace('## ', '')}</h2>;
      } else if (section.startsWith('# ')) {
        // Header 1
        return <h1 key={index} className="text-3xl font-extrabold">{section.replace('# ', '')}</h1>;
      } else {
        // Regular text
        return <p key={index} className="mb-2">{section}</p>;
      }
    });
  };
  

  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      {/* Hero Section */}
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#c21e56]">Trusted by Doctors, Delivered by AI: </span>
        Health That Speaks Your Language.
      </h1>
      <p className="text-l text-gray-500 text-center">
        Your trusted companion for reproductive health, blending doctor-approved insights
        with AI-powered precision. Get personalized care, multilingual support, and
        science-backed answers, all in one place!
      </p>
      <Link to={'/Get-Ans'}>
        <Button>Get Started, It's Free</Button>
      </Link>

      {/* Popular Reads Section */}
<div className="mt-16 w-full">
  <h2 className="text-2xl font-bold mb-4">Popular Reads</h2>
  <div className="relative flex items-center">
    <MdChevronLeft
      size={40}
      className="absolute left-0 z-10 cursor-pointer bg-[#6a6768] text-white rounded-full hover:bg-[#a61b4b] transition transform -translate-y-1/2 top-1/2"
      onClick={() => scroll('left')}
    />
    <div id="slider" className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
      {articles.map((article) => (
        <div
          key={article.id}
          className="inline-block w-72 p-4 border rounded-lg shadow-md bg-white mx-2"
        >
          <img
            src={article.image}
            alt="Article"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <div className="text-gray-700 text-sm mb-4 line-clamp-3">
            {article.text}
          </div>
          <div className="flex justify-between mt-4">
            {/* Conditional "Summarize using AI" Button */}
            <Link to={article.route[1]}>
                <Button className="bg-black text-white hover:bg-[#c21e56]">
                  Summarize using AI
                </Button>
              </Link>
            
            {/* "Read It" Button */}
            <Link to={article.route[0]}>
              <Button className="bg-black text-white hover:bg-[#c21e56] ml-2">
                Read It
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
    <MdChevronRight
      size={40}
      className="absolute right-0 z-10 cursor-pointer bg-[#6a6768] text-white rounded-full hover:bg-[#a61b4b] transition transform -translate-y-1/2 top-1/2"
      onClick={() => scroll('right')}
    />
  </div>
</div>


      {/* Floating Chatbot Button */}
      <Container>
        <Button onClick={toggleChat} className="bg-[#c21e56] text-white rounded-2xl px-4 py-2">
          Need Help?
        </Button>
      </Container>

      {/* Chatbot Modal */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-16 bg-[#6e5b84] p-4 rounded-2xl shadow-lg w-80 flex flex-col">
          <div className="flex justify-between items-center bg-[#c21e56] text-white p-2 rounded-t-lg">
            <h3 className="font-bold text-lg">Asha: Your Friend in Need</h3>
            <button onClick={toggleChat} className="text-white hover:text-[#e6f872] rounded-full">
              ✖
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-2 bg-[#f5f5f5]">
            {messages.map((message, index) => (
              <div
              key={index}
              className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
              <div
              className={`inline-block px-3 py-2 rounded-lg ${
              message.sender === 'user'
            ? 'bg-[#c21e56] text-white'
            : 'bg-[#e6f872] text-black'
            }`}
          >
            {typeof message.text === 'string' ? (
              message.text // For plain text messages
              ) : (
              <div className="space-y-2">
            {message.text} // Render JSX content for structured messages
          </div>
            )}
          </div>
          </div>
           ))}
          </div>

          <div className="flex items-center border-t p-2 bg-white">
            <input
              type="text"
              className="flex-grow p-2 border rounded-lg mr-2 focus:outline-none focus:ring focus:ring-[#c21e56] bg-white text-black"
              placeholder="Type your message..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              onClick={handleSearch}
              className="bg-[#c21e56] text-white px-4 py-2 rounded-lg"
              disabled={loading}
            >
              {loading ? '...' : 'Send'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;