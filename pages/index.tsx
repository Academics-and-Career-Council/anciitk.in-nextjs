import type { NextPage } from 'next'
import UgAcads from "./ug_acads"
import InternationalRel from './international_relations'
import Research from './research_wing'
import CareerDev from './career_dev'


const Home: NextPage = () => {
  return (
    <>
     <UgAcads></UgAcads>
     <InternationalRel></InternationalRel>
     <Research></Research>
     <CareerDev></CareerDev>

    </>
  )
}

export default Home
