function roundRobin(jobs, slice, index) {
  let clockCycles = 0;
  
  while (jobs[index] > 0) {
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i] !== 0 && jobs[index] <= 0) {
          break;
        }
        const time = Math.min(jobs[i], slice);
        clockCycles += time;
        jobs[i] -= time;
    }
  }
  
  return `the number of ${clockCycles} till the job at ${index} is finished`;
}

console.log(roundRobin([10, 20, 1], 5, 0));
