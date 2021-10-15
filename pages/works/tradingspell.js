import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Center,
  Heading
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="TradingSpell">
    <Container>
      <Title>
        Tradingspell<Badge>2021</Badge>
      </Title>
      <P>
        Tradingspell is one of the fastest growing Online Trading Community that
        offers courses which helps people to learn how they can create an edge
        over market and become a profitable trader.
      </P>
      <UnorderedList my={4}>
        <ListItem>Master Technical Analysis Program (2.0)</ListItem>
        <ListItem>Master Technical Analysis Revision</ListItem>
        <ListItem>Basics of Price Action</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Gatsby, TailwindUI, MaterialUI</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://www.tradingspell.com">
            https://www.tradingspell.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/SooditK/trading-spell">
            https://github.com/SooditK/trading-spell
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Images</Center>
      </Heading>
      <WorkImage src="https://i.imgur.com/ZasI6yz.png" alt="Tradingspell" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="https://i.imgur.com/XnBy0LN.png" alt="Tradingspell" />
        <WorkImage src="https://i.imgur.com/vINZnUN.png" alt="Tradingspell" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
