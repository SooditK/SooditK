import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        Trepare<Badge>2021</Badge>
      </Title>
      <P>
        A Platform that provides Online Workshops and Sprints from Verified
        Instructors.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, TailwindCSS, MaterialUI</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <Link href="https://github.com/SooditK/trepare">
            Web <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="http://trepare.vercel.app/">
            http://trepare.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Images</Center>
      </Heading>
      <WorkImage src="https://i.imgur.com/MD0phIZ.png" alt="Trepare" />
      <WorkImage src="https://i.imgur.com/DxO2aka.png" alt="Trepare" />
    </Container>
  </Layout>
)

export default Work
