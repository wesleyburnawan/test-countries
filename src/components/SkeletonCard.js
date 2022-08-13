const SkeletonCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-16 mb-10">
      {Array(12).fill().map((item, index) => (
        <section className="bg-white dark:bg-dark-blue-1 shadow-lg rounded-lg w-full mb-10 md:mb-5 animate-pulse" key={index}>
          <div className="dark:bg-dark-blue-3 bg-gray-1 w-full h-52 rounded-t-lg"></div>
          <div className="p-5">
            <div className="dark:bg-dark-blue-3 bg-gray-1 mb-2 w-full h-8 rounded-sm"></div>
            <div className="mb-2">
              <div className="mb-2 dark:bg-dark-blue-3 bg-gray-1 w-1/2 h-5 rounded-sm"></div>
              <div className="mb-2 dark:bg-dark-blue-3 bg-gray-1 w-1/2 h-5 rounded-sm"></div>
              <div className="mb-2 dark:bg-dark-blue-3 bg-gray-1 w-1/2 h-5 rounded-sm"></div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default SkeletonCard;