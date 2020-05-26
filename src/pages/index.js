import React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Hero from "../components/hero"
import StoreInfo from "../components/store_info"
import Brewers from "../components/brewers"
import Gallery from "../components/gallery"
import Menu from "../components/menu"
import Signup from "../components/signup"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <StoreInfo />
      <Brewers />
      <Gallery />
      <Menu />
      <Signup />
      <Footer />
    </div>
  )
}
