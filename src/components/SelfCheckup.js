// import React from 'react'
// import './SelfChekup.css'
// const SelfCheckup = () => {
//     return (
//         <div className="self_container">

//         <div className="self_checkup_container1" style={{alignContent:'left'}}>

//             <div className="One_temperature">
//              <div className="temp_heading"><span>Measure Your Body Temperature</span> </div>  
//              <img src="https://m.media-amazon.com/images/I/51uKL93ozzL.jpg" alt="" style={{height:'100px'}}/>
//                <div className="temp_desc"> Monitoring your body temperature can help identify signs of a potential fever. For adults, the average normal temperature is approximately 37°C (98.6°F), but this can vary based on factors such as age, time of day, and the location on the body where the temperature is taken. It's a good idea to check your temperature when you're feeling well to establish your baseline normal temperature. To ensure accuracy, invest in a reliable thermometer.

//                 While some wearable devices claim to measure body temperature, their reliability may be questionable. If you're dealing with a high temperature, especially in the case of a child, it can be a cause for concern. If you're worried, seek medical advice either through an in-person consultation or a virtual appointment."
//             </div>
//             </div>
//             </div>

//              <div className="self_checkup_container2">
//         {/* <div className="two_heartrate">
//        <div className='two_heart_rate'><span>Listen Your Heart Rate</span> </div> 

//        <div></div> Checking your heart rate can provide valuable insights into your overall well-being, particularly when measured in a relaxed state in the morning. The normal heart rate varies depending on factors such as age and fitness level, so it's beneficial to establish your baseline pulse rate by checking it every morning for a week. You have various options to measure your heart rate, including manual methods, heart rate monitors, fitness trackers, or smartphone apps.

// Step 1. Resting Heart Rate and General Wellness:
// Your resting heart rate, measured in the morning before any significant physical activity or stress, serves as a useful indicator of your general wellness. It reflects how efficiently your heart functions when you are at rest. Generally, a lower resting heart rate is associated with better cardiovascular health and overall fitness.

// 2. Establishing Your Baseline:
// Checking your heart rate every morning for a week allows you to understand what's typical for you. Factors like age and fitness level influence what is considered a normal heart rate. By tracking it consistently, you can identify any significant deviations from your baseline, which might signal potential health issues.

// 3. Measuring Heart Rate:
// You can measure your heart rate manually by locating your pulse, usually on your wrist (radial pulse) or on your neck (carotid pulse), and counting the number of beats for one minute. Alternatively, using modern technology like heart rate monitors, fitness trackers, or smartphone apps can provide more convenience and accuracy in tracking your heart rate.

// 4. Interpreting Heart Rate Changes:
// A change of 10 beats per minute (bpm) or more from your usual baseline could indicate that you might be run down or experiencing increased stress. This could be due to factors like lack of sleep, illness, or emotional strain. Monitoring these fluctuations can prompt you to pay attention to your well-being and take appropriate measures to manage stress and recover.

// 5. Elevated Heart Rate:
// If your heart rate consistently goes above 100 bpm, it may be a sign of various conditions, such as stress, dehydration, excitement, or illness. While some increase in heart rate is normal during exercise or periods of heightened emotions, a persistently elevated heart rate without an apparent cause should be taken seriously.

// 6. When to Consult a Doctor:
// If you notice a persistently elevated heart rate or experience other concerning symptoms, it's essential to consult a doctor. An elevated heart rate could be an indicator of an underlying health issue that requires professional evaluation and treatment.

// In conclusion, monitoring your heart rate regularly provides valuable insights into your well-being and can help you take proactive steps to maintain a healthy lifestyle. If you have any concerns about your heart rate or general health, it's best to seek guidance from a healthcare professional.





