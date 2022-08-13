const Loading = () => {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 animate-pulse">
        <div className="h-80 w-full md:w-3/4 dark:bg-dark-blue-3 bg-gray-1 rounded-sm"></div>
        <div>
          <div className="dark:bg-dark-blue-3 bg-gray-1 w-1/2 h-10 rounded-sm mb-5 mt-10 md:mt-0"></div>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="mb-5">
              <div className="mb-2 dark:bg-dark-blue-3 bg-gray-1 w-72 h-7 rounded-sm"></div>
              <div className="mb-2 dark:bg-dark-blue-3 bg-gray-1 w-72 h-7 rounded-sm"></div>
              <div className="mb-2 dark:bg-dark-blue-3 bg-gray-1 w-72 h-7 rounded-sm"></div>
              <div className="mb-2 dark:bg-dark-blue-3 bg-gray-1 w-72 h-7 rounded-sm"></div>
              <div className="mb-2 dark:bg-dark-blue-3 bg-gray-1 w-72 h-7 rounded-sm"></div>
            </div>
            <div className="mb-5">
              <div className="mb-2 dark:bg-dark-blue-3 bg-gray-1 w-72 h-7 rounded-sm"></div>
              <div className="mb-2 dark:bg-dark-blue-3 bg-gray-1 w-72 h-7 rounded-sm"></div>
              <div className="mb-2 dark:bg-dark-blue-3 bg-gray-1 w-72 h-7 rounded-sm"></div>
            </div>
          </div>
          <div className="mt-5 dark:text-white md:inline-flex items-start mb-10">
            <div className="dark:bg-dark-blue-3 bg-gray-1 w-40 h-7 rounded-sm"></div>
              <div className="inline-grid md:grid-cols-3 grid-cols-2 gap-4 mt-5 md:mt-0">
                <div className="mb-2 dark:bg-dark-blue-3 bg-gray-1 w-40 h-7 rounded-sm"></div>
                <div className="mb-2 dark:bg-dark-blue-3 bg-gray-1 w-40 h-7 rounded-sm"></div>
                <div className="mb-2 dark:bg-dark-blue-3 bg-gray-1 w-40 h-7 rounded-sm"></div>
              </div>
          </div>
        </div>
        
      </section>
    )
}

export default Loading