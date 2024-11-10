import React from "react";
import "../src/attendance.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Attendance() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAttendance, setUserAttendance] = useState("");

  const register = (event) => {
    event.preventDefault();

    if (userEmail == "") {
      alert("Type Something to Comment");
    } else {
      axios
        .post(`http://localhost:3001/userReg`, {
          User_name: userName,
          userId: userId,
          profile_image: userImage,
          userEmail: userEmail,
          attendence: userAttendance,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div class="card-container">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="container">
          <div class="log-card">
            <p class="heading">Attendance</p>
            <p>Mark your Attandance</p>

            <div class="input-group">
              <p class="text">Username</p>
              <input
                class="input"
                type="username"
                placeholder="For Ex: jay"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <p class="text">Id Number</p>
              <input
                class="input"
                type="id"
                placeholder="ID"
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
              />
              <p class="text">Image</p>
              <input
                class="input"
                type="text"
                placeholder="Image"
                value={userImage}
                onChange={(e) => {
                  setUserImage(e.target.value);
                }}
              />
              <p class="text">Email</p>
              <input
                class="input"
                type="text"
                placeholder="example.gmail.com"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
              <p class="text">Attendance Status</p>
              <input
                class="input"
                type="text"
                placeholder="A or P"
                value={userAttendance}
                onChange={(e) => {
                  setUserAttendance(e.target.value);
                }}
              />
              <button
                onClick={(e) => {
                  register(e);
                }}
              >
                Register Details
              </button>
              <Link to="/classAttendance">
                <button>Class Attendance</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
