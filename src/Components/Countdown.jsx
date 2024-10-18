import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Card, CardContent } from '@mui/material';

const Countdown = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nameFromURL = queryParams.get('name') || '';
  const dateFromURL = queryParams.get('date') || '';

  const [name, setName] = useState(() => {
    const storedName = localStorage.getItem('countdownName');
    return storedName || nameFromURL;
  });

  const [targetDate, setTargetDate] = useState(() => {
    const storedDate = localStorage.getItem('countdownDate');
    return storedDate || dateFromURL;
  });

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isCountdownValid, setIsCountdownValid] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(true); 
  const audioRef = useRef(null);

  useEffect(() => {
    const date = new Date(targetDate);
    date.setHours(12, 0, 0, 0);

    if (isNaN(date.getTime())) {
      setIsCountdownValid(false);
      return;
    }

    localStorage.setItem('countdownName', name);
    localStorage.setItem('countdownDate', targetDate);

    const calculateTimeLeft = () => {
      const now = Date.now(); 
      const difference = date.getTime() - now; 

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsAudioPlaying(false)
        return;
      }

      const newTimeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };

      setTimeLeft(newTimeLeft);
      localStorage.setItem('timeLeft', JSON.stringify(newTimeLeft));

      if (isAudioPlaying && audioRef.current) {
        audioRef.current.play(); 
      }
    };

    calculateTimeLeft();

    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate, name, isAudioPlaying]);

  return (
    <Box
      className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 flex items-center justify-center"
    >
      <Card className="shadow-lg rounded-lg p-4 max-w-md w-full bg-white">
        <CardContent>
          {isCountdownValid ? (
            <>
              <Typography variant="h4" component="h4" className="text-center text-blue-800 font-bold">
                Countdown to <span className='font-bold underline'>{name.toUpperCase()}</span>'s Birthday at 12 PM!
              </Typography>
              <Box className="mt-6 text-center grid grid-cols-4 gap-4">
                <Box>
                  <Typography variant="h5" className="text-purple-700 font-semibold">
                    {timeLeft.days}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    Days
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" className="text-purple-700 font-semibold">
                    {timeLeft.hours}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    Hours
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" className="text-purple-700 font-semibold">
                    {timeLeft.minutes}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    Minutes
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" className="text-purple-700 font-semibold">
                    {timeLeft.seconds}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    Seconds
                  </Typography>
                </Box>
              </Box>
              <audio ref={audioRef} src="./countdown.mp3" loop />
            </>
          ) : (
            <Typography variant="h5" className="text-red-600 text-center">
              Invalid Date Provided!
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Countdown;
