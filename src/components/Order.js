import React, { useState, useEffect, useRef, useContext } from "react";
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

import { LanguageContext } from "../context/LanguageContext";

function Order() {
  const { language } = useContext(LanguageContext);

  const texts = {
    en: {
      titleOrder: "Order",
      titleNow: "Now",
      name: "Name",
      phoneNumber: "Phone Number",
      phonePlaceholder: "Your number",
      dateMeal: "Date and Meal",
      selectTimeOrder: "Select time of order",
      howManyPeople: "How Many People",
      selectNumberPeople: "Select number of people",
      selectMealFirst: "Select meal first",
      orderNow: "Order Now",
      fillAllFields: "Please fill in all fields.",
      invalidPhone: "Please enter a valid phone number.",
      checkingAvailability: "Checking availability...",
      alreadyReserved: "You already have a reservation for this day.",
      maxReservations: "You have reached the maximum of 4 reservations.",
      noTables: "No tables available for this slot.",
      reservedSuccess: (table) => `Reserved successfully at ${table}.`,
      reservedFail: "Failed to reserve. Try again.",
    },
    ja: {
      titleOrder: "予約",
      titleNow: "する",
      name: "名前",
      phoneNumber: "電話番号",
      phonePlaceholder: "電話番号を入力してください",
      dateMeal: "日付と食事",
      selectTimeOrder: "注文時間を選択してください",
      howManyPeople: "人数",
      selectNumberPeople: "人数を選択してください",
      selectMealFirst: "まず食事を選択してください",
      orderNow: "予約する",
      fillAllFields: "すべての項目を入力してください。",
      invalidPhone: "有効な電話番号を入力してください。",
      checkingAvailability: "空席を確認しています...",
      alreadyReserved: "この日にすでに予約があります。",
      maxReservations: "予約は最大4件までです。",
      noTables: "この時間帯の空きテーブルはありません。",
      reservedSuccess: (table) => `${table}で予約が完了しました。`,
      reservedFail: "予約に失敗しました。もう一度お試しください。",
    },
  };

  const t = texts[language];

  // The rest of your component logic remains unchanged,
  // just replace static texts with t.[key].

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
    setSelectedPeople("");
    setPeopleOptions([]);

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

    const counterSeatsLeft = 5 - counterSeatsUsed;
    for (let i = 1; i <= Math.min(3, counterSeatsLeft); i++) {
      options.add(i);
    }

    if (!table1Used || !table2Used) {
      for (let i = 2; i <= 6; i++) {
        options.add(i);
      }
    }

    const sortedOptions = Array.from(options).sort((a, b) => a - b);
    setPeopleOptions(sortedOptions);
  };

  const checkAvailabilityAndBook = async () => {
    const [mealType, date] = selectedMeal.split(" ");
    const datetimeSlot = `${date}_${mealType.toLowerCase()}`;

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
      return setMessage(t.alreadyReserved);
    }

    if (totalReservations >= 4) {
      return setMessage(t.maxReservations);
    }

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

    return setMessage(t.noTables);
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
      setMessage(t.reservedSuccess(tableName));
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (err) {
      setMessage(t.reservedFail);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !selectedMeal || !selectedPeople) {
      return setMessage(t.fillAllFields);
    }

    const phoneNumber = parsePhoneNumberFromString(phone, "JP");
    if (!phoneNumber || !phoneNumber.isValid()) {
      return setMessage(t.invalidPhone);
    }

    setMessage(t.checkingAvailability);
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
        <span>{t.titleOrder}</span> {t.titleNow}
      </h1>

      <div className="order_main">
        <div className="order_image">
          <img src={image} alt="Order Illustration" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input">
            <p>{t.name}</p>
            <input
              type="text"
              placeholder={language === "ja" ? "あなたの名前" : "Your name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input">
            <p>{t.phoneNumber}</p>
            <input
              type="tel"
              inputMode="tel"
              pattern="[0-9+]{7,15}"
              placeholder={t.phonePlaceholder}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="input">
            <p>{t.dateMeal}</p>
            <select name="meal" value={selectedMeal} onChange={handleMealChange}>
              <option value="" disabled>
                {t.selectTimeOrder}
              </option>
              {timeOptions.map((meal, index) => (
                <option value={meal} key={index}>
                  {meal}
                </option>
              ))}
            </select>
          </div>

          <div className="input">
            <p>{t.howManyPeople}</p>
            <select
              name="people"
              value={selectedPeople}
              onChange={(e) => setSelectedPeople(e.target.value)}
              disabled={!selectedMeal}
            >
              <option value="" disabled>
                {selectedMeal ? t.selectNumberPeople : t.selectMealFirst}
              </option>
              {peopleOptions.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="order_btn">
            {t.orderNow}
          </button>
          {message && <p style={{ marginTop: "10px" }}>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Order;
