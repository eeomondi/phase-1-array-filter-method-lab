function findMatching(drivers, query) {
    return drivers.filter(driver => driver.name && driver.name.toLowerCase().includes(query.toLowerCase()));
  }
  
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.name && driver.name.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name && driver.name === query);
  }
  
  export default { findMatching, fuzzyMatch, matchName };