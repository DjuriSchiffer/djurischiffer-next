import { fetchData } from "@/lib/getDataFromGql";
import { gql } from '@apollo/client';
import { HOME_DATA } from "@/lib/fragments";
import Banner from "./_components/Banners";

export default async function Home() {
  async function getPageDataByUri() {
    const data = await fetchData(
      gql`
      ${HOME_DATA}
      query GetNodeByUri($uri: String!) {
          nodeByUri(uri: $uri) {
              __typename
              ...HomeData
          }
      }
    `,
      { uri: '/'}
    );

    return data;
  }

  const { data } = await getPageDataByUri();
  console.log(data);
  const pageData = data?.nodeByUri?.homeData;

  console.log('pageData', pageData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        {pageData?.homeBanner && <Banner id="home" componentData={pageData?.homeBanner} />}
    </main>
  )
}
