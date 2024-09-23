import { useSelector } from "react-redux";

const useGetData = (id: number) => {
  const convertToNumber = Number(id);


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
