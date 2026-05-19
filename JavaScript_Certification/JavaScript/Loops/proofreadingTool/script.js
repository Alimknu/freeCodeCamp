function isPalindrome(word) {
  if (typeof word !== "string") return false;
  const normalized = word.toLowerCase();
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}

function findPalindromeBreaks(words) {
  const res = [];
  if (!Array.isArray(words) || words.length === 0) return res;

  words.forEach((word, idx) => {
    if (!isPalindrome(word)) {
      res.push(idx);
    }
  });

  return res;
}

function findRepeatedPhrases(words, phraseLength) {
  const res = [];
  if (!Array.isArray(words) || words.length === 0) return res;
  if (typeof phraseLength !== "number" || phraseLength <= 0) return res;
  if (phraseLength >= words.length) return res;

  const map = new Map();
  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words
      .slice(i, i + phraseLength)
      .join(" ")
      .toLowerCase();
    if (!map.has(phrase)) map.set(phrase, []);
    map.get(phrase).push(i);
  }

  for (const indices of map.values()) {
    if (indices.length > 1) res.push(...indices);
  }

  return res.sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
  const results = [];
  if (!Array.isArray(texts) || texts.length === 0) return results;

  for (const text of texts) {
    let words;
    if (Array.isArray(text)) {
      words = text;
    } else if (typeof text === "string") {
      words = text.match(/\b\w+\b/g) || [];
    } else if (text && typeof text.text === "string") {
      words = text.text.match(/\b\w+\b/g) || [];
    } else {
      words = [];
    }

    const repeatedPhrases = findRepeatedPhrases(words, phraseLength);
    const palindromeBreaks = findPalindromeBreaks(words);
    results.push({ repeatedPhrases, palindromeBreaks });
  }

  return results;
}
