import { useSelector } from "react-redux";

const useGetData = (id: number) => {
  const convertToNumber = Number(id);


  const data = {
    "id": 41,
    "category": "Web development",
    "type": "multiple choice",
    "tags": [
        "JavaScript"
    ],
    "questionText": "What will be the output of the following code snippet?",
    "options": [
        {
            "text": "YES",
            "isCorrect": true
        },
        {
            "text": "NO",
            "isCorrect": false
        },
        {
            "text": "Syntax Error",
            "isCorrect": false
        },
        {
            "text": "None of the above",
            "isCorrect": false
        }
    ],
    "correctAnswers": [
        "YES"
    ],
    "explanation": "The above code performs binary search to search for the target element of 5 in the given array. If it is found, it prints YES else NO.",
    "codeAvailable": true,
    "codeContent": "let a = [1, 2, 3, 4, 5, 6];\nvar left = 0, right = 5;\nvar found = false;\nvar target = 5;\nwhile(left <= right) {\n   var mid = Math.floor((left + right) / 2);\n   if(a[mid] == target) {\n       found = true;\n       break;\n   }\n   else if(a[mid] < target) {\n       left = mid + 1;\n   }\n   else {\n       right = mid - 1;\n   }\n}\nif(found) {\n   print(\"YES\");\n}\nelse {\n   print(\"NO\");\n}",
    "isAnswered": false,
    "userAnswer": null,
    "isCurrent": false
}

  const allSelectedQuestions = useSelector(
    (state: any) => state.QuizMST.randomQuestions.data
  );

  const filteredQuestion = allSelectedQuestions?.find(
    (item: any) => item.id === convertToNumber
  );

  const index = allSelectedQuestions?.findIndex(
    (item: any) => item.id === convertToNumber
  );

  return {filteredQuestion, index};
};

export default useGetData;
