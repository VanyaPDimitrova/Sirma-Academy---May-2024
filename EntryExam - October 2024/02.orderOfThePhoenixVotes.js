function orderOfThePhoenixVotes(votes) {
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

  if ((yesCount == noCount && yesCount == abstainCount) || 
      (yesCount == noCount && abstainCount < yesCount) ||
      (yesCount == abstainCount && noCount < yesCount) ||
      (abstainCount == noCount && yesCount < abstainCount)
    ) {
    voteResult = "Tie";
    
  } else {
    let maxCount = Math.max(yesCount, noCount, abstainCount);
    let index = voteCount.indexOf(maxCount);
    voteResult = voteType[index];
   
  } 

  console.log(voteResult);
}

orderOfThePhoenixVotes(["Yes", "No", "Yes", "Abstain", "Yes"]); // Yes
orderOfThePhoenixVotes(["No", "No", "Yes"]); // No
orderOfThePhoenixVotes(["Yes", "No"]); // Tie
orderOfThePhoenixVotes(["Abstain"]); // Abstain
orderOfThePhoenixVotes(["No", "No", "Abstain", "Abstain", "Yes", "Yes"]); // Tie
orderOfThePhoenixVotes(["No", "Abstain", "Abstain"]); // Abstain
orderOfThePhoenixVotes(["No", "Abstain", "Abstain", "Yes", "Yes", "Yes"]); // Yes
orderOfThePhoenixVotes(["Abstain", "Abstain"]); // Abstain
orderOfThePhoenixVotes(["Abstain", "Yes", "No", "No"]); // No
orderOfThePhoenixVotes(["Abstain", "Yes"]); // Tie
orderOfThePhoenixVotes(["No", "Abstain"]); // Tie
