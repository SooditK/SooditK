import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="GrowGreen">
    <Container>
      <Title>
        GrowGreen <Badge>2019</Badge>
      </Title>
      <P>
        An Eco Web App that can find nearest nursery, plant shop, organic shop
        etc and everything related to planting and agriculture. This way it will
        support small scale or big scale organic businesses
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Typescript, ChakraUI</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Images</Center>
      </Heading>
      <WorkImage
        src="https://raw.githubusercontent.com/gdscigdtuw/GrowGreen/main/images/Green%20Simple%20Illustrated%20Leaf%20Environment%20Logo.png"
        alt="Pichu*Pichu"
      />
    </Container>
  </Layout>
)

export default Work
