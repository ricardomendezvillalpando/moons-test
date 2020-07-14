import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col,Card,Button } from 'react-bootstrap';
import styles from './Dashboard.module.css';
import Chart from "react-apexcharts";

let mixed = {
          
  series: [{
    name: 'TEAM A',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: 'TEAM B',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: 'TEAM C',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],
  options: {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
      '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
    ],
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      title: {
        text: 'Points',
      },
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
    
        }
      }
    }
  },


};

let chartObj = {
  options: {
    responsive: [{
      breakpoint: undefined,
      options: {},
  }],
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
};

let radial = {         
  series: [75],
  options: {
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
         hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },
    
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            formatter: function(val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Percent'],
  }
};

const Dashboard = () => (
  <Container className={styles.Chat}>
  <h1>Dashboard Page</h1> 
    <Row>
    
      <Col xs={12} md={4} lg={4} className='mb-2'>
        <Card>  
          <Card.Body>
            <Card.Title>Revenue</Card.Title>
            <Card.Text>
              <Row>
                <Col xs={12} md={12} lg={12}>
                <Chart
                  options={chartObj.options}
                  series={chartObj.series}
                  type="bar"              
                />
                </Col>
              
              </Row>
            
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>            
      </Col>

      <Col xs={12} md={4} lg={4} className='mb-2'>
        <Card>  
          <Card.Body>
            <Card.Title>Impresions</Card.Title>
            <Card.Text>
            <Row>
                <Col xs={12} md={12} lg={12}>
                <Chart options={radial.options} series={radial.series} type="radialBar" height={350} />
                </Col>
                </Row>

            
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>            
      </Col>

      <Col xs={12} md={4} lg={4} className='mb-2'>
        <Card>  
          <Card.Body>
            <Card.Title>Visits</Card.Title>
            <Card.Text>
            <Row>
                <Col xs={12} md={12} lg={12}>
                <Chart
                  options={mixed.options}
                  series={mixed.series}
                  type="line"              
                />
                </Col>
              
              </Row>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>            
      </Col>
    </Row>
  </Container>  
);

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
