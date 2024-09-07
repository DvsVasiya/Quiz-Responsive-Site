const TimeLimit = () => {
  return (
    <div className="flex mt-5 justify-between items-center	">
      <h4 className="font-bold text-sm">Time Limit</h4>
      <div className="flex gap-2 justify-between items-center">
        <input
          type="text"
          id="first_name"
          className="w-[5rem]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="20"
          required
        />
        <span className="font-semibold text-sm">minutes</span>
      </div>
    </div>
  );
};

export default TimeLimit;
