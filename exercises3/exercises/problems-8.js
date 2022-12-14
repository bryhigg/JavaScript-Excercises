/*
    You will be given a sequence of letters.
    When an uppercase and lowercase of the same letter touch, they destroy each other.
    After they have been removed, the process continues until there are no more letters reacting

    For example:
    "xYyZZX" => "xZZX"
    "aBbA" => ""
*/

function react(sequence) {
    // Keep track of the current sequence and the index of the last
    // processed letter.
    let currentSequence = sequence;
    let lastProcessedIndex = -1;
  
    // Continue processing the sequence until no more letters react.
    while (lastProcessedIndex < currentSequence.length - 1) {
      // Check for any reacting letters.
      for (let i = lastProcessedIndex + 1; i < currentSequence.length - 1; i++) {
        const a = currentSequence[i];
        const b = currentSequence[i + 1];
  
        // If the two letters react, remove them from the sequence.
        if (a !== b && a.toLowerCase() === b.toLowerCase()) {
          currentSequence = currentSequence.slice(0, i) + currentSequence.slice(i + 2);
          lastProcessedIndex = i - 1;
          break;
        }
      }
    }
  
    return currentSequence;
  }
// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.react = react