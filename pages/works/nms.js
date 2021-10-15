import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        NMS <Badge>2021</Badge>
      </Title>
      <P>
        NMS - Near Messaging Service uses SMSTool in NEAR Blockchain, allows
        user to send messages and NEAR Token to another user.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Objective-C, PHP, MongoDB</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Links</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://github.com/SooditK/nms">
            <Badge mr={2}>Website</Badge>
            https://github.com/SooditK/nms
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage src="https://i.imgur.com/Go3GcLE.png" alt="walknote" />
      <WorkImage src="https://i.imgur.com/YhfGkWn.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
