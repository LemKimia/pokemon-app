function getRandomBoolean() {
  return Math.random() < 0.5; // Returns true approximately 50% of the time
}

// Example usage:
console.log(getRandomBoolean()); // Outputs either true or false randomly

if (getRandomBoolean() === true) {
} else {
}
