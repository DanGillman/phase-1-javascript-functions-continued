function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

  function mondayWork(activity) {
    const actualActivity = activity ? `I will ${activity}` : "I will go to the office";
    return `This Monday, ${actualActivity}.`;
  }
  function wrapAdjective(highlight = "*") {
    return function(adjective) {
      return `You are ${highlight}${adjective}${highlight}!`;
    };
  }