import React, {useState} from 'react';
// import Home from '../Pages/Home/Home';
// import Bollywood from '../Pages/Bollywood/Bollywood';
// import Hollywood from '../Pages/Hollywood/Hollywood';
// import Technology from '../Pages/Technology/Technology';
// import Fitness from '../Pages/Fitness/Fitness';
// import Food from '../Pages/Food/Food';

export const store = React.createContext();

const ContextData = (props)=>{

  const [data, setData] = useState([
      {
        id: 1,
        url: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
        category: "Travel",
        title: "Taj Mahal",
        height: "100px",
        width: "100 px",
        date: "11th March, 2023",
      },
      {
        id: 2,
        url: "https://static.toiimg.com/photo/77612158.cms",
        title: "Christ the redemeer",
        category: "Travel",
        height: "100px",
        width: "100px",
        date: "11th Marcg, 2023",
      },
      {
        id: 3,
        url: "https://cdn.britannica.com/54/122154-131-52D686FF/Great-Wall-of-China.jpg",
        title: "The Great wall of China",
        category: "Travel",
        date: "11th March, 2023",
      },
      {
        id: 4,
        url: "https://www.makemytrip.com/travel-guide/media/dg_image/srinagar/Dal-Lake.jpg",
        title: "Dal Lake",
        category: "Latest",
        description:
          "Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals. It is integral to tourism and recreation in the Kashmir valley ",
        date: "11th March, 2023",
      },
      {
        id: 5,
        url: "https://gujaratcricketassociation.com/wp-content/uploads/2021/01/motera-stadium2.jpg",
        title: "Narendra Modi Stadium",
        category: "Latest",
        description:
          "The Narendra Modi Stadium, is a cricket stadium situated in Sardar Vallabhbhai Patel Sports Complex, Ahmedabad, India. It is the largest stadium in the world, with a seating capacity of 132,000 spectators. Owned by the Gujarat Cricket Association and is a venue for Test, ODI, T20I, and Indian Premier League cricket matches.",
        date: "11th March, 2023",
      },
      {
        id: 6,
        url: "https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/border-gavaskar-trophy-1674379225417-original.jpg",
        title: "Border-Gavaskar Trophy",
        category: "Latest",
        description:
          "The Border-Gavaskar Trophy is an International Test cricket series played between India and Australia. The series is named after distinguished former captains and cricket legends, Australia's Allan Border and India's Sunil Gavaskar.",
        date: "11th March, 2023",
      },
      {
        id: 7,
        url: "https://sportsmatik.com/uploads/matik-sports-corner/matik-know-how/paragliding_1493810301_97866.jpg",
        title: "Paragliding",
        category: "LatestArticle",
        description:
          "Paragliding is the recreational and competitive adventure sport of flying paragliders: lightweight, free-flying, foot-launched glider aircraft with no rigid primary structure. The pilot sits in a harness or lies supine in a cocoon-like 'pod' suspended below a fabric wing.",
        date: "11th March, 2023",
      },
      {
        id: 8,
        url: "https://www.sikkimtourismindia.com/img/silk-route.jpg",
        title: "Nathula Pass",
        category: "LatestArticle",
        description:
          "Nathu La (Tibetan: རྣ་ཐོས་ལ་, Wylie: Rna thos la, THL: Na tö la, Chinese: 乃堆拉山口) is a mountain pass in the Dongkya Range of the Himalayas between China's Yadong County in Tibet, and the Indian states of Sikkim and West Bengal in Bengal, South Asia. The pass, at 4,310 m (14,140 ft), connects the towns of Kalimpong and Gangtok to the villages and towns of the lower Chumbi Valley.",
        date: "11th March, 2023",
      },
      {
        id: 9,
        url: "https://assets.telegraphindia.com/telegraph/05648444-7dc7-4c71-9a25-656e98a6a0a0.jpg",
        title: "Victoria Memorial",
        category: "LatestArticle",
        description:
          "The Victoria Memorial is a large marble building on the Maidan in Central Kolkata, having its entrance on the Queen's Way. It was built between 1906 and 1921 by then British government. It is dedicated to the memory of Queen Victoria, Empress of India from 1876 to 1901.",
        date: "11th March, 2023",
      },
      {
        id: 10,
        url: "https://upload.wikimedia.org/wikipedia/commons/9/94/The_Golden_Temple_of_Amrithsar_7.jpg",
        title: "Golden Temple",
        category: "LatestArticle",
        description:
          "The Golden Temple is a gurdwara located in the city of Amritsar, Punjab, India.[3][4] It is the preeminent spiritual site of Sikhism. It is one of the holiest sites in Sikhism, alongside the Gurdwara Darbar Sahib Kartarpur in Kartarpur, and Gurdwara Janam Asthan in Nankana Sahib.",
        date: "11th March, 2023",
      },
      {
        id: 11,
        url: "https://badrinath-kedarnath.gov.in/Assets/image/k3.jpg",
        title: "Kedarnath temple",
        category: "LatestStories",
        description:
          "Kedarnath is a town and Nagar Panchayat in Rudraprayag district of Uttarakhand, India, known primarily for the Kedarnath Temple. It is approximately 86 kilometres from Rudraprayag, the district headquarter. Kedarnath is the most remote of the four Chota Char Dham pilgrimage sites.",
        date: "11th March, 2023",
      },
      {
        id: 12,
        url: "https://images.nationalgeographic.org/image/upload/v1638892439/EducationHub/photos/mount-everest-sign.jpg",
        title: "Mount Everest",
        category: "LatestStories",
        description:
          "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China-Nepal border runs across its summit point. Its elevation (snow height) of 8,848.86 m was most recently established in 2020 by the Chinese and Nepali authorities.",
        date: "11th March, 2023",
      },
      {
        id: 13,
        url: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/mqir09148il8g67b160oatpoyefp_1597151062_shutterstock_1035381202.jpg",
        title: "Attari- Wagha border",
        category: "LatestStories",
        description:
          "The lowering of the flags ceremony at the Attari-Wagah border is a daily CAPF(Central Armed Police Force) practice that the security forces of India (Border Security Force) and Pakistan (Pakistan Rangers) have jointly followed since 1959.[2] The drill is characterized by elaborate and rapid dance-like manoeuvres and raising legs as high as possible, which have been described as colourful.",
        date: "11th March, 2023",
      },
      {
        id: 14,
        url: "https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg",
        title: "Pathan",
        category: "bollywood",
        description:
          "Pathaan (pronounced is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and written by Shridhar Raghavan and Abbas Tyrewala, from a story by Anand. The fourth installment in the YRF Spy Universe, it stars Shah Rukh Khan, Deepika Padukone, John Abraham, Dimple Kapadia, and Ashutosh Rana.",
        release_date: "25th January, 2023",
        imdb: "6.4",
      },
      {
        id: 15,
        url: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/cast_static_poster-sixteen_nine.jpg?VersionId=PW3fzKapNVWj2fK4qP04FPEFAuPgdyl6",
        title: "Farzi",
        category: "bollywood",
        description:
          "Farzi is a 2023 Indian Hindi-language black comedy crime thriller television series about counterfeit money created, produced and directed by Raj & DK, who also co-wrote the series with Sita Menon and Suman Kumar.",
        release_date: "10th February, 2023",
        imdb: "8.4",
      },
      {
        id: 16,
        url: "https://upload.wikimedia.org/wikipedia/en/4/45/Mission_Majnu.jpg",
        title: "Mission Majnu",
        category: "bollywood",
        description:
          "Mission Majnu is an 2023 Indian Hindi-language spy thriller film directed by Shantanu Bagchi and produced by Ronnie Screwvala, Amar Butala and Garima Mehta.",
        release_date: "20th January, 2023",
        imdb: "7.2",
      },
      {
        id: 17,
        url: "https://m.media-amazon.com/images/M/MV5BYTUyNWFhMTYtMTBkYy00ZGIxLWFhNjItZGMyYmFlYWEwY2IyXkEyXkFqcGdeQXVyNjc4MjU1MzI@._V1_.jpg",
        title: "Jawan",
        description:
          "Jawan is a 2023 upcoming Indian Hindi-language action thriller film written and directed by Atlee. It stars Shah Rukh Khan in a dual role with Vijay Sethupathi, Nayanthara, Sanya Malhotra and Priyamani. The music is composed by Anirudh Ravichander.",
        category: "bollywood",
        release_date: "2nd June, 2023",
        imdb: "7.5",
      },
      {
        id: 18,
        url: "https://m.media-amazon.com/images/M/MV5BYWY1ZDY4MmQtYjhiYS00N2QwLTk1NzgtOWI2YzUwZThjNDYwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        title: "Creed III",
        description:
          "Creed III is a 2023 American sports drama film directed by and starring Michael B. Jordan (in his directorial debut) from a screenplay by Keenan Coogler and Zach Baylin.",
        category: "hollywood",
        release_date: "3rd March, 2023",
        imdb: "7.3",
      },
      {
        id: 19,
        url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/04/Guardians-of-the-Galaxy-Vol.-3-min-1.jpg",
        title: "Guardians of the Galaxy Vol. 3",
        description:
          "Guardians of the Galaxy Vol. 3 (stylized as Guardians of the Galaxy Volume 3) is an upcoming American superhero film based on the Marvel Comics superhero team Guardians of the Galaxy, produced by Marvel Studios, and distributed by Walt Disney Studios Motion Pictures.",
        category: "hollywood",
        release_date: "5th May, 2023",
        imdb: "8.0",
      },
      {
        id: 20,
        url: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg",
        title: "John Wick: chapter 4",
        description:
          "John Wick: Chapter 4 (stylized as JW4) is a 2023 American neo-noir action thriller film directed by Chad Stahelski and written by Shay Hatten and Michael Finch. ",
        category: "hollywood",
        release_date: "24th March, 2023",
        imdb: "9.3",
      },
      {
        id: 21,
        url: "https://upload.wikimedia.org/wikipedia/en/3/30/Ant-Man_and_the_Wasp_Quantumania_poster.jpg",
        title: "Antman and the Wasp: Quantumania",
        description: "Ant-Man and the Wasp: Quantumania is a 2023 American superhero film based on Marvel Comics featuring the characters Scott Lang / Ant-Man and Hope Pym / Wasp.",
        category: "hollywood",
        release_date: "17th February, 2023",
        imdb: "6.4"
      },
      {
    
      },
      {
    
      },
      {
    
      },
      {
    
      }
    ])

  return(
    <>
      <store.Provider value={[data, setData]}>
         {props.children}
      </store.Provider>
    </>
  )
}


export default ContextData;
