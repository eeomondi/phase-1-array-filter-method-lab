const drivers = ['Bobby', 'bobby', 'Sammy', 'Sarah', 'Sally'];

function findMatching(name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(name) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
}

function matchName(name) {
  return drivers.includes(name);
}

module.exports = { findMatching, fuzzyMatch, matchName };