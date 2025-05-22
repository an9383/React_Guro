import React from 'react'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Content from './components/Content'
import LogoClouds from './components/LogoClouds'

const Home: React.FC = () => (
    <>
        <Hero />
        <Content />
        <Feature />
        <LogoClouds />
    </>
)

export default Home
