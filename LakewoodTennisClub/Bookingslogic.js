// Checking if the id of the element called "lakewood-bookings-script" exists
if (document.getElementById("lakewood-bookings-script")) {
}

// Function to either book/remove a tennis court at Lakewood Tennis Club
async function bookLakewoodCourt(id, fieldName, isBooked) {
  // If the court is booked
  if (isBooked == 1) {
    //URL link for booking the court
    const url = `http://localhost:8080/api/lakewoodtennisclub/${id}?fieldName=${fieldName}&value=${isBooked}`;
    // Sending the PATCH request to the server
    const response = await fetch(url, { method: "PATCH", mode: "cors" });

    // Throws an error message if it has failed
    if (!response.ok) {
      throw new Error("Failed to update the database server.");
    }

    // Logging the booking information
    console.log(
      `Booking court with id ${id}. Time slot status: ${
        isBooked ? "Booked" : "Available"
      }`
    );

    // Displaying a success message of booking the tennis court for the timeslot
    alert(
      "Your booking was successful with Court ID " +
        id +
        " for the timeslot " +
        fieldName +
        ". Please click on the search button again to see the remaining available time slots."
    );
  }

  // If the court has not been booked yet
  if (isBooked == 0) {
    // URL link for booking the court
    const url = `http://localhost:8080/api/lakewoodtennisclub/${id}?fieldName=${fieldName}&value=${isBooked}`;
    // Sending the PATCH request to the server
    const response = await fetch(url, { method: "PATCH", mode: "cors" });

    //Throws an error message if it has failed
    if (!response.ok) {
      throw new Error("Failed to update the database server.");
    }

    // Logging the removal of the tennis booking information
    console.log(
      `Removing booking for court id ${id}. Time slot status: ${
        isBooked ? "Booked" : "Available"
      }`
    );

    // Displaying a successful message for cancelling the timeslot booking of the tennis court
    alert(
      "You have successfully removed your booking with Court ID " +
        id +
        " for the timeslot " +
        fieldName +
        ". Please click on the search button again to see the NEW remaining available time slots."
    );
  }
}
// Example of the function to book a court with boolean 1 as isBooked and boolean 0 as notBooked
bookLakewoodCourt(1, 0);

