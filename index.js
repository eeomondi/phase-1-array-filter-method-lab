function findMatching(drivers, query) {
  return drivers.filter(driver => driver.name && typeof driver.name === 'string' && driver.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase()));
}

function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.name && typeof driver.name === 'string' && driver.name.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(drivers, query) {
  return drivers.filter(driver => driver.name && typeof driver.name === 'string' && driver.name === query);
}

export default { findMatching, fuzzyMatch, matchName };