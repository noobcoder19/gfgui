import { useParams } from "react-router";

export default function ComponentB(){
    const params = useParams<{name: string}>();
    return <div> {`hello ${params.name}`}</div>
}