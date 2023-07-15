import {DocumentNode} from "@apollo/client";
import {print} from "graphql/language/printer";

export async function getDataFromGql(gqlData: DocumentNode, variables: any = undefined) {
    const data = await fetch(process.env.WORDPRESS_API_URL!, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: print(gqlData),
            variables,
        }),
        next: {revalidate: 10},
    }).then((res) => res.json());
    return data;
}

export async function fetchData(query, variables = {}) {
    const data = await fetch(process.env.WORDPRESS_API_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: print(query),
        variables: variables,
      })
    }).then((res) => res.json());
  
    return data;
  }