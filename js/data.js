// Lunaria — bundled keyword dataset
// Each question holds accepted keywords (1–2 words) with an estimated
// monthly Google search volume (global, illustrative snapshot — see README).
// The game scores answers by comparing a keyword's volume to the average
// volume of all accepted answers for that question.

const QUESTIONS = [
  {
    q: "Name a planet",
    answers: [
      ["earth", 2200000], ["mars", 1100000], ["jupiter", 750000],
      ["saturn", 600000], ["mercury", 550000], ["venus", 500000],
      ["pluto", 500000], ["neptune", 400000], ["uranus", 250000],
      ["ceres", 70000], ["vesta", 40000], ["eris", 20000],
      ["pallas", 15000], ["makemake", 13000], ["haumea", 10000],
      ["sedna", 9000], ["quaoar", 7000], ["gonggong", 4000],
      ["hygiea", 5000], ["orcus", 3000]
    ]
  },
  {
    q: "Name a color",
    answers: [
      ["blue", 2000000], ["black", 1800000], ["white", 1600000],
      ["red", 1500000], ["green", 1200000], ["purple", 900000],
      ["pink", 700000], ["orange", 600000], ["yellow", 800000],
      ["gray", 400000], ["brown", 350000], ["teal", 90000],
      ["navy", 80000], ["beige", 60000], ["turquoise", 55000],
      ["maroon", 45000], ["indigo", 45000], ["magenta", 40000],
      ["crimson", 25000], ["periwinkle", 9000], ["ochre", 8000],
      ["mauve", 5000], ["cerulean", 4000], ["vermilion", 2000]
    ]
  },
  {
    q: "Name a fruit",
    answers: [
      ["apple", 1500000], ["banana", 900000], ["orange", 800000],
      ["mango", 400000], ["strawberry", 300000], ["grape", 250000],
      ["kiwi", 200000], ["watermelon", 200000], ["pineapple", 150000],
      ["peach", 120000], ["durian", 90000], ["papaya", 60000],
      ["guava", 40000], ["lychee", 30000], ["passion fruit", 25000],
      ["jackfruit", 25000], ["dragonfruit", 20000], ["persimmon", 15000],
      ["quince", 12000], ["mangosteen", 9000], ["rambutan", 8000],
      ["kumquat", 5000], ["loquat", 4000], ["feijoa", 3000],
      ["ackee", 3000], ["jabuticaba", 2000], ["damson", 2000]
    ]
  },
  {
    q: "Name an animal",
    answers: [
      ["dog", 2500000], ["cat", 2200000], ["lion", 800000],
      ["tiger", 700000], ["horse", 900000], ["bear", 500000],
      ["elephant", 450000], ["wolf", 400000], ["dolphin", 400000],
      ["giraffe", 350000], ["zebra", 300000], ["penguin", 300000],
      ["eagle", 250000], ["rabbit", 600000], ["axolotl", 90000],
      ["pangolin", 45000], ["quokka", 40000], ["narwhal", 30000],
      ["okapi", 20000], ["tarsier", 15000], ["aye-aye", 8000],
      ["saiga", 6000], ["gerenuk", 3000], ["kinkajou", 2500],
      ["numbat", 2000]
    ]
  },
  {
    q: "Name a sport",
    answers: [
      ["football", 1200000], ["basketball", 800000], ["soccer", 600000],
      ["tennis", 500000], ["cricket", 500000], ["golf", 450000],
      ["baseball", 350000], ["boxing", 250000], ["hockey", 300000],
      ["rugby", 200000], ["badminton", 150000], ["squash", 90000],
      ["netball", 60000], ["curling", 60000], ["lacrosse", 70000],
      ["futsal", 40000], ["hurling", 20000], ["sepak takraw", 10000],
      ["pelota", 9000], ["bandy", 8000], ["camogie", 6000],
      ["korfball", 5000]
    ]
  },
  {
    q: "Name a country in Europe",
    answers: [
      ["germany", 1000000], ["france", 900000], ["italy", 800000],
      ["spain", 700000], ["england", 600000], ["greece", 400000],
      ["poland", 300000], ["norway", 300000], ["portugal", 300000],
      ["sweden", 250000], ["ireland", 250000], ["austria", 200000],
      ["hungary", 150000], ["croatia", 150000], ["malta", 150000],
      ["monaco", 120000], ["estonia", 90000], ["luxembourg", 90000],
      ["moldova", 80000], ["andorra", 60000], ["montenegro", 60000],
      ["san marino", 45000], ["liechtenstein", 20000]
    ]
  },
  {
    q: "Name a chess piece",
    answers: [
      ["king", 1200000], ["queen", 1000000], ["knight", 300000],
      ["bishop", 250000], ["pawn", 200000], ["rook", 150000]
    ]
  },
  {
    q: "Name a musical instrument",
    answers: [
      ["guitar", 1000000], ["piano", 800000], ["drums", 350000],
      ["violin", 300000], ["flute", 200000], ["trumpet", 180000],
      ["cello", 120000], ["saxophone", 130000], ["harp", 100000],
      ["clarinet", 90000], ["oboe", 45000], ["didgeridoo", 45000],
      ["bassoon", 30000], ["oud", 22000], ["sitar", 25000],
      ["theremin", 15000], ["balalaika", 8000], ["glockenspiel", 6000],
      ["celesta", 4000], ["zither", 4000], ["mbira", 3000],
      ["hydraulophone", 500], ["crwth", 300]
    ]
  },
  {
    q: "Name a programming language",
    answers: [
      ["python", 1200000], ["java", 900000], ["javascript", 600000],
      ["c++", 500000], ["php", 400000], ["go", 400000],
      ["ruby", 300000], ["swift", 250000], ["scratch", 250000],
      ["rust", 200000], ["typescript", 150000], ["kotlin", 120000],
      ["lua", 100000], ["perl", 90000], ["scala", 60000],
      ["fortran", 40000], ["cobol", 30000], ["elixir", 30000],
      ["haskell", 35000], ["lisp", 25000], ["prolog", 18000],
      ["zig", 20000], ["groovy", 20000], ["ocaml", 15000],
      ["erlang", 15000], ["nim", 12000], ["smalltalk", 8000]
    ]
  },
  {
    q: "Name a flower",
    answers: [
      ["rose", 900000], ["lily", 400000], ["tulip", 300000],
      ["orchid", 300000], ["sunflower", 350000], ["lavender", 250000],
      ["daisy", 250000], ["daffodil", 150000], ["poppy", 150000],
      ["peony", 120000], ["hydrangea", 100000], ["carnation", 90000],
      ["chrysanthemum", 60000], ["marigold", 50000], ["begonia", 40000],
      ["snapdragon", 25000], ["gladiolus", 20000], ["basenji", 20000],
      ["zinnia", 15000], ["foxglove", 15000], ["freesia", 12000],
      ["ranunculus", 9000], ["hellebore", 8000], ["delphinium", 6000]
    ]
  },
  {
    q: "Name a chemical element",
    answers: [
      ["gold", 1000000], ["silver", 600000], ["iron", 400000],
      ["lead", 400000], ["oxygen", 300000], ["copper", 300000],
      ["carbon", 250000], ["hydrogen", 200000], ["calcium", 200000],
      ["zinc", 200000], ["mercury", 200000], ["helium", 150000],
      ["nitrogen", 120000], ["tin", 150000], ["sodium", 100000],
      ["potassium", 90000], ["arsenic", 60000], ["selenium", 50000],
      ["iodine", 50000], ["krypton", 40000], ["argon", 35000],
      ["xenon", 30000], ["yttrium", 9000], ["dysprosium", 6000],
      ["hafnium", 5000], ["praseodymium", 4000], ["oganesson", 2000],
      ["flerovium", 1500], ["meitnerium", 1000]
    ]
  },
  {
    q: "Name a dog breed",
    answers: [
      ["husky", 400000], ["german shepherd", 450000], ["labrador", 300000],
      ["bulldog", 300000], ["poodle", 250000], ["chihuahua", 250000],
      ["beagle", 200000], ["pug", 200000], ["shiba inu", 200000],
      ["dachshund", 180000], ["rottweiler", 150000], ["corgi", 150000],
      ["boxer", 150000], ["akita", 120000], ["greyhound", 100000],
      ["samoyed", 90000], ["whippet", 40000], ["malamute", 60000],
      ["vizsla", 30000], ["borzoi", 15000], ["basenji", 20000],
      ["saluki", 9000], ["kuvasz", 12000], ["sloughi", 3000],
      ["azawakh", 2000]
    ]
  }
];
