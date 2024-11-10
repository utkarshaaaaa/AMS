import React from 'react'
import "../src/attendance.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Attendance from './Attendance';

export default function () {
    const [userId, setUserId] = useState("");
    const [userAttendance, setUserAttendance] = useState("");
    const updateAttendance = (event) => {
        event.preventDefault();
    
        if (userAttendance == "") {
          alert("Type Something");
        } else {
          axios
            .post(`http://localhost:3001/attendance${userId}`, {
                userAttendanceStatus:userAttendance
            })
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };

      const sendEmail = (event) => {
        event.preventDefault();
    
        if (userAttendance == "") {
          alert("Type Something");
        } else {
          axios
            .post(`http://localhost:3001/sendMail`, {
               
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
            <p class="heading"> Class Attendance</p>
            <p>Mark Class Attandance</p>

            <div class="input-group">
              
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
                 
                }}
              >
                Send Mail 
              </button>
              <button
                onClick={(e) => {
                    updateAttendance(e)
                 
                }}
              >
                Update Attendance
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
