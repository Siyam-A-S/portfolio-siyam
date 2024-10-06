"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Tools and Frameworks",
    id: "Tools and Frameworks",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Kafka</li>
        <li>Notion</li>
        <li>NextJS</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>MongoDB/Firebase</li>
        <li>AWS Cloud</li>
        <li>Terraform</li>
        <li>CI/CD</li>
        <li>Git</li>
        <li>Docker</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Howard University, Bachelors of Science, Computer Science</li>
        <li>St. Joseph Higher Secondary School, Dhaka, Bangladesh</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner CLF-02</li>
        <li>Ucertify Data Structure and Algorithm in Python</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Tools and Frameworks");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">I offer</h2>
          
          <ul className="list-disc pl-2">
            <li>a deep understanding of the fundamentals of data structure, algorithm, computer architecture, distributed systems and memory management.</li>
            <li>fullstack web development and API creation capabilities using React, Express and Firebase/MongoDB.</li>
            <li>intermediate security knowledge of web and windows based machine - CSRF, endpoint protection and binary unpacking, kerberos.</li>
            <li>newspaper digitization pipeline of cultural heritage materials with visual content extraction, embedding generation for fast quering and clustering.</li>
            <li>hands on debugging, testing, error handling and version control.</li>
            <li>currently motivated on distributed job scheduler, container orchestration, kafka.</li>
          </ul>
          
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Tools and Frameworks")}
              active={tab === "Tools and Frameworks"}
            >
              {" "}
              Tools and Frameworks{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
