const computeTotalPopulation = (locations) => {
  let result = [];
  if (locations.length !== 0 && Array.isArray(locations)) {
    result = locations.map((location) => {
      let childrenTotal = 0;
      let newChildLocation = [];
      if (location.childLocation && location.childLocation.length > 0) {
        newChildLocation = location.childLocation.map((child) => {
          childrenTotal += child.male + child.female;
          child.total = child.male + child.female;
          return child;
        });
      }
      location.childLocation = newChildLocation;
      location.total = childrenTotal + location.male + location.female;
      return location;
    });
  }
  return result;
};

export default computeTotalPopulation;
