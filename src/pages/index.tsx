import Container from "@/components/Container";
import TitleBar from "@/components/TitleBar";
import Heading from "@/components/typography/Heading";
import UserCardSmall from "@/components/UserCardSmall";
import { NextPage } from "next";

const Feed: NextPage = () => {
  return (
    <div className="bg-gray-50">
      <TitleBar />
      <Container>
        <Heading variant="h1">Suggested Posts</Heading>
        <Heading variant="h2">Who to follow</Heading>
        <Heading variant="h3">Recent</Heading>
        <Heading variant="h4">Suggested Posts</Heading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ut atque
          molestias, enim nostrum eos ullam aliquid similique voluptatum minima
          recusandae. Tempora beatae voluptate repellat rerum nam molestias ad
          cumque, pariatur quis adipisci culpa! Quo quae amet odit nobis odio ab
          incidunt enim doloremque ut eligendi rerum assumenda quam, numquam
          praesentium. Eligendi labore tenetur accusamus dolores laboriosam,
          veniam ut veritatis impedit reiciendis, laudantium maiores ab eum et
          sequi exercitationem asperiores consequuntur voluptatem cum, suscipit
          modi. Eligendi tempora eos aspernatur omnis eaque voluptatem fuga
          deserunt culpa praesentium. Ratione eum veniam temporibus, laboriosam
          numquam nobis, mollitia ipsam optio possimus ea nostrum delectus dolor
          id amet minima! Ut commodi ad exercitationem eaque eius pariatur vitae
          quia quibusdam assumenda, dolor ea ullam eos reprehenderit explicabo.
          Iste repellat quae tempora distinctio porro dolores necessitatibus,
          temporibus minima eos expedita aut vel pariatur fugit ea cumque?
          Natus, reiciendis consectetur. Neque laudantium ipsa animi dolor
          doloremque soluta, ea vel velit est unde cumque nam. Ad eius sunt
          eligendi animi quo modi! Officiis assumenda incidunt accusamus beatae
          dolorem quas officia reprehenderit excepturi recusandae eum voluptatum
          voluptates, reiciendis totam suscipit quod culpa doloremque, quo
          quisquam qui tenetur consectetur aperiam repudiandae. Itaque dolorum
          iste et minus rem delectus? Nobis animi recusandae, unde est vitae in,
          reiciendis optio repudiandae vel ex perferendis aut, tempora dolorem
          nemo! Dolor dolores quisquam odio, iure sunt quae fugit perspiciatis
          omnis quam autem? Sunt harum cumque, quidem, omnis ut libero dolores
          unde alias error sequi quam id reiciendis porro vel explicabo natus
          quisquam consequuntur rerum fugit quasi magnam assumenda! Incidunt
          iusto magni eveniet unde iste reiciendis veniam! Inventore voluptatum
          non rerum doloremque qui amet aspernatur, minima officia earum sequi
          necessitatibus omnis provident magni hic? Unde laudantium ex neque
          inventore aut laborum quia dicta eveniet! Esse quaerat ex labore
          minima repellat error quos accusamus reprehenderit unde modi sunt,
          veritatis, praesentium asperiores, debitis pariatur. Qui expedita
          aspernatur possimus placeat temporibus doloremque dicta? Fugit
          reprehenderit est, aliquid libero perferendis repellendus doloremque
          corrupti odio nemo modi necessitatibus natus mollitia ullam dolorem!
          Alias sed soluta magnam omnis, cum debitis vitae vero quibusdam!
          Reiciendis necessitatibus numquam possimus quo explicabo molestiae
          ipsa hic voluptates saepe aut dolore veniam non architecto alias a,
          quae nisi sapiente quis nulla aspernatur ex. Facilis, incidunt ullam
          repellendus quod ex corrupti laudantium dolorum! Debitis nulla omnis
          voluptatum soluta sunt obcaecati. Nisi fugit quod perferendis quis
          tenetur, magnam non fuga, libero quam deleniti vitae commodi iure
          nulla eveniet placeat sunt.
        </p>

        <UserCardSmall />
        <UserCardSmall />
      </Container>
    </div>
  );
};

export default Feed;
