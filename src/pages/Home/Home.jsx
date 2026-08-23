import React from 'react'
import Categories from '../../components/Categories/Categories'
import AboutUs from '../../components/Aboutus/Aboutus'
import Hero from '../../components/Hero/Hero'
import Stayuptodate from '../../components/Stayuptodate/Stayuptodate'
import Lifecycle from '../../components/Thelifecycle/Thelifecycle'
import CategoryShowcase from '../../components/Showcase/ShowCase'
import Brands from '../../components/Brands/Brands'

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Categories />
      <CategoryShowcase />
      <Lifecycle />
      <AboutUs />
      <Stayuptodate />

    </>
  )
}
