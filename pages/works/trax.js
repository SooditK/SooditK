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
  <Layout title="Trax">
    <Container>
      <Title>
        Trax<Badge>2022</Badge>
      </Title>
      <P>
        An Open Source Spotify, that allows you to create playlists and play
        songs.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, ChakraUI, Prisma, Posgresql</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <Link href="https://github.com/SooditK/clone-spotify">
            Web <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://clone-spotify-omega.vercel.app/signin">
            https://clone-spotify-omega.vercel.app/signin
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Images</Center>
      </Heading>
      <WorkImage src="https://i.imgur.com/OjK3PWL.png" alt="Trax" />
      <WorkImage src="https://i.imgur.com/bBXr3NJ.png" alt="Trax" />
      <WorkImage src="https://i.imgur.com/okEbKhM.png" alt="Trax" />
      <WorkImage src="https://i.imgur.com/owp23VN.png" alt="Trax" />
    </Container>
  </Layout>
)

export default Work
