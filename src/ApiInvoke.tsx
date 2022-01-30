export async function apiInvoke(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    return json[0].name;
}