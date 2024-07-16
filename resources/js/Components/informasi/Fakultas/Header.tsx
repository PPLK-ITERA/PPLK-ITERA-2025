const Header = ({ fakultas }) => {
  const dataFakultas = {
      "fakultas-sains": {
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam expedita odit corporis, ipsam ut praesentium, in nostrum laudantium reprehenderit labore repudiandae dignissimos sequi dolorum adipisci animi dolor dicta repellendus.",
      },
      "fakultas-teknologi-industri": {
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam expedita odit corporis, ipsam ut praesentium, in nostrum laudantium reprehenderit labore repudiandae dignissimos sequi dolorum adipisci animi dolor dicta repellendus.",
      },
      "Teknologi-Infrastruktur-dan-Kewilayahan": {
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam expedita odit corporis, ipsam ut praesentium, in nostrum laudantium reprehenderit labore repudiandae dignissimos sequi dolorum adipisci animi dolor dicta repellendus.",
      },
  };

  const selectedFakultas = dataFakultas[fakultas] || {};

  return (
      <div className="bg-white/20 backdrop-blur shadow-2xl space-y-5 max-w-xs md:max-w-6xl mx-auto rounded-lg p-6">
          <p className="text-white font-bold text-6xl">Fakultas</p>
          <p className="text-white">
              {selectedFakultas.description}
          </p>
          <p className="text-white">
              Berikut adalah fakultas-fakultas yang terdapat di ITERA:
          </p>
      </div>
  );
};

export default Header;