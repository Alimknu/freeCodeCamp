const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState(1);
  const [dietaryPreferences, setDietaryPreferences] = useState([]);
  const [isAdditionalGuests, setIsAdditionalGuests] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleAttendeesChange(e) {
    const value = parseInt(e.target.value, 10);

    if (isNaN(value) || value < 1) {
      setAttendees(1);
    } else {
      setAttendees(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Number of attendees:
          <input
            type="number"
            required
            value={attendees}
            onChange={(e) => handleAttendeesChange(e)}
            min="1"
          />
        </label>
        <label>
          Dietary preferences:
          <input
            type="text"
            value={dietaryPreferences}
            onChange={(e) => setDietaryPreferences(e.target.value)}
          />
        </label>
        <label>
          Bring additional guests:
          <input
            type="checkbox"
            checked={isAdditionalGuests}
            onChange={() => setIsAdditionalGuests(!isAdditionalGuests)}
          />
        </label>
        <button
          className="submit-btn"
          type="submit"
          disabled={!name || !email || !attendees}
        >
          RSVP
        </button>
      </form>

      {isSubmitted && (
        <div className="submission-summary">
          <h3>RSVP Confirmation</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Attendees: {attendees}</p>
          <p>Dietary Preferences: {dietaryPreferences}</p>
          <p>Additional Guests: {isAdditionalGuests ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}
