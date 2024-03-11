import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import { ISocialData } from "./footer.interface";

const Footer = () => {
  const socialData: ISocialData[] = [
    {
      image: <LinkedInIcon style={{ color: "white", cursor: "pointer" }} />,
      url: "https://www.linkedin.com/in/rushikesh-more-241406107",
      title: "LinkedIn",
    },
    {
      image: <GitHubIcon style={{ color: "white", cursor: "pointer" }} />,
      url: "https://www.linkedin.com/in/rushikesh-more-241406107",
      title: "Github",
    },
    {
      image: <CodeIcon style={{ color: "white", cursor: "pointer" }} />,
      url: "https://leetcode.com/morerushi56/",
      title: "LeetCode",
    },
  ];
  return (
    <div className="footer">
      {socialData.map((item) => (
        <a href={item.url} title={item.title} target="_blanc">
          {item.image}
        </a>
      ))}
    </div>
  );
};

export default Footer;
