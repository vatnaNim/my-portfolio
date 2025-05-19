import { ProfileCv } from "../assets/images";

const CvFilm = () => {
    return (
        <div>
            <h2
                className="text-3xl font-bold text-sky-800 mb-8 text-center uppercase">
                Curriculum vitae
            </h2>
            <nav 
                className="flex bg-sky-600 px-6 py-4 text-white gap-x-6 rounded-lg shadow-md">
                <img 
                    src={ProfileCv}
                    alt="profile"
                    className="w-44 h-44 shadow-md object-fill rounded-sm"
                />
                <div>
                    <span
                        className="space-y-2">
                        <h1
                            className="text-4xl font-bold ">
                            Nim Vatna
                        </h1>
                        <h2
                            className="text-lg font-semibold">
                            Front-end Web Developer
                        </h2>
                    </span>
                    <div
                        className="space-y-2 mt-3 text-lg tracking-normal leading-tight">
                        <p>
                            A reliable and professional individual with a strong sense of responsibility and commitment to completing tasks on time. 
                        </p>
                        <p>
                            Known for being friendly, trustworthy, and ethical, with a proven ability to work well in teams and adhere strictly to workplace policies and regulations. A fast learner who quickly adapts to new environments and job requirements.
                        </p>
                    </div>
                </div>
            </nav>
            <div>
                <article
                    className="tracking-normal capitalize space-y-3 pb-3">
                    <h1
                        className="text-xl font-bold text-sky-800 mb-2 underline underline-offset-4 capitalize">
                        personal imformation
                    </h1>
                    <ul 
                        className="text-lg space-y-1 font-normal">
                        <li 
                            className="flex">
                            <span className="w-40 font-semibold">Name:</span>
                            <span>Nim Vatna</span>
                        </li>
                        <li className="flex">
                            <span className="w-40 font-semibold">Date of Birth:</span>
                            <span>
                                1<sup>st</sup> December 2002
                            </span>
                        </li>
                        <li className="flex">
                            <span className="w-40 font-semibold">Marital Status:</span>
                            <span>Single</span>
                        </li>
                        <li className="flex">
                            <span className="w-40 font-semibold">Address:</span>
                            <span>#17B St. 59BT Sangkat Boeung Tompun, Khan Meanchey</span>
                        </li>
                        <li className="flex">
                            <span className="w-40 font-semibold">Tel:</span>
                            <span>095 872 770</span>
                        </li>
                        <li className="flex">
                            <span className="w-40 font-semibold">Email:</span>
                            <span className="normal-case text-blue-800 font-semibold underline underline-offset-4">vatnagz@gmail.com</span>
                        </li>
                    </ul>
                </article>
                <article
                    className="tracking-normal capitalize space-y-3 pb-3">
                    <h1
                        className="text-xl font-bold text-sky-800 mb-2 underline underline-offset-4 capitalize">
                        Hard Skills
                    </h1>
                    <ul
                        className="text-lg font-normal list-disc marker:text-sky-600 list-inside pl-6">
                        <li>HTML5, CSS3, JavaScript (ES6+)</li>
                        <li>Frameworks: Nuxt.js, Vue.js, React</li>
                        <li>CSS Frameworks: Tailwind CSS, Bootstrap </li>
                        <li>TypeScript</li>
                        <li>Version control: Git, Git Hub</li>
                        <li>Responsive, adaptive, cross browser markup</li>
                        <li>Experience with REST APIs and JSON</li>
                        <li>Experience with Nuxt UI and exploring MUI core</li>
                        <li>Basic understanding of UI/UX principles</li>
                        <li>Package Manager: npm</li>
                        <li>Office Tools: Microsoft Word, Excel, PowerPoint</li>
                    </ul>
                </article>
                <article
                    className="tracking-normal capitalize space-y-3">
                    <h1
                        className="text-xl font-bold text-sky-800 underline underline-offset-4 capitalize">
                        Soft Skills
                    </h1>
                    <ul
                        className="text-lg font-normal list-disc marker:text-sky-600 list-inside pl-6 py-3">
                        <li>Interpersonal</li>
                        <li>Problem-solving mindset</li>
                        <li>Creative thinking </li>
                        <li>Attention to detail in UI design and responsive </li>
                        <li>Open to feedback and continuous improvement</li>
                        <li>Accountability and ownership of tasks from start to finish</li>
                    </ul>
                </article>
                <article
                    className="tracking-normal capitalize space-y-3">
                    <h1
                        className="text-xl font-bold text-sky-800 mb-2 underline underline-offset-4 capitalize mt-2">
                        Languages
                    </h1>
                    <ul
                        className="text-lg font-normal pl-6 py-3">
                        <li
                            className="flex">
                            <span className="w-20 font-semibold">Khmer:</span>
                            <span>Mother tongue</span>
                        </li>
                        <li
                            className="flex">
                            <span className="w-20 font-semibold">English:</span>
                            <span>Good</span>
                        </li>
                    </ul>
                </article>
                <article
                    className="tracking-normal capitalize space-y-3">
                    <h1
                        className="text-xl font-bold text-sky-800 mb-2 underline underline-offset-4 capitalize">
                        education
                    </h1>
                    <ul
                        className="font-normal pl-6 text-lg py-3">
                        <li
                            className="flex">
                            <span className="w-32 font-semibold text-sky-500">2022 - 2025</span>
                            <span>
                                <p>Bachelor Degree of Computer Science</p>
                                <p className="text-sky-500">Royal University of Phnom Penh</p>
                            </span>
                        </li>
                        <li
                            className="flex">
                            <span className="w-32 font-semibold text-sky-500">2019 - 2020</span>
                            <span>
                                <p className="normal-case">Bac ll</p>
                                <p className="text-sky-500">Toul Tumpong High School, Phnom Penh</p>
                            </span>
                        </li>
                        <li
                            className="flex">
                            <span className="w-32 font-semibold text-sky-500">2017 - 2020</span>
                            <span>
                                <p>General English (ESL 12)</p>
                                <p className="text-sky-500">Beltei International School, Phnom Penh</p>
                            </span>
                        </li>
                    </ul>
                </article>
                <article
                    className="tracking-normal capitalize space-y-3">
                    <h1
                        className="text-xl font-bold text-sky-800 mb-2 underline underline-offset-4 capitalize">
                        work experience
                    </h1>
                    <div 
                        className="space-y-1">
                        <h3
                            className="text-xl font-semibold text-sky-500 tracking-normal">
                            Front-end Web Developer
                        </h3>
                        <h2
                            className="text-2xl font-bold">
                            G-Tech Cambodia
                        </h2>
                        <h3
                            className="text-lg font-semibold text-sky-500 tracking-normal">
                            July 2024 - March 2025
                        </h3>
                    </div>
                    <ul
                        className="text-lg font-normal list-disc marker:text-sky-600 list-outside pl-12 tracking-normal ">
                        <li>Completed a 3month internship and was promoted by the Senior Front-End Web Developer in recognition of strong performance and growth.</li>
                        <li>Developed responsive user interfaces using HTML, CSS(Tailwind), JavaScript, TypeScript and Nuxt.js to ensure smooth performance across desktop, tablet and mobile device. </li>
                        <li>Gained experience maintaining the company website, including updating the UI and integrating API data.</li>
                        <li>Optimized website performance by implementing lazy loading, reducing asset sizes, and improving load times using tools like Vite and Webpack.</li>
                        <li>Integrated front-end components with RESTful APIs, ensuring seamless communication between client and sever using JSON data formats.</li>
                        <li>Tested and debugged API response, handle HTTP method (GET, POST, PUT, DELETE), and ensured smooth data flow to the front end.</li>
                        <li>Used tools like Postman, Hoppscotch and browser developer tools to test back-end API endpoints and analyze request/response cycles for debugging and integration purposes. </li>
                        <li>Used Git for version control and collaborated with team members via GitHub to manage branches all pull requests efficiently.</li>
                        <li>Documented codebase and components to help future developers understand project structure and usage.</li>
                        <li>Leveraged Nuxt UI components to build dynamic user interfaces, ensuring consistent design and smooth functionality across different device.</li>
                    </ul>
                    <h3
                        className="text-lg font-semibold text-sky-500 tracking-normal pl-7">
                        Project Experience
                    </h3>
                    <ul
                        className="text-lg font-normal list-disc marker:text-sky-600 list-outside pl-20 tracking-normal ">
                        <li><span className="font-bold">POS System Dashboard:</span> Developed the UI for a motorcycle POS system, including order management, real-time inventory, and sales reporting.</li>
                        <li><span className="font-bold">HR System Interface:</span>  Built front-end modules for employee records, stuff salary, attendance, and stuff performance, integrated with backend APIs.</li>
                        <li><span className="font-bold">Sambot Digital:  </span> Designed and developed custom web templates for events such as weddings and birthdays, featuring a user-friendly admin interface for managing invitations and RSVPs.</li>
                        <li><span className="font-bold">Admin & Manager – Sambot Digital POS System UI:</span> Developed an interface for admins and managers to manage client ceremonies and events, including features for tracking event details and profits.</li>
                    </ul>
                    <div 
                        className="space-y-1">
                        <h3
                            className="text-xl font-semibold text-sky-500 tracking-normal">
                            Customer Service Exclusive and Visual Merchandiser Assistant
                        </h3>
                        <h2
                            className="text-2xl font-bold">
                            PEDRO, AEON Mall Phnom Penh
                        </h2>
                        <h3
                            className="text-lg font-semibold text-sky-500 tracking-normal">
                            Feb 2022 – Jul 2023 
                        </h3>
                    </div>
                    <h3
                        className="text-lg font-semibold text-sky-500 tracking-normal">
                        Customer Service Exclusive
                    </h3>
                    <ul
                        className="text-lg font-normal list-disc marker:text-sky-600 list-outside pl-12 tracking-normal ">
                        <li>Delivered exceptional service in a fast-paced, customer-focused retail environment.</li>
                        <li>Built strong rapport with clients through product knowledge and personalized assistance.</li>
                        <li>Handled transactions, inquiries, and complaints with efficiency and professionalism.</li>
                        <li>Consistently met sales and customer satisfaction targets.</li>
                        <li><span className="font-bold">Cashier:</span>  Provided fast, accurate, and friendly checkout service while handling various payment methods in a high-volume retail environment, and Reported daily revenue and ensured accurate cash drawer reconciliation with attention to detail and accuracy.</li>
                    </ul>
                    <h3
                        className="text-lg font-semibold text-sky-500 tracking-normal">
                        Visual Merchandiser Assistant
                    </h3>
                    <ul
                        className="text-lg font-normal list-disc marker:text-sky-600 list-outside pl-12 tracking-normal ">
                        <li>Promoted after 6 months in Customer Service by Supervisor and Visual Merchandising Manager for exceptional performance and creativity.</li>
                        <li>Assisted in planning and executing store displays in line with brand guidelines and seasonal or promotional campaigns.</li>
                        <li>Maintained store visuals to attract customers and boost product visibility.</li>
                        <li>Managed store props and generated monthly reports.</li>
                        <li>Collaborated with the merchandising team to implement visual strategies based on sales data, customer feedback, and market trends.</li>
                    </ul>
                    <div 
                        className="space-y-1">
                        <h3
                            className="text-xl font-semibold text-sky-500 tracking-normal">
                            Cashier
                        </h3>
                        <h2
                            className="text-2xl font-bold">
                            Kiwi Mart, Phnom Penh
                        </h2>
                        <h3
                            className="text-lg font-semibold text-sky-500 tracking-normal">
                            Jun 2020 – Jan 2021
                        </h3>
                        <ul
                            className="text-lg font-normal list-disc marker:text-sky-600 list-outside pl-12 tracking-normal ">
                            <li>Used POS systems to handle payments (Cash, Card or Vouchers) and checked receipts correctly.</li>
                            <li>Processed customer transaction quickly and accurately.</li>
                            <li>Maintained a clean and organized checkout area, ensuring safety and neatness.</li>
                            <li>Helped train new staff members on the register and provided guidance on store procedures.</li>
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    )
};
export default CvFilm;