import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Job Unicorn <Badge>2021-</Badge>
      </Title>
      <P>
        Job Unicorn is the world&apos;s first and only job marketplace based on
        the NEAR-chain. This helps you establish trustful employer-employee
        relationships and also makes contract payments easier.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://jobunicorn.io/">
            https://jobunicorn.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, ChakraUI, Typescript, Ceramic, NEAR</span>
        </ListItem>
      </List>

      <WorkImage src="https://i.imgur.com/31ySE2f.png" alt="Job Unicorn" />
      <WorkImage src="https://i.imgur.com/rNr4F4F.png" alt="Job Unicorn" />
    </Container>
  </Layout>
)

export default Work
