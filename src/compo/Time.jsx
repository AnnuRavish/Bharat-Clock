import { useEffect, useState } from "react";

const Time = () => {
  const [timer, setTimer] = useState(new Date())

  useEffect(() => {

    const interval = setInterval(() => {
      setTimer(new Date())

    }, 1000)


    return () => {
      clearInterval(interval);
    }
  }, [])



  return (
    <>
      <h2 className="display-2 display-font-size">This is the current time:</h2>
      <br></br>
      <h2 className="display-2 display-color-size">{timer.toLocaleDateString()} - {timer.toLocaleTimeString()}</h2>
    </>
  )
}

export default Time;