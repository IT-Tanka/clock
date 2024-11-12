function calculateAngle(hours, minutes) {
    // Validate hour input
    if (hours < 0 || hours > 12) {
        return "Invalid input: hours should be between 0 and 12.";
    }

    // Validate minute input
    if (minutes < 0 || minutes > 59) {
        return "Invalid input: minutes should be between 0 and 59.";
    }
    
    // Calculate the hour hand angle
    let hourHandAngle = (hours % 12) * 30 + minutes * 0.5; // 30 degrees per hour + 0.5 degrees per minute
    let minuteHandAngle = minutes * 6; // Minute hand: 6 degrees per minute

    // Calculate the absolute difference between the angles
    let angleDifference = Math.abs(hourHandAngle - minuteHandAngle);

    // Get the smaller angle to ensure it’s less than 180°
    let finalAngle = Math.min(angleDifference, 360 - angleDifference);

    // Return a detailed message with the result
    return `The angle between the hour and minute hands at ${hours}:${minutes < 10 ? '0' : ''}${minutes} is ${finalAngle} degrees.`;
}

// Test the function with various values
console.log(calculateAngle(3, 15));   // Expected output: The angle between the hour and minute hands at 3:15 is 7.5 degrees.
console.log(calculateAngle(23, 15));  // Expected output: Invalid input: hours should be between 0 and 12.
console.log(calculateAngle(3, 65));   // Expected output: Invalid input: minutes should be between 0 and 59.
console.log(calculateAngle(12, 0));   // Expected output: The angle between the hour and minute hands at 12:00 is 0 degrees.
