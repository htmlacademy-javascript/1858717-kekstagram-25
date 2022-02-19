'use strict';

const getRandomNumber = (min, max) => {
  if (max < min) {
    const SWAP = min;
    min = max;
    max = SWAP;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRandomNumber(10, 5);

const isSuitableLength = (string, maxLength) => string.length < maxLength;

isSuitableLength('Task is done', 20);
