import { FaCalculator, FaFlask, FaBook, FaGlobe } from "react-icons/fa"; // Install react-icons if needed

function Notes() {
  const notes = [
    { subject: "Mathematics", topics: ["Algebra", "Geometry", "Statistics"], icon: <FaCalculator className="text-blue-500 w-6 h-6" /> },
    { subject: "Science", topics: ["Biology", "Chemistry", "Physics"], icon: <FaFlask className="text-green-500 w-6 h-6" /> },
    { subject: "Languages", topics: ["English", "Setswana"], icon: <FaBook className="text-purple-500 w-6 h-6" /> },
    { subject: "Social Studies", topics: ["Geography", "History"], icon: <FaGlobe className="text-yellow-500 w-6 h-6" /> },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
            <div className="flex items-center space-x-2 mb-2">
              {note.icon}
              <h2 className="text-xl font-semibold text-blue-700">{note.subject}</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              {note.topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
