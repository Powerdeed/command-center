import GREETINGS from "../constants/GREETINGS.json";

export function getRandomGreeting(): string {
  const list: string[] = GREETINGS["GREETINGS"];

  if (!list || list.length === 0) {
    return "How can I help?";
  }

  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}
