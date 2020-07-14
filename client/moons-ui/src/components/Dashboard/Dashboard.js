import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col,Card,Button } from 'react-bootstrap';
import styles from './Dashboard.module.css';
import Chart from "react-apexcharts";
import impresions from '../../impresions.svg';
import visits from '../../visits.svg';
import revenue from '../../revenue.svg';

let radial = {     
  series: [90],
  options: {
    chart: {      
      toolbar: {
        show: false  
      },
      height: 350,
      type: 'radialBar'      
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
         hollow: {
          margin: 0,          
          size: '85%',          
          margin: 15,
          image: revenue,
          imageWidth: 260,
          imageHeight: 2150,
          //imageOffsetY:50,
          imageClipped: false,
          position: 'back'
        },
        track: {
          background: '#456729',          
          margin: 0, // margin is in pixels
          
        },
    
        dataLabels: {
          show: true,
          name: {
            offsetY: -20,
            show: true,
            color: '#929292',
            fontSize: '22px'
          },
          value: {
            formatter: function(val) {
              return "$ 124,000.00 MXN";
            },
            color: '#111',
            fontSize: '30px',
            show: true,
            offsetY: -1
          }
        }
      }
    },
    fill: {
      colors: ['#8AD046'],
      opacity: 0.9,
      type: 'solid'},
    stroke: {
      lineCap: 'round'
    },
    labels: ['REVENUE'],
  }
};

let radial2 = {     
  series: [60],
  options: {
    chart: {
      toolbar: {
        show: false  
      },
      height: 350,
      type: 'radialBar'      
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          //background:'#8AD046',
          size: '85%',          
          margin: 15,
          image: impresions,
          imageWidth: 260,
          imageHeight: 2150,
          //imageOffsetY:50,
          imageClipped: false,
          position: 'back'
        },
        track: {
          background: '#29505E',          
          margin: 0, // margin is in pixels
          
        },
    
        dataLabels: {
          show: true,
          name: {
            offsetY: -20,
            show: true,
            color: '#929292',
            fontSize: '22px'
          },
          value: {
            formatter: function(val) {
              return "4576";
            },
            color: '#111',
            fontSize: '48px',
            show: true,
            offsetY: 6
          }
        }
      }
    },
    fill: {
      colors: ['#76C6DB'],
      opacity: 0.9,
      type: 'solid'},
    stroke: {
      lineCap: 'round'
    },
    labels: ['IMPRESIONS'],
  }
};

let radial3 = {     
  series: [30],
  options: {
    chart: {
      toolbar: {
        show: false  
      },
      height: 350,
      type: 'radialBar'      
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          //background:'#8AD046',
          size: '85%',          
          margin: 15,
          image: visits,
          imageWidth: 260,
          imageHeight: 2150,
          //imageOffsetY:50,
          imageClipped: false,
          position: 'back'
        },
        track: {
          background: '#EBC42F',          
          margin: 0, // margin is in pixels
          
        },
    
        dataLabels: {
          show: true,
          name: {
            offsetY: -20,
            show: true,
            color: '#929292',
            fontSize: '22px'
          },
          value: {
            formatter: function(val) {
              return "7654";
            },
            color: '#111',
            fontSize: '36px',
            show: true,
            offsetY: -1
          }
        }
      }
    },
    fill: {
      colors: ['#BC5318'],
      opacity: 0.9,
      type: 'solid'},
    stroke: {
      lineCap: 'round'
    },
    labels: ['VISITS'],
  }
};

const Dashboard = () => (
  <Container className={styles.Chat}>
  <h1>Dashboard Page</h1> 
    <Row>
    
      <Col xs={12} md={4} lg={4} className='mb-2'>
        <Card>  
          <Card.Body>            
            <Card.Text>
              <Row>
                <Col xs={12} md={12} lg={12}>
                <Chart options={radial.options} series={radial.series} type="radialBar" height={350} />
                </Col>
              
              </Row>
              <Row>
                <Col className='infoData revenue'>
                  <strong className='tablet'><i class='fa fa-tablet'></i> Tablet</strong>
                  <span>60%</span>
                  <span>$ 120,000 MXN</span>
                </Col>
                <Col className='text-right infoData revenue'>
                  <strong className='smartphone'>Smartphone <i class='fa fa-mobile'></i></strong>
                  <span>40%</span>
                  <span>$80,000 MXN</span>
                </Col>
              </Row>
            </Card.Text>
            
          </Card.Body>
        </Card>            
      </Col>

      <Col xs={12} md={4} lg={4} className='mb-2'>
        <Card>  
          <Card.Body>            
            <Card.Text>
            <Row>
                <Col xs={12} md={12} lg={12}>
                <Chart options={radial2.options} series={radial2.series} type="radialBar" height={350} />
                </Col>
                </Row>
                <Row>
                <Col className='infoData impresions'>
                  <strong className='tablet'><i class='fa fa-tablet'></i> Tablet</strong>
                  <span>60%</span>
                  <span>$ 120,000 MXN</span>
                </Col>
                <Col className='text-right infoData impresions'>
                  <strong className='smartphone'>Smartphone <i class='fa fa-mobile'></i></strong>
                  <span>40%</span>
                  <span>$80,000 MXN</span>
                </Col>
              </Row>

            
            </Card.Text>            
          </Card.Body>
        </Card>            
      </Col>

      <Col xs={12} md={4} lg={4} className='mb-2'>
        <Card>  
          <Card.Body>            
            <Card.Text>
            <Row>
                <Col xs={12} md={12} lg={12}>
                <Chart options={radial3.options} series={radial3.series} type="radialBar" height={350} />
                </Col>
              
              </Row>
              <Row>
                <Col className='infoData visits'>
                  <strong className='tabletTitle'><i class='fa fa-tablet'></i> Tablet</strong>
                  <span>60%</span>
                  <span>$ 120,000 MXN</span>
                </Col>
                <Col className='text-right visits'>
                  <strong className='smartPhoneTitle'>Smartphone <i class='fa fa-mobile'></i></strong>
                  <span>40%</span>
                  <span>$80,000 MXN</span>
                </Col>
              </Row>
            </Card.Text>
            
          </Card.Body>
        </Card>            
      </Col>
    </Row>
  </Container>  
);

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
