import { GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import React from 'react'
import weatherApi from '../../api/weatherApi';
import { CityWeather } from '../../interfaces/city-props';

interface Props {
    city: CityWeather
  }

const CitybyNamePage: NextPage<Props> = ({ city }) => {
  return (
    <>
      <Head>
        <title>{city.location.name} Weather - Next Weather App</title>
      </Head>
      </>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const {data} = await weatherApi.get<CityWeather>(`/current.json?key=${process.env.API_KEY}&q=Medellin`)
  const cityName: string = data.location.name;


  return {
    paths: cityName,
    // fallback: false
    fallback: 'blocking'
  }
}



export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { name } = params as { name: string };

  const pokemon = await getPokemonInfo( name );

  if ( !pokemon ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon
    }
  }
}




export default CitybyNamePage;