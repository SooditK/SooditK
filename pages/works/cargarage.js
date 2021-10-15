import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="STYLY">
    <Container>
      <Title>
        Car - Garage <Badge>2020</Badge>
      </Title>
      <P>
        Full Fleged Car Booking Website, allows users to Rent &amb; Buy Car
        online
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Redux, Typescript, GraphQL</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sooditk.github.io/csb-coxiy/">
            Car - Garage <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Code</Meta>
          <Link href="https://github.com/SooditK/car-website">
            https://github.com/SooditK/car-website
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="https://i.imgur.com/iWQakRJ.png" alt="CarGarage" />
      <WorkImage src="https://i.imgur.com/A8pBA95.png" alt="CarGarage" />
    </Container>
  </Layout>
)

export default Work
