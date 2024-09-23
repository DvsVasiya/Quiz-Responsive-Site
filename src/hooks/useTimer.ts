

import { useEffect, useState } from 'react';

const useTimer = (initialSeconds: number) => {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);

useEffect(() => {
    if (secondsRemaining <= 0) return;

const time = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);

},1000)

return () => clearInterval(time)


},[secondsRemaining])


  const minutes = Math.floor(secondsRemaining / 60); 

  const seconds = secondsRemaining % 60; 


  return { minutes , seconds };
};

export default useTimer;
