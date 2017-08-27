const recursiveResolve = function(
  systemJson,
  turn,
  parentU,
  parentV,
  parentUVel,
  parentVVel,
  resolvedObjects
) {
  let {positions, nested, ...rest} = systemJson;
  let { u, v } = positions[positions.length % (turn + 1)];
  u = u + parentU;
  v = v + parentV;
  let { u1, v1 } = positions[positions.length % (turn + 2)];
  let uVel = u1 - u + parentUVel;
  let vVel = v1 - v + parentVVel;
  resolvedObjects.push({ u: u, v: v, uVel: uVel, vVel: vVel, ...rest });

  if (nested) {
    for (let i = 0; i < nested.length; i++) {
      recursiveResolve(nested[i], turn, u, v, uVel, vVel, resolvedObjects);
    }
  }
};

/**
 * The function to resolve an array from json
 * @param { JSON } json - The JSON data for the Nested Periodic Astronomical Object System
 * @param { Integer } turn - The turn to resolve the Astronomical Objects at
 * @return array<JSON> - An array of resolved objects
 */
module.exports = function(json, turn) {
  let resolvedObjects = [];
  recursiveResolve(json, turn, 0, 0, 0, 0, resolvedObjects);
  return resolvedObjects;
};