//         </div> */}
//          <div className="heartrate_container">
//       <div className="step">
//         <h2>Resting Heart Rate and General Wellness</h2>
//         <p>
//           Checking your heart rate can provide valuable insights into your overall well-being, particularly when measured in a relaxed state in the morning. Your resting heart rate, measured in the morning before any significant physical activity or stress, serves as a useful indicator of your general wellness. It reflects how efficiently your heart functions when you are at rest. Generally, a lower resting heart rate is associated with better cardiovascular health and overall fitness.
//         </p>
//       </div>
//       <div className="step">
//         <h2>Step 2. Establishing Your Baseline</h2>
//         <p>
//           Checking your heart rate every morning for a week allows you to understand what's typical for you. Factors like age and fitness level influence what is considered a normal heart rate. By tracking it consistently, you can identify any significant deviations from your baseline, which might signal potential health issues.
//         </p>
//       </div>
//       <div className="step">
//         <h2>Step 3. Measuring Heart Rate</h2>
//         <p>
//           You can measure your heart rate manually by locating your pulse, usually on your wrist (radial pulse) or on your neck (carotid pulse), and counting the number of beats for one minute. Alternatively, using modern technology like heart rate monitors, fitness trackers, or smartphone apps can provide more convenience and accuracy in tracking your heart rate.
//         </p>
//       </div>
//       <div className="step">
//         <h2>Step 4. Interpreting Heart Rate Changes</h2>
//         <p>
//           A change of 10 beats per minute (bpm) or more from your usual baseline could indicate that you might be run down or experiencing increased stress. This could be due to factors like lack of sleep, illness, or emotional strain. Monitoring these fluctuations can prompt you to pay attention to your well-being and take appropriate measures to manage stress and recover.
//         </p>
//       </div>
//       <div className="step">
//         <h2>Step 5. Elevated Heart Rate</h2>
//         <p>
//           If your heart rate consistently goes above 100 bpm, it may be a sign of various conditions, such as stress, dehydration, excitement, or illness. While some increase in heart rate is normal during exercise or periods of heightened emotions, a persistently elevated heart rate without an apparent cause should be taken seriously.
//         </p>
//       </div>
//       <div className="step">
//         <h2>Step 6. When to Consult a Doctor</h2>
//         <p>
//           If you notice a persistently elevated heart rate or experience other concerning symptoms, it's essential to consult a doctor. An elevated heart rate could be an indicator of an underlying health issue that requires professional evaluation and treatment.
//         </p>
//       </div>
//       <div className="footer">
//         <p>
//           In conclusion, monitoring your heart rate regularly provides valuable insights into your well-being and can help you take proactive steps to maintain a healthy lifestyle. If you have any concerns about your heart rate or general health, it's best to seek guidance from a healthcare professional.
//         </p>
//         <a href="#cta-section" className="cta-btn">Learn More</a>
//       </div>
//     </div>
//         </div>
//         </div>
//     )
// }

// export default SelfCheckup


// import React, { useState } from 'react';
// import './SelfChekup.css'
// const SelfCheckup = () => {
//   const initialTopicsState = {
//     temperature: false,
//     heartRate: false,
//     breast: false,
//     skin: false,
//     scalp: false,
//   };

//   const [expandedTopics, setExpandedTopics] = useState(initialTopicsState);

//   const toggleDetails = (topic) => {
//     setExpandedTopics((prevExpandedTopics) => ({
//       ...prevExpandedTopics,
//       [topic]: !prevExpandedTopics[topic],
//     }));
//   };

//   return (
//     <div className="health-tests-container">
//       <div className="health-test-topic">
//         <h2>Check Your Temperature</h2>
//         <p>
//           Checking your temperature can help you monitor your health and detect fever or other potential illnesses. It's essential to use an accurate thermometer and follow the proper procedure for measuring body temperature.
//         </p>
//         {expandedTopics['temperature'] && (
//           <div className="details">
//             <p>
//               You can use various types of thermometers to check your temperature, such as digital thermometers, ear thermometers, or forehead thermometers. It's important to know the normal range of body temperature, which is typically around 97.8°F to 99°F (36.5°C to 37.2°C) when taken orally. If you have an elevated temperature, it may indicate an infection or illness, and you should consult a healthcare professional for further evaluation.
//             </p>
//           </div>
//         )}
//         <span
//           className="read-more"
//           onClick={() => toggleDetails('temperature')}
//         >
//           {expandedTopics['temperature'] ? 'Read Less' : 'Read More'}
//         </span>
//       </div>

