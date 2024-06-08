function councilOfElrondVotes(votes) {
  const voteType = ["Yes", "No", "Abstain"];
  const voteCount = [0, 0, 0];

  for (const vote of votes) {
    let index = voteType.indexOf(vote);
    voteCount[index]++;
  }

  const yesCount = voteCount[0];
  const noCount = voteCount[1];
  const abstainCount = voteCount[2];
  let voteResult = '';

  // 1
  if (yesCount == noCount && noCount == abstainCount) {
    voteResult = "Tie";
    // 2
  } else if (yesCount != noCount && yesCount != abstainCount && noCount != abstainCount) {
    let maxCount = Math.max(yesCount, noCount, abstainCount);
    let index = voteCount.indexOf(maxCount);
    voteResult = voteType[index];
    // 3
  } else if (yesCount == noCount) {
    if (abstainCount > yesCount) {
      voteResult = "Abstain";
    } else {
      voteResult = "Tie";
    }
    // 4
  } else if (yesCount == abstainCount) {
    if (noCount > yesCount) {
      voteResult = "No";
    } else {
      voteResult = "Tie";
    }
    // 5
  } else if (abstainCount == noCount) {
    if (yesCount > abstainCount) {
      voteResult = "Yes";
    } else {
      voteResult = "Tie";
    }
  } 

  console.log(voteResult);
}

councilOfElrondVotes(["No", "No", "Abstain", "Abstain", "Yes", "Yes"]); // tie - 1
councilOfElrondVotes(["No", "No", "Yes"]); // no - 2
councilOfElrondVotes(["No", "Abstain", "Abstain"]); // abstain - 2
councilOfElrondVotes(["Abstain"]); // abstain - 3.1
councilOfElrondVotes(["Yes", "No"]); // tie - 3.2
councilOfElrondVotes(["Abstain", "Yes", "No", "No"]); // no - 4.1
councilOfElrondVotes(["Abstain", "Yes"]); // tie - 4.2
councilOfElrondVotes(["Yes", "No", "Yes", "Abstain", "Yes"]); // yes - 5.1
councilOfElrondVotes(["No", "Abstain"]); // tie - 5.2

