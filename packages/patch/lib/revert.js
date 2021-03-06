"use strict";

const buildRevertPatch = require("./buildRevertPatch");
const apply = require("./apply");

/**
 * @typedef RevertResult
 * @type Object
 * @property {Any}   doc     - The patched document
 */

/**
 * Revert apply a JSON Patch
 * @param  {Any}          doc                 - JSON document to which the patch was applied to
 * @param  {Array}        items               - value of revert property from apply method result
 * @return {PatchResult}
 */
module.exports = function revert(doc, items) {
  const patch = buildRevertPatch(items);
  return apply(doc, patch);
};
