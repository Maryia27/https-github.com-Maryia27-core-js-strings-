function getStringLength(value) {
  return value ? value.length : 0;
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function concatenateStrings(value1, value2) {
  return value1 + value2;
}

function getFirstChar(value) {
  return value ? value.charAt(0) : '';
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value ? value.trim() : '';
}

function removeLeadingWhitespaces(value) {
  return value ? value.replace(/^\s+/, '') : '';
}

function removeTrailingWhitespaces(value) {
  return value ? value.replace(/\s+$/, '') : '';
}

function repeatString(str, times) {
  return times > 0 ? str.repeat(times) : '';
}

function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

function removeLastOccurrences(str, value) {
  const lastIndex = str.lastIndexOf(value);
  if (lastIndex === -1) return str;
  return str.slice(0, lastIndex) + str.slice(lastIndex + value.length);
}

function sumOfCodes(str) {
  return str
    ? str.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)
    : 0;
}

function startsWith(str, substr) {
  return str.startsWith(substr);
}

function endsWith(str, substr) {
  return str.endsWith(substr);
}

function formatTime(minutes, seconds) {
  const pad = (num) => String(num).padStart(2, '0');
  return `${pad(minutes)}:${pad(seconds)}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function countVowels(str) {
  const vowels = /[aeiouyAEIOUY]/g;
  const matches = str.match(vowels);
  return matches ? matches.length : 0;
}

function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

function containsSubstring(str, substring) {
  return str.includes(substring);
}

function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

function findLongestWord(sentence) {
  return sentence
    .split(' ')
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ''
    );
}

function reverseWords(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function invertCase(str) {
  return str
    .split('')
    .map((char) => {
      return char === char.toLowerCase()
        ? char.toUpperCase()
        : char.toLowerCase();
    })
    .join('');
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  return value.replace('Hello, ', '').replace('!', '');
}

function unbracketTag(str) {
  return str.replace(/^<|>$/g, '');
}

function extractEmails(str) {
  return str.split(';');
}

function encodeToRot13(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const base = char <= 'Z' ? 'A' : 'a';
    return String.fromCharCode(
      ((char.charCodeAt(0) - base.charCodeAt(0) + 13) % 26) + base.charCodeAt(0)
    );
  });
}

function getCardId(value) {
  const suits = ['♣️', '♦️', '♥️', '♠️'];
  const ranks = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
  const suit = value.slice(-1);
  const rank = value.slice(0, -1);
  return ranks.indexOf(rank) + suits.indexOf(suit) * ranks.length;
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
