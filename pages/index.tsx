// export async function getServerSideProps() {
//   await axios.get('http://www.museum.go.kr/site/main/openapi/relic?pageSize=10')
//   .then((res) => {
//     return {
//       props: res
//     }
//   })

//   return {
//     props: "test"
//   }

  
  
// }

// import axios from 'axios';
import { View, Font4 } from './styles';
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FirstActive } from './modules';

export default function Home(res : InferGetServerSidePropsType<GetServerSideProps>) {

  FirstActive(res);

  return (
    <View>
      <Font4>국립중앙박물관</Font4>
    </View>
  )
}

