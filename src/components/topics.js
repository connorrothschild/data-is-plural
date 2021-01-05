const fromPairs = (arr) => {
  let res = {};
  arr.forEach((d) => {
    res[d[0]] = d[1];
  });
  return res;
};

export const rawTopics = [
  ["", "The PUdding"],
  ["USA", "United states,america,u.s."],
  ["Germany", "Germany"],
  ["UK", "united kingdom,u.k.,british"],
  ["NYC", "nyc,new york"],
  ["China", "China"],
  ["", "cyber,programmer"],
  ["COVID", "COVID,coronavirus,pandemic"],
  ["voting", "polling,voting,voter,election"],
  ["", "mosquito"],
  ["Forests", "forest,tree,national park"],
  ["", "family"],
  ["", "london"],
  ["Bicycles", "bike"],
  ["", "electricity"],
  ["", "politics,political"],
  ["", "hip-hop,rap"],
  ["", "prizes"],
  ["", "reddit"],
  ["Science", "science"],
  ["Geography", "geographic,map"],
  ["", "tv"],
  ["", "radio"],
  ["Travel", "airplane,airport,flight,TSA,travel"],
  ["Books", "book,library,fiction"],
  ["", "lightning"],
  ["", "college"],
  [
    "Economic",
    "money,economic,salary,finance,financial,spending,bank,per diem,wage,earnings,loan,price",
  ],
  ["", "military"],
  ["Polica", "police,officer"],
  ["Food", "food,cook,kitchen"],
  ["", "opinion,advice"],
  ["", "trump"],
  ["Space", "planet,nasa,space"],
  ["", "weather"],
  ["Water", "water,flooding, rain "],
  ["", "movie"],
  ["", "wildlife"],
  ["", "brain"],
  ["", "squirrel"],
  ["Music", "music,billboard,lyric,harmony,orchestra"],
  ["Healthcare", "hospital,healthcare,health "],
  ["", "energy"],
  ["", "wifi,broadband,internet"],
  ["Monkey", "monkey,primate,chimp"],
  ["", "laws,policy"],
  ["Ice", "arctic,glacier, ice,iceberg,frozen,frost"],
  ["Farming", "farmer,crop"],
  ["Africa", "africa"],
  ["", "california"],
  ["Cars", "car,vehicle,traffic"],
  ["Transit", "subway,metro,transit"],
  ["", "hydro,stream,river"],
  ["Dogs", " dog , dogs "],
  ["Cats", " cat , cats "],
  ["", "bridge"],
  ["Housing", "house,housing,building,mortgage"],
  ["", "star"],
  ["Language", "speeches,words,language"],
  ["", "genes"],
  ["", "prison,jail"],
  ["Love", "kiss,romantic,romance,love"],
  ["", "climate"],
  ["Sun", " sun ,solar,sunniness"],
  ["", "ticket"],
  ["Religion", "religion,papal"],
  ["", "art"],
  ["", "burrito"],
  ["", "penguin"],
  ["", "avocado"],
  ["", "recycle,recycling"],
  ["", "pie"],
  ["", "pumpkin"],
  ["", "satellite"],
  ["", "cloud"],
  ["AI", "robo,robot,artificial intelligence, ai "],
  ["", "news,newspaper"],
  ["", "gas,oil"],
  ["Migration", "migration,refugee,migrant"],
  ["", "doodle"],
  ["", "wildlife,animal"],
  ["", "computer,server"],
  ["", "meteor,rock"],
  ["", "earthquake"],
  ["", "landslide"],
  ["", "cannabis,marijuana"],
  ["", "sports,athlete,stadium"],
  ["", "ballpark,baseball"],
  ["", "Pokémon"],
  ["Education", "teacher,education,learn"],
  ["", " you "],
  ["Cameras", "camera,screenshot,picture,photo"],
  ["", " drug "],
  ["", "bird egg"],
  ["", "beer"],
  ["Dairy", "dairy,cheese,milk , cow "],
];

export const topics = rawTopics.map(([name, strings]) => [
  name,
  strings.toLowerCase().split(","),
]);

export const topicsMap = fromPairs(topics.map(([_, d]) => [d[0], d]));

let topicToSlugMap = {};
topics.forEach(([_, subStrings = []]) => {
  subStrings.forEach((str) => {
    topicToSlugMap[str] = subStrings[0];
  });
});

export { topicToSlugMap };