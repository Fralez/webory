const pairs = [
    {
      id: 1,
      cardOne: "https://avatars3.githubusercontent.com/u/4650309?s=460&v=4",
      cardTwo: "El Profe",
      isFlippedOne: false,
      isFlippedTwo: false,
      isFound: false
    },
  
    {
      id: 2,
      cardOne: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      cardTwo: "VS Code",
      isFlippedOne: false,
      isFlippedTwo: false,
      isFound: false
    },
  
    {
      id: 3,
      cardOne: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
      cardTwo: "Javascript",
      isFlippedOne: false,
      isFlippedTwo: false,
      isFound: false
    },
  
    {
      id: 4,
      cardOne: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
      cardTwo: "HTML5",
      isFlippedOne: false,
      isFlippedTwo: false,
      isFound: false
    },
  
    {
      id: 5,
      cardOne: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
      cardTwo: "CSS",
      isFlippedOne: false,
      isFlippedTwo: false,
      isFound: false
    },
  
    {
      id: 6,
      cardOne: "https://cdn.worldvectorlogo.com/logos/react.svg",
      cardTwo: "React",
      isFlippedOne: false,
      isFlippedTwo: false,
      isFound: false
    },
  
    {
      id: 7,
      cardOne: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png",
      cardTwo: "Node",
      isFlippedOne: false,
      isFlippedTwo: false,
      isFound: false
    },
  
    {
      id: 8,
      cardOne: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/V8_JavaScript_engine_logo_2.svg/1200px-V8_JavaScript_engine_logo_2.svg.png",
      cardTwo: "Chrome V8",
      isFlippedOne: false,
      isFlippedTwo: false,
      isFound: false
    },
  
    {
      id: 9,
      cardOne: "https://i.imgur.com/scrcyJ3.png",
      cardTwo: "Vue",
      isFlippedOne: false,
      isFlippedTwo: false,
      isFound: false
    },
  
    {
      id: 10,
      cardOne: "https://inteldig.com/wp-content/uploads/2018/10/cover-como-personalizar-chrome-devtools.jpg",
      cardTwo: "Chrome DevTools",
      isFlippedOne: false,
      isFlippedTwo: false,
      isFound: false
    },

    {
      id: 10,
      cardOne: "https://miro.medium.com/max/630/1*zzvdRmHGGXONZpuQ2FeqsQ.png",
      cardTwo: "Git",
      isFlippedOne: false,
      isFlippedTwo: false,
      isFound: false
    },

    {
      id: 12,
      cardOne: "https://avatars0.githubusercontent.com/u/1089146?s=400&v=4",
      cardTwo: "Atom",
      isFlippedOne: false,
      isFlippedTwo: false,
      isFound: false
    },

    {
      id: 13,
      cardOne: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brackets_Icon.svg/1200px-Brackets_Icon.svg.png",
      cardTwo: "Brackets",
      isFlippedOne: false,
      isFlippedTwo: false,
      isFound: false
    },

    {
      id: 14,
      cardOne: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
      cardTwo: "Angular",
      isFlippedOne: false,
      isFlippedTwo: false,
      isFound: false
    },
  ]

export const getPairs = () => {
    return new Promise((resolve, reject) => {
      resolve(pairs);
    })
}

export const shuffle = () => {

}