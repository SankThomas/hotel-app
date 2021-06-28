import React from "react"

const BookNow = () => {
  return (
    <>
      <section>
        <h1>Room reservation system</h1>
        {/* Todos
          1. Ability to book rooms
          2. Add information to database
            - Form to get information
              - first name, last name (side by side)
              - email address
              - phone number
              - select check-in and check-out date
              - book room (dropdown to select room type) and then display the amount relative to the room selected
              - display total amount to pay = amount per day * number of days stayed. (pay full amount or half?)
                - Number of days stayed = check out date - check in date (use moment to format the dates?)
            - Submit form to database
          3. Payment gateway
            - Stripe - credit cards
            - M-Pesa
            - Paypal
          4. Once complete, go to success page
            - Create success page
          5. If cancelled before process is complete, go to cancel page
            - Create cancel page
            - Add cancel button for all the sections


            Components / Screens
            1. Form
                - Handle date calculations
                - Handle amount calculations
                - Handle submit
            2. Stripe payment
            3. Success page
            4. Cancel page
                - Make success and cancel pages protected routes to only be accessible on form submit/cancel
        */}
      </section>
    </>
  )
}

export default BookNow
