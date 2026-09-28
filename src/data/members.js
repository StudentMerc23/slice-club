import hector from "../assets/images/members/Hector.jpeg";
import diego from "../assets/images/members/Diego.jpeg";
import dylan from "../assets/images/members/Dylan.jpeg";

const members = [
  {
    id: 1,
    firstName: "HÉCTOR",
    lastName: "BERMÚDEZ",
    nickname: "CANDY",
    image: hector,

    stats: {
      handicap: "29.3",
      averageScore: "100",
      bestRound: "96",
      roundsPlayed: "Break 90" /*SOCRING GOAL*/,
      birdies: "3.3" /*PAR OR BETTER*/,
      longestDrive: "245 Yds",
    },

    bag: {
      driver: "TaylorMade (2008 Burner)",
      woods: "TaylorMade (2008 Burner)",
      irons: "Ping (Rapture)",
      wedges: "Titleist (Vokey Design)",
      putter: "Scotty Cameron 2005 Newport 2",
      ball: "Callaway Supersoft",
    },
  },

  {
    id: 2,
    firstName: "DIEGO",
    lastName: "RODRÍGUEZ",
    nickname: "GOGO",
    image: diego,

    stats: {
      handicap: "—",
      averageScore: "—",
      bestRound: "—",
      roundsPlayed: "Break 90",
      birdies: "—",
      longestDrive: "—",
    },

    bag: {
      driver: "—",
      woods: "—",
      irons: "—",
      wedges: "—",
      putter: "—",
      ball: "—",
    },
  },

  {
    id: 3,
    firstName: "DYLAN",
    lastName: "RODRÍGUEZ",
    nickname: null,
    image: dylan,

    stats: {
      handicap: "—",
      averageScore: "—",
      bestRound: "—",
      roundsPlayed: "Break 90",
      birdies: "—",
      longestDrive: "—",
    },

    bag: {
      driver: "—",
      woods: "—",
      irons: "—",
      wedges: "—",
      putter: "—",
      ball: "—",
    },
  },
];

export default members;
