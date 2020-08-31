import React, { useEffect, useState } from 'react';

const light = 'rgba(60,60,67,0.11)';
const dark = '#3C3C43';

const LoaderIconComponent = () => {
  const [tick, setTick] = useState(0);

  // eslint-disable-next-line no-return-await
  const countTick = async () => await setTick((tick + 1) > 7 ? 0 : tick + 1);
  const setColor = (index, el) => (index === el ? light : dark);
  useEffect(() => {
    const timerHandler = setTimeout(countTick, 500);
    return () => clearTimeout(timerHandler);
  }, [tick]);

  return (
    <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="91" height="91">
        <rect width="91" height="91" fill="#C4C4C4"/>
      </mask>
      <g mask="url(#mask0)">
        <path d="M45.5556 6C43.6657 6 42.1171 7.47191 42 9.32744L42.002 9.79587L42.0363 21.6095V22.1809C42.1878 24.0001 43.7122 25.4296 45.5657 25.4296C47.5202 25.4296 49.1031 23.8487 49.1031 21.9003V21.8841L49.1092 9.88269V9.24264C48.9477 7.42143 47.4152 6 45.5556 6Z" fill={setColor(tick,0)}/>
        <path d="M65.0355 30.7881L65.0436 30.78L73.548 22.2938L73.9962 21.8375C75.1713 20.4463 75.0926 18.3505 73.7802 17.0381C72.4455 15.7096 70.3114 15.653 68.9101 16.8867L68.5851 17.2178L60.2402 25.597L59.8404 26.0008C58.6593 27.3879 58.7219 29.4716 60.0363 30.786C61.4153 32.1651 63.6545 32.1651 65.0355 30.7881Z" fill={setColor(tick,1)}/>
        <path d="M82.1143 42H81.6479L69.8181 42.0283L69.2447 42.0363C67.4295 42.1797 65.996 43.7041 66 45.5596C66 47.5101 67.5809 49.087 69.5314 49.095H82.2011C84.0223 48.9355 85.4518 47.4071 85.4478 45.5455C85.4437 43.6597 83.9759 42.1151 82.1143 42Z" fill={setColor(tick,2)}/>
        <path d="M73.6252 69.5737L65.2339 61.245L64.8321 60.8412C63.441 59.658 61.3492 59.7227 60.0368 61.0371C58.6557 62.4161 58.6537 64.6512 60.0348 66.0323L60.0469 66.0464L68.5371 74.5346L68.9934 74.9788C70.3947 76.1559 72.4864 76.0833 73.7988 74.7709C75.1355 73.4302 75.186 71.3001 73.9584 69.9049L73.6252 69.5737Z" fill={setColor(tick,3)}/>
        <path d="M45.5556 65C43.6657 65 42.1171 66.4719 42 68.3274L42.002 68.7959L42.0363 80.6095V81.1809C42.1878 83.0001 43.7122 84.4296 45.5657 84.4296C47.5202 84.4296 49.1031 82.8487 49.1031 80.9003V80.8841L49.1092 68.8827V68.2426C48.9477 66.4214 47.4152 65 45.5556 65Z" fill={setColor(tick,4)}/>
        <path d="M18.3748 69.5737L26.7661 61.245L27.1679 60.8412C28.559 59.658 30.6508 59.7227 31.9632 61.0371C33.3443 62.4161 33.3463 64.6512 31.9652 66.0323L31.9531 66.0464L23.4629 74.5346L23.0066 74.9788C21.6053 76.1559 19.5136 76.0833 18.2012 74.7709C16.8645 73.4302 16.814 71.3001 18.0416 69.9049L18.3748 69.5737Z" fill={setColor(tick,5)}/>
        <path d="M9.33298 42H9.79938L21.6292 42.0283L22.2026 42.0363C24.0178 42.1797 25.4513 43.7041 25.4473 45.5596C25.4473 47.5101 23.8663 49.087 21.9159 49.095H9.24616C7.42495 48.9355 5.99544 47.4071 5.99948 45.5455C6.00352 43.6597 7.47139 42.1151 9.33298 42Z" fill={setColor(tick,6)}/>
        <path d="M26.9645 30.7881L26.9564 30.78L18.452 22.2938L18.0038 21.8375C16.8287 20.4463 16.9074 18.3505 18.2198 17.0381C19.5545 15.7096 21.6886 15.653 23.0899 16.8867L23.4149 17.2178L31.7598 25.597L32.1596 26.0008C33.3407 27.3879 33.2781 29.4716 31.9637 30.786C30.5847 32.1651 28.3455 32.1651 26.9645 30.7881Z" fill={setColor(tick,7)}/>
      </g>
    </svg>
  );
};

export { LoaderIconComponent };
