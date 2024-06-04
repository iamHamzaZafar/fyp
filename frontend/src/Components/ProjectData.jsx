import React from 'react'

const ProjectData = ({data}) => {
    
  const proData = [
    {
      id: 1,
      title: "AI-Powered Chatbot",
      description:
        "Develop a chatbot using natural language processing and machine learning to interact with users in a conversational manner.",
    },
    {
      id: 2,
      title: "E-commerce Recommendation System",
      description:
        "Create a recommendation system for an e-commerce website using collaborative filtering and content-based filtering techniques.",
    },
    {
      id: 3,
      title: "Smart Home Automation System",
      description:
        "Design a smart home system that allows users to control home appliances through a mobile app or voice commands.",
    },
    {
      id: 4,
      title: "Blockchain-Based Voting System",
      description:
        "Implement a secure and transparent voting system using blockchain technology.",
    },
    {
      id: 5,
      title: "Healthcare Monitoring System",
      description:
        "Build a system to monitor patients' health metrics in real-time using IoT devices and machine learning algorithms.",
    },
    {
      id: 6,
      title: "Virtual Reality Education Platform",
      description:
        "Create an educational platform using virtual reality to provide immersive learning experiences.",
    },
    {
      id: 7,
      title: "Sentiment Analysis Tool",
      description:
        "Develop a tool that analyzes social media posts or product reviews to determine the sentiment of the content.",
    },
    {
      id: 8,
      title: "Autonomous Drone Navigation",
      description:
        "Program a drone to navigate autonomously using computer vision and machine learning techniques.",
    },
    {
      id: 9,
      title: "Facial Recognition Attendance System",
      description:
        "Create an attendance system that uses facial recognition to mark student attendance automatically.",
    },
    {
      id: 10,
      title: "Online Examination System",
      description:
        "Develop a secure online examination platform with features like timer, auto-grading, and plagiarism detection.",
    },
    {
      id: 11,
      title: "IoT-Based Smart Agriculture",
      description:
        "Build an IoT system to monitor soil moisture, temperature, and other parameters to optimize agricultural practices.",
    },
    {
      id: 12,
      title: "Personal Finance Management App",
      description:
        "Create an app that helps users manage their finances by tracking expenses, setting budgets, and providing financial advice.",
    },
    {
      id: 13,
      title: "Cybersecurity Threat Detection",
      description:
        "Develop a system that uses machine learning to detect and prevent cybersecurity threats in real-time.",
    },
    {
      id: 14,
      title: "Intelligent Traffic Management System",
      description:
        "Design a system to optimize traffic flow in urban areas using real-time data and machine learning algorithms.",
    },
    {
      id: 15,
      title: "AR-Based Interior Design App",
      description:
        "Create an augmented reality app that allows users to visualize and customize their home interiors in real-time.",
    },
    {
      id: 16,
      title: "Speech-to-Text Converter",
      description:
        "Develop a tool that converts spoken language into written text using speech recognition technology.",
    },
    {
      id: 17,
      title: "AI-Powered Personal Assistant",
      description:
        "Build a personal assistant app that uses AI to help users with tasks such as scheduling, reminders, and information retrieval.",
    },
    {
      id: 18,
      title: "Smart Waste Management System",
      description:
        "Design a system to optimize waste collection and management using IoT sensors and data analytics.",
    },
    {
      id: 19,
      title: "Real-Time Language Translator",
      description:
        "Create a real-time language translation app that uses machine learning to translate spoken or written language instantly.",
    },
    {
      id: 20,
      title: "Automated News Aggregator",
      description:
        "Develop a platform that aggregates news from various sources and uses machine learning to categorize and summarize articles.",
    },
    {
      id: 21,
      title: "Cloud-Based File Storage System",
      description:
        "Create a secure cloud storage system that allows users to store, share, and manage files online.",
    },
    {
      id: 22,
      title: "Smart Energy Management System",
      description:
        "Build a system to monitor and optimize energy consumption in homes or businesses using IoT devices and data analytics.",
    },
    {
      id: 23,
      title: "AI-Driven Stock Market Prediction",
      description:
        "Develop a machine learning model to predict stock market trends and provide investment recommendations.",
    },
    {
      id: 24,
      title: "Virtual Personal Trainer",
      description:
        "Create an app that provides personalized workout plans and tracks user progress using computer vision and machine learning.",
    },
    {
      id: 25,
      title: "Intelligent Tutoring System",
      description:
        "Build a system that provides personalized tutoring to students using AI and adaptive learning techniques.",
    },
    {
      id: 26,
      title: "Home Security System",
      description:
        "Design a home security system that uses IoT devices and computer vision to detect and alert users of intrusions.",
    },
    {
      id: 27,
      title: "E-learning Platform",
      description:
        "Create an online learning platform with features like video lectures, quizzes, and discussion forums.",
    },
    {
      id: 28,
      title: "AI-Based Job Recommendation System",
      description:
        "Develop a system that recommends jobs to users based on their skills, experience, and preferences using machine learning.",
    },
    {
      id: 29,
      title: "Virtual Reality Gaming Platform",
      description:
        "Create a VR gaming platform that offers immersive gaming experiences.",
    },
    {
      id: 30,
      title: "Health Chatbot for Mental Wellness",
      description:
        "Build a chatbot that provides mental health support and resources to users.",
    },
    {
      id: 31,
      title: "Smart Parking System",
      description:
        "Design a system to optimize parking space utilization using IoT sensors and data analytics.",
    },
    {
      id: 32,
      title: "Personalized Learning App",
      description:
        "Create an app that provides personalized learning experiences based on user preferences and learning styles.",
    },
    {
      id: 33,
      title: "Blockchain-Based Supply Chain Management",
      description:
        "Implement a blockchain solution to improve transparency and efficiency in supply chain management.",
    },
    {
      id: 34,
      title: "AI-Powered Image Recognition",
      description:
        "Develop a system that uses AI to recognize and categorize images automatically.",
    },
    {
      id: 35,
      title: "Remote Patient Monitoring System",
      description:
        "Build a system to monitor patients' health remotely using IoT devices and machine learning algorithms.",
    },
    {
      id: 36,
      title: "Online Marketplace Platform",
      description:
        "Create an online marketplace for buying and selling products or services.",
    },
    {
      id: 37,
      title: "Smart Weather Prediction System",
      description:
        "Develop a system that uses machine learning to predict weather patterns accurately.",
    },
    {
      id: 38,
      title: "IoT-Based Water Quality Monitoring",
      description:
        "Design a system to monitor water quality in real-time using IoT sensors and data analytics.",
    },
    {
      id: 39,
      title: "AI-Powered Resume Builder",
      description:
        "Create a tool that helps users build professional resumes using AI and natural language processing.",
    },
    {
      id: 40,
      title: "Smart Grid System",
      description:
        "Develop a smart grid system to optimize energy distribution and consumption using IoT devices and data analytics.",
    },
    {
      id: 41,
      title: "Virtual Event Management Platform",
      description:
        "Build a platform for organizing and managing virtual events with features like live streaming, chat, and networking.",
    },
    {
      id: 42,
      title: "AI-Based Fraud Detection",
      description:
        "Create a system that uses machine learning to detect and prevent fraudulent activities in real-time.",
    },
    {
      id: 43,
      title: "Personalized News Aggregator",
      description:
        "Develop a news aggregator that provides personalized news content based on user preferences.",
    },
    {
      id: 44,
      title: "IoT-Based Air Quality Monitoring",
      description:
        "Design a system to monitor air quality in real-time using IoT sensors and data analytics.",
    },
    {
      id: 45,
      title: "Smart Inventory Management System",
      description:
        "Build a system to optimize inventory management using IoT devices and data analytics.",
    },
    {
      id: 46,
      title: "Virtual Tour Guide App",
      description:
        "Create an app that provides virtual tours of tourist attractions with augmented reality features.",
    },
    {
      id: 47,
      title: "AI-Powered Writing Assistant",
      description:
        "Develop a tool that helps users improve their writing using AI and natural language processing.",
    },
    {
      id: 48,
      title: "Blockchain-Based Document Verification",
      description:
        "Implement a blockchain solution for secure and verifiable document authentication.",
    },
    {
      id: 49,
      title: "Smart Fitness Tracker",
      description:
        "Create a fitness tracker app that monitors and analyzes users' physical activity and health metrics.",
    },
    {
      id: 50,
      title: "AI-Based Customer Support System",
      description:
        "Build a system that uses AI to provide automated customer support and resolve common queries.",
    },
    {
      id: 51,
      title: "Remote Learning Platform",
      description:
        "Develop a platform for remote learning with features like video lectures, interactive quizzes, and discussion forums.",
    },
    {
      id: 52,
      title: "AI-Powered Recipe Recommendation",
      description:
        "Create an app that recommends recipes to users based on their dietary preferences and available ingredients.",
    },
    {
      id: 53,
      title: "Smart Traffic Light System",
      description: "Design a traffic light system that adapts ",
    },
  ];

    console.log(proData)
    console.log(data)
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {proData.map((idea) => (
          <tr key={idea.id}>
            <td className="px-6 py-4 whitespace-nowrap">{idea.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{idea.title}</td>
            <td className="px-6 py-4 whitespace-wrap">{idea.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default ProjectData