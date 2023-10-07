export async function POST ({ request }) {
    const inputData = await request.json();
    console.log(inputData);
    return new Response ("Registered Successfully");
}