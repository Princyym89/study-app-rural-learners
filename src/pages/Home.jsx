function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">Study App for Rural Learners</h1>
      <p className="text-gray-700 mb-6 text-lg">
        Helping learners in rural areas access study materials, quizzes, and notes — even offline.
      </p>
      <div className="flex justify-center space-x-4">
        <div className="bg-white rounded-lg shadow-md p-6 w-48 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Notes</h2>
          <p className="text-gray-700">Access study notes for all subjects.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-48 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Quizzes</h2>
          <p className="text-gray-700">Test your knowledge with quizzes.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-48 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">About</h2>
          <p className="text-gray-700">Learn more about this app.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
