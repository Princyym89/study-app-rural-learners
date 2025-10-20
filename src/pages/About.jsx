function About() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">About This App</h1>
      <p className="text-gray-700 mb-2">
        This study app was built to help learners in rural areas access educational materials easily, even when internet connectivity is limited.
      </p>
      <p className="text-gray-700">
        Features include:
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        <li>Access study notes</li>
        <li>Take quizzes</li>
        <li>Easy navigation between pages</li>
      </ul>
    </div>
  );
}

export default About;
