const poll = new Map();

function addOption(option) {
  if (option.trim() == "") {
    return `Option cannot be empty.`;
  }

  const optionExists = poll.has(option);

  if (optionExists) {
    return `Option "${option}" already exists.`;
  } else {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }
}

function vote(option, voterId) {
  const optionExists = poll.has(option);

  if (optionExists) {
    const voted = poll.get(option);

    if (voted.has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`;
    }

    voted.add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
  }

  return `Option "${option}" does not exist.`;
}

function displayResults() {
  let res = [`Poll Results:`];

  poll.forEach((voters, option) => {
    res.push(`${option}: ${voters.size} votes`);
  });

  return res.join("\n");
}

poll.set("Tony", new Set(["Till", "Jill", "Bill"]));
poll.set("Lucky", new Set(["Till", "Jill"]));
poll.set("DR", new Set(["Bill"]));

console.log(displayResults());
