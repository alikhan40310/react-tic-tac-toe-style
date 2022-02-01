import React from 'react';
import { Row, Col, Button,Typography, Divider} from 'antd';
import './App.css';
import 'antd/dist/antd.css';


const App = () => {
  // styling through object
  const { Title,Paragraph } = Typography;
  const style = { background: '#0092ff', padding: '8px ' };
  const ifd = { background: 'red'};
  const margin = {margin: '40px 0px'}
  const cusbtn = {padding: '20px',width:'9vw',height: '90px',borderRadius: "10px",textTransform:'uppercase',fontSize:'30px',border:'3px solid #ccc',fontWeight:'600'}
  const centerItem = {display:'flex',alignItem:'center',justifyContent:'center',positon:'relative',textAlign:'center'}
  const heading2 = {color:'red',textAlign:'center',textTransform:"uppercase",marginTop:'20px'}
  const pargraph = {fontSize:'20px',color:"#007bff",textTransform:'capitalize'}
  const btnreset = {fontSize:'22px',fontWeight:'600', height:'50px',borderRadius:'10px',padding:'0 30px'}
  const newStyle = {fontSize:'22px',textTransform:'capitalize',color:'#007bff',marginTop:'20px'}
  return (
    <>
    <div style={centerItem}>
    <div >
      <Title style={heading2}>tic tac toe</Title>
      <Paragraph style={pargraph}>
      game starts just tap on box<br></br>
      First player starts as <strong>Player X</strong>   <br></br>
      And<br></br>
      Second player as <strong> Player O </strong>
    </Paragraph>
      <Row gutter={16} style={margin} className='centerItem'>
        <Col className="gutter-row" >
          <Button className='hoverEffect' type='default' style={cusbtn}> </Button>
        </Col>
        <Col className="gutter-row" >
          <Button className='hoverEffect' type='default' style={cusbtn}> </Button>
        </Col>
        <Col className="gutter-row" >
          <Button className='hoverEffect' type='default' style={cusbtn}> </Button>
        </Col>
      </Row>
      <Row gutter={16} style={margin}>
      <Col className="gutter-row" >
          <Button className='hoverEffect' type='default' style={cusbtn}> </Button>
        </Col>
        <Col className="gutter-row" >
          <Button className='hoverEffect' type='default' style={cusbtn}> </Button>
        </Col>
        <Col className="gutter-row" >
          <Button className='hoverEffect' type='default' style={cusbtn}> </Button>
        </Col>
      </Row>
      <Row gutter={16} style={margin}>
        <Col className="gutter-row" >
          <Button className='hoverEffect' type='default' style={cusbtn}> </Button>
        </Col>
        <Col className="gutter-row">
          <Button className='hoverEffect' type='default' style={cusbtn}> </Button>
        </Col>
        <Col className="gutter-row" >
          <Button className='hoverEffect' type='default' style={cusbtn}> </Button>
        </Col>
      </Row>
      <Button type="primary" style={btnreset}>Reset</Button>
      <Paragraph style={newStyle}>
        player 0 won
      </Paragraph>
      </div>
    </div> 
    </>
  )

};

export default App;