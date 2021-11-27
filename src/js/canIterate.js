/** @module canIterate
 * Function checks if object is iterable
 */
export default function canIterate(obj) {
  return Symbol.iterator in Object(obj);
}
