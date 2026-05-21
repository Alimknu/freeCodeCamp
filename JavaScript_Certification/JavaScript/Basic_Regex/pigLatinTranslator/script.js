function translatePigLatin(str) {
  const vowels = /[aeiou]/;
  const firstVowel = str.search(vowels);

  if (firstVowel === 0) {
    return str + "way";
  }

  if (firstVowel === -1) {
    return str + "ay";
  }

  return str.slice(firstVowel) + str.slice(0, firstVowel) + "ay";
}