//       <div className="health-test-topic">
//         <h2>Check Your Heart Rate</h2>
//         <p>
//           Checking your heart rate can provide valuable insights into your overall well-being, particularly when measured in a relaxed state in the morning. The normal heart rate varies depending on factors such as age and fitness level.
//         </p>
//         {expandedTopics['heartRate'] && (
//           <div className="details">
//             <p>
//               You can measure your heart rate manually by locating your pulse and counting the number of beats for one minute. Alternatively, you can use heart rate monitors or fitness trackers for more convenience and accuracy.
//             </p>
//           </div>
//         )}
//         <span
//           className="read-more"
//           onClick={() => toggleDetails('heartRate')}
//         >
//           {expandedTopics['heartRate'] ? 'Read Less' : 'Read More'}
//         </span>
//       </div>

//       <div className="health-test-topic">
//         <h2>Test Your Breast</h2>
//         <p>
//           Regular breast self-examinations can be crucial in detecting any changes or abnormalities in the breasts. Women should perform breast self-exams regularly, ideally once a month.
//         </p>
//         {expandedTopics['breast'] && (
//           <div className="details">
//             <p>
//               During a breast self-exam, you can check for lumps, changes in breast size or shape, skin dimpling or puckering, nipple changes, and unusual breast pain or tenderness. If you notice any concerning changes, it's essential to consult a healthcare professional for further evaluation.
//             </p>
//           </div>
//         )}
//         <span
//           className="read-more"
//           onClick={() => toggleDetails('breast')}
//         >
//           {expandedTopics['breast'] ? 'Read Less' : 'Read More'}
//         </span>
//       </div>

//       <div className="health-test-topic">
//         <h2>Test Your Skin</h2>
//         <p>
//           Regular skin self-examinations can help identify any suspicious moles or skin changes that might require further evaluation by a dermatologist.
//         </p>
//         {expandedTopics['skin'] && (
//           <div className="details">
//             <p>
//               During a skin self-exam, check your skin for any new or changing moles, growths, or spots. Look for irregular borders, changes in color, and increases in size. Early detection of skin changes can improve the chances of successful treatment if skin cancer or other skin conditions are detected.
//             </p>
//           </div>
//         )}
//         <span
//           className="read-more"
//           onClick={() => toggleDetails('skin')}
//         >
//           {expandedTopics['skin'] ? 'Read Less' : 'Read More'}
//         </span>
//       </div>

//       <div className="health-test-topic">
//         <h2>Test Your Scalp</h2>
//         <p>
//           Regularly checking your scalp can help identify any changes in your hair or scalp condition, which might indicate underlying issues.
//         </p>
//         {expandedTopics['scalp'] && (
//           <div className="details">
//             <p>
//               Pay attention to any unusual hair loss, redness, flaking, or itching on your scalp. Changes in scalp health can be related to factors like stress, diet, or medical conditions. If you notice persistent scalp issues, it's advisable to seek advice from a dermatologist or healthcare professional.
//             </p>
//           </div>
//         )}
//         <span
//           className="read-more"
//           onClick={() => toggleDetails('scalp')}
//         >
//           {expandedTopics['scalp'] ? 'Read Less' : 'Read More'}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default SelfCheckup;




