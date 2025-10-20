import { FaCalculator, FaFlask, FaBook, FaGlobe } from "react-icons/fa";

function Quizzes() {
  const quizzes = [
    { subject: "Mathematics", description: "Test your math skills", icon: <FaCalculator className="text-blue-500 w-6 h-6" /> },
    { subject: "Science", description: "Explore science quizzes", icon: <FaFlask className="text-green-500 w-6 h-6" /> },
    { subject: "Languages", description: "Language and grammar quizzes", icon: <FaBook className="text-purple-500 w-6 h-6" /> },
    { subject: "Social Studies", description: "History and geography quizzes", icon: <FaGlobe className="text-yellow-500 w-6 h-6" /> },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Quizzes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
            <div className="flex items-center space-x-2 mb-2">
              {quiz.icon}
              <h2 className="text-xl font-semibold text-blue-700">{quiz.subject}</h2>
            </div>
            <p className="text-gray-700">{quiz.description}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Start Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quizzes;
