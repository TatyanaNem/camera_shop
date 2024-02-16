import { useEffect, useState } from 'react';

export default function useKeyPressed (keyTarget: string) {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = ({key}: {key: string}) => {
    if (key === keyTarget) {
      setKeyPressed(true);
    }
  };

  const upHandler = ({key}: {key: string}) => {
    if (key === keyTarget) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });

  return keyPressed;
}