// third
// import React, { useState } from 'react';
// import './SelfChekup.css'
// const SelfCheckup = () => {
//   const healthTestTopics = [
//     {
//       id: 'temperature',
//       title: 'Check Your Temperature',
//       description: 'Checking your temperature can help you monitor your health and detect fever or other potential illnesses. it's essential to use an accurate thermometer and follow the proper procedure for measuring body temperature.',
//       details: 'You can use various types of thermometers to check your temperature, such as digital thermometers, ear thermometers, or forehead thermometers. it's important to know the normal range of body temperature, which is typically around 97.8°F to 99°F (36.5°C to 37.2°C) when taken orally. If you have an elevated temperature, it may indicate an infection or illness, and you should consult a healthcare professional for further evaluation.',
//     },
//     {
//       id: 'heartRate',
//       title: 'Check Your Heart Rate',
//       description: 'Checking your heart rate can provide valuable insights into your overall well-being, particularly when measured in a relaxed state in the morning. The normal heart rate varies depending on factors such as age and fitness level.',
//       details: 'You can measure your heart rate manually by locating your pulse and counting the number of beats for one minute. Alternatively, you can use heart rate monitors or fitness trackers for more convenience and accuracy.',
//     },
//     {
//       id: 'breast',
//       title: 'Test Your Breast',
//       description: 'Regulars breast self-examinations can be crucial in detecting any changes or abnormalities in the breasts. Women should perform breast self-exams regularly, ideally once a month.',
//       details: 'During a breast self-exam, you can check for lumps, changes in breast size or shape, skin dimpling or puckering, nipple changes, and unusual breast pain or tenderness. If you notice any concerning changes, it's essential to consult a healthcare professional for further evaluation.',
//     },
//     {
//       id: 'skin',
//       title: 'Test Your Skin',
//       description: 'Regular skin self-examinations can help identify any suspicious moles or skin changes that might require further evaluation by a dermatologist.',
//       details: 'During a skin self-exam, check your skin for any new or changing moles, growths, or spots. Look for irregular borders, changes in color, and increases in size. Early detection of skin changes can improve the chances of successful treatment if skin cancer or other skin conditions are detected.',
//     },
//     {
//       id: 'scalp',
//       title: 'Test Your Scalp',
//       description: 'Regularly checking your scalp can help identify any changes in your hair or scalp condition, which might indicate underlying issues.',
//       details: 'Pay attention to any unusual hair loss, redness, flaking, or itching on your scalp. Changes in scalp health can be related to factors like stress, diet, or medical conditions. If you notice persistent scalp issues, it's advisable to seek advice from a dermatologist or healthcare professional.',
//     },
//   ];

//   const [expandedTopics, setExpandedTopics] = useState(null);

//   const toggleDetails = (itemId) => {
//     setExpandedTopics((prevExpandedItemId) =>
//       prevExpandedItemId === itemId ? null : itemId
//     );
//   };
//   // const toggleDetails = (topicId) => {

//   //   setExpandedTopics((prevExpandedTopics) => ({
//   //     prevExpandedTopics === topicId ? null :topicId
//   //     // ...prevExpandedTopics,
//   //     // [topicId]: !prevExpandedTopics[topicId],
//   //   }));
//   // };


// return (
//   <div className="health-tests-container">
//     {healthTestTopics.map((topic) => (
//       <div className="health-test-topic" key={topic.id}>
//         <h2>{topic.title}</h2>
//         <p>{topic.description}</p>
//         {expandedTopics && (
//           <div className="details">
//             <p>{topic.details}</p>
//           </div>
//         )}

//         <span
//           className="read-more"
//           onClick={() => toggleDetails(topic.id)}
//         >
//           {expandedTopics == topic.id ? 'Read Less' : 'Read More'}
//         </span>
//       </div>
//     ))}
//   </div>
// );

// };

// export default SelfCheckup;


