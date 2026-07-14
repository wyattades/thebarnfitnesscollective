/**
 * TEAM — the coaches shown in the "Your coaches" section.
 * `photo` is a filename in src/assets/images/. `creds` are the little tags
 * overlaid on the photo. `initial` is the large faint letter behind the photo.
 */
export interface Coach {
  name: string;
  role: string;
  photo: string; // filename in src/assets/images/
  initial: string;
  creds: string[];
  /** Full bio paragraphs, shown on the Our Team page. */
  bio?: string[];
  /** Optional email shown as a contact link under the bio. */
  email?: string;
}

export const team: Coach[] = [
  {
    name: "Zoe Anderson",
    role: "Co-Owner · Coach",
    photo: "team-zoe.png",
    initial: "Z",
    creds: ["CF-L2", "Pn1", "Women's Hormones"],
    email: "zoe@thebarnfitnesscollective.com",
    bio: [
      "Hello! I'm Zoe — new mama, long-time coach, and big believer in the power of movement to make your life better. I started this gym with Urban to give people a space not just to workout, but to have the best hour of their day.",
      "For over 10 years, I've been helping people feel stronger, more confident, and more connected to their bodies. I want to know your goals, your story, and how we can make movement work for your life.",
      "I specialize in coaching women through all phases — whether you're navigating your cycle, dealing with perimenopause, or finding your strength post-baby (like me!). My mission is to make sure you feel seen, supported, and empowered every step of the way.",
      "Background: Psychology degree from UC Davis, CrossFit L1 & L2, Precision Nutrition, Women's Hormone Health.",
    ],
  },
  {
    name: "Urban Anderson",
    role: "Co-Owner · Coach",
    photo: "team-urban.jpg",
    initial: "U",
    creds: ["Coach", "Firefighter/PM"],
    bio: [
      "Co-founder, coach, full-time firefighter paramedic, part-time helicopter rescue paramedic, avid fitnesser, surfer, climber, and lover of trying hard in all avenues of life.",
      "Urban loves nothing more than some good old-fashioned type 2 sufferfest kind of fun. His calves may be small but he makes up for them with boundless positive energy — and he can't help but share his stoke in helping those around him create a life filled with passion, purpose, and intent.",
    ],
  },
  {
    name: "Chris Esquivel",
    role: "Head Coach",
    photo: "team-chris.jpg",
    initial: "C",
    creds: ["CF-L2", "Head Coach"],
    email: "chris@thebarnfitnesscollective.com",
    bio: [
      "Chris' journey through health and fitness has been a long and winding road. As a high-level athlete with a long and complicated injury history, Chris knows first hand what it feels like to get thrown out of a routine — and how we respond in those moments defines us far more than any setback.",
      "Armed with an ACE trainer certification (2010), CrossFit L1 (2016), ADAPT-Certified Functional Health Coach (2022), and CrossFit L2 (2023), Chris' main focus is on holistic health and practical tools for people to thrive in a complex modern world. Consistency and strong foundations are the key.",
      "When not in the gym you'll find Chris on the golf course, deep into a crossword, making food with friends, or tearing up the dance floor with his wife Sandra. Chris is available for remote health coaching, nutritional guidance, and bespoke personal training programs.",
    ],
  },
  {
    name: "Briana O'Connor",
    role: "Coach · Holistic Nutrition",
    photo: "team-briana.jpeg",
    initial: "B",
    creds: ["NASM CPT", "Functional Mvmt"],
    bio: [
      "A NASM-Certified Personal Trainer and Sports Performance Specialist, Briana works as a Functional Movement & Holistic Nutrition Coach. Her passion is to encourage an intuitive approach to health and fitness.",
      "She believes that by building total-body awareness through core & joint stabilization, developed mind-muscle connection, matching breath to movement, and mindful nutrition, we strengthen our neural pathways and create a healthy lifestyle from the inside out.",
      "Through her programming, Briana strives to empower each of her clients to grow a deeper connection with themselves through the nourishment of food, mindfulness and movement — so we can all experience a life of doing the things we love with the ones we love.",
    ],
  },
  {
    name: "Jon Wheeldin",
    role: "Fitness Coach",
    photo: "team-jon.jpg",
    initial: "J",
    creds: ["Psych BG"],
    bio: [
      "Jon Wheeldin is a dedicated fitness enthusiast who finds joy in exploring the world of movement and sharing that joy with others. His curiosity about the human body drives him to learn and understand how to optimize performance while promoting well-being.",
      "Jon is especially passionate about preventative maintenance and living a pain-free life. Whether you are just starting your fitness journey or aiming to take it to the next level, Jon is excited to help find movements that suit your goals.",
      "With a background in psychology, he believes in the importance of the mind-body connection and values exercising in community as an integrated means of fostering physical, mental, and spiritual wellness. As a proud plant and cat dad, Jon enjoys nurturing his bonsai collection and spending time with his feline friend, Zora.",
    ],
  },
];
