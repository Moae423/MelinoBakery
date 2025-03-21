const Footer = () => {
  return (
    <footer className="py-12 bg-Jet container mx-auto">
      <div className="flex flex-col mx-auto  max-w-xs lg:max-w-2xl md:max-w-lg">
        <h1 className="text-center text-3xl md:text-4xl font-stardom text-CosmicLatter">
          Melino Bakery
        </h1>
        <div className="flex items-center justify-center gap-3">
          <i className="ri-instagram-fill text-2xl text-CosmicLatter hover:scale-125 transition-all duration-300 cursor-pointer"></i>
          <i className="ri-twitter-x-line text-2xl text-CosmicLatter hover:scale-125 transition-all duration-300 cursor-pointer"></i>
          <i className="ri-youtube-line text-2xl text-CosmicLatter hover:scale-125 transition-all duration-300 cursor-pointer"></i>
          <i className="ri-facebook-line text-2xl text-CosmicLatter hover:scale-125 transition-all duration-300 cursor-pointer"></i>
        </div>
        <hr className="border-2 my-3" />
        <p className="text-center text-xs md:text-sm text-CosmicLatter font-mono">
          Copyright © 2025. Melino Bakery Bukittinggi. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
