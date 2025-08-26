"use client";

function ProfileSection() {
  return (
    <div className="w-full h-[80vh] max-h-screen bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="space-y-4 relative z-20 max-w-2xl px-4">
        <p className="text-md text-gray-800 dark:text-gray-200">
          Hi there 👋 <br /> I’m a Full Stack Developer with 3+ years of
          experience building scalable and user-friendly digital products. I
          enjoy working across the stack — from crafting seamless front-end
          experiences with React and React Native, to designing robust back-end
          systems with Node.js, GraphQL, and PostgreSQL.
        </p>
        <p className="text-md text-gray-800 dark:text-gray-200">
          My focus is on writing clean, maintainable, and performant code while
          solving real-world problems. I’m especially passionate about building
          products that make people’s lives easier.
        </p>
        <p className="text-md text-gray-800 dark:text-gray-200">
          Outside of coding, I love exploring new technologies, learning
          continuously, and sharing knowledge with the developer community.
        </p>
        <p className="text-gray-800 dark:text-gray-200">
         ~ Rishabh Parsediya
        </p>
      </div>
    </div>
  );
}

export default ProfileSection;
