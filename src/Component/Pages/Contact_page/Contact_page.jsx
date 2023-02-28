import React from "react";
import { useForm } from "react-hook-form";
import useTitle from "../../useTitle/useTitle";
import "./contact.css";

const Contact_page = () => {
  useTitle("Contact page");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="contact_bg py-24 h-screen">
      <div className="mt-16 md:mt-24">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            {/* ========== name ============= */}
            <label className="block">
              <label htmlFor="name" className="py-1">
                Name
              </label>
              <input
                id="name"
                placeholder="enter full name"
                className="block border-[1px] border-teal-400 outline-none px-2 py-1 w-full rounded-sm"
                {...register("name", { required: true, maxLength: 20 })}
              />
              {errors.name && errors.name.type === "required" && (
                <span className="text-red-400">Name is required</span>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <span className="text-red-400">Max length exceeded</span>
              )}
            </label>

            {/*=========== email=========== */}
            <label className="block">
              <label htmlFor="email" className="py-1">
                Email
              </label>
              <input
                id="email"
                placeholder="enter full email"
                className="block border-[1px] border-teal-400 outline-none px-2 py-1 w-full rounded-sm"
                {...register("email", { required: true, maxLength: 20 })}
              />
              {errors.email && errors.email.type === "required" && (
                <span className="text-red-400">Email is required</span>
              )}
            </label>

            {/* ============ text-area */}
            <label className="block">
              <label htmlFor="message" className="py-1">
                Message
              </label>
              <textarea
                rows="3"
                id="message"
                placeholder="message"
                className="block border-[1px] border-teal-400 outline-none px-2 py-1 w-full rounded-sm"
                {...register("message", { required: true })}
              />
              {errors.message && errors.message.type === "required" && (
                <span className="text-red-400">message is required</span>
              )}
            </label>

            <button
              type="submit"
              className="bg-[#273c75] px-3 py-2 rounded text-white w-[50%] mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact_page;
