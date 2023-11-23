export function deepCamelCase(obj?: object): any {
  // If it's an array, apply the function to each element
  if (Array.isArray(obj)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument -- this is fine because we are processing unknown data
    return obj.map((item) => deepCamelCase(item));
  }

  // If it's an object, apply the function to each key
  if (Boolean(obj) && typeof obj === "object") {
    return Object.keys(obj).reduce((newObj, key) => {
      const camelCaseKey = toCamelCase(key);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument -- this is fine because we are processing unknown data
      newObj[camelCaseKey] = deepCamelCase(obj[key]);
      // Copy the original key too if it's different from the camelCased version
      if (key !== camelCaseKey) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- this is fine because we are processing unknown data
        newObj[key] = obj[key];
      }
      return newObj;
    }, {});
  }

  // If it's not an object or array, return it as is
  return obj;
}

const toCamelCase = (str: string) => {
  return str.replace(/(?<temp1>[-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
};
