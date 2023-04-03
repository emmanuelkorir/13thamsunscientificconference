import React from 'react';
import Speaker from './Speaker';

const speakers = [
  {
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
    name: 'Prof. John Smith',
    position: 'Professor of Computer Science',
    bio: 'John Smith is a professor of computer science at XYZ University. His research interests include machine learning, computer vision, and natural language processing.'
  },
  {
    image: 'https://randomuser.me/api/portraits/women/59.jpg',
    name: 'Prof. Jane Doe',
    position: 'Assistant Professor of Neuroscience',
    bio: 'Jane Doe is an assistant professor of neuroscience at ABC College. Her research focuses on the neural mechanisms of memory and learning.'
  }
];

const Speakers = () => {
  return (
    <div>
      {speakers.map(speaker => (
        <Speaker
          key={speaker.name}
          image={speaker.image}
          name={speaker.name}
          position={speaker.position}
          bio={speaker.bio}
        />
      ))}
    </div>
  );
};

export default Speakers;
