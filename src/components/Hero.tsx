import hero from '../assets/hero.jpg';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 my-10 mx-auto">
      <h1 className="">Join A New Generation Of Logistics!</h1>
      <h3 className="text-center">
        Redefining how you ship, track, collect, deliver all through innovative
        tech-solutions and efficient operations.
      </h3>
      <img
        src={hero}
        alt="hero_img"
        className="object-cover w-full max-w-4xl rounded-xl mt-10"
      />
    </div>
  );
}
