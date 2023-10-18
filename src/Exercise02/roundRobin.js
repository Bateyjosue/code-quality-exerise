function roundRobin(jobs, slice, index) {
  jobs.forEach((job, ind) => {
    // if(ind === index){
    if (jobs.length > index) {
      curr = jobs[index];
      if (job >= slice) {
        job -= slice;
        console.log(job);
        console.log(`Running Job ${index + 1} for ${slice} units of time.`);
      } else {
        console.log(`Process ${index + 1} completed.`);
        jobs.splice(index, 1);
        console.log(jobs);
      }
    }
    // }
  });
}

console.log(roundRobin([10, 20, 1], 5, 0));
