const contentLeft = document.querySelector('.content-left');
const navLinks = document.querySelectorAll('nav ul li a');

const patronsHTML = `
        <h1 class="section-title">Patrons</h1>
        <div class="patrons">
            <img src="images/Patron_1.png" alt="Patron 1">
            <img src="images/Patron_2.png" alt="Patron 2">
        </div>
    `;

const sectionContent = {
    "Home": `
            <h1 class="section-title">Welcome to ComManTel 2025!</h1>
                <div class="welcome-text">
                    <p>The trio of Computing, Management, and Telecommunications plays a pivotal role in shaping the
                        contemporary technological landscape. Computing, with its ever‐evolving paradigms, fuels
                        innovation across diverse domains—not only through the development of advanced algorithms and
                        software but also by harnessing artificial intelligence and machine learning to solve complex
                        problems while addressing ethical concerns such as data privacy and algorithmic bias. Management
                        strategies provide the essential organizational framework needed for effective planning,
                        execution, and adaptability, making strategic and project management, as well as organizational
                        behavior, critical to navigating today's rapidly changing business environment. In
                        Telecommunications, next‑generation communication technologies and wireless connectivity are
                        paramount; these not only connect people globally but also form the backbone for emerging
                        applications like the Internet of Things (IoT) and digital transformation initiatives.
                        Overcoming these challenges demands interdisciplinary collaboration, continuous innovation, and
                        a commitment to responsible and sustainable technological advancement.</p>
                    <p>The 4th International Conference on Computing, Management and Telecommunications (ComManTel)
                        invites researchers, practitioners, and academicians to share cutting‐edge research and
                        innovative practices. ComManTel provides a global platform for exchanging insights, fostering
                        collaboration, and addressing both the opportunities and challenges in these dynamic domains.
                    </p>
                    <p>Prospective authors are invited to submit original technical papers—up to 6 pages of length,
                        using the EDAS link:</p>
                    <h2>Topics include (but are not limited to):</h2>
                    <ol>
                        <li><b>Computing Technologies</b>
                            <ul>
                                <li>Parallel and distributed computing</li>
                                <li>High-performance computing</li>
                                <li>Grid computing</li>
                                <li>Cloud computing</li>
                                <li>Green computing and sustainable IT</li>
                                <li>Ubiquitous computing and IoT devices</li>
                                <li>Peer-to-peer and cluster computing</li>
                                <li>Software and knowledge engineering</li>
                                <li>Artificial intelligence, machine learning, and generative AI</li>
                                <li>Knowledge discovery and data mining</li>
                                <li>Operating systems</li>
                                <li>Educational technology and e-learning applications</li>
                                <li>Mobile development applications</li>
                                <li>Computing in education and health</li>
                                <li>Pervasive and wearable computing</li>
                                <li>Web-based computing and services</li>
                                <li>Wireless and mobile computing</li>
                                <li>Multimedia computing applications and architectures</li>
                                <li>Cybersecurity and trust in computing</li>
                                <li>Leadership in technology infrastructure</li>
                            </ul>
                        </li>

                        <li><b>Information Technology Management</b>
                            <ul>
                                <li>Information management and data governance</li>
                                <li>Innovation and technology management</li>
                                <li>Knowledge management</li>
                                <li>Project and agile management</li>
                                <li>Policy management and digital transformation</li>
                                <li>Engineering management and applications</li>
                                <li>Theories and methodologies of enterprise management</li>
                                <li>Systems engineering and operational research</li>
                                <li>E-business and E-government</li>
                                <li>Business intelligence and web services</li>
                                <li>Logistics and supply chain management</li>
                                <li>Ethics in technology management</li>
                                <li>Resource and sustainability management</li>
                            </ul>
                        </li>

                        <li><b>Telecommunications Systems and Networks</b>
                            <ul>
                                <li>Cooperative communications</li>
                                <li>Cognitive radio and dynamic spectrum access</li>
                                <li>Modulation, coding, and diversity techniques</li>
                                <li>Signal detection and parameter estimation</li>
                                <li>Signal, image, and video processing</li>
                                <li>Decoding and encoding techniques</li>
                                <li>Multi-carrier systems, including OFDM</li>
                                <li>Multiple-input multiple-output (MIMO) techniques</li>
                                <li>Network security and cybersecurity in telecommunications</li>
                                <li>Ultra-wideband and spread spectrum communications</li>
                                <li>Cellular systems: 3G/4G/5G and beyond</li>
                                <li>LTE, WMAN, and emerging broadband wireless networks</li>
                                <li>Body-based wireless networks</li>
                                <li>Wireless networks for underwater and UAV communications</li>
                                <li>Delay tolerant wireless networks</li>
                                <li>Routing and multicasting protocols</li>
                                <li>Software-defined networking (SDN)</li>
                                <li>Internet of Things (IoT)</li>
                                <li>Wireless ad hoc, mesh, and sensor networks</li>
                                <li>Peer-to-peer wireless networks, mobile IP, and Wireless Internet</li>
                                <li>Performance analysis and QoS provisioning</li>
                                <li>Network planning, capacity analysis, and topology control</li>
                                <li>Pricing and billing modeling and solutions</li>
                                <li>Network measurement, validation, and verification schemes</li>
                                <li>Testbeds and deployment strategies</li>
                                <li>Wireless multimedia networks</li>
                                <li>Standardization of emerging technologies</li>
                                <li>Medium access techniques and protocols</li>
                                <li>Optical networks and Next Generation Internet</li>
                                <li>Security issues in telecommunications systems and networks</li>
                            </ul>
                        </li>

                        <li><b>Systems Engineering and Applications</b>
                            <ul>
                                <li>Devices, circuits, and systems</li>
                                <li>Control and robotics</li>
                                <li>Power electronics and energy systems</li>
                                <li>Signal and multimedia processing</li>
                                <li>Biomedical and biotechnology engineering systems</li>
                                <li>Computers, software, and applications</li>
                                <li>Advances in aerospace technology</li>
                                <li>Advanced manufacturing and smart production</li>
                                <li>Dynamics, vibration, and control systems</li>
                                <li>Fluids engineering systems and technologies</li>
                                <li>Heat transfer and thermal engineering</li>
                                <li>Mechanics of solids, structures, and fluids</li>
                                <li>Micro- and nano-systems engineering and packaging</li>
                                <li>Digital teaching tools and game-based learning</li>
                                <li>Economic growth and sustainability in technology</li>
                                <li>Technological change and environmental impact</li>
                                <li>Environmental and social impact assessment</li>
                                <li>Air and water pollution management and control</li>
                                <li>Advanced chemical engineering thermodynamics</li>
                                <li>Enzyme and fermentation engineering</li>
                                <li>Ionic liquids and nanomaterial synthesis</li>
                                <li>Bridge engineering and cartography</li>
                                <li>Computational mechanics and construction technology</li>
                                <li>Monitoring and control of structures</li>
                                <li>Safety management in engineering systems</li>
                            </ul>
                        </li>
                    </ol>
                </div>`,
    "About": `
            <h1 class="section-title">About ComManTel 2025</h1>
            <div class="welcome-text">
                <p><strong>Welcome to ComManTel 2025!</strong> The trio of Computing, Management, and Telecommunications plays a pivotal role in shaping the contemporary technological landscape. Computing, with its ever‐evolving paradigms, fuels innovation across diverse domains—not only through the development of advanced algorithms and software but also by harnessing artificial intelligence and machine learning to solve complex problems while addressing ethical concerns such as data privacy and algorithmic bias. Management strategies provide the essential organizational framework needed for effective planning, execution, and adaptability, making strategic and project management, as well as organizational behavior, critical to navigating today's rapidly changing business environment. In Telecommunications, next‑generation communication technologies and wireless connectivity are paramount; these not only connect people globally but also form the backbone for emerging applications like the Internet of Things (IoT) and digital transformation initiatives. Overcoming these challenges demands interdisciplinary collaboration, continuous innovation, and a commitment to responsible and sustainable technological advancement.</p>
                <p>The International Conference on Computing, Management, and Telecommunications (ComManTel 2025) continues its tradition as a premier international forum for researchers, practitioners, and industry leaders. It provides a dynamic platform for exchanging cutting‐edge research and innovative practices that lie at the intersection of digital technology, organizational leadership, and modern communication systems.</p>
                <p>In an era defined by rapid digital transformation and global connectivity, ComManTel 2025 addresses both emerging opportunities and critical challenges. This year, we place a special emphasis on integrating ethical AI, 6G communications, advanced cybersecurity, and sustainable management practices to foster resilient and forward‑thinking solutions.</p>
                <p>We invite submissions of <strong>original technical papers</strong> (up to 6 pages) covering a diverse array of topics that mirror the core themes of ComManTel 2025. We welcome contributions in <strong>Computing Technologies</strong>—including advanced AI, machine learning, cloud and green computing, and ubiquitous computing; in <strong>Information Technology Management</strong>—with a focus on digital transformation, agile project management, and sustainable enterprise practices; in <strong>Telecommunications Systems and Networks</strong>—such as next‑generation wireless connectivity, IoT, cybersecurity, and network optimization; and in <strong>Systems Engineering and Applications</strong>—exploring innovative approaches in robotics, smart manufacturing, biomedical engineering, and sustainable infrastructure.</p>    
                <p>Join us at <strong>ComManTel 2025</strong>—where academia, industry, and policymakers converge to drive innovation and create sustainable solutions for tomorrow's interconnected world.</p>    
            </div>`,
    "Author": `
            <h1 class="section-title">Author Information</h1>
            <div class="welcome-text">
                <p>Prospective authors are invited to submit original technical papers up to 6 pages in length.</p>
                <p>Submissions must be done via the EDAS platform.</p>
            </div>`
};

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const sectionName = this.textContent.trim();

        if (sectionContent[sectionName]) {
            contentLeft.innerHTML = sectionContent[sectionName] + patronsHTML;
        } else {
            contentLeft.innerHTML = `<h1 class="section-title">${sectionName}</h1><p>Content for ${sectionName} is coming soon...</p>` + patronsHTML;
        }
    });
});