import React from "react";
import useTitle from "../../useTitle/useTitle";

const Blog = () => {
  useTitle("Block page")
  
  return (
    <div>
      <section className="flex items-center flex-1 py-24 justify-center h-[100vh]">
        <div className="flex flex-col w-full ">
          <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
              Coming
            </span>

            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
              Soon
            </span>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Blog;
