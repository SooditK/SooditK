import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="mode.tokyo">
    <Container>
      <Title>
        Easybank Frontend Mentor <Badge>2020</Badge>
      </Title>
      <P>Easybank Frontend Mentor Challenge Track</P>
      <P>
        It is one of the projects that used HTML and SaSS{' '}
        <Link
          href="https://github.com/SooditK/easybank-frontendmentor"
          target="_blank"
        >
          Easybank Fem <ExternalLinkIcon mx="2px" />
        </Link>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, SaSS</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/SooditK/easybank-frontendmentor">
            https://github.com/SooditK/easybank-frontendmentor
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://easybank-frontendmentor-xi.vercel.app/">
            Website
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="https://i.imgur.com/p5myybk.png" alt="Easybank" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="https://i.imgur.com/I4NC80F.png" alt="Easybank" />
        <WorkImage src="https://i.imgur.com/xJUWqAv.png" alt="Easybank" />
      </SimpleGrid>
      <WorkImage src="https://i.imgur.com/MBxOWER.png" alt="Easybank" />
    </Container>
  </Layout>
)

export default Work
