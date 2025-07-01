import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import projects from './data/projects.json';

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-12">
      {/* Home */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Pablo Smart</h1>
        <p className="text-lg text-gray-600">Aspiring Data Engineer | Portfolio</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="mailto:email@example.com"><Mail /></a>
          <a href="https://github.com/username"><Github /></a>
          <a href="https://linkedin.com/in/username"><Linkedin /></a>
        </div>
      </section>

      {/* About Me */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700">Recent IT Systems graduate focused on data analytics, machine learning, and data engineering. Passionate about transforming data into insights and automation-driven solutions.</p>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {(showAll ? projects : projects.slice(0, 4)).map((proj, idx) => (
            <div key={idx} className="border rounded-xl p-4 shadow-md space-y-2">
              <h3 className="text-xl font-bold">{proj.title}</h3>
              <p className="text-sm text-gray-600">{proj.description}</p>
              <p className="text-sm text-gray-500">Tech Stack: {proj.tech.join(', ')}</p>
              {proj.image && <img src={proj.image} alt={proj.title} className="rounded" />}
              <a href={proj.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">GitHub Repo</a>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="mt-4 text-center">
            <button onClick={() => setShowAll(true)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View All Projects
            </button>
          </div>
        )}
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Python, SQL, PySpark</li>
          <li>Databricks, Azure Data Factory, Hive</li>
          <li>Power BI, Tableau, Git, Excel</li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: <a href="mailto:email@example.com" className="text-blue-600">email@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/username" className="text-blue-600">linkedin.com/in/username</a></p>
      </section>
    </div>
  );
}