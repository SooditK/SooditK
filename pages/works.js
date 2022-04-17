import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import trax from '../public/images/works/trax4.png'
import jobUnicorn from '../public/images/works/jobUnicorn.png'
import nearmessaging from '../public/images/works/nms.png'
import trepare from '../public/images/works/trepare.png'
import tradingspell from '../public/images/works/tradingspell.png'
import easybank from '../public/images/works/easybank.png'
import carGarage from '../public/images/works/carGarage.png'
import growGreen from '../public/images/works/growgreen.png'
import thumbBuzzlang from '../public/images/works/buzzlang.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="trax" title="Trax" thumbnail={trax}>
            Trax is an open source Spotify Clone built with NextJS &amp; Chakra
            UI. Allows users to create playlists and let users play music.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="jobUnicorn"
            title="Job Unicorn"
            thumbnail={jobUnicorn}
          >
            Job Unicorn is the world&apos;s first and only job marketplace based
            on the NEAR-chain.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="nms" title="NMS" thumbnail={nearmessaging}>
            Near Messaging Servicce, helps you send messages to NEAR Clients
            through their Near ID&apos;s.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="trepare" title="Trepare" thumbnail={trepare}>
            A Platform that provides Online Workshops and Sprints from Verified
            Instructors.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="tradingspell"
            thumbnail={tradingspell}
            title="TradingSpell"
          >
            Tradingspell is an online Trading Community that helps people learn
            how to trade in Stock Market
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Other Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="buzzlang"
            thumbnail={thumbBuzzlang}
            title="Buzzlang"
          >
            Buzzlang is an Web App that connects you with people around the
            globe and helps you learn new languages through Quizzes &amp;
            Crosswords.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="cargarage"
            thumbnail={carGarage}
            title="Car - Garage"
          >
            Full Fleged Car Booking Website, allows users to Rent &amb; Buy Car
            online
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="growgreen" thumbnail={growGreen} title="GrowGreen">
            Growgreen is an eco-web App that helps people find Plants and small
            Plant Owners through Google Maps and help purchase them.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="easybank"
            thumbnail={easybank}
            title="Easybank FrontendMentor"
          >
            Easybank Frontend Mentor
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
