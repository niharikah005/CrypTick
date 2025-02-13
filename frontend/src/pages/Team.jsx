import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Team = () => {
  const team = [
    {
      name: "5th Mentee",
      role: "God",
      links: {
        linkedin: "#",
        github: "#"
      },
      image: "https://i.pinimg.com/736x/17/f0/22/17f022aa9c15c3299ea1804226a8478c.jpg"
    },
    {
      name: "ChatGPT",
      role: "God pt2",
      links: {
        linkedin: "#",
        github: "#"
      },
      image: "https://www.edigitalagency.com.au/wp-content/uploads/ChatGPT-logo-PNG-medium-size-white-green-background.png"
    },
    {
      name: "Shreya Rajeev",
      role: "Blockchain",
      links: {
        linkedin: "https://www.linkedin.com/in/shreya-r-144922297/",
        github: "https://github.com/ShreyaR2"
      },
      image: "/shreya.jpg" // Update with actual image path
    },
    {
      name: "Anagha Puvathingal",
      role: "ML",
      links: {
        linkedin: "https://www.linkedin.com/in/anagha-puvathingal-4015a734a/",
        github: "https://github.com/anaghapuv"
      },
      image: "/anagha.jpg"
    },
    {
      name: "Carol Chopde",
      role: "ML and Backend",
      links: {
        linkedin: "https://www.linkedin.com/in/carol-chopde-56179434a/",
        github: "https://github.com/CarolChopde"
      },
      image: "/carol.jpg"
    },
    {
      name: "Niharika Hariharan",
      role: "Frontend and Backend",
      links: {
        linkedin: "https://www.linkedin.com/in/niharika-hariharan-0437b2336/",
        github: "https://github.com/niharikah005"
      },
      image: "/niharika.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-radial from-[#451795] to-[#12032b] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-white font-bold text-center mb-12">Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-8 transition-all hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Member Image */}
                <div className="w-32 h-32 rounded-full border-4 border-[#00ff88] overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-[#00ff88] text-sm font-medium mt-1">{member.role}</p>

                </div>
                
                {/* Social Links */}
                <div className="flex space-x-4 pt-4">
                  <a 
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00ff88] transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a 
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00ff88] transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;