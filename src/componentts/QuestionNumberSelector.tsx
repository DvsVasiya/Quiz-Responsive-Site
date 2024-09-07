
const QuestionNumberSelector = () => {
  return (
    <div className="flex mt-5 justify-between items-center	">
    <h4 className="font-bold text-sm">Questions</h4>
    <div className="flex gap-2">
    <select id="countries" className="text-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
    </div>
  </div>
  )
}

export default QuestionNumberSelector