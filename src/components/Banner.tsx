function Banner() {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,rgb(254,236,255,.7),rgb(254,202,255,.7),rgb(254,181,255,.7),rgb(255,219,231,.7),rgb(255,244,214,.7),rgb(243,252,215,.7),rgb(210,245,238,.7),rgb(195,239,255,.7),rgb(251,239,255,.7))]">
      <div className="container">
        <p className="font-medium">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface -{" "}
          </span>{" "}
          <a href="#" className="underline underline-offset-4">
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
}

export default Banner;
