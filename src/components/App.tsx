import React from "react";
import CustomForm from "@components/customForm/customForm";

const App = () => {
  const [visible, setVisible] = React.useState(true);
  const fulfill = (): void => setVisible(false);
  return (
    <section className="container grid grid-cols-1 grid-rows-2 grid-gap-4 bg-purple-300 sm:bg-green-300 md:bg-blue-300 lg:bg-pink-300 flex pb-3">
      <header>
        <h1 className="pt-3 text-center text-gray-900">
          {visible ? `Please Submit the Form` : `Thank you for Submitting`}
        </h1>
      </header>
      <CustomForm onSubmit={fulfill} />
    </section>
  );
};

export default App;
