function extractDeepValues({ fieldArray, object, defaultValue }) {
  try {
    return fieldArray.reduce(
      (accumulativeObject, currentField) => accumulativeObject[currentField],
      object
    );
  } catch (err) {
    return defaultValue;
  }
}

export default extractDeepValues;
