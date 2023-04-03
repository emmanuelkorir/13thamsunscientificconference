import React, {useState} from 'react';
import './programme.css';	

function Programme() {

const [activeTab, setActiveTab] = useState(0);

const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (

    <div className="schedule">
    <h2 className="schedule-title">Program Schedule</h2>
    <div className="schedule-tabs">
      <button className={activeTab === 0 ? "tab active-tab" : "tab"} onClick={() => handleTabClick(0)}>Day 1</button>
      <button className={activeTab === 1 ? "tab active-tab" : "tab"} onClick={() => handleTabClick(1)}>Day 2</button>
    </div>

    <div className={activeTab === 0 ? "schedule-content active-tab-content" : "schedule-content"}>
        <div className="session-programme">
            <div className="session-day">
                <h2>Thursday, 25<sup>th</sup>, May 2023</h2>
            </div>
        <div className="session-card">
        <div className="speaker-image-container">
                    
                    </div>
                <div className="session-details">
                    <h2 className="session-title">Registration & Arrival of guests</h2>
                    <p className="speaker-name">Venue: Chandaria Centre, 5th Floor, UoN Main Campus</p>
                    <p className="session-time">Time: 7:00 am - 8:55 am</p>
                </div>
            </div>

            <div className="session-card">
            <div className="speaker-image-container">
                    
                    </div>
                <div className="session-details">
                    <h2 className="session-title">Opening Ceremony</h2>
                    <p className="speaker-name">Dean School of Medicine</p>
                    <p className="session-time">Time: 9:00 am - 9:30 am</p>
                </div>
            </div>

            <div className="session-card">
                <div className="speaker-image-container">
                    <img className="speaker-image" src="https://randomuser.me/api/portraits/women/37.jpg" alt="speaker 2" />
                </div>
                <div className="session-details">
                    <h2 className="session-title">Antimicrobial Resistance</h2>
                    <p className="speaker-name">Dr Marianne Mureithi</p>
                    <p className="presentation-topic">Head Microbiology Department, UON</p>
                    <p className="session-time">Time: 9:30 am - 10:30 am</p>
                </div>
            </div>

            <div className="session-card">
            <div className="speaker-image-container">
                    
                    </div>
                <div className="session-details">
                    <h2 className="session-title">Tea Break</h2>
                    <p className="session-time">Time: 10:30 am - 11:00 am</p>
                </div>
            </div>

            <div className="session-card">
                <div className="speaker-image-container">
                    <img className="speaker-image" src="https://randomuser.me/api/portraits/men/33.jpg" alt="presentation" />
                </div>
                <div className="session-details">
                    <h2 className="session-title">First Presentation </h2>
                    <p className="speaker-name">John Doe</p>
                    <p className="presentation-topic">MBCh.B Level VI</p>
                    <p className="session-time">Time: 11:00 am - 12:30 pm</p>
                </div>
            </div>

            <div className="session-card">
            <div className="speaker-image-container">
                    
                </div>
                <div className="session-details">
                    <h2 className="session-title">Lunch Break</h2>
                    <p className="session-time">Time: 12:30 pm - 1:15 pm</p>
                </div>
            </div>


            <div className="session-card">
                <div className="speaker-image-container">
                    <img className="speaker-image" src="https://randomuser.me/api/portraits/women/31.jpg" alt="presentator" />
                </div>
                <div className="session-details">
                    <h2 className="session-title">Medical Mentorship</h2>
                    <p className="speaker-name">Dr Sylvia Shitsama</p>
                    <p className="presentation-topic">Consultant Neurosurgeon, KNH</p>
                    <p className="session-time">Time: 1:30 pm - 2:30 pm</p>
                </div>
            </div>

            
            <div className="session-card">
                <div className="speaker-image-container">
                    
                </div>
                <div className="session-details">
                    <h2 className="session-title">Second Presentation</h2>
                    <p className="speaker-name">Evans Doe</p>
                    <p className="presentation-topic">MBCh.B Level IV</p>
                    <p className="session-time">Time: 2:30 pm - 3:00 pm</p>
                </div>
            </div>

            <div className="session-card">
                <div className="speaker-image-container">
                    
                </div>
                <div className="session-details">
                    <h2 className="session-title">Tea Break</h2>
                    <p className="session-time">Time: 3:00 pm - 3:15 pm</p>
                </div>
            </div>

            <div className="session-card">
                <div className="speaker-image-container">
                    <img className="speaker-image" src="https://randomuser.me/api/portraits/men/31.jpg" alt="image" />
                </div>
                <div className="session-details">
                    <h2 className="session-title">Third Presentation</h2>
                    <p className="speaker-name">Smith Doe</p>
                    <p className="presentation-topic">MBCh.B Level III</p>
                    <p className="session-time">Time: 3:15 pm - 4:45 pm</p>
                </div>
            </div>

            <div className="session-card">
                <div className="speaker-image-container">
                    
                </div>
                <div className="session-details">
                    <h2 className="session-title">Networking</h2>
                    <p className="session-time">Time: 4:45 pm - 5:30 pm</p>
                </div>
            </div>

            <div className="session-card">
                <div className="speaker-image-container">
                    
                </div>
                <div className="session-details">
                    <h2 className="session-title">Closing Remarks & Departure</h2>
                    <p className="session-time">Time: 5:30 pm</p>
                </div>
            </div>

        </div>
    </div>
      <div className={activeTab === 1 ? "schedule-content active-tab-content" : "schedule-content"}>
      <div className="session-programme">
            <div className="session-day">
                <h2>Friday, 26<sup>th</sup>, May 2023</h2>
            </div>
        <div className="session-card">
        <div className="speaker-image-container">
                    
                    </div>
                <div className="session-details">
                    <h2 className="session-title">Arrival of delegates & guests</h2>
                    <p className="speaker-name">Venue: Chandaria Centre, 5th Floor, UoN Main Campus</p>
                    <p className="session-time">Time: 7:00 am - 8:00 am</p>
                </div>
            </div>

            <div className="session-card">
            <div className="speaker-image-container">
            <img className="speaker-image" src="https://randomuser.me/api/portraits/men/40.jpg" alt="speaker 2" />
                    </div>
                <div className="session-details">
                    <h2 className="session-title">Recent Developments in Stem Cell Research</h2>
                    <p className="speaker-name">Prof. Obimbo Moses</p>
                    <p className="session-time">Time: 8:00 am - 10:00 am</p>
                </div>
            </div>

            <div className="session-card">
            <div className="speaker-image-container">
                    
                    </div>
                <div className="session-details">
                    <h2 className="session-title">Tea Break</h2>
                    <p className="session-time">Time: 10:30 am - 11:00 am</p>
                </div>
            </div>

            <div className="session-card">
                <div className="speaker-image-container">
                    <img className="speaker-image" src="https://randomuser.me/api/portraits/men/33.jpg" alt="presentation" />
                </div>
                <div className="session-details">
                    <h2 className="session-title">First Presentation </h2>
                    <p className="speaker-name">John Doe</p>
                    <p className="presentation-topic">MBCh.B Level VI</p>
                    <p className="session-time">Time: 10:30 am - 12:30 pm</p>
                </div>
            </div>

            <div className="session-card">
            <div className="speaker-image-container">
                    
                </div>
                <div className="session-details">
                    <h2 className="session-title">Lunch Break</h2>
                    <p className="session-time">Time: 12:30 pm - 1:15 pm</p>
                </div>
            </div>
           
            <div className="session-card">
                <div className="speaker-image-container">
                <img className="speaker-image" src="https://randomuser.me/api/portraits/men/35.jpg" alt="presentation" />
                </div>
                <div className="session-details">
                    <h2 className="session-title">Second Presentation</h2>
                    <p className="speaker-name">Evans Doe</p>
                    <p className="presentation-topic">MBCh.B Level IV</p>
                    <p className="session-time">Time: 1:30 pm - 3:00 pm</p>
                </div>
            </div>

            <div className="session-card">
                <div className="speaker-image-container">
                    
                </div>
                <div className="session-details">
                    <h2 className="session-title">Tea Break</h2>
                    <p className="session-time">Time: 3:00 pm - 3:30 pm</p>
                </div>
            </div>

            <div className="session-card">
                <div className="speaker-image-container">
                    
                </div>
                <div className="session-details">
                    <h2 className="session-title">Awards & Closing Ceremony</h2>
                    <p className="speaker-name">Chief Guest</p>
                    <p className="session-time">Time: 3:30 pm - 5:00 pm</p>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Programme