function analyzeText() {
  const text = document.getElementById("paragraphInput").value;
  const totalChars = text.length;
  const words = text.match(/\b\w+\b/g) || [];
  const totalWords = words.length;
  const totalSentences = (text.match(/[.!?]/g) || []).length;
  const uniqueWords = [...new Set(words.map(w => w.toLowerCase()))];
  const freq = {};
  
  words.forEach(word => {
    const w = word.toLowerCase();
    freq[w] = (freq[w] || 0) + 1;
  });

  const sortedFreq = Object.entries(freq).sort((a, b) => b[1] - a[1]);

  const output = `
Total Characters: ${totalChars}
Total Words: ${totalWords}
Total Sentences: ${totalSentences}
Unique Words: ${uniqueWords.join(", ")}
Word Frequency:
${sortedFreq.map(([word, count]) => word + ": " + count).join("\n")}
`;

  document.getElementById("output").textContent = output;
}
