import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <>
        
          <Navbar />
          {/* <News category="sports"/> */}
          <Routes>
            <Route path="/" element={<News category="sports" />} />
            <Route exact  path="/business" element={<News key="business" category="business" />} />
            <Route exact  path="/entertainment" element={<News  key="entertainment" category="entertainment" />} />
            <Route exact  path="/general" element={<News key="general" category="general" />} />
            <Route exact  path="/health" element={<News key="health" category="health" />} />
            <Route exact  path="/science" element={<News key="science" category="science" />} />
            <Route exact  path="/technology" element={<News key="technology" category="technology" />} />
          </Routes>
          </>
        
          )
        }
      }