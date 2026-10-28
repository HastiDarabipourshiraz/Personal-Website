import DataBites from "../../Assets/P3.jpg";
import unplugged from "../../Assets/p4.jpg";
import BiasViz from "../../Assets/p2.jpg";
import DoodleLab from "../../Assets/p1.jpg";
import TraceFlow from "../../Assets/P6.jpg";
import PieceByPiece from "../../Assets/P5.jpg";

export const projects = [
  {
    id: 6,
    title: "TraceFlow",
    image: TraceFlow,
    description: "A co-creative AI image generation tool designed to support flexible and traceable creative workflows. The tool combines node-based and component-based editing, enabling users to explore and refine visual compositions while tracking how their ideas, creative decisions, and AI contributions evolve throughout the process.",
    category: "Traceable creative workflow",
    highlights: ["Combine node-based and component-based editing.", "Explore and refine visual compositions.", "Track ideas, creative decisions, and AI contributions."],
    papers: [],
    demoUrl: null,
  },
  {
    id: 5,
    title: "Piece by Piece",
    image: PieceByPiece,
    description: "A component-based AI image generation tool designed to support creativity and user control. The tool enables users to generate, arrange, and refine individual visual elements to create personalized compositions while maintaining control over their creative decisions.",
    category: "Component-based image generation",
    highlights: ["Generate individual visual elements.", "Arrange elements into personalized compositions.", "Refine components while retaining creative control."],
    papers: [],
    demoUrl: null,
  },
  {
    id: 2,
    title: "AI DoodleLab",
    image: DoodleLab,
    description: "A co-creative learning tool that helps young users collaborate with an AI agent to refine and customize drawings and use them in contexts like storytelling or animation, while learning about foundational AI concepts and ethics in creative work.",
    category: "Creative learning tool",
    highlights: ["Collaborate with an AI agent on drawings.", "Refine and customize creative work.", "Explore storytelling, animation, and AI ethics."],
    papers: [{"title": "AI DoodleLab \u00b7 C&C 2025", "doi": "10.1145/3698061.3734417"}],
    demoUrl: null,
  },
  {
    id: 4,
    title: "BiasViz",
    image: BiasViz,
    description: "A learning tool designed to provide interactive visualizations of LLM behavior for children, promoting AI literacy and fairness. The tool guides students through analyzing bias and documenting patterns in LLM-generated text.",
    category: "Critical AI literacy",
    highlights: ["Explore visualizations of LLM behavior.", "Analyze biases in generated text.", "Document patterns and reflect on fairness."],
    papers: [{"title": "BiasViz \u00b7 CHI 2026", "doi": "10.1145/3772318.3791555"}],
    demoUrl: null,
  },
  {
    id: 1,
    title: "DataBites",
    image: DataBites,
    description: "A museum exhibit designed to teach young learners about supervised machine learning. The exhibit features a hybrid physical-digital installation where children create a dataset of sandwiches and pizzas to train a machine learning model.",
    category: "Museum exhibit",
    highlights: ["Build a dataset of sandwiches and pizzas.", "Train a supervised machine learning model.", "Explore AI through a physical-digital installation."],
    papers: [
      { title: "DataBites · C&C 2024", doi: "10.1145/3635636.3664247" },
      { title: "Designing and Evaluating Museum Exhibit Prototypes · TEI 2026", doi: "10.1145/3731459.3773305" },
    ],
    demoUrl: null,
  },
  {
    id: 3,
    title: "AI Unplugged",
    image: unplugged,
    description: "A set of unplugged (computer-free) activities aimed at teaching young learners foundational AI concepts\u2014such as identifying AI, supervised machine learning, and knowledge representation\u2014through hands-on, interactive experiences.",
    category: "Hands-on AI literacy",
    highlights: ["Explore AI without computers.", "Learn about supervised machine learning.", "Use tangible activities to explore knowledge representation."],
    papers: [{"title": "Introducing AI Without Computers \u00b7 CHI 2025", "doi": "10.1145/3706599.3719876"}, {"title": "AI Unplugged \u00b7 TOCE 2026", "doi": "10.1145/3786761"}],
    demoUrl: null,
  }
];
