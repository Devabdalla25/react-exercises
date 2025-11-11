import React from "react";
import { useForm } from "react-hook-form";
const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const HandleChange = (data) => {
    alert("Registration successful!\n" + JSON.stringify(data, null, 2));
  };
  const gradeSelection = [
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
    "Grade 13",
  ];
  const subjects = [
    "React",
    "JavaScript",
    "Java Script",
    "Node.js",
    "Python",
    "Java",
    "ASP.NET",
    "Mongo db",
  ];
  return (
    <div className="h-screen p-4 justify-center items-center">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg py-8 px-4 ring-1 ring-zinc-900/5">
        <h1 className="text-2xl font-bold mb-2">Student registration</h1>
        <form onSubmit={handleSubmit(HandleChange)}>
          <div className="flex flex-col gap-2 justify-center mb-2">
            <label htmlFor="studentname" className="font-semibold italic">
              Student Name
            </label>
            <input
              className="p-2 border-none rounded-xl bg-gray-200"
              type="text"
              name="studentname"
              id="studentname"
              {...register("studentname", {
                required: "Student Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            {errors.studentname && (
              <p className="text-red-500 text-sm font-serif italic">
                {errors.studentname.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 justify-center mb-2">
            <label htmlFor="email" className="font-semibold italic">
              Email{" "}
            </label>
            <input
              className="p-2 border-none rounded-xl bg-gray-200"
              type="text"
              name="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email is not valid",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm font-serif italic">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 justify-center mb-2">
            <label htmlFor="gradeSelection" className="font-semibold italic">
              Grade levels
            </label>
            <select
              className="p-2 border-none rounded-xl bg-gray-200"
              name="gradeSelection"
              id="gradeSelection"
              {...register("gradeSelection", { required: "select your grade" })}
            >
              <option value="">Select your grade</option>
              {gradeSelection.map((grade) => (
                <option value={grade} key={grade}>
                  {grade}
                </option>
              ))}
            </select>
            {errors.gradeSelection && (
              <p className="text-red-500 text-sm font-serif italic">
                {errors.gradeSelection.message}
              </p>
            )}
          </div>
          <div>
            <div className=" grid grid-cols-2 gap-4">
              {subjects.map((sub) => (
                <label className="flex items-center space-x-2" key={sub}>
                  <input
                    type="checkbox"
                    value={sub}
                    {...register("subjects", {
                      validate: (value) =>
                        (value && value.length > 0) ||
                        "Selcet atleast one subject",
                    })}
                  />
                  <span className="text-sm text-zinc-600">{sub}</span>
                </label>
              ))}
            </div>
              {errors.subjects && (
              <p className="text-red-500 text-sm font-serif italic mt-1">
                {errors.subjects.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="flex justify-center items-center px-8 py-2 bg-green-500 text-white w-full rounded-xl mt-3"
          >
            Submit
          </button>
          <button
            type="reset"
            className="flex justify-center items-center px-8 py-2 bg-red-500 text-white w-full rounded-xl mt-3"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
