import React from "react";
import { useForm } from "react-hook-form";

type formErrors = {
  username: {
    required: string;
    minLength: string;
    maxLength: string;
    message: string;
  };
};

const CustomForm = ({ onSubmit }) => {
  const [visible, setVisible] = React.useState(true);
  const { register, errors, handleSubmit } = useForm<formErrors>({
    mode: "onSubmit"
  });

  return (
    <form
      className="grid grid-rows-2 grid-cols-2 gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row-span-1 col-span-2 flex justify-center static pt-2">
        {errors.username && (
          <p className="absolute inset-x--0 mt-12 font-bold bg-white top-0 row-span-1 col-start-1 col-end-2 object-center text-red-600">
            {errors.username.message}
          </p>
        )}
        <label
          htmlFor="username"
          className="text-center flex-1 flex-grow text-black text-m"
        >
          Username
        </label>
        <input
          className="flex-1 flex-shrink w-1/4 bg-white w-3/12 focus:outline-none focus:shadow-outline border border-gray-300"
          name="username"
          placeholder="please enter a username"
          type="text"
          ref={register({
            required: "a username is required",
            minLength: {
              value: 4,
              message: "minimum length is 4 characters"
            },
            maxLength: {
              value: 16,
              message: "maximum length is 16 characters"
            }
          })}
        />
      </div>
      <div className="row-span-2 col-span-2 flex flex-row justify-center pt-1">
          <button className="text-center bg-white w-1/4 shadow-2xl focus:shadow-outline focus:shadow-none">
          submit
        </button>
      </div>
    </form>
  );
};

export default CustomForm;
