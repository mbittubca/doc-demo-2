export default function AppointmentForm() {
  return (
    <form>
      <label>Name<input name="name" /></label>
      <label>Phone<input name="phone" /></label>
      <button type="submit">Book</button>
    </form>
  )
}
