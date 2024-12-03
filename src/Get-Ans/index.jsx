import React, { useState, useMemo } from 'react';
import { Button } from '../components/ui/button';

const GetAns = () => {
  // Separate states for each function
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [loadingSearch, setLoadingSearch] = useState(false);

  const [insightQuery, setInsightQuery] = useState('');
  const [insightResults, setInsightResults] = useState('');
  const [loadingInsights, setLoadingInsights] = useState(false);

  const [expertQuery, setExpertQuery] = useState('');
  const [expertResults, setExpertResults] = useState('');
  const [loadingExpert, setLoadingExpert] = useState(false);

  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [inputLanguage, setInputLanguage] = useState('en');
  const [outputLanguage, setOutputLanguage] = useState('en');

  const [activeTab, setActiveTab] = useState('search');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');


  const formatAIResponse = (response) => {
    const sections = response.split(/\*\*|\*\*/);
    return sections.map((section, index) => {
      if (index % 2 === 1) {
        return (
          <h3 key={index} className="text-xl font-semibold text-gray-800 mb-2">
            {section.trim()}
          </h3>
        );
      }
      const items = section.split('\n').filter((item) => item.trim());
      if (items.length > 1) {
        return (
          <ul key={index} className="list-disc pl-6 mb-4">
            {items.map((item, i) => (
              <li key={i} className="text-gray-700">
                {item.trim()}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={index} className="text-gray-700 mb-4">
          {section.trim()}
        </p>
      );
    });
  };

  // Handlers
  const handleSearch = async () => {
    setLoadingSearch(true);
    try {
      // Validate query
      if (!searchQuery.trim()) {
        setSearchResults('Please enter a query to search.');
        setLoadingSearch(false);
        return;
      }

      // API call
      const apiKey = 'AIzaSyAoEcKDp92hNjuzd2AbfBhyLk_P597v4k8';
      const cx = '71b836efb5613483e';
      const queryEncoded = encodeURIComponent(searchQuery);

      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=${queryEncoded}&key=${apiKey}&cx=${cx}`
      );

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const articles = data.items.map((item) => ({
          title: item.title,
          link: item.link,
          snippet: item.snippet,
        }));
        setSearchResults(articles);
      } else {
        setSearchResults('No articles found for your search.');
      }
    } catch (error) {
      console.error('Error during search:', error);
      setSearchResults('An error occurred during search.');
    } finally {
      setLoadingSearch(false);
    }
  };

  const handleSummarize = async () => {
    setLoadingInsights(true);
    try {
      const summarizer = await ai.summarizer.create();
      await summarizer.ready;

      const result = await summarizer.summarize(insightQuery || 'Default text to summarize');
      setInsightResults(result);
      summarizer.destroy();
    } catch (error) {
      console.error('Error during summarization:', error);
      setInsightResults('An error occurred during summarization.');
    } finally {
      setLoadingInsights(false);
    }
  };

  const handleExpertTips = async () => {
    setLoadingExpert(true);
    try {
      const { available } = await ai.languageModel.capabilities();
      if (available === 'no') {
        setExpertResults('The model is not available on your device.');
        return;
      }

      const session = await ai.languageModel.create();
      const result = await session.prompt(expertQuery);
      setExpertResults(result);
      session.destroy();
    } catch (error) {
      console.error('Error during expert tips fetch:', error);
      setExpertResults('An error occurred while fetching expert tips.');
    } finally {
      setLoadingExpert(false);
    }
  };

//Rewrite API
const handleSimplify = async () => {
  setLoading(true); // Start the loading indicator
  setTranslatedText(""); // Clear previous output
  try {
    if (!inputText.trim()) {
      setTranslatedText("Please provide text to simplify.");
      setLoading(false);
      return;
    }

    // Create the rewriter instance
    const rewriter = await ai.rewriter.create({
      sharedContext: "Simplify the following text for easier understanding."
    });

    // Start streaming the rewritten text
    const stream = rewriter.rewriteStreaming(inputText, {
      context: "Simplify the language while retaining the original meaning."
    });

    let lastChunk = ""; // To store only the last chunk

    for await (const chunk of stream) {
      lastChunk = chunk.trim(); // Overwrite with the latest chunk
    }

    // Set the last chunk as the final output
    setTranslatedText(lastChunk);

    // Clean up the rewriter instance
    rewriter.destroy();
  } catch (error) {
    console.error("Error during simplification:", error);
    setTranslatedText("An error occurred while simplifying the text.");
  } finally {
    setLoading(false); // Stop the loading indicator
  }
};


//Tranlate API
const handleTranslate = async (targetLanguage) => {
  setLoading(true); // Start loading indicator
  try {
    const languagePair = { sourceLanguage: inputLanguage, targetLanguage };

    // Validate the selected target language
    const supportedLanguages = ["hi", "es", "sk", "uk"];
    if (!supportedLanguages.includes(targetLanguage)) {
      setResults("Translation is not available for the selected language.");
      setLoading(false);
      return;
    }

    // Check if translation is possible
    const canTranslate = await translation.canTranslate(languagePair);

    if (canTranslate === "no") {
      setResults("Translation is not available for this language pair.");
      return;
    }

    let translator;

    // Create translator instance based on availability
    if (canTranslate === "readily") {
      translator = await translation.createTranslator(languagePair); // Translator ready
    } else {
      translator = await translation.createTranslator(languagePair); // Download required
      translator.addEventListener("downloadprogress", (e) => {
        console.log(`Downloading translation model: ${e.loaded}/${e.total}`);
      });
      await translator.ready;
    }

    // Translate the text
    if (!inputText.trim()) {
      setResults("Please enter text to translate.");
      return;
    }

    const translatedText = await translator.translate(inputText);
    setTranslatedText(translatedText); // Update translated text

    translator.destroy(); // Free resources
  } catch (error) {
    console.error("Error during translation:", error);
    setResults("An error occurred while translating the text.");
  } finally {
    setLoading(false); // Stop loading indicator
  }
};

  // Tab Content
  const tabContent = {
    search: (
      <div>
        <input
          type="text"
          placeholder="Have a Query? Ask us..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c21e56] text-black bg-white"
        />
        <Button
          onClick={handleSearch}
          className="bg-[#c21e56] text-white px-6 py-3 rounded-lg hover:bg-[#a61b4b] transition font-bold"
          disabled={loadingSearch || !searchQuery.trim()}
        >
          {loadingSearch ? 'Loading...' : 'Search'}
        </Button>
        <div className="p-4 mt-4 border rounded-lg shadow-md bg-gray-50">
          {Array.isArray(searchResults)
            ? searchResults.map((article, index) => (
                <div key={index} className="mb-4">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {article.title}
                  </a>
                  <p className="text-gray-700">{article.snippet}</p>
                </div>
              ))
            : <p className="text-gray-700">{searchResults}</p>}
        </div>
      </div>
    ),
    quickInsights: (
      <div>
        <textarea
          rows="8"
          placeholder="Paste or write your text here to get quick insights..."
          value={insightQuery}
          onChange={(e) => setInsightQuery(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c21e56] text-black bg-white"
        />
        <Button
          onClick={handleSummarize}
          className="mt-4 bg-[#c21e56] text-white px-6 py-3 rounded-lg hover:bg-[#a61b4b] transition font-bold"
          disabled={loadingInsights || !insightQuery.trim()}
        >
          {loadingInsights ? 'Summarizing...' : 'Get Quick Insights'}
        </Button>
        <div className="p-4 mt-4 border rounded-lg shadow-md bg-gray-50">
          <p className="text-gray-700">{insightResults}</p>
        </div>
      </div>
    ),
    expertTips: (
      <div>
        <textarea
          rows="8"
          placeholder="Enter your query to get AI-generated tips..."
          value={expertQuery}
          onChange={(e) => setExpertQuery(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c21e56] text-black bg-white"
        ></textarea>
        <Button
          onClick={handleExpertTips}
          className="mt-4 bg-[#c21e56] text-white px-6 py-3 rounded-lg hover:bg-[#a61b4b] transition font-bold"
          disabled={loadingExpert || !expertQuery.trim()}
        >
          {loadingExpert ? 'Loading...' : 'Get Expert Tips'}
        </Button>
        <div className="p-4 mt-4 border rounded-lg shadow-md bg-gray-50">
          {loadingExpert ? (
            <p className="text-gray-500">Loading expert tips...</p>
          ) : expertResults ? (
            formatAIResponse(expertResults)
          ) : (
            <p className="text-gray-700">No results found. Please try a different query.</p>
          )}
        </div>
      </div>
    ),

    simplify:(
      <div className="simplify-container">
        {/* Input and Output Boxes */}
        <div className="flex flex-col sm:flex-row gap-4 w-full p-4 justify-between ">
          {/* Input Text Box */}
          <textarea
            rows="8"
            className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c21e56] bg-white text-black"
            placeholder="Enter text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>


          {/* Output Text Box */}
          <textarea
            className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-50"
            placeholder="simplify"
            value={translatedText}
            readOnly
          ></textarea>
        </div>
        <Button
         onClick={handleSimplify}
         className="mt-4 bg-[#c21e56] justify-center items-center text-white px-6 py-3 rounded-lg hover:bg-[#a61b4b] transition font-bold"
         disabled={loading}
         >
         {loading ? 'Simplifying...' : 'Make it Simple'}
        </Button>


       
      </div>
    ),
   
    translate: (
      <div className="translation-container">
        {/* Input and Output Boxes */}
        <div className="flex flex-col sm:flex-row gap-4 w-full p-4 justify-between ">
          {/* Input Text Box */}
          <textarea
            rows="8"
            className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c21e56] bg-white text-black"
            placeholder="Enter text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>


          {/* Output Text Box */}
          <textarea
            className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-50"
            placeholder="Translation"
            value={translatedText}
            readOnly
          ></textarea>
        </div>


        {/* Language Selection and Button */}
        <div className="flex justify-center items-center gap-4">
          {/* Input Language Dropdown */}
          <select
            value={inputLanguage}
            onChange={(e) => setInputLanguage(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c21e56] text-black bg-white"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
            <option value="mr">Marathi</option>
            <option value="gu">Gujarati</option>
          </select>


          {/* Output Language Dropdown */}
          <select
            value={outputLanguage}
            onChange={(e) => setOutputLanguage(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c21e56] text-black bg-white"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
            <option value="mr">Marathi</option>
            <option value="gu">Gujarati</option>
          </select>


          <Button
            onClick={() => handleTranslate(outputLanguage)}
            className="text-white px-6 py-3 rounded-lg transition hover:bg-[#a61b4b]"
            disabled={loading}
          >
            {loading ? 'Translating...' : `Translate to ${outputLanguage}`}
          </Button>
        </div>
       
      </div>
    ),
  };


  return (
    <div>
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-[#c21e56] mb-4">Welcome to Your Safe Space for Reproductive Health</h1>
        <p className="text-xl text-gray-700 mx-auto">
          Feel supported, respected, and in control of your wellness journey every step of the way.
        </p>
      </header>

      <div className="container mx-auto p-6 max-w-4xl bg-white rounded-lg shadow-lg">
        {/* Tab Navigation */}
        <div className="flex border-b gap-4">
          {['search', 'quickInsights', 'expertTips', 'simplify', 'translate'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-center py-3 font-bold ${
                activeTab === tab
                  ? 'text-white border-b-4 border-[#c21e56] bg-[#c21e56]'
                  : 'text-black bg-white border-b-2 border-[#c21e56]'
              }`}
            >
              {tab === 'search'
                ? 'Search'
                : tab === 'quickInsights'
                ? 'Quick Insights'
                : tab === 'expertTips'
                ? 'Expert Tips'
                : tab === 'simplify'
                ? 'Simplify'
                : 'Translate'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6">{tabContent[activeTab]}</div>
        
      </div>

      <footer className="text-center py-4 text-gray-600 mt-6">
        Empowering women, one answer at a time. © 2024 SachiSakhi
      </footer>
    </div>
  );
};

export default GetAns;