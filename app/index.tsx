//App/ index.tsx

import { Redirect } from "expo-router";


export default function Index() {
  return <Redirect href={"/(root)/(tabs)/home"} />;
  // return <Redirect href={"/(pages)/ekycForm"} /> ;
}
