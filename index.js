const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
  ];
  
  const yearOfWin = superbowlWin(record);
  if (yearOfWin) {
    console.log(`The Denver Broncos won the Super Bowl in ${yearOfWin}`);
  } else {
    console.log("The Denver Broncos have not won a Super Bowl.");
  }

  function superbowlWin(record) {
    const winningRecord = record.find(game => game.result === "W");
    return winningRecord ? winningRecord.year : undefined;
  }