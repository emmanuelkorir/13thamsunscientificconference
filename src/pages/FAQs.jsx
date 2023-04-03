import React, { Component } from 'react';
import Faq from 'react-faq-component';
import './faqs.css';

function FAQs() {

    const data = {
        title: "FAQ",
        rows: [
          {
            title: "1. What is the conference about?",
            content: "The conference is a scientific conference organized by the Association of Medical Students of the University of Nairobi (AMSUN)."
          },
          {
            title: "2. Who is the conference intended for?",
            content: "The conference is intended for medical students, healthcare professionals, and anyone with an interest in the field of medicine."
          },
          {
            title: "3. When and where is the conference taking place?",
            content: "The conference will take place on Thursday and Friday of May 25th and 26th, 2023, respectively. The venue is Chandaria Centre, located at the 5th floor of the University of Nairobi Towers."
          },
          {
            title: "4. How do I register for the conference?",
            content: "Registration details will be provided on the conference website closer to the event date."
          },
          {
            title: "5. What is the deadline for registration?",
            content: "The deadline for registration will be announced on the conference website."
          },
          {
            title: "6. What is the conference fee, and what does it cover?",
            content: "The conference is free to all interested attendants."
          },
          {
            title: "7. Can I submit an abstract for presentation? If so, what is the deadline for submission?",
            content: "Yes, abstracts can be submitted for presentation. The deadline for submission will be announced on the conference website."
          },
          {
            title: "8. Are there any awards or recognitions offered for attendees",
            content: "A certificate of participation will be provided to all attendees upon completion of the conference. Also, there will be awards given to the top 3 presenters, among many other gifts, who make significant contributions or achievements during the event."
          }
        
        ]
      }

  return (
    <div className="faq__container">
        <Faq 
        
        data={data}
        
        styles={{
            bgColor: "##EEEEEE",
            titleTextColor: "#DC5F00",
            rowTitleColor: "black",
            rowTitleTextSize: 'large',
            rowContentColor: "#78789a",
            rowContentTextSize: '16px',
            rowContentPaddingTop: '10px',
            rowContentPaddingBottom: '10px',
            rowContentPaddingLeft: '50px',
            rowContentPaddingRight: '150px',
            arrowColor: "black",
            transitionDuration: "1s",
            timingFunc: "linear"
            }}

            config={{
                tabFocus: true,
            }}
        
        />
 
    </div>
  )
}

export default FAQs