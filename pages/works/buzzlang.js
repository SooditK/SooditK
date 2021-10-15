import {
  Container,
  Badge,
  List,
  ListItem,
  Center,
  Heading
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Buzzlang <Badge>2021-</Badge>
      </Title>
      <P>
        Buzzlang is an Web Application that connects you with people around the
        globe and helps you learn new languages through Quizzes &amp;
        Crosswords.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, TailwindCSS, MaterialUI, SwiperJS</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Images</Center>
      </Heading>
      <WorkImage src="https://i.imgur.com/8yUU9y3.png" alt="Buzzlang" />
      <WorkImage src="https://i.imgur.com/owteW1i.png" alt="Buzzlang" />
    </Container>
  </Layout>
)

export default Work
