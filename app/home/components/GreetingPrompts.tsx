"use client";

import { useEffect, useState } from "react";
import { getRandomGreeting } from "../utils/greetingPrompts";

export default function GreetingPrompts() {
  const [greeting, setGreeting] = useState<string>();
  useEffect(() => {
    const fetchGreeting = () => setGreeting(getRandomGreeting());

    fetchGreeting();
  }, []);

  return <div>{greeting}</div>;
}
