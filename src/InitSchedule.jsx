import React, { useState, useEffect } from "react";
import image from "../image/order_image.png";
import { db } from "../firebase";
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
  const [selectedMeal, setSelectedMeal] = useState("");
  const [peopleOptions, setPeopleOptions] = useState([1, 2, 3, 4, 5, 6]);
  const [selectedPeople, setSelectedPeople] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Generate 14-day options
  useEffect(() => {
    const generateDates = async () => {
      const options = [];
      const today = new Date();

      for (let i = 0; i < 14; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dateStr = date.toISOString().split("T")[0];

        for (const meal of ["lunch", "dinner"]) {
          const slot = `${dateStr}_${meal}`;
          const isFull = await checkIfSlotIsFull(slot);
          if (!isFull) {
            options.push(`${meal.charAt(0).toUpperCase() + meal.slice(1)} ${dateStr}`);
          }
        }
      }

      setTimeOptions(options);
    };

    generateDates();
  }, []);

  const checkIfSlotIsFull = async (datetimeSlot) => {
    const q = query(
      collection(db, "reservations"),
      where("datetimeSlot", "==", datetimeSlot)
    );
    const snapshot = await getDocs(q);

    let tables = 0;
    let counter = 0;

    snapshot.forEach((doc) => {
      const data = doc.data();
      if (data.table === "table1" || data.table === "table2") tables++;
      if (data.table === "counter") counter += data.people;
    });

    return tables >= 2 && counter >= 5;
  };

  const handleMealChange = (e) => {
    setSelectedMeal(e.target.value);
    setSelectedPeople("");
  };

  const checkAvailabilityAndBook = async () => {
    const [mealType, date] = selectedMeal.split(" ");
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

    const groupSize = parseInt(selectedPeople);

    if (groupSize > 6 || groupSize < 1) {
      return setMessage("Group must be between 1 and 6 people.");
    }

    if (groupSize <= 3 && counterSeatsUsed + groupSize <= 5) {
      return await saveReservation("counter");
    }

    if (groupSize >= 2 && groupSize <= 6) {
      if (!table1Used) return await saveReservation("table1");
      if (!table2Used) return await saveReservation("table2");
    }

    return setMessage("No space available for this group size at this time.");
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
    } catch (err) {
      setMessage("Failed to reserve. Try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !selectedMeal || !selectedPeople) {
      return setMessage("Please fill in all fields.");
    }
    setMessage("Checking availability...");
    await checkAvailabilityAndBook();
  };

  return (
    <div className="order" id="Order">
      <h1>
        <span>Order</span> Now
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
              placeholder="Your number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
