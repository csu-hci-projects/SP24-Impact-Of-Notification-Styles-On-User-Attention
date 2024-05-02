// reading.js

import React from 'react';
import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ReadingScreen from './components/ReadingScreen';

const readingTexts = [
  <Text>In the 16th century, an age of great marine and terrestrial exploration, Ferdinand Magellan led the first expedition to sail around the world. As a young Portuguese noble, he served the king of Portugal, but he became involved in the quagmire of political intrigue at court and lost the king’s favor. After he was dismissed from service by the king of Portugal, he offered to serve the future Emperor Charles V of Spain. {'\n\n'}

  A papal decree of 1493 had assigned all land in the New World west of 50 degrees W longitude to Spain and all the land east of that line to Portugal. Magellan offered to prove that the East Indies fell under Spanish authority. On September 20, 1519, Magellan set sail from Spain with five ships. More than a year later, one of these ships was exploring the topography of South America in search of a water route across the continent. This ship sank, but the remaining four ships searched along the southern peninsula of South America. Finally they found the passage they sought near 50 degrees S latitude. Magellan named this passage the Strait of All Saints, but today it is known as the Strait of Magellan. {'\n\n'}
  
  One ship deserted while in this passage and returned to Spain, so fewer sailors were privileged to gaze at that first panorama of the Pacific Ocean. Those who remained crossed the meridian now known as the International Date Line in the early spring of 1521 after 98 days on the Pacific Ocean. During those long days at sea, many of Magellan’s men died of starvation and disease. {'\n\n'}
  
  Later, Magellan became involved in an insular conflict in the Philippines and was killed in a tribal battle. Only one ship and 17 sailors under the command of the Basque navigator Elcano survived to complete the westward journey to Spain and thus prove once and for all that the world is round, with no precipice at the edge. {'\n\n'}
  </Text>,
  <Text>
    Marie Curie was one of the most accomplished scientists in history. Together with her husband, Pierre, she discovered radium, an element widely used for treating cancer, and studied uranium and other radioactive substances. Pierre and Marie’s amicable collaboration later helped to unlock the secrets of the atom. {'\n\n'}

  Marie was born in 1867 in Warsaw, Poland, where her father was a professor of physics. At an early age, she displayed a brilliant mind and a blithe personality. Her great exuberance for learning prompted her to continue with her studies after high school. She became disgruntled, however, when she learned that the university in Warsaw was closed to women. Determined to receive a higher education, she defiantly left Poland and in 1891 entered the Sorbonne, a French university, where she earned her master’s degree and doctorate in physics. {'\n\n'}
  
  Marie was fortunate to have studied at the Sorbonne with some of the greatest scientists of her day, one of whom was Pierre Curie. Marie and Pierre were married in 1895 and spent many productive years working together in the physics laboratory. A short time after they discovered radium, Pierre was killed by a horse-drawn wagon in 1906. Marie was stunned by this horrible misfortune and endured heartbreaking anguish. Despondently she recalled their close relationship and the joy that they had shared in scientific research. The fact that she had two young daughters to raise by herself greatly increased her distress. {'\n\n'}
  
  Curie’s feeling of desolation finally began to fade when she was asked to succeed her husband as a physics professor at the Sorbonne. She was the first woman to be given a professorship at the world-famous university. In 1911 she received the Nobel Prize in chemistry for isolating radium. Although Marie Curie eventually suffered a fatal illness from her long exposure to radium, she never became disillusioned about her work. Regardless of the consequences, she had dedicated herself to science and to revealing the mysteries of the physical world. {'\n\n'}
  </Text>,
  <Text>
    Mount Vesuvius, a volcano located between the ancient Italian cities of Pompeii and Herculaneum, has received much attention because of its frequent and destructive eruptions. The most famous of these eruptions occurred in A.D. 79. {'\n\n'}

The volcano had been inactive for centuries. There was little warning of the coming eruption, although one account unearthed by archaeologists says that a hard rain and a strong wind had disturbed the celestial calm during the preceding night. Early the next morning, the volcano poured a huge river of molten rock down upon Herculaneum, completely burying the city and filling the harbor with coagulated lava. {'\n\n'}

Meanwhile, on the other side of the mountain, cinders, stone and ash rained down on Pompeii. Sparks from the burning ash ignited the combustible rooftops quickly. Large portions of the city were destroyed in the conflagration. Fire, however, was not the only cause of destruction. Poisonous sulfuric gases saturated the air. These heavy gases were not buoyant in the atmosphere and therefore sank toward the earth and suffocated people. {'\n\n'}

Over the years, excavations of Pompeii and Herculaneum have revealed a great deal about the behavior of the volcano. By analyzing data, much as a zoologist dissects an animal specimen, scientists have concluded that the eruption changed large portions of the area’s geography. For instance, it turned the Sarno River from its course and raised the level of the beach along the Bay of Naples. Meteorologists studying these events have also concluded that Vesuvius caused a huge tidal wave that affected the world’s climate. {'\n\n'}

In addition to making these investigations, archaeologists have been able to study the skeletons of victims by using distilled water to wash away the volcanic ash. By strengthening the brittle bones with acrylic paint, scientists have been able to examine the skeletons and draw conclusions about the diet and habits of the residents. Finally, the excavations at both Pompeii and Herculaneum have yielded many examples of classical art, such as jewelry made of bronze, which is an alloy of copper and tin. The eruption of Mount Vesuvius and its tragic consequences have provided everyone with a wealth of data about the effects that volcanoes can have on the surrounding area. Today, volcanologists can locate and predict eruptions, saving lives and preventing the destruction of other cities and cultures. {'\n\n'}
  </Text>
];

const Reading = () => {
  const { notificationType, screen } = useLocalSearchParams();
  const currentScreen = parseInt(screen, 10) || 1;
  const readingText = readingTexts[currentScreen - 1] || '';

  return (
    <ReadingScreen
      notificationType={notificationType}
      readingText={readingText}
      screen={currentScreen}
    />
  );
};

export default Reading;