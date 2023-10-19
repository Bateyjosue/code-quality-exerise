function roundRobin(jobs, slice, index) {
  const queue = [...jobs]; // create a copy of the jobs array to use as a queue
  let cc = 0; // initialize the clock-cycles counter to 0

  while (queue.length > 0) {
    let job = queue.shift(); // remove the first job from the queue
    const time = Math.min(slice, job); // calculate the time slice for the job
    cc += time; // add the time slice to the clock-cycles counter
    job -= time; // subtract the time slice from the job
    if (job > 0) {
      queue.push(job); // if the job is not finished, add it back to the queue
    } else if (queue.length > 0) {
      cc += slice; // if the job is finished and there are more jobs in the queue, add the slice time to the clock-cycles counter
    }
    if (queue.length > 0 && index === 0) {
      index = queue.length - 1; // if we're interested in the first job and it yields, update the index to the last job in the queue
    } else if (index > 0) {
      index--; // if we're interested in a job other than the first one, decrement the index
    } else {
      return `the number of ${cc} till the job at ${index} is finished`;
    }
  }
}

console.log(roundRobin([10, 20, 1], 5, 0));
