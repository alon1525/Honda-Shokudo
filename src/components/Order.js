import React, { useState, useEffect, useRef } from "react";
import image from "../image/order_image.png";
import { db } from "../firebase";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";

function Order() {
  const [timeOptions, setTimeOptions] = useState([]);
  const initialized = useRef(false);
  const [selectedMeal, setSelectedMeal] = useState("");
  const [peopleOptions, setPeopleOptions] = useState([]);
  const [selectedPeople, setSelectedPeople] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMealChange = async (e) => {
    const meal = e.target.value;
    setSelectedMeal(meal);
    setSelectedPeople(""); // Reset selected people
    setPeopleOptions([]); // Reset people options temporarily

    const [mealType, date] = meal.split(" ");
    const datetimeSlot = `${date}_${mealType.toLowerCase()}`;
    const reservationRef = collection(db, "reservations");
    const q = query(reservationRef, where("datetimeSlot", "==", datetimeSlot));
    const querySnapshot = await getDocs(q);

    let counterSeatsUsed = 0;
    let table1Used = false;
    let table2Used = false;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.table === "counter") {
        counterSeatsUsed += data.people;
      } else if (data.table === "table1") {
        table1Used = true;
      } else if (data.table === "table2") {
        table2Used = true;
      }
    });

    const options = new Set();

    // Counter: max 5 seats
    const counterSeatsLeft = 5 - counterSeatsUsed;
    for (let i = 1; i <= Math.min(3, counterSeatsLeft); i++) {
      options.add(i);
    }

    // Tables: if available, allow 2–6 people
    if (!table1Used || !table2Used) {
      for (let i = 2; i <= 6; i++) {
        options.add(i);
      }
    }

    // Sort and set options
    const sortedOptions = Array.from(options).sort((a, b) => a - b);
    setPeopleOptions(sortedOptions);
  };

  const checkAvailabilityAndBook = async () => {
    const [mealType, date] = selectedMeal.split(" ");
    const datetimeSlot = `${date}_${mealType.toLowerCase()}`;

    // Check for existing reservations by phone
    const phoneCheckQuery = query(
      collection(db, "reservations"),
      where("phone", "==", phone)
    );
    const phoneCheckSnapshot = await getDocs(phoneCheckQuery);

    let totalReservations = 0;
    let sameDayReservation = false;

    phoneCheckSnapshot.forEach((doc) => {
      const data = doc.data();
      totalReservations++;
      const existingDate = data.datetimeSlot.split("_")[0];
      if (existingDate === date) {
        sameDayReservation = true;
      }
    });

    if (sameDayReservation) {
      return setMessage("You already have a reservation for this day.");
    }

    if (totalReservations >= 4) {
      return setMessage("You have reached the maximum of 4 reservations.");
    }

    // Check availability for slot
    const reservationRef = collection(db, "reservations");
    const q = query(reservationRef, where("datetimeSlot", "==", datetimeSlot));
    const querySnapshot = await getDocs(q);

    let counterSeatsUsed = 0;
    let table1Used = false;
    let table2Used = false;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.table === "counter") {
        counterSeatsUsed += data.people;
      } else if (data.table === "table1") {
        table1Used = true;
      } else if (data.table === "table2") {
        table2Used = true;
      }
    });

    const groupSize = parseInt(selectedPeople);

    if (groupSize <= 3 && counterSeatsUsed + groupSize <= 5) {
      return await saveReservation("counter");
    }

    if (!table1Used) {
      return await saveReservation("table1");
    }
    if (!table2Used) {
      return await saveReservation("table2");
    }

    return setMessage("No tables available for this slot.");
  };

  const saveReservation = async (tableName) => {
    const [mealType, date] = selectedMeal.split(" ");
    const datetimeSlot = `${date}_${mealType.toLowerCase()}`;
    try {
      await addDoc(collection(db, "reservations"), {
        name,
        phone,
        people: parseInt(selectedPeople),
        table: tableName,
        datetimeSlot,
        createdAt: Timestamp.now(),
      });
      setMessage(`Reserved successfully at ${tableName}.`);
      setTimeout(() => {
        window.location.reload();
      }, 3000); // waits 3 seconds before refreshing
    } catch (err) {
      setMessage("Failed to reserve. Try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !selectedMeal || !selectedPeople) {
      return setMessage("Please fill in all fields.");
    }

    // Assume Japan if no + is entered
    const phoneNumber = parsePhoneNumberFromString(phone, "JP");
    if (!phoneNumber || !phoneNumber.isValid()) {
      return setMessage("Please enter a valid phone number.");
    }

    setMessage("Checking availability...");
    await checkAvailabilityAndBook();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (initialized.current) return;
    initialized.current = true;

    const today = new Date();

    const checkSlot = async (dateStr, meal) => {
      const datetimeSlot = `${dateStr}_${meal}`;
      const snapshot = await getDocs(
        query(
          collection(db, "reservations"),
          where("datetimeSlot", "==", datetimeSlot)
        )
      );

      let tables = 0;
      let counter = 0;

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.table === "counter") counter += data.people;
        else if (data.table === "table1" || data.table === "table2") tables++;
      });

      if (!(tables >= 2 && counter >= 5)) {
        const label = `${
          meal.charAt(0).toUpperCase() + meal.slice(1)
        } ${dateStr}`;
        setTimeOptions((prev) => [...prev, label]);
      }
    };

    for (let i = 1; i < 15; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateStr = date.toISOString().split("T")[0];

      for (const meal of ["lunch", "dinner"]) {
        checkSlot(dateStr, meal);
      }
    }
  }, []);

  return (
    <div className="order" id="Order">
      <h1>
        <span>Order</span>Now
      </h1>

      <div className="order_main">
        <div className="order_image">
          <img src={image} alt="Order Illustration" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input">
            <p>Name</p>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input">
          <p>Phone Number</p>
          <input
            type="tel"
            inputMode="tel"
            pattern="[0-9+]{7,15}"
            placeholder="Your number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          </div>

          <div className="input">
            <p>Date and Meal</p>
            <select
              name="meal"
              value={selectedMeal}
              onChange={handleMealChange}
            >
              <option value="" disabled>
                Select time of order
              </option>
              {timeOptions.map((meal, index) => (
                <option value={meal} key={index}>
                  {meal}
                </option>
              ))}
            </select>
          </div>

          <div className="input">
            <p>How Many People</p>
            <select
              name="people"
              value={selectedPeople}
              onChange={(e) => setSelectedPeople(e.target.value)}
              disabled={!selectedMeal}
            >
              <option value="" disabled>
                {selectedMeal ? "Select number of people" : "Select meal first"}
              </option>
              {peopleOptions.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="order_btn">
            Order Now
          </button>
          {message && <p style={{ marginTop: "10px" }}>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Order;
