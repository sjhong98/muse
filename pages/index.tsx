export async function getServerSideProps() {
  const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=3');
  const data = response.data.objectIDs;
  let start: number = 0;
  let end: number = 16;
  let item;
  let res = [];

  for(let i=start; i<end; i++) {
    item = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${data[i]}`)
    res.push(item.data);
  }

  return {
    props: { res }
  }
}

import axios from 'axios';

import { View, Font4, Header, Content, Image } from '../styles/styles';
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FirstActive } from '../modules/modules';

interface resType {
  primaryImage: string,
}

interface resType {
  primaryImage: string
}

export default function Home(response : InferGetServerSidePropsType<GetServerSideProps>) {
  const res: resType[] = [];
  console.log(response);
  for(let i=0; i<response.res.length; i++) {
    res.push(response.res[i]);
  }

  FirstActive(res);

  return (
    <View>
      <Header />
      <Content>
      { res.length !== 0 && res.map((item:resType, index:number) => {
          return (
            <Image key={index} src={item.primaryImage} />
          )
        })
      }
      </Content>
    </View>
  )

}

