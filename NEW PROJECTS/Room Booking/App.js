
import React from 'react';
import {RCalender} from './components/RCalender';
import {TimeSlot} from './components/TimeSlot';
import {Header} from './components/Header';
import {Information} from './components/Information';
import { GlobalProvider } from './context/GlobalState';



export const App = () => {
    var gapi = window.gapi;
    var CLIENT_ID = "952459560585-d319npnh39nm9huk6cegneh6an3cisr7.apps.googleusercontent.com";
    var API_KEY = "AIzaSyBIcXpTdb_jcaVa5C8nj1Om5D0qIT37UZo";
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

  const RegisterEvent = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('bam!'))

      gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        // const starttime = `${date.getFullYear()}-06-${date.getDate()}T${time}+05:30`.toString();
        //const starttime = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${date.getDate()}T${time}+05:30`.toString() ;
        var timeString = "2020-06-10T10:00:00.000";
        var duration = '01:30:00';
      
        var startDate = new Date(timeString);
        var msDuration = (Number(duration.split(':')[0]) * 60 * 60 + Number(duration.split(':')[1]) * 60  + Number(duration.split(':')[2])) * 1000;
        var endDate = new Date(startDate.getTime() + msDuration);
        var isoStartDate = new Date(startDate.getTime()-new Date().getTimezoneOffset()*60*1000).toISOString().split(".")[0];
        var isoEndDate = new Date(endDate.getTime()-(new Date().getTimezoneOffset())*60*1000).toISOString().split(".")[0];
        var event = {
          'summary': 'Office meeting',
          'location': '',
          'description': 'Attend meeting',
          'start': {
            'dateTime': isoStartDate,
            'timeZone': 'Asia/Kolkata'
          },
          'end': {
            'dateTime': isoEndDate,
            'timeZone': 'Asia/Kolkata'
          },
          'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
          ],
          'attendees': [
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        }

        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event,
        })

        request.execute(event => {
          console.log(event)
          window.open(event.htmlLink)
        })
        
    })
        })

        
    }
    return (
        <>
        <Header/>
        <div className ="container">
        <p style ={{fontSize: "1.5rem"}}>Meeting Room Booking</p>
        <Information/>
        <p style={{color:"brown", fontWeight: "bold"}}>Please select your preferred date</p>
        <GlobalProvider>
        <RCalender/> 
        <p style={{color:"brown", fontWeight: "bold"}}>Please select your preferred slot</p>
        <TimeSlot/>
        </GlobalProvider>
        <button id = "bookbtn" onClick={RegisterEvent}>Book Appointment</button>
        </div> 
        </> 
        
        
        
        
    )
}
