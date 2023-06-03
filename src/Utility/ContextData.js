import React, { useState } from "react";
// import Home from '../Pages/Home/Home';
// import Bollywood from '../Pages/Bollywood/Bollywood';
// import Hollywood from '../Pages/Hollywood/Hollywood';
// import Technology from '../Pages/Technology/Technology';
// import Fitness from '../Pages/Fitness/Fitness';
// import Food from '../Pages/Food/Food';

export const store = React.createContext();

const ContextData = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      url: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
      category: "Travel",
      title: "Taj Mahal",
      description: "",
      date: "11th March, 2023",
    },
    {
      id: 2,
      url: "https://static.toiimg.com/photo/77612158.cms",
      title: "Christ the redemeer",
      category: "Travel",
      description: "",
      date: "11th March, 2023",
    },
    {
      id: 3,
      url: "https://cdn.britannica.com/54/122154-131-52D686FF/Great-Wall-of-China.jpg",
      title: "The Great wall of China",
      category: "Travel",
      description: "",
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
      url: "https://www.koimoi.com/wp-content/new-galleries/2023/03/bholaa-box-office-day-1-advance-booking-1-day-to-go-01.jpg",
      title: "Bholaa",
      description:
        "Bholaa is a 2023 Indian Hindi-language action-adventure film directed by Ajay Devgn and jointly produced by Ajay Devgn FFilms, Reliance Entertainment, T-Series Films and Dream Warrior Pictures.",
      category: "bollywood",
      release_date: "30th March, 2023",
      imdb: "6.8",
    },
    {
      id: 19,
      url: "https://static.toiimg.com/photo/94391485.jpeg",
      title: "Vikram Vedha",
      description:
        "Vikram Vedha is a 2022 Indian Hindi-language neo-noir action thriller film written and directed by Pushkar-Gayathri and jointly produced by YNOT Studios, Friday Filmworks, Reliance Entertainment, T-Series Films and Jio Studios.",
      category: "bollywood",
      release_date: "30th September, 2022",
      imdb: "7.1",
    },
    {
      id: 20,
      url: "https://m.media-amazon.com/images/M/MV5BYWY1ZDY4MmQtYjhiYS00N2QwLTk1NzgtOWI2YzUwZThjNDYwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      title: "Creed III",
      description:
        "Creed III is a 2023 American sports drama film directed by and starring Michael B. Jordan (in his directorial debut) from a screenplay by Keenan Coogler and Zach Baylin.",
      category: "hollywood",
      release_date: "3rd March, 2023",
      imdb: "7.3",
    },
    {
      id: 21,
      url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/04/Guardians-of-the-Galaxy-Vol.-3-min-1.jpg",
      title: "Guardians of the Galaxy Vol. 3",
      description:
        "Guardians of the Galaxy Vol. 3 (stylized as Guardians of the Galaxy Volume 3) is an upcoming American superhero film based on the Marvel Comics superhero team Guardians of the Galaxy, produced by Marvel Studios, and distributed by Walt Disney Studios Motion Pictures.",
      category: "hollywood",
      release_date: "5th May, 2023",
      imdb: "8.0",
    },
    {
      id: 22,
      url: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg",
      title: "John Wick: chapter 4",
      description:
        "John Wick: Chapter 4 (stylized as JW4) is a 2023 American neo-noir action thriller film directed by Chad Stahelski and written by Shay Hatten and Michael Finch. ",
      category: "hollywood",
      release_date: "24th March, 2023",
      imdb: "9.3",
    },
    {
      id: 23,
      url: "https://upload.wikimedia.org/wikipedia/en/3/30/Ant-Man_and_the_Wasp_Quantumania_poster.jpg",
      title: "Antman and the Wasp: Quantumania",
      description:
        "Ant-Man and the Wasp: Quantumania is a 2023 American superhero film based on Marvel Comics featuring the characters Scott Lang / Ant-Man and Hope Pym / Wasp.",
      category: "hollywood",
      release_date: "17th February, 2023",
      imdb: "6.4",
    },
    {
      id: 24,
      url: "https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_FMjpg_UX1000_.jpg",
      title: "Evil Dead Rise ",
      description:
        "Evil Dead Rise is a 2023 American supernatural horror film written and directed by Lee Cronin. It is the fifth installment of the Evil Dead film series. The film stars Lily Sullivan and Alyssa Sutherland as two estranged sisters trying to survive and save their family from deadites. ",
      category: "hollywood",
      release_date: "21st April, 2023",
      imdb: "6.7",
    },
    {
      id: 25,
      url: "https://movies.universalpictures.com/media/02-fx-dm-mobile-banner-1080x745-pl-f01-031323-64108e7aa3468-1.jpg",
      title: "Fast X",
      description:
        "Fast X is a 2023 American action film directed by Louis Leterrier from a screenplay written by Dan Mazeau and Justin Lin, who also co-wrote the story with Zach Dean.",
      category: "hollywood",
      release_date: "19th May, 2023",
      imdb: "6.3",
    },
    {
      id: 26,
      url: "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
      title: "React JS",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
      category: "technology",
      launch_date: "29th May, 2013",
      tech_type: "Frontend Web development",
    },
    {
      id: 27,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
      title: "Adobe Photoshop",
      description:
        "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1987 by Thomas and John Knoll. Since then, the software has become the most used tool for professional digital art, especially in raster graphics editing.",
      category: "technology",
      launch_date: "19th February, 1990",
      tech_type: "Design",
    },
    {
      id: 28,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png",
      title: "Python",
      description:
        "Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems.",
      category: "technology",
      launch_date: "20th February, 1991",
      tech_type: "Programming Language",
    },
    {
      id: 29,
      url: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      title: "Node JS",
      description:
        "Node.js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language. ",
      category: "technology",
      launch_date: "27th May, 2009",
      tech_type: "Backend Web Development",
    },
    {
      id: 30,
      url: "https://spin.atomicobject.com/wp-content/uploads/Figma-Image.jpg",
      title: "Figma",
      description:
        "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows. The feature set of Figma focuses on user interface and user experience design, with an emphasis on real-time collaboration, utilising a variety of vector graphics editor and prototyping tools.",
      category: "technology",
      launch_date: "27th September, 2016",
      tech_type: "Design",
    },
    {
      id: 31,
      url: "https://dev.java/assets/images/java-logo-vert-blk.png",
      title: "Java",
      description:
        "Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.",
      category: "technology",
      launch_date: "23rd January, 1996",
      tech_type: "Programming language",
    },
    {
      id: 32,
      url: "https://assets.epicurious.com/photos/60f09a34ae9cc866a51a25d0/16:9/w_6943,h_3905,c_limit/ChickpeaPotatoChaat_RECIPE_071321_19121.jpg",
      title: "Chaat",
      description:
        "Chaat, (Hindi: “to lick” or “to taste”) a traditional savory snack sold by street vendors in India that originated in the country’s northern region and is now popular throughout South Asia and at Indian restaurants worldwide.",
      category: "food",
      origin: "India",
      type: "veg"
    },
    {
      id: 33,
      url: "https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52344.jpg?w=2000",
      title: "Biryani",
      description:
        "Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with Indian spices, vegetables, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, and fish), or in some cases without any meat,[1] and sometimes, in addition, eggs and potatoes.",
      category: "food",
      origin: "India",
      type: "non-veg"
    },
    {
      id: 34,
      url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/dum-aloo-recipe.jpg",
      title: "Dum aloo",
      description:
        "Dum aloo is a potato-based curry dish. Dum means slow-cooked, and aloo is potato. It is a part of the traditional Kashmiri Pandit cuisine, from the Kashmir Valley, in the Indian state of Jammu and Kashmir. There are also Banarasi and Bengali variations.",
      category: "food",
      origin: "India",
      type: "veg"
    },
    {
      id: 35,
      url: "https://www.healthifyme.com/blog/wp-content/uploads/2022/05/rice-phirni-scaled.jpg",
      title: "Phirni",
      description:
        "Phirni, is a sweet dish and a type of wet pudding popular in the Indian subcontinent, usually made by boiling milk, sugar or jaggery. It is typically served as a dessert.",
      category: "food",
      origin: "India",
      type: "veg"
    },
    {
      id: 36,
      url: "https://www.shutterstock.com/image-photo/homemade-dosa-dhosa-masala-plain-260nw-1597787986.jpg",
      title: "Dosa",
      description:
        "A dosa, is a thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. Dosas are popular in South Asia as well as around the world. Dosas are served hot, often with chutney and sambar.",
      category: "food",
      origin: "India",
      type: "veg"
    },
    {
      id: 37,
      url: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg",
      title: "Butter Chicken",
      description:
        "Butter chicken, is an Indian dish originating in Delhi. It is a type of curry made from chicken with a spiced tomato and butter (makhan) sauce. Its sauce is known for its rich texture.",
      category: "food",
      origin: "India",
      type: "non-veg"
    },
    {
      id: 38,
      url: "https://images.indianexpress.com/2022/12/cricket-bat-ball-image.jpg",
      title: "Cricket",
      description: "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps.",
      category: "sports",
      origin: "England",
      type: "Outdoor"
    },
    {
      id: 39,
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Chess_board_opening_staunton.jpg",
      title: "Chess",
      description: "Chess is a board game for two players, called White and Black, each controlling an army of chess pieces in their color, with the objective to checkmate the opponent's king.",
      category: "sports",
      origin: "India",
      type: "Indoor"
    },
    {
      id: 40,
      url: "https://www.kreedon.com/wp-content/uploads/2018/11/badminton-grass-racket-115016.jpg",
      title: "Badminton",
      description: "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are singles and doubles",
      category: "sports",
      origin: "China",
      type: "Indoor"
    },
    {
      id: 41,
      url: "https://www.sportsadda.com/static-assets/waf-images/86/3a/4b/1-1/J5cZ61KuVq.jpg?v=1.3&w=1024",
      title: "Football",
      description: "Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. There are different domestic leagues played across European, American and many other countries every year.",
      category: "sports",
      origin: "England",
      type: "Outdoor"
    },
    {
      id: 42,
      url: "https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/momhllweruehw0ud2m2r",
      title: "Table Tennis",
      description: "Table tennis, is a racket sport derived from tennis but distinguished by its playing surface being atop a stationary table, rather than the court on which players stand. Play is fast, requiring quick reaction and constant attention ",
      category: "sports",
      origin: "England",
      type: "Indoor"
    },
    {
      id: 43,
      url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Algeria_and_Japan_women%27s_national_volleyball_team_at_the_2012_Summer_Olympics_%287913959028%29.jpg",
      title: "Volley Ball",
      description: "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been a part of the official program of the Summer Olympic Games since Tokyo 1964.",
      category: "sports",
      origin: "USA",
      type: "Outdoor"
    },
    {
      id: 44,
      url: "https://images.unsplash.com/photo-1613967193490-1d17b930c1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80",
      category: "carouselImg",
      title: "Landscape 1"
    },
    {
        id: 45,
        url: "https://images.unsplash.com/photo-1613967193490-1d17b930c1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80",
        category: "carouselImg",
        title: "Mount Kanchenjunga"
    },
    {
      id: 46,
      url:"",
      category: "carouselImg",
      title: ""
    }
  ]);

  return (
    <>
      <store.Provider value={[data, setData]}>{props.children}</store.Provider>
    </>
  );
};

export default ContextData;
