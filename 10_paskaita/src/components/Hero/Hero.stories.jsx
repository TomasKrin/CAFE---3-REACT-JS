import Hero from "./Hero";
export default { title: "Components/Hero", component: Hero };
export const PrimaryHero = () => (
  <Hero type="primary" title="Primary Hero" subtitle="Primary Subtitle"></Hero>
);
export const SecondaryHero = () => (
  <Hero
    type="secondary"
    title="Secondary Hero"
    subtitle="Secondary Subtitle"
  ></Hero>
);
