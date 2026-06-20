const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [isExpired, setIsExpired] = useState(false);

  const displayRef = useRef(null);
  const timerRef = useRef(null);

  function generateOTP() {
    let res = 0;

    for (let i = 0; i < 6; i++) {
      res += Math.floor(Math.random() * 9) * 10 ** i;
    }

    return res;
  }

  function handleClick() {
    if (timeRemaining !== null && timeRemaining > 0) {
      return;
    }

    const newOtp = generateOTP();
    setOtp(newOtp);
    setIsExpired(false);
    setTimeRemaining(5);
  }

  useEffect(() => {
    if (timeRemaining === null) {
      return;
    }

    if (timeRemaining === 0) {
      setIsExpired(true);

      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      return;
    }

    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timeRemaining]);

  let timerMessage = "";

  if (timeRemaining !== null) {
    if (timeRemaining > 0) {
      timerMessage = `Expires in: ${timeRemaining} seconds`;
    } else if (isExpired) {
      timerMessage = "OTP expired. Click the button to generate a new OTP.";
    }
  }

  const isButtonDisabled = timeRemaining !== null && timeRemaining > 0;

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display" ref={displayRef}>
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>
      <p id="otp-timer" aria-live={"assertive"} ref={timerRef}>
        {timerMessage}
      </p>
      <button
        id="generate-otp-button"
        onClick={handleClick}
        disabled={isButtonDisabled}
      >
        Generate OTP
      </button>
    </div>
  );
};
