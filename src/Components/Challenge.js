import React from 'react';
import '../Styles/challenge.css'; 
import Card from './card'
import '../Styles/challenge.css'; 
import challenge5 from '../Assets/challenge.png'
import Challenge1 from '../Assets/Challenge1.png';
import challenge2 from '../Assets/challenge2.png'
import Challenge3 from '../Assets/challenge3.png';
import Challenge4 from '../Assets/challenge4.png';


function Challenge() {
  return (
    <>
    <h1 className='xn'>E-LAB Challenge</h1>
    <div className='container'>
    <Card 
    image = {Challenge1}
    title ="Challenge 1"
    desc ="
    Excitedly claiming 1075 points out of 1700, we confidently embarked on our ALU campus scavenger hunt challenge. With anticipation high, we commenced our e-lab journey with Quick Get to Know Me. Our quest fused exploration and collaboration, setting the stage for an electrifying journey ahead."
    link =""
    
    />
    <Card  
     image = {challenge2}
     title ="Challenge 2"
     desc ="
     With a commanding 1500 out of 1800 points, we embraced the challenge, wielding the power of storytelling. Quick Get to Know Me ignited our creative engines, honing our storytelling prowess. Through radical and critical thinking, fostering a dynamic blend of imagination and intellect in our journey."
     link =""
    />
    <Card  
     image = {Challenge3}
     title ="Challenge 3"
     desc ="
     Unexpected tasks challenge our teamwork, scoring 1900 out of 2000 points. Ready to excel, we embrace the unforeseen. Through synergy and adaptability, we navigate challenges, showcasing resilience and cohesion. Each obstacle surmounted strengthens our bond, driving us towards collective success in this dynamic journey."
     link =""
    />
    <Card  
     image = {Challenge4}
     title ="Challenge 4"
     desc ="Researching diligently, we scored 2455 out of 2500 points. In Challenge 4, we connected with Mr. Michael Tesfaye, CEO of Let's Reason and Bizco Tap, aligning with our G.C.G.O in health. Drawing from Canadian practices, he emphasized prioritizing mental health for African youth, urging consideration. His insights and practical demonstrations inspired further collaboration prospects."
     link =""
    />
    <Card  
     image = {challenge5}
     title ="Challenge 5"
     desc ="Scoring 1950 out of 2000 points, our community engagement endeavors prioritize enhancing well-being. Through research and collaboration, we strive to improve quality of life and foster connections within the community, embodying our commitment to uplifting collective welfare."
     link =""
    />
    </div>
    </>
  );
}

export default Challenge;
