export interface AbilityData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Ability[];
}

interface Ability {
  name: string;
  url: string;
}
