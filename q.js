class Teamwork {
  constructor(questionText, code = null, options = null, answer, group) {
    this.questionText = questionText;
    this.code = code;
    this.options = options;
    this.answer = answer;
    this.group = group;
  }

  checkAnswer(answerFromClient) {
    return this.answer === answerFromClient;
  }
}

const s1 = new Teamwork(
  "When might you use React.PureComponent?",
  null,
  [
    "when you do not want your component to have props",
    " when you have sibling components that need to be compared",
    "when you want a default implementation of `shouldComponentUpdate()",
    "when you do not want your component to have state ",
  ],
  "when you want a default implementation of `shouldComponentUpdate()",
  "9"
);
const s2 = new Teamwork(
  "You have written the following code but nothing is rendering. How do you fix this problem??",
  `const Heading = () => {
    <h1>Hello!</h1>;
   };`,
  [
    "Add a render function",
    "Change the curly braces to parentheses or add a return statement before the h1 tag.",
    "Move the h1 to another component.",
    "Surround the h1 in a div.",
  ],
  "Change the curly braces to parentheses or add a return statement before the h1 tag.",
  "8"
);
const s3 = new Teamwork(
  "Which option is correct for State vs Props",
  null,
  [
    "Props is something that the parent doesn’t need and decide to throw around among other parents; State is the parent’s favorite child and something the component wants to nurture.",
    "Props is a copy of real DOM; State is the definition of the real DOM.",
    "Props get passed to the component using naming conventions, like a function parameter; State is managed within the component and holds some information that may change over the lifetime of the component.",
    "Prop is managed within the component and holds some information that may change over the lifetime of the component; State gets passed to the component, like a function parameter",
  ],
  "Props get passed to the component using naming conventions, like a function parameter; State is managed within the component and holds some information that may change over the lifetime of the component.",
  "8"
);
const s4 = new Teamwork(
  "What package contains the render() function that renders a React element tree to the DOM?",
  null,
  ["React", "ReactDOM", "Render", "DOM"],
  "ReactDOM",
  "8"
);
const s5 = new Teamwork(
  "Which of the following click event handlers will allow you to pass the name of the person to be hugged?",
  `class Huggable extends React.Component {
    hug(id) {
    console.log("hugging " + id);
    }
    render() {
    let name = "kitteh";
    let button = // Missing Code
    return button;
    }
   }`,
  [
    "<button onClick={(name) => this.hug(name)}>Hug Button</button>",
    "<button onClick={this.hug(e, name)}>Hug Button</button>",
    "<button onClick={(e) => hug(e, name)}>Hug Button</button>",
    "<button onClick={(e) => this.hug(name,e)}>Hug Button</button>",
  ],
  "<button onClick={(e) => this.hug(name,e)}>Hug Button</button>",
  "8"
);
const s6 = new Teamwork(
  "Which answer best describes a function component?",
  null,
  [
    "A function component is required to create a React component.",
    "A function component accepts a single props object and returns a React element.",
    "A function component is the only way to create a component.",
    "A function component is the same as a class component.",
  ],
  "A function component accepts a single props object and returns a React element.",
  "8"
);
const s7 = new Teamwork(
  "What is the name of the tool used to take JSX and turn it into createElement calls?",
  null,
  ["JSX Editor", "ReactDOM", "Browser Buddy", "Babel"],
  "Babel",
  "8"
);
const s8 = new Teamwork(
  "If you see the following import in a file, what is being used for state management in the component?",
  "import React, {useState} from 'react';",
  ["React Hooks", "stateful components", "math", "class components"],
  "React Hooks",
  "8"
);
const s9 = new Teamwork(
  " If you created a component called Dish and rendered it to the DOM, what type of element would be rendered?",
  `function Dish() {
 return <h1> Mac and Cheese</h1>;
}
ReactDOM.render(
 <Dish />
 document.getElementById('root')
)`,
  ["div", "section", "component", "h1"],
  "h1",
  "8"
);
const s10 = new Teamwork(
  "Which of the following lifecycle methods does not get triggered on the component’s initial render?",
  null,
  [
    "componentWillMount()",
    "componentWillReceiveProps()",
    "render()",
    "componentDidMount()",
  ],
  "componentWillReceiveProps()",
  "8"
);
const s11 = new Teamwork(
  "What does this React element look like given the following function?",
  `React.createElement(
    "h1",
    null,
    "What's happening?"
   );`,
  [
    "<h1 props={null}>What's happening?</h1>",
    "<h1 id='component'>What's happening?</h1>",
    "<h1>What's happening?</h1>",
    "<h1 id='element'>What's happening?</h1>",
  ],
  "<h1>What's happening?</h1>",
  "8"
);

const questionsArr = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11];

export default questionsArr;

const container = document.querySelector(".container");
