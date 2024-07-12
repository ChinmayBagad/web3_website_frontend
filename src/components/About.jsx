import AboutCard from "./AboutCard";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

const About = () => {
  return (
    <div className="w-full bg-black top-2">
      <div className="max-w-[1240px] mx-auto px-4 py-16 bg-black text-white text-center black-tag">
        <div>
          <h1 className="py-4">A Growing Protocol EcoSystem</h1>
          <p className="py-4 text-xl">
            The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.
          </p>

          {/* Card Container */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card */}

            <AboutCard
              head="Reliable, tamper-proof network"
              des="Use decentralization, trusted nodes, premium data, and cryptographic
          proofs to connect highly accurate and available data/APIs to any smart
          contract."
              icon={<SiHiveBlockchain size={40} />}
            />
            <AboutCard
              head="Proven, ready-made solutions"
              des="Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications."
              icon={<SiStrapi size={40} />}
            />
            <AboutCard
              head="Seamless connection to any API"
              des="Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain."
              icon={<SiFsecure size={40} />}
            />
            <AboutCard
              head="Secure off-chain computation"
              des="Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers."
              icon={<VscServerProcess size={40} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
