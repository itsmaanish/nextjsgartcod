import { calculateTimeToEvent } from "@/utils/countdown-util";
import { type Icon } from "@/utils/icon-util";
import { useState, useEffect } from "react";
import { TimeUnit } from "./TimeUnit";

export const CountdownTimer = ({
  currentIcon,
}: {
  currentIcon: Icon;
}) => {
  const [countdown, setCountdown] = useState(calculateTimeToEvent());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeToEvent());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={"text-center flex gap-[10px]"}>
      <TimeUnit
        label="DAYS"
        value={countdown.days}
        currentIcon={currentIcon}
      />
      <TimeUnit
        label="HOURS"
        value={countdown.hours}
        currentIcon={currentIcon}
      />
      <TimeUnit
        label="MINUTES"
        value={countdown.minutes}
        currentIcon={currentIcon}
      />
      <TimeUnit
        label="SECONDS"
        value={countdown.seconds}
        currentIcon={currentIcon}
      />
    </div>
  );
};