//fourth
import React, { useState } from "react";
import './SelfChekup.css'
function SelfCheckup() {
  const [isShowMoretemp, setIsShowMoretemp] = useState(false);
  const [isShowMoreheart, setIsShowMoreheart] = useState(false);
  const [isShowMorebreast, setIsShowMorebreast] = useState(false);
  const [isShowMoreskin, setIsShowMoreskin] = useState(false);
  const [isShowMorescalp, setIsShowMorescalp] = useState(false);

  const toggleReadMoreLesstemp = () => {
    setIsShowMoretemp(!isShowMoretemp);
  };
  const toggleReadMoreLessheart = () => {
    setIsShowMoreheart(!isShowMoreheart);
  };
  const toggleReadMoreLessbreast = () => {
    setIsShowMorebreast(!isShowMorebreast);
  };
  const toggleReadMoreLessskin= () => {
    setIsShowMorescalp(!isShowMoreskin);
  };
  const toggleReadMoreLessscalp = () => {
    setIsShowMorescalp(!isShowMorescalp);
  };
  return (
    
<div className="self_container" style={{marginTop:'10%'}}>
  <p className="selfcheck_startheading">
  Self-health checkup is an essential practice that empowers individuals to take charge of their well-being. By routinely evaluating various aspects of their physical and mental health, people can identify potential issues early on and make informed decisions about seeking professional medical advice. A comprehensive self-health checkup may involve monitoring vital signs like blood pressure, heart rate, and body temperature, as well as assessing factors such as weight, diet, exercise, and sleep patterns. Additionally, being attuned to one's emotional state, stress levels, and overall mood can help detect signs of mental health concerns. Engaging in a regular self-health checkup not only promotes a proactive approach to personal healthcare but also fosters a greater understanding of one's body, leading to a more balanced and healthier lifestyle.
  </p>
  <div className="self_checkup_container1">
    <h3>Check Your Temperature</h3>

      <p>
        Checking your temperature can help you monitor your health and detect fever or other
         potential illnesses. It's essential to use an accurate thermometer and follow the proper procedure
          for measuring body temperature.
      </p>
      {isShowMoretemp && (
        <p>
          You can use various types of thermometers to check your temperature, such as digital thermometers,
           ear thermometers, or forehead thermometers. It's important to know the normal range of body temperature,
            which is typically around 97.8°F to 99°F (36.5°C to 37.2°C) when taken orally. If you have an elevated
             temperature, it may indicate an infection or illness, and you should consult a healthcare professional 
             for further evaluation.
        </p>
      )}

      <button onClick={toggleReadMoreLesstemp} className="btnsefcheck">
        {isShowMoretemp ? "Read Less" : "Read More"}
      </button>
      </div>


      <div className="self_checkup_container2">
    <h3>Check Your Heart Rate</h3>

      <p>
      Checking your heart rate can provide valuable insights into your overall well-being, particularly when measured in a relaxed state in the morning. The normal heart rate varies depending on factors such as age and fitness level.
      </p>
      {isShowMoreheart && (
        <p>
          You can measure your heart rate manually by locating your pulse and counting the number of beats for one minute. Alternatively, you can use heart rate monitors or fitness trackers for more convenience and accuracy.
        </p>
      )}

      <button onClick={toggleReadMoreLessheart} className="btnsefcheck">
        {isShowMoreheart ? "Read Less" : "Read More"}
      </button>
      </div>


      <div className="self_checkup_container1">
    <h3>Test Your Breast</h3>

      <p>
      Regulars breast self-examinations can be crucial in detecting any changes or abnormalities in the breasts. Women should perform breast self-exams regularly, ideally once a month.
      </p>
      {isShowMorebreast && (
        <p>
During a breast self-exam, you can check for lumps, changes in breast size or shape, skin dimpling or puckering, nipple changes, and unusual breast pain or tenderness. If you notice any concerning changes, it's essential to consult a healthcare professional for further evaluation.
        </p>
      )}

      <button onClick={toggleReadMoreLessbreast} className="btnsefcheck">
        {isShowMorebreast ? "Read Less" : "Read More"}
      </button>
      </div>


      <div className="self_checkup_container2">
    <h3>Test Your Skin</h3>

      <p>
      Regular skin self-examinations can help identify any suspicious moles or skin changes that might require further evaluation by a dermatologist.      </p>
      {isShowMoreskin && (
        <p>
During a skin self-exam, check your skin for any new or changing moles, growths, or spots. Look for irregular borders, changes in color, and increases in size. Early detection of skin changes can improve the chances of successful treatment if skin cancer or other skin conditions are detected.        </p>
      )}

      <button onClick={toggleReadMoreLessskin} className="btnsefcheck">
        {isShowMoreskin ? "Read Less" : "Read More"}
      </button>
      </div>

      
      <div className="self_checkup_container1">
    <h3>Test Your Scalp</h3>

      <p>
      Regularly checking your scalp can help identify any changes in your hair or scalp condition, which might indicate underlying issues.      </p>
      {isShowMorescalp && (
        <p>
Pay attention to any unusual hair loss, redness, flaking, or itching on your scalp. Changes in scalp health can be related to factors like stress, diet, or medical conditions. If you notice persistent scalp issues, it's advisable to seek advice from a dermatologist or healthcare professional.        </p>
      )}

      <button onClick={toggleReadMoreLessscalp} className="btnsefcheck">
        {isShowMorescalp ? "Read Less" : "Read More"}
      </button>
      </div>
    </div>
  );
}

export default SelfCheckup;