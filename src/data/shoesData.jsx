import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import shoe3 from "../assets/shoe3.png";
import shoe4 from "../assets/shoe4.png";
import shoe5 from "../assets/shoe5.png";
import shoe6 from "../assets/shoe6.png";

const shoesData = [
  { 
    id: 1, 
    name: "Nike Air Max", 
    price: "120", 
    img: shoe1, 
    colors: ["#7DE29C", "#837DF9", "#64E7E7"],
    badges: ["new"],
    sizes: [7, 8, 9, 10, 11],
    description: "A classic Nike sneaker with premium cushioning and superior comfort for all-day wear,designed for ultimate performance."
  },
  { 
    id: 2, 
    name: "Adidas Ultraboost", 
    price: "150", 
    img: shoe2, 
    colors: ["#FF5733", "#FFD700", "#1E90FF"],
    badges: ["hot"],
    sizes: [7, 8, 9, 10, 11],
    description: "Experience energy return like never before with Adidas Ultraboost, designed for ultimate performance,perfect for everyday style.An icon in sneaker history."
  },
  { 
    id: 3, 
    name: "Puma RS-X", 
    price: "130", 
    img: shoe3, 
    colors: ["#7B68EE", "#DC143C", "#32CD32"],
    badges: ["new", "hot"],
    sizes: [7, 8, 9, 10, 11],
    description: "A futuristic sneaker with bold design and advanced comfort, perfect for everyday style."
  },
  { 
    id: 4, 
    name: "Reebok Classic", 
    price: "90", 
    img: shoe4, 
    colors: ["#FF4500", "#00FA9A", "#8A2BE2"],
    badges: [],
    sizes: [7, 8, 9, 10, 11],
    description: "Timeless style meets all-day comfort with Reebok Classic, an icon in sneaker history."
  },
  { 
    id: 5, 
    name: "New Balance 574", 
    price: "110", 
    img: shoe5, 
    colors: ["#6495ED", "#FF1493", "#20B2AA"],
    badges: ["new"],
    sizes: [7, 8, 9, 10, 11],
    description: "The perfect blend of modern performance and retro style, offering durability and support."
  },
  { 
    id: 6, 
    name: "Jordan Retro", 
    price: "200", 
    img: shoe6, 
    colors: ["#8B0000", "#FFA500", "#4682B4"],
    badges: ["hot"],
    sizes: [7, 8, 9, 10, 11],
    description: "A legendary sneaker with a classic silhouette, designed for fans of Jordan's legacy."
  }
];

export default shoesData;
