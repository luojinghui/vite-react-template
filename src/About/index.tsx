
import React from 'react';
import { Button } from 'antd';
import { useHistory } from "react-router-dom";

const About = () => {
  let history = useHistory();

  return (
    <div>
      <h1>about page</h1>


      <Button type="default" onClick={() => {
        history.push("/");
      }}>跳转到index page</Button>
    </div>
  )
}

export default About;