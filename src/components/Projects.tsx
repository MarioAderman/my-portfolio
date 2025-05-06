export default function Projects() {
    return (
      <div className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg dark:border-gray-700">
            <h3 className="text-xl font-bold mb-2">Project One</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Description of your project with tech stack or a link.
            </p>
          </div>
          <div className="p-6 border rounded-lg dark:border-gray-700">
            <h3 className="text-xl font-bold mb-2">Project Two</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Description of another cool thing you built.
            </p>
          </div>
        </div>
      </div>
    )
  }
  