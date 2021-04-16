
import React, { useState } from 'react';
import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import { CaretRightOutlined } from '@ant-design/icons';

const Index = () => {
  const [count, setCount] = useState(1);
  let history = useHistory();

  return (
    <div className="count" >
      <h1>Index Page</h1>

      <div>
        <Button type="default" onClick={() => {
          setCount(count + 1)
        }}>Count 自增</Button> {count}
      </div>

      <div className="bg"></div>

      <Button type="default" onClick={() => {
        history.push("/about");
      }}> <CaretRightOutlined /> 跳转到about page </Button>
    </div>
  )
}

export default Index;