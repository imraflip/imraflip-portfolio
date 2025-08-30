import dynamic from 'next/dynamic';
import NavBar from '../components/NavBar';
import SectionBox from '../components/SectionBox';

// Lazy-load PortfolioGrid for performance
const DynamicPortfolioGrid = dynamic(() => import('../components/PortfolioGrid'), { ssr: false });

export default function Home() {
  return (
    <div>
      <NavBar />
      <SectionBox id="home" title="Home">
        <div className="bg-black border border-blue-700 p-4 font-mono text-white text-base leading-relaxed space-y-3">
          <p>
            <span className="text-blue-500">┌──(</span>
            <span className="text-red-500">root㉿imraflip.com</span>
            <span className="text-blue-500">)-[</span>
            <span className="text-white">~</span>
            <span className="text-blue-500">]</span>
          </p>
          <p>
            <span className="text-blue-500">└─</span>
            <span className="text-red-500">$</span> echo "Welcome to Rafli's Terminal"
          </p>

          <h1 className="text-xl font-bold mt-4 text-white">Rafli Permana</h1>
          <p className="text-base text-gray-300">Aspiring IT Support & Help Desk Engineer | Future SOC Analyst</p>

          <p className="mt-4 text-white">
            I help people solve technical issues and keep systems running smoothly.
          </p>
          <p className="mt-4">
            <a
              href="cv_rafli.pdf"
              download
              className="inline-block border border-blue-700 text-white px-4 py-1 rounded hover:bg-black hover:text-white hover:border-red-400 text-xs font-mono transition"
            >
              Download CV
            </a>
          </p>

        </div>
      </SectionBox>


      <SectionBox id="about" title="About">
        <div className="bg-black border border-blue-700 p-4 font-mono text-white text-base leading-relaxed space-y-3">
          <p>
            <span className="text-blue-500">┌──(</span>
            <span className="text-red-500">root㉿imraflip.com</span>
            <span className="text-blue-500">)-[</span>
            <span className="text-white">~</span>
            <span className="text-blue-500">]</span>
          </p>
          <p>
            <span className="text-blue-500">└─</span>
            <span className="text-red-500">$</span> cat about.txt
          </p>

          <p>I'm Rafli, a Computer Science student with a passion for technology and problem-solving. While I have hands-on experience in cybersecurity and penetration testing, I’m now focusing on IT support as my first career step. I enjoy troubleshooting, learning new tools, and helping others solve technical problems.</p>

          <p>
            <span className="text-blue-500">┌──(</span>
            <span className="text-red-500">root㉿imraflip.com</span>
            <span className="text-blue-500">)-[</span>
            <span className="text-white">~</span>
            <span className="text-blue-500">]</span>
          </p>
          <p>
            <span className="text-blue-500">└─</span>
            <span className="text-red-500">$</span> echo "Always Learning..."
          </p>
        </div>
      </SectionBox>

      <SectionBox id="skills" title="Skills">
        <div className="bg-black border border-blue-700 p-4 font-mono text-white text-base leading-relaxed space-y-3">
          <p>
            <span className="text-blue-500">┌──(</span>
            <span className="text-red-500">root㉿imraflip.com</span>
            <span className="text-blue-500">)-[</span>
            <span className="text-white">~/Skills</span>
            <span className="text-blue-500">]</span>
          </p>
          <p>
            <span className="text-blue-500">└─</span>
            <span className="text-red-500">$</span> cat it-support.txt
          </p>
          <ul className="list-disc list-inside ml-4">
            <li><span className="text-red-500">Operating Systems</span>: Windows (installation, troubleshooting, Active Directory administration), macOS, Linux (basic CLI)</li>
            <li><span className="text-red-500">Networking</span>: TCP/IP, DNS, DHCP, VPN, firewalls, basic Wi-Fi troubleshooting</li>
            <li><span className="text-red-500">Hardware & Peripherals</span>: PC/laptop assembly, troubleshooting, printers, and peripheral setup</li>
            <li><span className="text-red-500">IT Tools</span>: Remote desktop (TeamViewer, AnyDesk), ticketing systems, asset management</li>
            <li><span className="text-red-500">Support & Communication</span>: Troubleshooting, knowledge base documentation, user support</li>
          </ul>
        </div>
      </SectionBox>

      <SectionBox id="projects" title="Projects">
        <div className="bg-black border border-blue-700 p-4 font-mono text-white text-base leading-relaxed space-y-3">

          {/* Terminal CD */}
          <p>
            <span className="text-blue-500">┌──(</span>
            <span className="text-red-500">root㉿imraflip.com</span>
            <span className="text-blue-500">)-[</span>
            <span className="text-white">~</span>
            <span className="text-blue-500">]</span>
          </p>
          <p>
            <span className="text-blue-500">└─</span>
            <span className="text-red-500">$</span> cd Projects/
          </p>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


            {/* Project 1 */}
            <div className="border border-blue-700 p-4 space-y-3">
              <p>
                <span className="text-blue-500">┌──(</span>
                <span className="text-red-500">root㉿imraflip.com</span>
                <span className="text-blue-500">)-[</span>
                <span className="text-white">~/Projects</span>
                <span className="text-blue-500">]</span>
              </p>
              <p>
                <span className="text-blue-500">└─</span>
                <span className="text-red-500">$</span> cat project-1.txt
              </p>
              <span className="text-red-500">Windows Active Directory Lab</span>
              <p className="text-white">
                Configured a Windows Server Domain Controller, managed users and groups with Group Policy, automated tasks using PowerShell, and joined client machines to validate domain-wide management.
              </p>
            </div>

            {/* Project 2 */}
            <div className="border border-blue-700 p-4 space-y-3">
              <p>
                <span className="text-blue-500">┌──(</span>
                <span className="text-red-500">root㉿imraflip.com</span>
                <span className="text-blue-500">)-[</span>
                <span className="text-white">~/Projects</span>
                <span className="text-blue-500">]</span>
              </p>
              <p>
                <span className="text-blue-500">└─</span>
                <span className="text-red-500">$</span> cat project-2.txt
              </p>
              <span className="text-red-500">EternalBlue Demonstration (Windows 7 + Kali Linux on VirtualBox)</span>
              <p className="text-white">
                Set up a virtual lab to simulate and analyze the EternalBlue exploit on Windows 7 using Kali Linux. Demonstrated patching and securing vulnerable systems.
              </p>
              <p>
                <a
                  href="https://imraflip.medium.com/exploiting-eternalblue-in-a-lab-environment-da1ce2ef6651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-300 text-xs"
                >
                  ➜ View on Medium
                </a>
              </p>
            </div>

            {/* Project 3 */}
            <div className="border border-blue-700 p-4 space-y-3">
              <p>
                <span className="text-blue-500">┌──(</span>
                <span className="text-red-500">root㉿imraflip.com</span>
                <span className="text-blue-500">)-[</span>
                <span className="text-white">~/Projects</span>
                <span className="text-blue-500">]</span>
              </p>
              <p>
                <span className="text-blue-500">└─</span>
                <span className="text-red-500">$</span> cat project-3.txt
              </p>
              <span className="text-red-500">Practical Help Desk Ticket Interrupts</span>
              <p className="text-white">
                Completed real-world help desk scenarios, including resolving ticket interrupts such as password resets, printer issues, and user account lockouts in a simulated enterprise environment.              </p>
            </div>

          </div>
        </div>
      </SectionBox>

      <SectionBox id="certifications" title="Certifications and Courses">
        <div className="bg-black border border-blue-700 p-4 font-mono text-white text-base leading-relaxed space-y-3">
          <p>
            <span className="text-blue-500">┌──(</span>
            <span className="text-red-500">root㉿imraflip.com</span>
            <span className="text-blue-500">)-[</span>
            <span className="text-white">~/Certifications</span>
            <span className="text-blue-500">]</span>
          </p>
          <p>
            <span className="text-blue-500">└─</span>
            <span className="text-red-500">$</span> cat certs-and-courses.txt
          </p>
          <span className='text-red-500'>Certifications and Courses</span>
          <ul className="list-disc list-inside pl-4 mt-2 space-y-3">
            <li><a
              href="https://www.coursera.org/account/accomplishments/professional-cert/certificate/C2XNVN0WIK3X"
              target="_blank"
              className="underline text-blue-400 hover:text-blue-300"
            >
              Google IT Support Professional Certificate
            </a></li>
            <li><a
              href="certificate-of-completion-for-practical-help-desk.pdf"
              target="_blank"
              className="underline text-blue-400 hover:text-blue-300"
            >
              TCM Security Practical Help Desk
            </a></li>
            <li><a
              href="https://cert.efset.org/b2DzJ2"
              target="_blank"
              className="underline text-blue-400 hover:text-blue-300"
            >
              EF SET English Certificate (C1 Advanced)
            </a></li>
          </ul>
        </div>
      </SectionBox>

      {/* <SectionBox id="contact" title="Contact">
        <div className="bg-black border border-blue-700 p-4 font-mono text-white text-base leading-relaxed space-y-4">

          {/* Prompt for curl }
          <p>
            <span className="text-blue-500">┌──(</span>
            <span className="text-red-500">root㉿imraflip.com</span>
            <span className="text-blue-500">)-[~]</span>
          </p>
          <p>
            <span className="text-blue-500">└─</span>
            <span className="text-red-500">$</span> curl http://127.0.0.1/contact-form
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Contact Form }
            <div className="border border-blue-700 p-4 space-y-4">
              <form>
                <div>
                  <label className="block text-base mb-1">Name:</label>
                  <input
                    type="text"
                    className="w-full bg-black border border-blue-700 p-2 rounded text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-base mb-1">Email:</label>
                  <input
                    type="email"
                    className="w-full bg-black border border-blue-700 p-2 rounded text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-base mb-1">Message:</label>
                  <textarea
                    className="w-full bg-black border border-blue-700 p-2 rounded text-white"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <p className="mt-4">
                  <button type='submit'
                    className="inline-block border border-blue-700 text-blue-400 px-4 py-1 rounded hover:bg-blue-700 hover:text-white text-xs font-mono transition"
                  >
                    Submit
                  </button>
                </p>
              </form>
            </div>

            {/* Contact Links - ls contacts/ }
            <div className="border border-blue-700 p-4 space-y-2">
              <p>
                <span className="text-blue-500">┌──(</span>
                <span className="text-red-500">root㉿imraflip.com</span>
                <span className="text-blue-500">)-[~]</span>
              </p>
              <p>
                <span className="text-blue-500">└─</span>
                <span className="text-red-500">$</span> ls contacts/
              </p>

              <ul className="pl-4 space-y-1">
                <li className="text-blue-400">/Email → <a href="mailto:quake0x@example.com" className="underline">quake0x@example.com</a></li>
                <li className="text-blue-400">/LinkedIn → <a href="https://linkedin.com/in/quake0x" className="underline">linkedin.com/in/quake0x</a></li>
                <li className="text-blue-400">/Twitter → <a href="https://twitter.com/quake0x" className="underline">@quake0x</a></li>
                <li className="text-blue-400">/TryHackMe → <a href="https://tryhackme.com/p/Quake0x" className="underline">tryhackme.com/p/Quake0x</a></li>
              </ul>
            </div>
          </div>
        </div>
      </SectionBox> */}

      <footer className="bg-black border-t border-blue-700 font-mono text-white text-base text-center py-6 mt-12">
        <p>
          © {new Date().getFullYear()} <span className="text-blue-500">Rafli</span>. All rights reserved.
        </p>
      </footer>

    </div>
  );
}