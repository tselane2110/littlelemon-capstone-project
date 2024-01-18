const fetchAPI = (date) => {
    // Generate a list of available time slots
    const availableTimeSlots = generateAvailableTimeSlots();

    return availableTimeSlots;
};

const generateAvailableTimeSlots = () => {
    // Randomly generate the number of available time slots (between 3 and 6)
    const numTimeSlots = Math.floor(Math.random() * (6 - 3 + 1)) + 3;

    // Calculate the starting time (17:00)
    const startTime = new Date();
    startTime.setHours(17, 0, 0, 0);

    // Generate time slots based on the starting time and number of slots
    const timeSlots = Array.from({ length: numTimeSlots }, (_, index) => {
    const slotTime = new Date(startTime.getTime() + index * 60 * 30 * 1000);
    return formatTime(slotTime);
    });

    return timeSlots;
};

const formatTime = (time) => {
    // Format the time as HH:mm
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

function submitAPI(formData) {
    const formFields = (formData.date !== "") && (formData.time !== "") && (formData.numberOfGuests !== 0) && (formData.occasion !== "");
    if(formFields === true){
        return true
    }
    else{
        return false
    }

}

export {fetchAPI, submitAPI};

