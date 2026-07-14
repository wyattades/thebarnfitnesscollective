/**
 * FAQ CONTENT — grouped by category. Answers support simple [text](href) links.
 * Add/edit/remove questions here; the FAQ page renders whatever is in this list.
 */
export interface FaqItem { q: string; a: string; }
export interface FaqCategory { category: string; items: FaqItem[]; }

export const faq: FaqCategory[] = [
  {
    "category": "Getting Started",
    "items": [
      {
        "q": "Do I need any experience to join?",
        "a": "Our classes are created for all levels, however we recommend two onboarding sessions with a personal trainer. If you are brand new to strength training, please [contact us](/contact) to schedule that."
      },
      {
        "q": "What should I bring to my first class?",
        "a": "Workout clothes, a water bottle, and an open mind!"
      },
      {
        "q": "How do I book my first class?",
        "a": "Download our mobile app. Booking through there is always easiest. Available on the [App Store](https://apps.apple.com/us/app/barn-fitness-co/id6759301744) and [Google Play](https://play.google.com/store/apps/details?id=ie.zappy.fennec.thebarnfitnesscollec)."
      }
    ]
  },
  {
    "category": "Classes & Programming",
    "items": [
      {
        "q": "How long are classes?",
        "a": "One glorious hour."
      },
      {
        "q": "Can I attend any class on any day?",
        "a": "Yes."
      },
      {
        "q": "What is the Legends Program?",
        "a": "It's our strength training program for those 55 and older. Learn more on our [Legends Program page](/legends-program)."
      }
    ]
  },
  {
    "category": "Membership & Pricing",
    "items": [
      {
        "q": "Is there a contract or commitment?",
        "a": "No, you only need to commit to one month at a time."
      },
      {
        "q": "Do you offer gift cards?",
        "a": "Yes. [Contact us](/contact) if you're curious."
      },
      {
        "q": "Can I freeze or pause my membership?",
        "a": "We can pause your membership once a year if it's two weeks or longer."
      }
    ]
  },
  {
    "category": "The Gym",
    "items": [
      {
        "q": "Do you have a shower?",
        "a": "Yes."
      },
      {
        "q": "What equipment do you have?",
        "a": "Free weights such as dumbbells and kettlebells, barbells, and cardio machines."
      },
      {
        "q": "Is parking available?",
        "a": "Yes."
      },
      {
        "q": "Do you offer massage therapy?",
        "a": "Yes. Our in-house sports masseuse is named J, and you can book through the app. $25 every 20 minutes that you book."
      }
    ]
  },
  {
    "category": "Coaching & Community",
    "items": [
      {
        "q": "Do you offer personal training?",
        "a": "Yes. Please [contact us](/contact) to schedule and find the best fit."
      },
      {
        "q": "Do you offer remote coaching or a nutrition plan?",
        "a": "Yes. Please [contact us](/contact) for more information."
      }
    ]
  }
];
