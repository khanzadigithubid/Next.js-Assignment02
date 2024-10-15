import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1>Hello, I am Khanzadi</h1> 
            <p>
                I am a passionate developer specializing in <strong>Next.js</strong>, <strong>React</strong>, and <strong>TypeScript</strong>.
            </p>
            <p>
                With a keen eye for design and a commitment to best practices, I strive to create responsive and accessible web applications.
            </p>
            <p>
                My work as a developer has allowed me to collaborate on a variety of projects, ranging from small startups to larger enterprise solutions. I have played a pivotal role in designing and implementing user interfaces that are not only visually appealing but also intuitive and user-friendly. One of my notable projects involved developing a full-stack e-commerce platform where I was responsible for both the front-end and back-end development, leveraging <strong>Next.js</strong> for server-side rendering to improve performance and SEO. I integrated a secure payment gateway and implemented an inventory management system that streamlined operations for the client. This project not only honed my technical skills but also taught me the importance of understanding client needs and delivering a product that exceeds their expectations.
            </p>
            <p>
                In addition to this, I have contributed to several open-source projects, enhancing my coding abilities and learning to work collaboratively with diverse teams. My experience in agile environments has further improved my project management skills, enabling me to efficiently deliver high-quality software under tight deadlines. I take pride in writing clean, maintainable code and continuously seek feedback to improve my development practices. My journey has instilled in me a deep appreciation for the impact technology can have on everyday lives, and I am driven by the desire to create solutions that make a difference.
            </p>
            <p>
                I believe in the power of continuous learning and am always exploring new technologies to enhance my skills. Currently, I am diving deeper into <strong>GraphQL</strong> and exploring <strong>cloud-based solutions</strong>. 
            </p>
            <p>
                When I am not coding, I enjoy contributing to open-source projects and engaging with the developer community through meetups and online forums. Sharing knowledge and collaborating with others is something I truly value. 
            </p>
        </div>
    );
};

export default Hero;
